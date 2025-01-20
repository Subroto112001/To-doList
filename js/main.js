const Inputbox = document.querySelector("#TodolistSection__input");
const ListOfTask = document.querySelector(".ListOfTask");
const AddButton = document.querySelector(".AddButton");
function myclick () {
    if (Inputbox.value === "") {
      alert("You Must Write Something");
    } else {
      let li = document.createElement("li");
      li.innerHTML = Inputbox.value;
        ListOfTask.appendChild(li);
        let span = document.createElement("span")
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        li.classList.add("ListOfTaskItem");
    }
    Inputbox.value = "";  
    savadata();
}
ListOfTask.addEventListener('click', function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("cng");
        savadata();
    }
    else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        savadata();
    }
}, false);

function savadata() {
    localStorage.setItem("data", ListOfTask.innerHTML);
}

function show() {
    ListOfTask.innerHTML= localStorage.getItem("data");
}
show();