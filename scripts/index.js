let isShown = [false, false, false, false, false];
const boxEL = document.querySelector(".box");

function show(arrow, group, n) {
  if (isShown[n]) {
    dropEl.style.display = "none";
    isShown[n] = false;
  } else {
    dropEl.style.display = "none";
  }
}

for (let i = 1; i <= 5; i++) {
  const group = `.grp${i}`;
  const arrowEl = document.querySelector(`${group}.arrow`);
  const dropEl = document.querySelector(`${group}.drop`);
  const quesEl = document.querySelector(`${group}.ques`);

  quesEl.addEventListener("mouseover", function () {
    boxEL.classList.add("boxHov");
  });

  quesEl.addEventListener("mouseout", function () {
    const boxEL = document.querySelector(".box");
    boxEL.classList.remove("boxHov");
  });

  arrowEl.addEventListener("click", function () {
    console.log(dropEl);
    if (isShown[i]) {
      quesEl.classList.remove("quesClick");
      arrowEl.classList.remove("arrowClick");
      dropEl.style.display = "none";
      isShown[i] = false;
    } else {
      quesEl.classList.add("quesClick");
      arrowEl.classList.add("arrowClick");
      dropEl.style.display = "block";
      isShown[i] = true;
    }
  });
}
