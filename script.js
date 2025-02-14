let string = "";
let button = document.querySelectorAll(".button, .eq-btn, .AC, .op");

Array.from(button).forEach((button) => {
  button.addEventListener("click", (e) => {
    const inputField = document.querySelector("#calc-input");

    if (e.target.innerHTML == "=") {
      try {
        string = eval(string);
        inputField.value = string;
      } catch (error) {
        inputField.value = "Error";
      }
    } else if (e.target.innerHTML == "AC") {
      string = "";
      inputField.value = string;
    } else if (e.target.innerHTML == "C") {
      string = string.slice(0, -1);
      inputField.value = string;
    } else {
      string = string + e.target.innerHTML;
      inputField.value = string;
    }
  });
});

document.querySelector("#calc-input").addEventListener("input", (e) => {
  let currentValue = e.target.value;

  currentValue = currentValue.replace(/[^0-9+\-*/().]/g, "");

  if ((currentValue.match(/\./g) || []).length > 1) {
    currentValue = currentValue.replace(/\./g, "");
  }

  e.target.value = currentValue;
  string = currentValue;
});

document.querySelector("#calc-input").addEventListener("keydown", (e) => {
  if (
    e.key === "Backspace" ||
    e.key === "Delete" ||
    e.key === "ArrowLeft" ||
    e.key === "ArrowRight" ||
    e.key === "ArrowUp" ||
    e.key === "ArrowDown" ||
    e.key === "Tab" ||
    e.key === "Enter"
  ) {
    return;
  }

  if (/[0-9+\-*/().]/.test(e.key)) {
    return;
  }

  e.preventDefault();
});
