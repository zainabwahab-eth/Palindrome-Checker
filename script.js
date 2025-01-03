const resultmsg = document.getElementById("result");
const button = document.getElementById("check-btn");
const input = document.getElementById("text-input");

const cleanString = (string) => {
  const regex = /[^a-zA-Z0-9]/g;
  return string.replace(regex, "").toLowerCase();
};

function isInvalidInput(string) {
  return string === "" ? true : false;
}

const isPalindrome = (string) => {
  string = cleanString(string);
  const reverseString = string.split("").reverse().join("");
  return reverseString === string;
};

const showResult = (string) => {
  string = input.value;
  const invalidInput = isInvalidInput(input.value);
  if (invalidInput) {
    alert("Please input a value");
    return;
  }
  resultmsg.innerText =
    isPalindrome(string) === true
      ? `${string} is a palindrome`
      : `${string} is not a palindrome`;
  input.value = "";
};

button.addEventListener("click", showResult);
