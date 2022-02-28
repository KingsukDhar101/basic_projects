const charVal = document.getElementById("textarea");
let totalCount = document.getElementById("total-counter");
let remCount = document.getElementById("rem-counter");
let textCopied = document.querySelector(".text-copied");

let userChar = 0;

const updateCounter = () => {
  userChar = charVal.value.length;
  console.log(userChar);
  // console.log("TotalCount: ",totalCount.innerText);
  totalCount.innerText = userChar;
  remCount.innerText = 150 - totalCount.innerText;
};

charVal.addEventListener("keyup", () => {
  updateCounter();
});

const copyText = () => {
  charVal.select();
  charVal.setSelectionRange(0, 99999); // for mobile
  navigator.clipboard.writeText(charVal.value);
  // alert("Text copied!");
  textCopied.innerText = "Text copied!";
  setTimeout(() => {
    textCopied.innerHTML = "";
  }, 2000);
};
