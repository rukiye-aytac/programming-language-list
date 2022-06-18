const langInput = document.querySelector(".lang");
const delBtn = document.getElementById("del");
const addBtn = document.getElementById("add");

const langSection = document.querySelector("#lang-section");

const ul = document.createElement("ul");
langSection.appendChild(ul);

//? SELECTORS
//************************************************* */

console.log(langSection.children[0]);
console.log(langSection.parentNode.parentNode);

// const h1 = ul.closest('.container').firstChild;
const h1 = ul.closest(".container").firstElementChild;
console.log(h1);
h1.style.color = "red";

const buttons = ul.closest(".container").querySelectorAll(".btn"); //container classı içerisindeki btn classına ait olan elementleri arar.
console.log(buttons);

//************************************************* */

addBtn.onclick = function () {
  if (!langInput.value) {
    alert("Please enter a language!");
  } else {
    ul.innerHTML += `<li>${langInput.value}</li>`;
    langInput.value = "";
    javascriptcontrol();
  }
};

const javascriptcontrol = () => {
  document.querySelectorAll("ul li").forEach((lang) => {
    const lowerCase = lang.textContent.toLowerCase();
    if (lowerCase === "javascript") {
      //   lang.className = "red";
      lang.setAttribute("class", "red");
    }
  });
};

delBtn.onclick = function () {
  ul.childElementCount > 0
    ? ul.removeChild(ul.lastElementChild)
    : alert("No items to delete!");
};

langInput.addEventListener("keydown", (e) => {
  console.log(e);
  //   if (e.keyCode === 13) {
  //     addBtn.onclick();
  //   }
  if (e.code === "Enter") {
    addBtn.onclick();
  }
  if (e.code === "Delete") {
    delBtn.onclick();
  }
});

window.onload = () => {
  javascriptcontrol();
  langInput.focus();
};
