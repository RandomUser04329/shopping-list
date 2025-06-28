//a empty string until ran through the function below for input
let itemValue = "";


//gets the input text from the text field right when the button is clicked
function valueFromInput() {
    const inputText = document.querySelector("#add-Item");
    let itemValue = inputText.value;

    if (itemValue === "") {
        return alert("Please enter an item.")
    } else {
        return addToList(itemValue.charAt(0).toUpperCase() + itemValue.slice(1).toLowerCase());
    }

}

//For the button to get the click and calling the function above 
const button = document.querySelector("#btn");
button.addEventListener("click", valueFromInput);

//This function below gets the item from the function above the button and 
// adds it to a list that is appended to a <li> element and adds a delete button 
// to the item.
const ul = document.querySelector("ul");

function addToList(item) {

    const newItem = document.createElement("li");
    newItem.textContent = item;

    const button = document.createElement("button");
    button.textContent = "delete";
    //the 2 lines above add a delete button and the function below makes a 
    //listen for the click which then removes the item if the user wishes to.
    button.addEventListener("click", () => {
        ul.removeChild(newItem);
    });

    newItem.appendChild(button);

    return ul.appendChild(newItem);

}





