import "./styles.scss";

function getRandomColor() {
  const red = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  return `rgb(${red}, ${green}, ${blue})`;
}

const backgroundColors = [];

const AnimalsLifeSpan = {
  cat: 30,
  dog: 20,
  fox: 14,
  goat: 10,
  lion: 35,
  mouse: 4,
};

for (let i = 0; i < Object.keys(AnimalsLifeSpan).length; i++) {
  backgroundColors.push(getRandomColor());
}
gsap.from(".icons-nav", { duration: 2, x: "-100%" });

const graphCtx = document.getElementById("graph").getContext("2d");

const chart = new Chart(graphCtx, {
  type: "bar",
  data: {
    labels: Object.keys(AnimalsLifeSpan),
    datasets: [
      {
        label: "Life Spans",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: backgroundColors,
        borderWidth: 1,
        fontColor: "#fff",
      },
    ],
  },
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

console.log(chart.type);

console.log("its alive");
