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
  mouse: 4,
};

for (let i = 0; i < Object.keys(AnimalsLifeSpan).length; i++) {
  backgroundColors.push(getRandomColor());
}
gsap.from(".icons-nav", { duration: 2, x: "-100%" });

const graphCtx = document.getElementById("graph").getContext("2d");

const data = {
  labels: Object.keys(AnimalsLifeSpan),
  datasets: [
    {
      label: "Life Spans",
      data: Object.values(AnimalsLifeSpan),
      backgroundColor: backgroundColors,
      borderWidth: 1,
      fontColor: "#fff",
    },
  ],

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
};

const chart = new Chart(graphCtx, {
  type: "bar",
  data: data,
});

const currentChart = chart;

const pieChartBtn = document.getElementById("pie-chart-btn");
pieChartBtn.addEventListener("click", () => {
  currentChart.destroy();
  const pieChart = new Chart(graphCtx, {
    type: "pie",
    data: data,
  });
  currentChart = pieChart;
});

const lineChartBtn = document.getElementById("line-chart-btn");
lineChartBtn.addEventListener("click", () => {
  currentChart.destroy();
  data.datasets[0].fill = false;
  const lineChart = new Chart(graphCtx, {
    type: "line",
    data: data,
  });
  currentChart = lineChart;
});

const areaChartBtn = document.getElementById("area-chart-btn");
areaChartBtn.addEventListener("click", () => {
  data.datasets[0].fill = true;
  currentChart.destroy();
  const areaChart = new Chart(graphCtx, {
    type: "line",
    data: data,
  });
  currentChart = areaChart;
});

const barChartBtn = document.getElementById("bar-chart-btn");
barChartBtn.addEventListener("click", () => {
  currentChart.destroy();
  const barChart = new Chart(graphCtx, {
    type: "bar",
    data: data,
  });
  currentChart = barChart;
});

console.log(chart.type);

console.log("its alive");
