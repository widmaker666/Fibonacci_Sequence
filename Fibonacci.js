let fibonacciSequence = [0, 1];

function fibonacciGenerate100() {
  const fibonacciLengthNumber = 100;

  for (let i = 0; i < fibonacciLengthNumber; i++) {
    fibonacciSequence.push(
      fibonacciSequence[fibonacciSequence.length - 1] +
        fibonacciSequence[fibonacciSequence.length - 2]
    );
  }

  fibonacciSequence = fibonacciSequence.slice(-100);

  return fibonacciSequence;
}

function displayFibSequence(sequence) {
  const fibonacciDiv = document.getElementById("fibSequenceNumbers");

  if (fibonacciDiv) {
    fibonacciDiv.innerHTML = "";

    for (let i = 0; i < sequence.length; i++) {
      const numberDiv = document.createElement("div");
      let color;

      if (i === 0) {
        color = "black";
      } else if (i === sequence.length - 1) {
        color = "white";
      } else {
        color = randomColor();
      }

      let divColor;
      if (i === sequence.length - 1) divColor = "black";

      numberDiv.textContent = sequence[i].toString();
      numberDiv.classList.add("fib-number");
      numberDiv.style.color = color;
      numberDiv.style.backgroundColor = divColor;

      fibonacciDiv.appendChild(numberDiv);
    }
  }
}

function randomColor() {
  const hexaNumbers = "1234567890ABCDEF";
  let color = "#";

  for (let i = 0; i < 6; i++) {
    color += hexaNumbers[Math.floor(Math.random() * 16)];
  }
  return color;
}

displayFibSequence(fibonacciSequence);

const generateButton = document.getElementById("generateButton");

if (generateButton) {
  generateButton.addEventListener("click", () => {
    const newFibSequence = fibonacciGenerate100();
    displayFibSequence(newFibSequence);
  });
}
