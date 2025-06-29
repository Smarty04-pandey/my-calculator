function appendValue(value) {
  document.getElementById('display').value += value;
}

function clearDisplay() {
  document.getElementById('display').value = '';
}

function calculate() {
  try {
    document.getElementById('display').value = eval(document.getElementById('display').value);
  } catch {
    document.getElementById('display').value = 'Error';
  }
}

function backspace() {
  let current = document.getElementById('display').value;
  document.getElementById('display').value = current.slice(0, -1);
}
