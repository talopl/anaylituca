import "./styles.scss";

const AnimalsLifeSpan = {
  cat: 30,
  dog: 20,
  fox: 14,
  goat: 10,
  lion: 35,
  mouse: 4,
};

const graphCtx = document.getElementById("graph").getContext("2d");

const chart = new Chart(graphCtx, {
  type: "bar",
});

console.log(chart.type);

console.log("its alive");
