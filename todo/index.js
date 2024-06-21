// Create a new list item when clicking on the "Add" button
function newElement() {
    // Create a new list item <li>

    var li = document.createElement("li");

    // Fetch input values from the form fields

    let title = document.getElementById('title').value
    let category = document.getElementById('category').value
    let time = document.getElementById('time').value
    let date = document.getElementById('date').value
    // Concatenate input values into a single string
    let inputValue = `${title} ${category} ${time} ${date}`
    // Create a text node with the concatenated input value
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    // Validate if all input fields are filled
    if (title === '' || category === '' || time === '' || date === '') {
        alert("You must write something!");

    } else {
        // Append the new <li> item to the <ul> with id "myUL"
        document.getElementById("myUL").appendChild(li);
    }
    // Clear input fields after creating the list item
    document.getElementById("title").value = "";
    document.getElementById("category").value = "";
    document.getElementById("time").value = "";
    document.getElementById("date").value = "";

    // Create a close button (SPAN) for the list item

    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);

    //  functionality for close 

    span.onclick = function () {
        var div = this.parentElement;
        div.style.display = "none";
    }
}


