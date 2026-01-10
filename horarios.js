const HORARIOS = {
  algoritmos: [
    { dia: "Segunda", inicio: "08:00", fim: "10:00" },
    { dia: "Quarta", inicio: "08:00", fim: "10:00" }
  ],
  programacao1: [
    { dia: "Terça", inicio: "10:00", fim: "12:00" }
  ],
  estatistica: [
    { dia: "Quinta", inicio: "14:00", fim: "16:00" }
  ]
};


const tooltip = document.getElementById("tooltip-horario");

document.querySelectorAll("td[data-id]").forEach(td => {
  const id = td.dataset.id;

  if (!HORARIOS[id]) return;

  td.addEventListener("mouseenter", e => {
    const horarios = HORARIOS[id];

    tooltip.innerHTML = horarios
      .map(h => `${h.dia}: ${h.inicio} – ${h.fim}`)
      .join("<br>");

    tooltip.style.left = e.pageX + 12 + "px";
    tooltip.style.top = e.pageY + 12 + "px";
    tooltip.classList.add("visible");
  });

  td.addEventListener("mousemove", e => {
    tooltip.style.left = e.pageX + 12 + "px";
    tooltip.style.top = e.pageY + 12 + "px";
  });

  td.addEventListener("mouseleave", () => {
    tooltip.classList.remove("visible");
  });
});
