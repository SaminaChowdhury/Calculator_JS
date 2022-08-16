//inputText
const inputText = document.getElementById('inputText');

document.getElementById("one").onclick = () => (inputText.value += 1);
document.getElementById("two").onclick = () => (inputText.value += 2);
document.getElementById("three").onclick = () => (inputText.value += 3);
document.getElementById("four").onclick = () => (inputText.value += 4);
document.getElementById("five").onclick = () => (inputText.value += 5);
document.getElementById("six").onclick = () => (inputText.value += 6);
document.getElementById("seven").onclick = () => (inputText.value += 7);
document.getElementById("eight").onclick = () => (inputText.value += 8);
document.getElementById("nine").onclick = () => (inputText.value += 9);
document.getElementById("add").onclick = () => (inputText.value += "+");
document.getElementById("subs").onclick = () => (inputText.value += "-");
document.getElementById("multi").onclick = () => (inputText.value += "*");
document.getElementById("divide").onclick = () => (inputText.value += "/");
document.getElementById("dot").onclick = () => (inputText.value += ".");
document.getElementById("clear").onclick = () => (inputText.value = "");

document.getElementById("equal").onclick = () => {
  if (inputText.value == "") {
    alert("Please enter any numbers to calculate");
  } else {
    inputText.value = eval(inputText.value);
  }
};

