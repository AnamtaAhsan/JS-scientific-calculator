var input = document.getElementById('input')

function Display(y){
    if (y === '.' && input.value.includes('.')) {
    return;
  }
    input.value += y
}

function ClearAll(){
    input.value = ""
}

function Calculate(){
  try {
    input.value = eval(input.value);
  } catch (error){
      input.value = "Error";
    }
    }

function applyFunc(func){
  var val = parseFloat(input.value);
    if (isNaN(val)) {
      input.value = "Error";
        return;
    }

    let result;

      if (func === "sin") {
        result = Math.sin(toRadians(val));
      } else if (func === "cos") {
        result = Math.cos(toRadians(val));
      } else if (func === "tan") {
        result = Math.tan(toRadians(val));
      } else if (func === "sqrt") {
        result = Math.sqrt(val);
      } else if (func === "square") {
        result = Math.pow(val, 2);
      }

      input.value = result.toFixed(12);
    }

function toRadians(degrees) {
  return degrees * (Math.PI / 180);
}