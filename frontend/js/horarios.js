/*************************************************
 * 1. MAPA DE DISCIPLINAS E HORÁRIOS
 *************************************************/
const DISCIPLINAS = {
  psicologia1: {
    nome: "Psicologia I",
    slots: ["seg-18:30", "qui-20:10"]
  },
  pensamento_comp: {
    nome: "Pensamento Computacional",
    slots: ["seg-20:10", "qua-18:30"]
  },
  prod_textos: {
    nome: "Produção de Textos Acadêmicos I",
    slots: ["ter-18:30", "sex-20:10"]
  },
  fundamentos_filo: {
    nome: "Fundamentos Filosóficos da Educação",
    slots: ["ter-20:10", "qui-18:30"]
  },
  matematica_discreta: {
    nome: "Matemática Discreta I",
    slots: ["qua-20:10", "sex-18:30"]
  },
  ava: {
    nome: "Introdução a Ambientes Virtuais de Aprendizagem (EAD)",
    slots: ["sab-10:00"]
  },
  /* 2 periodo */
  educacao_brasileira: {
    nome: "Educação Brasileira",
    slots: ["ter-18:30", "sex-20:10"]
  },
  psicologia2: {
    nome: "Psicologia II",
    slots: ["ter-20:10", "qui-18:30"]
  },
  calculo1: {
    nome: "Cálculo I",
    slots: ["seg-20:10", "qua-18:30"]
  },
  matematica_discreta2: {
    nome: "Matemática Discreta II",
    slots: ["qua-20:10", "sex-18:30"]
  },
  programacao1: {
    nome: "Programação I",
    slots: ["seg-18:30", "qui-20:10"]
  },
  Lab_programacao1 : {
    nome:"Laboratório de Programação I (EAD)",
    slots:["sab-08:00"]
  },
    /* 3 periodo */
  Didatica: {
    nome: "Didática",
    slots: ["qua-20:10", "sex-18:30"]
  },
  Algo_Estrutura_Dados: {
    nome: "Algoritmos e Estruturas de Dados",
    slots: ["ter-18:30", "sex-20:10"]
  },
  calculo2: {
    nome: "Cálculo II",
    slots: ["seg-20:10", "qua-18:30"]
  },
  Circuitos_Digitais: {
    nome: "Circuitos Digitais",
    slots: ["ter-20:10", "qui-18:30"]
  },
  programacao2: {
    nome: "Programação II",
    slots: ["seg-18:30", "qui-20:10"]
  },
  Lab_programacao2 : {
    nome:"Laboratório de Programação II (EAD)",
    slots:["sab-10:00"]
  },
    /* 4 periodo */
  Metodologia_Ensino: {
    nome: "Metodologia do Ensino",
    slots: ["seg-18:30", "qua-20:10"]
  },
  Banco_Dados: {
    nome: "Banco de Dados",
    slots: ["ter-20:10", "sex-18:30"]
  },
  Estatistica_Exploratoria: {
    nome: "Estatística Exploratória",
    slots: ["qua-18:30", "sex-20:10"]
  },
  Arq_Org_Computadores: {
    nome: "Arquitetura e Organização de Computadores",
    slots: ["ter-18:30", "qui-20:10"]
  },
  Teoria_da_Computação: {
    nome: "Teoria da Computação",
    slots: ["seg-20:10", "qui-18:30"]
  },
  AHSC : {
    nome:"AHSC (EAD)",
    slots:["sab-08:00","sab-10:00"]
  },
    /* 5 periodo */
  Redes_de_Computadores: {
    nome: "Redes de Computadores",
    slots: ["seg-18:30", "qui-20:10"]
  },
  Algebra_Linear: {
    nome: "Álgebra Linear",
    slots: ["ter-18:30", "sex-20:10"]
  },
  Sistemas_Operacionais: {
    nome: "Sistemas Operacionais",
    slots: ["ter-20:10", "qui-18:30"]
  },
  Engenharia_de_Software: {
    nome: "Engenharia de Software",
    slots: ["seg-20:10", "qua-18:30"]
  },
  Metodologia_Cientifica: {
    nome: "Metodologia Científica",
    slots: ["qua-20:10", "sex-18:30"]
  },
  Pratica_1 : {
    nome:"Prática 1 (EAD)",
    slots:["sab-08:00","sab-10:00"]
  },
   /* 6 periodo */
  ESO1: {
    nome: "ESO I",
    slots: ["seg-18:30", "seg-20:10"]
  },
  Tecnologia_na_Educacao: {
    nome: "Tecnologia na Educação",
    slots: ["qua-18:30", "sex-20:10"]
  },
  IHM: {
    nome: "Interação Homem-Maquina",
    slots: ["ter-18:30", "qui-20:10"]
  },
  IA: {
    nome: "Inteligencia Artificial",
    slots: ["ter-20:10", "qui-18:30"]
  },
  Optativa_1: {
    nome: "Optativa_1",
    slots: ["", ""]
  },
  Pratica_2 : {
    nome:"Prática 2 (EAD)",
    slots:["sab-08:00","sab-10:00"]
  },
  /* 7 periodo */
  ESO2: {
    nome: "ESO II",
    slots: ["ter-18:30", "ter-20:10"]
  },
  educacao_distancia: {
    nome: "Educação à Distância",
    slots: ["seg-18:30", "qui-20:10"]
  },
  Educacao_RAR: {
    nome: "Educação das Relações Étnico-Raciais",
    slots: ["qui-18:30", "seg-20:10"]
  },
  Optativa_2: {
    nome: "Optativa_2",
    slots: ["", ""]
  },
  Optativa_3: {
    nome: "Optativa_3",
    slots: ["", ""]
  },
  /* 8 periodo */
  ESO3: {
    nome: "ESO III",
    slots: ["sex-18:30", "sex-20:10"]
  },
  Libras: {
    nome: "Libras",
    slots: ["seg-18:30", "qua-20:10"]
  },
  Projeto_Dev: {
    nome: "Projeto de Desenvolvimento de Software Educacional",
    slots: ["qua-18:30", "seg-20:10"]
  },
  Optativa_4: {
    nome: "Optativa_4",
    slots: ["", ""]
  },
  Optativa_5: {
    nome: "Optativa_5",
    slots: ["", ""]
  },
    /* 9 periodo */
  ESO4: {
    nome: "ESO IV",
    slots: ["qui-18:30", "qui-20:10"]
  },
  Optativa_6: {
    nome: "Optativa_6",
    slots: ["", ""]
  },
  TCC: {
    nome: "TCC",
    slots: ["", ""]
  },
};

