function appendValue(value) {
  document.getElementById("result").value += value;
}

function clearScreen() {
  document.getElementById("result").value = "";
}

function calculate() {
  let expression = document.getElementById("result").value;
  let result;
  try {
    result = eval(expression);
  } catch (error) {
    result = "Error";
  }
  document.getElementById("result").value = result;
}
