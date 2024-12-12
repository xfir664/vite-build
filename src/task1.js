const div = document.querySelector(".container");

div.appendChild(document.createElement("table"));

const table = document.querySelector("table");

const maxRow = 10;
const maxCol = 10;

for (let i = 0; i < maxRow; i++) {
  const tr = document.createElement("tr");
  table.appendChild(tr);
  for (let j = 0; j < maxCol; j++) {
    const td = document.createElement("td");
    td.classList.add("td");
    td.textContent = j;
    tr.appendChild(td);
  }
}

const btn = document.createElement("button");
btn.classList.add("button");
btn.textContent = "start";
div.appendChild(btn);

btn.addEventListener("click", () => {
  const allTd = document.querySelectorAll(".td");
  const randomNumberArr = getRandomArr();

  allTd.forEach((el, index) => {
    el.className = "";
    el.classList.add("td");
    el.removeEventListener("click", onClick);
    el.addEventListener("click", onClick);

    function onClick() {
      el.removeEventListener("click", onClick);
      checkBlock(index, randomNumberArr, this);
    }
  });
});

function checkBlock(index, randomNumbersArr, elem) {
  const randomArr = randomNumbersArr;
  if (randomArr.includes(index)) {
    elem.classList.add("succ");
  } else {
    elem.classList.add("wrong");
  }
}

function getRandomArr() {
  const numbers = new Set();

  return (function () {
    while (numbers.size < 10) {
      const randomNumber = Math.floor(Math.random() * 100);
      numbers.add(randomNumber);
    }
    return Array.from(numbers);
  })();
}
