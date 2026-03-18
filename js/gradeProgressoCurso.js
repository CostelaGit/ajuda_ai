/**************************************************
 * 1. CONFIGURAÇÃO DE DADOS
 **************************************************/
const OPTATIVAS = {
  computacao_educacional: [
    { id: "Design_Instrucional", nome: "Design Instrucional", prereq: [""], subjects: ["Design Instrucional Básico"], professors: ["Prof. Silva"] },
    { id: "Inovacao_Em_Educacao", nome: "Inovação em Educação", prereq: [""], subjects: ["Inovação Pedagógica"], professors: ["Prof. Santos"] },
    { id: "Jogos_Digitais_na_Educacao", nome: "Jogos Digitais na Educação", prereq: [""], subjects: ["Gamificação"], professors: ["Prof. Oliveira"] },
    { id: "Mineracao_de_Dados_Educacionais", nome: "Mineração de Dados Educacionais", prereq: ["Estatistica", "CalculoI", "CalculoII"], subjects: ["Data Mining"], professors: ["Prof. Pereira"] },
    { id: "Projetos_de_Sistemas_Educacionais", nome: "Projetos de Sistemas Educacionais", prereq: ["TecnologianaEducacao"], subjects: ["Prototipagem"], professors: ["Prof. Costa"] },
    { id: "Topicos_Avançados_de_Educacao_em_Computacao", nome: "Tópicos Avançados de Educação em Computação", prereq: ["programacao2", "programacao1"], subjects: ["Educação Computacional Avançada"], professors: ["Prof. Lima"] },
    { id: "Prática_de_Ensino_de_Algoritmos", nome: "Prática de Ensino de Algoritmos", prereq: [""], subjects: ["Ensino de Algoritmos"], professors: ["Prof. Ferreira"] },
    { id: "Prática_de_Ensino_de_Logico", nome: "Prática de Ensino de Lógica", prereq: [""], subjects: ["Lógica Computacional"], professors: ["Prof. Rodrigues"] },
    { id: "Prática_de_Ensino_de_Redes_e_Sistemas_Internet", nome: "Prática de Ensino de Redes e Sistemas Internet", prereq: [""], subjects: ["Redes de Computadores"], professors: ["Prof. Almeida"] },
    { id: "Prática_de_Ensino_de_Interfaces_Homem-Maquina", nome: "Prática de Ensino de Interfaces Homem-Maquina", prereq: [""], subjects: ["IHM"], professors: ["Prof. Gomes"] },
    { id: "Prática_de_Ensino_de_Computabilidade", nome: "Prática de Ensino de Computabilidade", prereq: [""], subjects: ["Teoria da Computação"], professors: ["Prof. Carvalho"] },
    { id: "Topicos_Avançados_em_Educacao_a_Distancia", nome: "Tópicos Avançados de Educação a Distância", prereq: ["ead", "redes", "programacao1", "programacao2"], subjects: ["EAD Avançada"], professors: ["Prof. Martins"] },
  ],
  engenharia_software: [
    { id: "Análise_e_Projeto_de_Sistemas_Orientados_a_Objeto", nome: "Análise e Projeto de Sistemas Orientados a Objeto", prereq: ["engsoft", "programacao2", "pc"], subjects: ["OOAD"], professors: ["Prof. Souza"] },
    { id: "gerencia_projetos", nome: "Gerência de Projetos", prereq: ["engsoft"], subjects: ["PMBOK"], professors: ["Prof. Ribeiro"] },
    { id: "Computacao_Empreendedorismo", nome: "Computação e Empreendedorismo", prereq: ["programacao1", "pc"], subjects: ["Empreendedorismo"], professors: ["Prof. Teixeira"] },
    { id: "Engenharia_de_Requisitos", nome: "Engenharia de Requisitos", prereq: ["engsoft"], subjects: ["Requisitos"], professors: ["Prof. Nunes"] },
    { id: "Gestao_da_Informacao_e_do_Conhecimento", nome: "Gestão da Informação e do Conhecimento", prereq: ["engsoft"], subjects: ["KM"], professors: ["Prof. Mendes"] },
    { id: "Gestao_de_processos_de_negocio", nome: "Gestão de Processos de Negocio", prereq: ["engsoft"], subjects: ["BPM"], professors: ["Prof. Barbosa"] },
    { id: "Governanca_de_TI", nome: "Governança de TI", prereq: ["engsoft"], subjects: ["IT Governance"], professors: ["Prof. Dias"] },
    { id: "Inovacao_em_projetos_de_software", nome: "Inovação em Projetos de Software", prereq: ["engsoft"], subjects: ["Inovação"], professors: ["Prof. Pinto"] },
  ],
  fundamentos_computacionais: [
    { id: "algoritmos_grafos", nome: "Algoritmos em Grafos", prereq: ["algoritmos", "programacao1", "discreta1"], subjects: ["Grafos"], professors: ["Prof. Correia"] },
    { id: "Fisica_para_Computacao", nome: "Física para Computação", prereq: ["CalculoI", "CalculoII"], subjects: ["Física"], professors: ["Prof. Monteiro"] },
    { id: "Paradigmas_de_Programacao", nome: "Paradigmas de Programação", prereq: ["programacao2", "pc"], subjects: ["Paradigmas"], professors: ["Prof. Lopes"] },
    { id: "Logica_e_Programacao_Logica", nome: "Lógica e Programação Lógica", prereq: ["programacao1", "pc"], subjects: ["Lógica"], professors: ["Prof. Fernandes"] }
  ],
  inteligencia_artificial: [
    { id: "aprendizado_maquina", nome: "Aprendizado de Máquina", prereq: ["ia", "programacao2", "pc"], subjects: ["ML"], professors: ["Prof. Araujo"] },
    { id: "redes_neurais", nome: "Redes Neurais", prereq: ["ia", "programacao2", "Estatistica", "pc"], subjects: ["NN"], professors: ["Prof. Castro"] },
    { id: "Sistemas_Multiagentes", nome: "Sistemas Multiagentes", prereq: ["ia", "programacao2", "pc"], subjects: ["Multiagent"], professors: ["Prof. Moreira"] },
    { id: "Biologia_Computacional", nome: "Biologia Computacional", prereq: ["algoritmos"], subjects: ["Bioinfo"], professors: ["Prof. Cardoso"] },
    { id: "Topicos_Avançados_em_Inteligencia_Artificial", nome: "Tópicos Avançados em Inteligência Artificial", prereq: ["ia", "programacao2", "programacao1"], subjects: ["AI Advanced"], professors: ["Prof. Silva"] },

  ],
  Interface_RealidadeVirtual: [
    { id: "Computacao_Grafica_Basica", nome: "Computação Gráfica Básica", prereq: ["AlgebraLinear", "pc", "programacao1"], subjects: ["CG"], professors: ["Prof. Santos"] },
    { id: "Processamento_de_Imagens", nome: "Processamento de Imagens", prereq: ["programacao1", "pc"], subjects: ["Image Processing"], professors: ["Prof. Oliveira"] },
    { id: "Realidade_Virtual", nome: "Realidade Virtual", prereq: ["AlgebraLinear", "programacao1", "pc"], subjects: ["VR"], professors: ["Prof. Pereira"] },
    { id: "Visao_computacional", nome: "Visão Computacional", prereq: ["AlgebraLinear", "programacao1", "pc"], subjects: ["CV"], professors: ["Prof. Costa"] },
    { id: "Jogos_Digitais", nome: "Jogos Digitais", prereq: ["algoritmos", "programacao2", "programacao1", "discreta1", "pc"], subjects: ["Game Dev"], professors: ["Prof. Lima"] },
  ],
  Infraestrutura_De_Hardware: [
    { id: "Analise_de_Desempenho", nome: "Análise de Desempenho", prereq: ["Estatistica", "CalculoI", "CalculoII"], subjects: ["Performance"], professors: ["Prof. Ferreira"] },
    { id: "Desenvolvimento_de_Aplicacoes_para_TV", nome: "Desenvolvimento de Aplicações para TV", prereq: ["Sistemas_Distribuidos"], subjects: ["TV Apps"], professors: ["Prof. Rodrigues"] },
    { id: "Internet_Do_Futuro", nome: "Internet do Futuro", prereq: ["redes"], subjects: ["Future Internet"], professors: ["Prof. Almeida"] },
    { id: "Sistemas_Distribuidos", nome: "Sistemas Distribuídos", prereq: ["redes"], subjects: ["Distributed Systems"], professors: ["Prof. Gomes"] },
    { id: "Computacao_para_analise_de_dados", nome: "Computacao para analise de dados", prereq: ["Estatistica","CalculoI", "CalculoII", "programacao1", "pc"], subjects: ["Data Analysis"], professors: ["Prof. Carvalho"] },
    { id: "Robotica_Educacional", nome: "Robótica Educacional", prereq: [""], subjects: ["Robotics"], professors: ["Prof. Martins"] }
  ],
  Infraestrutura_De_Software: [
    { id: "redes_neurais", nome: "Redes Neurais", prereq: ["ia", "programacao2", "Estatistica"], subjects: ["NN"], professors: ["Prof. Souza"] },
    { id: "aprendizado_maquina", nome: "Aprendizado de Máquina", prereq: ["ia", "programacao2", "Estatistica"], subjects: ["ML"], professors: ["Prof. Ribeiro"] }
  ]
};

