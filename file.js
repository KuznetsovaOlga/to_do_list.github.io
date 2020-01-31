let input = document.querySelector(".form-list__input");
let btn = document.querySelector(".form-list__btn");
let blockList = document.querySelector(".block-list");


// create elements-------------------------------------
function createElements (text) {

    const newElement = document.createElement("li");
    newElement.className = "block-list-elem";
    
    const doneBtn = document.createElement("button");
    doneBtn.className = "material-icons check";

    const doneElem = document.createElement("i");
    doneElem.className = "material-icons";
    doneElem.textContent = "check"; 

    const blockInput = document.createElement("input");
    blockInput.className = "block-list__input";
    blockInput.setAttribute("type", "text");
    blockInput.setAttribute("value", text);
    blockInput.textContent = text;
    
    const deletBtn = document.createElement("button");
    deletBtn.className = "material-icons delete";

    const deletElem = document.createElement("i");
    deletElem.className = "material-icons";
    deletElem.textContent = "delete";
    
    const changeBtn = document.createElement("button");
    changeBtn.className = "material-icons create";

    const changeElem = document.createElement("i");
    changeElem.className = "material-icons";
    changeElem.textContent = "create";

    const saveBtn = document.createElement("button");
    saveBtn.className = "material-icons save";

    const saveElem = document.createElement("i");
    saveElem.className = "material-icons";
    saveElem.textContent = "save";
    
    blockList.appendChild(newElement);
    newElement.appendChild(blockInput);
    newElement.appendChild(deletBtn);
    deletBtn.appendChild(deletElem);
    newElement.appendChild(changeBtn);
    changeBtn.appendChild(changeElem);
    saveBtn.appendChild(saveElem);

    // Eddit task -------------------------------------
    changeBtn.addEventListener("click", function(event) {

        let containsClass = event.target.parentNode.classList.contains("create");
        console.log(containsClass);
        if (containsClass) {
            changeBtn.style.display = "none";
            newElement.appendChild(saveBtn);
        };

        blockInput.setSelectionRange(blockInput.value.length,blockInput.value.length);
        blockInput.focus();
    });

    // Save task---------------------------------------
    blockInput.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
          event.preventDefault();
          saveBtn.click();
        }
    });

    saveBtn.addEventListener("click", function (event) {
        changeBtn.style.display = "";
        saveBtn.remove();
        blockInput.blur();
    });

    // add line throught-------------------------------
    blockInput.addEventListener("click", function() {
        this.classList.add("text-line__through"); 
        newElement.appendChild(doneBtn);
        doneBtn.appendChild(doneElem);

        changeBtn.remove();
        blockInput.blur();
    });

    // Delete task ------------------------------------
    deletBtn.addEventListener("click", function() {
        blockList.removeChild(newElement);
    });

};

// Call function create elements and cleaning input after
btn.addEventListener("click", function(e) {
    e.preventDefault();
    if (input.value === "") return;
    else {
        createElements(input.value);
    }
    input.value = "";
});









