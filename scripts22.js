/**************************************************
 * 1. CONFIGURAÇÃO DE DADOS
 **************************************************/
const OPTATIVAS = {
  computacao_educacional: [
    { id: "pratica_algoritmos", nome: "Prática de Ensino de Algoritmos", prereq: [] },
    { id: "jogos_educacao", nome: "Jogos Digitais na Educação", prereq: [] },
    { id: "mineracao_dados_educ", nome: "Mineração de Dados Educacionais", prereq: ["Estatistica"] }
  ],
  engenharia_software: [
    { id: "gerencia_projetos", nome: "Gerência de Projetos", prereq: ["engsoft"] },
    { id: "analise_oo", nome: "Análise e Projeto OO", prereq: ["engsoft", "programacao2"] }
  ],
  fundamentos_computacionais: [
    { id: "algoritmos_grafos", nome: "Algoritmos em Grafos", prereq: ["algoritmos", "programacao1", "discreta1"] },
    { id: "realidade_virtual", nome: "Realidade Virtual", prereq: ["programacao2"] }
  ],
  inteligencia_artificial: [
    { id: "redes_neurais", nome: "Redes Neurais", prereq: ["ia", "programacao2", "Estatistica"] },
    { id: "aprendizado_maquina", nome: "Aprendizado de Máquina", prereq: ["ia", "programacao2", "Estatistica"] }
  ],
  Interface_RealidadeVirtual: [
    { id: "redes_neurais", nome: "Redes Neurais", prereq: ["ia", "programacao2", "Estatistica"] },
    { id: "aprendizado_maquina", nome: "Aprendizado de Máquina", prereq: ["ia", "programacao2", "Estatistica"] }
  ],
  Infraestrutura_De_Hardware: [
    { id: "redes_neurais", nome: "Redes Neurais", prereq: ["ia", "programacao2", "Estatistica"] },
    { id: "aprendizado_maquina", nome: "Aprendizado de Máquina", prereq: ["ia", "programacao2", "Estatistica"] }
  ],
  Infraestrutura_De_Software: [
    { id: "redes_neurais", nome: "Redes Neurais", prereq: ["ia", "programacao2", "Estatistica"] },
    { id: "aprendizado_maquina", nome: "Aprendizado de Máquina", prereq: ["ia", "programacao2", "Estatistica"] }
  ]
};

/**************************************************
 * 2. ELEMENTOS DE UI
 **************************************************/
const UI = {
  area: document.getElementById("area-optativa"),
  disciplina: document.getElementById("disciplina-optativa"),
  slot: document.getElementById("slot-optativa"),
  aplicar: document.getElementById("aplicar-optativa"),
  tabela: document.querySelector(".tabela")
};

/**************************************************
 * 3. GRADE CURRICULAR (ESTADO + PRÉ-REQUISITOS)
 **************************************************/
const Grade = {

  isAprovada(id) {
    const td = document.querySelector(`td[data-id="${id}"]`);
    return td && td.classList.contains("aprovado");
  },

  atualizarBloqueios() {
    document.querySelectorAll("td[data-id]").forEach(td => {
      const prereqs = td.dataset.prereq?.split(",").filter(Boolean) || [];
      const liberada = prereqs.every(p => this.isAprovada(p.trim()));

      td.classList.toggle("bloqueada", !liberada);

      if (!liberada) {
        td.classList.remove("aprovado", "reprovado");
      }
    });
  },

  alternarEstado(td, evento) {
    if (td.classList.contains("bloqueada")) return;

    if (evento === "click") {
      td.classList.remove("reprovado");
      td.classList.toggle("aprovado");
    }

    if (evento === "dblclick") {
      td.classList.remove("aprovado");
      td.classList.toggle("reprovado");
    }

    this.atualizarBloqueios();
    Progresso.calcular();
  }
};

/**************************************************
 * 4. GERENCIAMENTO DE OPTATIVAS
 **************************************************/
const Optativas = {

  carregarDisciplinas(area) {
    UI.disciplina.innerHTML = "<option value=''>Selecione</option>";
    if (!OPTATIVAS[area]) return;

    OPTATIVAS[area].forEach(d => {
      const opt = document.createElement("option");
      opt.value = d.id;
      opt.textContent = d.nome;
      UI.disciplina.appendChild(opt);
    });
  },

  carregarSlots() {
    UI.slot.innerHTML = "<option value=''>Selecione</option>";

    document.querySelectorAll("td[data-slot]").forEach(td => {
      if (td.classList.contains("ocupado")) return;

      const opt = document.createElement("option");
      opt.value = td.dataset.slot;
      opt.textContent = td.dataset.slot.toUpperCase();
      UI.slot.appendChild(opt);
    });
  },

  aplicar() {
    const area = UI.area.value;
    const discId = UI.disciplina.value;
    const slotId = UI.slot.value;

    if (!area || !discId || !slotId) return;

    const disciplina = OPTATIVAS[area].find(d => d.id === discId);
    const slot = document.querySelector(`td[data-slot="${slotId}"]`);

    if (!disciplina || !slot || slot.dataset.id) return;

    slot.dataset.id = disciplina.id;
    slot.dataset.prereq = disciplina.prereq.join(",");
    slot.dataset.ch = "60";

    slot.textContent = disciplina.nome;
    slot.classList.add("optativa");
    slot.classList.remove("aprovado", "reprovado", "bloqueada");

    Grade.atualizarBloqueios();
    Progresso.calcular();
    this.carregarSlots();
  }
};

/**************************************************
 * 5. PROGRESSO DO CURSO
 **************************************************/
