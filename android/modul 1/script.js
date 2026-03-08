const buttons = document.querySelectorAll(".copy-btn");

buttons.forEach(button => {

button.addEventListener("click", () => {

const code = button.nextElementSibling.innerText;

navigator.clipboard.writeText(code);

button.innerText = "Copied!";

setTimeout(()=>{
button.innerText = "Copy";
},1500);

});

});