/*************************************************
 * 2. ESTADO GLOBAL DA MATRÍCULA
 *************************************************/
const disciplinasSelecionadas = new Set();
const slotsOcupados = new Set();

/*************************************************
 * 3. EVENTO DE CLIQUE (DISCIPLINAS)
 *************************************************/
document.querySelectorAll("td[data-id]").forEach(td => {
  td.addEventListener("click", () => {
    alternarDisciplina(td.dataset.id);
  });
});

/*************************************************
 * 4. FUNÇÃO PRINCIPAL (TOGGLE)
 *************************************************/
function alternarDisciplina(id) {
  if (!DISCIPLINAS[id]) return;

  if (disciplinasSelecionadas.has(id)) {
    removerDisciplina(id);
  } else {
    adicionarDisciplina(id);
  }
}

/*************************************************
 * 5. ADICIONAR DISCIPLINA
 *************************************************/
function adicionarDisciplina(id) {
  const disciplina = DISCIPLINAS[id];

  const conflito = disciplina.slots.some(
    slot => slotsOcupados.has(slot)
  );

  if (conflito) {
    alert("Conflito de horário detectado.");
    return;
  }

  disciplinasSelecionadas.add(id);
  disciplina.slots.forEach(slot => slotsOcupados.add(slot));

  atualizarInterface();
}

/*************************************************
 * 6. REMOVER DISCIPLINA (RECALCULA TUDO)
 *************************************************/
function removerDisciplina(id) {
  disciplinasSelecionadas.delete(id);

  // recalcula slots ocupados
  slotsOcupados.clear();
  disciplinasSelecionadas.forEach(dId => {
    DISCIPLINAS[dId].slots.forEach(slot =>
      slotsOcupados.add(slot)
    );
  });

  atualizarInterface();
}

/*************************************************
 * 7. ATUALIZA UI (DISCIPLINAS + GRADE)
 *************************************************/
function atualizarInterface() {
  limparGrade();
  atualizarDisciplinas();
  preencherGrade();
}

/*************************************************
 * 8. LIMPA GRADE SEMANAL
 *************************************************/
function limparGrade() {
  document.querySelectorAll("td[data-slot]").forEach(td => {
    td.textContent = "";
  });
}

/*************************************************
 * 9. ATUALIZA ESTADO VISUAL DAS DISCIPLINAS
 *************************************************/
function atualizarDisciplinas() {
  document.querySelectorAll("td[data-id]").forEach(td => {
    const id = td.dataset.id;
    const disciplina = DISCIPLINAS[id];

    const conflita =
      disciplina &&
      !disciplinasSelecionadas.has(id) &&
      disciplina.slots.some(slot => slotsOcupados.has(slot));

    td.classList.toggle("selecionada", disciplinasSelecionadas.has(id));
    td.classList.toggle("bloqueada", conflita);
    td.style.pointerEvents = conflita ? "none" : "auto";
  });
}

/*************************************************
 * 10. PREENCHE GRADE SEMANAL
 *************************************************/
function preencherGrade() {
  disciplinasSelecionadas.forEach(id => {
    const disciplina = DISCIPLINAS[id];

    disciplina.slots.forEach(slot => {
      const celula = document.querySelector(
        `td[data-slot="${slot}"]`
      );
      if (celula) {
        celula.textContent = disciplina.nome;
      }
    });
  });
}