/**************************************************
 * 5. PROGRESSO DO CURSO (VERSÃO CORRETA)
 **************************************************/
const Progresso = {

  totais: {
    obrigatorias: 2280,
    optativas: 360,
    eso: 405,
    tcc: 60,
    atividades: 210
  },

  pesos: {
    obrigatorias: 72,
    optativas: 10,
    eso: 11,
    tcc: 1,
    atividades: 6
  },

  categoria(td) {
    if (td.classList.contains("optativa")) return "optativas";

    const id = td.dataset.id || "";
    if (id.startsWith("eso")) return "eso";
    if (id === "tcc") return "tcc";

    return "obrigatorias";
  },

  calcular() {
    const concluidas = {
      obrigatorias: 0,
      optativas: 0,
      eso: 0,
      tcc: 0
    };

    // 🔹 Disciplinas (tabela)
    document.querySelectorAll(".tabela td.aprovado").forEach(td => {
      const ch = Number(td.dataset.ch || 0);
      const cat = this.categoria(td);
      concluidas[cat] += ch;
    });

    // 🔹 Cálculo individual
    const pctObrigatorias =
      (concluidas.obrigatorias / this.totais.obrigatorias) * this.pesos.obrigatorias;

    const pctOptativas =
      (concluidas.optativas / this.totais.optativas) * this.pesos.optativas;

    const pctESO =
      (concluidas.eso / this.totais.eso) * this.pesos.eso;

    const pctTCC =
      (concluidas.tcc / this.totais.tcc) * this.pesos.tcc;

    const pctAtividades =
      (AtividadesComplementares.horas / this.totais.atividades) * this.pesos.atividades;

    // 🔹 Blindagens
    this.atualizarBarra("obrigatorias", Math.min(pctObrigatorias, this.pesos.obrigatorias));
    this.atualizarBarra("optativas", Math.min(pctOptativas, this.pesos.optativas));
    this.atualizarBarra("eso", Math.min(pctESO, this.pesos.eso));
    this.atualizarBarra("tcc", Math.min(pctTCC, this.pesos.tcc));
    this.atualizarBarra("atividades", Math.min(pctAtividades, this.pesos.atividades));

    // 🔹 Total final
    const total =
      Math.min(pctObrigatorias, this.pesos.obrigatorias) +
      Math.min(pctOptativas, this.pesos.optativas) +
      Math.min(pctESO, this.pesos.eso) +
      Math.min(pctTCC, this.pesos.tcc) +
      Math.min(pctAtividades, this.pesos.atividades);

    this.atualizarBarra("total", total);
  },

  atualizarBarra(nome, valor) {
    const bar = document.getElementById(`prog-${nome}`);
    const pct = document.getElementById(`pct-${nome}`);

    if (!bar || !pct) return;

    bar.value = Math.min(valor, bar.max);
    pct.textContent = `${valor.toFixed(1)}%`;
  }
};

/**************************************************
 * 6. EVENTOS
 **************************************************/
document.addEventListener("DOMContentLoaded", () => {

  UI.area.addEventListener("change", e => {
    Optativas.carregarDisciplinas(e.target.value);
    Optativas.carregarSlots();
  });

  UI.aplicar.addEventListener("click", () => {
    Optativas.aplicar();
  });

  UI.tabela.addEventListener("click", e => {
    if (e.target.tagName === "TD" && e.target.dataset.id) {
      Grade.alternarEstado(e.target, "click");
    }
  });

  UI.tabela.addEventListener("dblclick", e => {
    if (e.target.tagName === "TD" && e.target.dataset.id) {
      e.preventDefault();
      Grade.alternarEstado(e.target, "dblclick");
    }
  });

  document.getElementById("ac-adicionar").addEventListener("click", () => {
  const nome = document.getElementById("ac-nome").value.trim();
  const categoria = document.getElementById("ac-categoria").value;
  const horas = Number(document.getElementById("ac-horas").value);

  AtividadesComplementares.adicionar(nome, categoria, horas);

  // Limpa campos
  document.getElementById("ac-nome").value = "";
  document.getElementById("ac-categoria").value = "";
  document.getElementById("ac-horas").value = "";
});


  Grade.atualizarBloqueios();
  Progresso.calcular();
});

/**************************************************
 * ATIVIDADES COMPLEMENTARES
 **************************************************/
const AtividadesComplementares = {
  maxHoras: 210,
  horas: 0,
  lista: [],

  adicionar(nome, categoria, horas) {
    if (!nome || !categoria || horas <= 0) return;

    const atividade = {
      id: Date.now(),
      nome,
      categoria,
      horas
    };

    this.lista.push(atividade);
    this.recalcular();
    this.renderizar();
  },

  remover(id) {
    this.lista = this.lista.filter(a => a.id !== id);
    this.recalcular();
    this.renderizar();
  },

  recalcular() {
    this.horas = this.lista.reduce((soma, a) => soma + a.horas, 0);
    this.horas = Math.min(this.horas, this.maxHoras);

    document.getElementById("ac-total").textContent = this.horas;
    Progresso.calcular();
  },

  renderizar() {
    const ul = document.getElementById("ac-lista");
    ul.innerHTML = "";

    this.lista.forEach(a => {
      const li = document.createElement("li");

      li.innerHTML = `
        <span>
          ${a.nome} (${a.categoria}) — ${a.horas}h
        </span>
        <button data-id="${a.id}">remover</button>
      `;

      li.querySelector("button").addEventListener("click", () => {
        this.remover(a.id);
      });

      ul.appendChild(li);
    });
  }
};


