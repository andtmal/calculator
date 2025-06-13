const display = document.querySelector("#display");
const buttons = document.querySelectorAll("button");

let expression = "";

function calculate(equation) {
  try {
    return new Function(`return ${equation}`)();
  } catch {
    return "Error";
  }
}

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const value = button.value;

    if (value === "clear") {
      expression = "";
      display.textContent = "";
    } else if (value === "=") {
      const result = calculate(expression);
      display.textContent = result;
      expression = result.toString();
    } else {
      expression += value;
      display.textContent = expression;
    }
  });
});