// Dados para disciplinas obrigatórias
const DISCIPLINAS_DATA = {
  fundamentos: { subjects: ["Filosofia da Educação", "História da Educação"], professors: ["Prof. A", "Prof. B"] },
  educ_brasileira: { subjects: ["Educação Brasileira"], professors: ["Prof. C"] },
  didatica: { subjects: ["Didática"], professors: ["Prof. D"] },
  mec: { subjects: ["Metodologia do Ensino"], professors: ["Prof. E"] },
  pratica1: { subjects: ["Prática I"], professors: ["Prof. F"] },
  pratica2: { subjects: ["Prática II"], professors: ["Prof. G"] },
  ead: { subjects: ["Educação a Distância"], professors: ["Prof. H"] },
  eso3: { subjects: ["ESO III"], professors: ["Prof. I"] },
  eso4: { subjects: ["ESO IV"], professors: ["Prof. J"] },
  psi1: { subjects: ["Psicologia I"], professors: ["Prof. K"] },
  psi2: { subjects: ["Psicologia II"], professors: ["Prof. L"] },
  algoritmos: { subjects: ["Algoritmos e Estruturas de Dados"], professors: ["Prof. M"] },
  bd: { subjects: ["Banco de Dados"], professors: ["Prof. N"] },
  redes: { subjects: ["Redes de Computadores"], professors: ["Prof. O"] },
  eso1: { subjects: ["ESO I"], professors: ["Prof. P"] },
  eso2: { subjects: ["ESO II"], professors: ["Prof. Q"] },
  libras: { subjects: ["Libras"], professors: ["Prof. R"] },
  tcc: { subjects: ["TCC"], professors: ["Prof. S"] },
  ProdTexto: { subjects: ["Produção de Texto"], professors: ["Prof. T"] },
  CalculoI: { subjects: ["Cálculo I"], professors: ["Prof. U"] },
  CalculoII: { subjects: ["Cálculo II"], professors: ["Prof. V"] },
  Estatistica: { subjects: ["Estatística Exploratória"], professors: ["Prof. W"] },
  AlgebraLinear: { subjects: ["Álgebra Linear"], professors: ["Prof. X"] },
  TecnologianaEducacao: { subjects: ["Tecnologia na Educação"], professors: ["Prof. Y"] },
  EducaçãodasRelaçõesÉtnicoRaciais: { subjects: ["Educação das Relações Étnico-Raciais"], professors: ["Prof. Z"] },
  ProjetodeDesenvolvimentodeSoftwareEducacional: { subjects: ["Projeto de Desenvolvimento de Software Educacional"], professors: ["Prof. AA"] },
  discreta1: { subjects: ["Discreta I"], professors: ["Prof. BB"] },
  discreta2: { subjects: ["Discreta II"], professors: ["Prof. CC"] },
  circuitos: { subjects: ["Circuitos Digitais"], professors: ["Prof. DD"] },
  arquitetura: { subjects: ["Arquitetura de Computadores"], professors: ["Prof. EE"] },
  so: { subjects: ["Sistemas Operacionais"], professors: ["Prof. FF"] },
  ihc: { subjects: ["Interação Homem-Máquina"], professors: ["Prof. GG"] },
  pc: { subjects: ["Pensamento Computacional"], professors: ["Prof. HH"] },
  programacao1: { subjects: ["Programação I"], professors: ["Prof. II"] },
  programacao2: { subjects: ["Programação II"], professors: ["Prof. JJ"] },
  tc: { subjects: ["Teoria da Computação"], professors: ["Prof. KK"] },
  engsoft: { subjects: ["Engenharia de Software"], professors: ["Prof. LL"] },
  ia: { subjects: ["Inteligência Artificial"], professors: ["Prof. MM"] },
  ava: { subjects: ["AVA"], professors: ["Prof. NN"] },
  lab1: { subjects: ["Laboratório I"], professors: ["Prof. OO"] },
  lab2: { subjects: ["Laboratório II"], professors: ["Prof. PP"] },
  ahsc: { subjects: ["AHSC"], professors: ["Prof. QQ"] },
  metodologia_c: { subjects: ["Metodologia Científica"], professors: ["Prof. RR"] }
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
      const forcado = td.classList.contains("forcado");
      const liberada = forcado || prereqs.every(p => this.isAprovada(p.trim()));

      td.classList.toggle("bloqueada", !liberada);

      if (!liberada) {
        td.classList.remove("aprovado", "reprovado");
      } else if (forcado) {
        // Mantém aprovado mesmo que os pré-requisitos não estejam todos cumpridos
        td.classList.remove("bloqueada");
      }
    });
  },

  alternarEstado(td, evento) {
    if (td.classList.contains("bloqueada")) return;

    if (evento === "click") {
      td.classList.remove("reprovado", "forcado");
      td.classList.toggle("aprovado");
    }

    if (evento === "dblclick") {
      td.classList.remove("aprovado", "forcado");
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
 * 7. SALVAR/CARREGAR ESTADO
 **************************************************/
const Estado = {

  salvar() {
    const estado = {
      disciplinas: {},
      optativas: {},
      atividades: AtividadesComplementares.lista
    };

    // Salvar disciplinas
    document.querySelectorAll('.tabela td[data-id]').forEach(td => {
      if (td.classList.contains('aprovado')) {
        estado.disciplinas[td.dataset.id] = 'aprovado';
      } else if (td.classList.contains('reprovado')) {
        estado.disciplinas[td.dataset.id] = 'reprovado';
      }
    });

    // Salvar optativas aplicadas
    document.querySelectorAll('.tabela td.optativa[data-id]').forEach(td => {
      estado.optativas[td.dataset.slot] = {
        id: td.dataset.id,
        nome: td.textContent,
        prereq: td.dataset.prereq
      };
    });

    localStorage.setItem('gradeEstado', JSON.stringify(estado));
    alert('Estado salvo!');
  },

  carregar() {
    const estado = JSON.parse(localStorage.getItem('gradeEstado'));
    if (!estado) return;

    // Carregar disciplinas
    Object.keys(estado.disciplinas).forEach(id => {
      const td = document.querySelector(`td[data-id="${id}"]`);
      if (td) {
        td.classList.remove('aprovado', 'reprovado');
        td.classList.add(estado.disciplinas[id]);
      }
    });

    // Carregar optativas
    Object.keys(estado.optativas).forEach(slot => {
      const opt = estado.optativas[slot];
      const td = document.querySelector(`td[data-slot="${slot}"]`);
      if (td) {
        td.dataset.id = opt.id;
        td.dataset.prereq = opt.prereq;
        td.textContent = opt.nome;
        td.classList.add('optativa');
      }
    });

    // Carregar atividades
    AtividadesComplementares.lista = estado.atividades || [];
    AtividadesComplementares.recalcular();
    AtividadesComplementares.renderizar();

    Grade.atualizarBloqueios();
    Progresso.calcular();
  }
};

/**************************************************
 * 8. MODAL BOX
 **************************************************/
const Modal = {
  element: document.getElementById('modal'),
  title: document.getElementById('modal-title'),
  info: document.getElementById('modal-info'),
  closeBtn: document.querySelector('.close'),

  show(disciplina) {
    this.title.textContent = disciplina.textContent.trim();
    const id = disciplina.dataset.id;
    let subjects = [];
    let professors = [];

    // Verificar se é disciplina obrigatória
    if (DISCIPLINAS_DATA[id]) {
      subjects = DISCIPLINAS_DATA[id].subjects;
      professors = DISCIPLINAS_DATA[id].professors;
    } else {
      // Verificar se é optativa
      for (const area in OPTATIVAS) {
        const disc = OPTATIVAS[area].find(d => d.id === id);
        if (disc) {
          subjects = disc.subjects;
          professors = disc.professors;
          break;
        }
      }
    }

    const subjectsList = subjects.length ? subjects.join('<br>') : 'Nenhum';
    const professorsList = professors.length ? professors.join('<br>') : 'Nenhum';

    this.info.innerHTML = `
      <p><strong>ID:</strong> ${disciplina.dataset.id}</p>
      <p><strong>Carga Horária:</strong> ${disciplina.dataset.ch}h</p>
      <p><strong>Pré-requisitos:</strong> ${disciplina.dataset.prereq ? disciplina.dataset.prereq.split(',').join(', ') : 'Nenhum'}</p>
      <p><strong>Subárea:</strong> ${disciplina.dataset.subarea.replace(/_/g, ' ')}</p>
      ${disciplina.dataset.modalidade ? `<p><strong>Modalidade:</strong> ${disciplina.dataset.modalidade}</p>` : ''}
      <table style="width: 100%; border-collapse: collapse; margin-top: 10px;">
        <tr>
          <th style="border: 1px solid #ccc; padding: 8px; background: #f0f0f0;">Assuntos</th>
          <th style="border: 1px solid #ccc; padding: 8px; background: #f0f0f0;">Professores</th>
        </tr>
        <tr>
          <td style="border: 1px solid #ccc; padding: 8px; vertical-align: top;">${subjectsList}</td>
          <td style="border: 1px solid #ccc; padding: 8px; vertical-align: top;">${professorsList}</td>
        </tr>
      </table>
      <p><button id="modal-marcar-concluida" data-id="${disciplina.dataset.id}">Marcar como Concluída</button></p>
    `;
    this.element.style.display = 'block';

    // Adicionar listener ao botão
    document.getElementById('modal-marcar-concluida').addEventListener('click', () => {
      const id = document.getElementById('modal-marcar-concluida').dataset.id;
      const td = document.querySelector(`td[data-id="${id}"]`);
      if (td) {
        td.classList.remove("reprovado", "bloqueada");
        td.classList.add("aprovado", "forcado");
        Grade.atualizarBloqueios();
        Progresso.calcular();
        this.hide();
      }
    });
  },

  hide() {
    this.element.style.display = 'none';
  }
};

// Fechar modal ao clicar no X
Modal.closeBtn.addEventListener('click', () => Modal.hide());

// Fechar modal ao clicar fora
window.addEventListener('click', (e) => {
  if (e.target === Modal.element) {
    Modal.hide();
  }
});

/**************************************************
 * MODAL IMAGEM
 **************************************************/
const ModalImagem = {
  element: document.getElementById('modal-imagem'),
  closeBtns: document.querySelectorAll('#modal-imagem .close'),
  show() {
    this.element.style.display = 'block';
  },
  hide() {
    this.element.style.display = 'none';
  }
};

ModalImagem.closeBtns.forEach(btn => {
  btn.addEventListener('click', () => ModalImagem.hide());
});

window.addEventListener('click', (e) => {
  if (e.target === ModalImagem.element) {
    ModalImagem.hide();
  }
});

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

  document.getElementById('salvar-estado').addEventListener('click', Estado.salvar);

  document.getElementById('abrir-modal-imagem').addEventListener('click', () => {
    ModalImagem.show();
  });

  // Adicionar ícones [i] às disciplinas
  document.querySelectorAll('.tabela td[data-id]').forEach(td => {
    const infoIcon = document.createElement('span');
    infoIcon.textContent = '[i]';
    infoIcon.className = 'info-icon';
    infoIcon.addEventListener('click', (e) => {
      e.stopPropagation(); // Impede que o clique no td seja acionado
      Modal.show(td);
    });
    td.appendChild(infoIcon);
  });

  Estado.carregar();
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



document.getElementById("exportar-pdf").addEventListener("click", async () => {
  const { jsPDF } = window.jspdf;

  // Clonagem dos blocos relevantes
  const grade = document.querySelector(".grade-area").cloneNode(true);
  const atividades = document.querySelector(".ac-lista").cloneNode(true);
  const progresso = document.querySelector(".progresso-area").cloneNode(true);


  const botaoClone = progresso.querySelector("#exportar-pdf");
  if (botaoClone) botaoClone.remove();
  
  // Substitui progress por barras estáticas
  progresso.querySelectorAll(".barra").forEach(barra => {
    const pct = barra.querySelector("strong")?.innerText || "0%";

    const fake = document.createElement("div");
    fake.className = "barra-fake";
    fake.style.width = pct;

    barra.appendChild(fake);
  });

  // Container temporário
  const container = document.createElement("div");
  container.classList.add("exportacao");
  container.style.width = "1200px";
  container.style.padding = "20px";
  container.style.background = "#ffffff";
  container.style.fontFamily = "Arial, sans-serif";

  container.appendChild(grade);
  container.appendChild(atividades);
  container.appendChild(document.createElement("hr"));
  container.appendChild(progresso);

  document.body.appendChild(container);

  // Renderização
  const canvas = await html2canvas(container, {
    scale: 2.5,
    backgroundColor: "#ffffff"
  });

  const imgData = canvas.toDataURL("image/png");
  const pdf = new jsPDF("p", "mm", "a4");

  const pageWidth = pdf.internal.pageSize.getWidth();
  const imgHeight = (canvas.height * pageWidth) / canvas.width;

  pdf.addImage(imgData, "PNG", 0, 0, pageWidth, imgHeight);
  pdf.save("grade_curricular_progresso.pdf");

  document.body.removeChild(container);
});


