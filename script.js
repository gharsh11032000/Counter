const input = document.querySelector(".input-box");
const btnCount = document.querySelector(".btn");
const btnClear = document.querySelector(".btn-clear");
const midPart = document.querySelector(".mid-part");
const body = document.querySelector(".body");
let countVowels = 0;
let countConsonant = 0;
let countLetters = 0;
let countOther = 0;
let countNumber = 0;
let countSpaces = 0;
let countCharacters = 0;
let countWords = 0;

// EventListner
// Count Button
btnCount.addEventListener("click", function () {
  let inputString = input.value;
  countLetters = inputString.length;
  if (inputString.length > 0) {
    for (let i = 0; i < inputString.length; i++) {
      if (
        inputString[i].includes("a") ||
        inputString[i].includes("e") ||
        inputString[i].includes("i") ||
        inputString[i].includes("o") ||
        inputString[i].includes("u") ||
        inputString[i].includes("A") ||
        inputString[i].includes("E") ||
        inputString[i].includes("I") ||
        inputString[i].includes("O") ||
        inputString[i].includes("U")
      ) {
        countVowels += 1;
      }
      if (inputString[i].includes(" ")) {
        countLetters -= 1;
        countSpaces += 1;
      }
      if (
        inputString[i].includes(".") ||
        inputString[i].includes(",") ||
        inputString[i].includes("'") ||
        inputString[i].includes("@") ||
        inputString[i].includes("/") ||
        inputString[i].includes(";") ||
        inputString[i].includes(":") ||
        inputString[i].includes("#") ||
        inputString[i].includes("!") ||
        inputString[i].includes("$") ||
        inputString[i].includes("%") ||
        inputString[i].includes("^") ||
        inputString[i].includes("&") ||
        inputString[i].includes("*") ||
        inputString[i].includes("(") ||
        inputString[i].includes(")") ||
        inputString[i].includes(")") ||
        inputString[i].includes("-") ||
        inputString[i].includes("+") ||
        inputString[i].includes("=") ||
        inputString[i].includes("{") ||
        inputString[i].includes("}") ||
        inputString[i].includes("[") ||
        inputString[i].includes("]") ||
        inputString[i].includes("|") ||
        inputString[i].includes("`")
      ) {
        countLetters -= 1;
        countOther += 1;
      }
      if (
        inputString[i].includes("1") ||
        inputString[i].includes("2") ||
        inputString[i].includes("3") ||
        inputString[i].includes("4") ||
        inputString[i].includes("5") ||
        inputString[i].includes("6") ||
        inputString[i].includes("7") ||
        inputString[i].includes("8") ||
        inputString[i].includes("9") ||
        inputString[i].includes("0")
      ) {
        countLetters -= 1;
        countNumber += 1;
      }
    }
    countCharacters = countLetters + countNumber + countOther;
    countWords = countSpaces + 1;
    countConsonant = countLetters - countVowels;
    midPart.innerHTML = `<p class="para">${inputString}
    </p><p class="content">Characters : ${countCharacters}</p>
    </p><p class="content">Letters : ${countLetters}</p>
    </p><p class="content">Words : ${countWords}</p>
  <p class="content">Vowels : ${countVowels}</p>
  <p class="content">Consonants : ${countConsonant}</p>
  <p class="content">Numbers : ${countNumber}</p>
  <p class="content">Spaces : ${countSpaces}</p>
  <p class="content">Others (like @,#,$...) : ${countOther}</p>`;

    input.value = "";
    countVowels = 0;
    countConsonant = 0;
    countOther = 0;
    countNumber = 0;
    countLetters = 0;
    countSpaces = 0;
    countCharacters = 0;
    countWords = 0;
  } else {
    alert("Please enter something.'ThankYou'");
  }
});

//Button Clear
btnClear.addEventListener("click", function () {
  midPart.innerHTML = "";
  input.value = "";
  countVowels = 0;
  countConsonant = 0;
  countOther = 0;
  countNumber = 0;
  countLetters = 0;
  countSpaces = 0;
  countCharacters = 0;
  countWords = 0;
  input.style.width = "40%";
  input.style.height = "20px";
});
