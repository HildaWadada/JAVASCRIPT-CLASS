const Form = document.getElementById("userForm");
const tableBody = document.getElementById("#userTable tbody");

Form.addEventListener("submit", submitForm);

function submitForm(event){
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const age = document.getElementById("age").value;

    // create new row
    const newRow = document.createElement("tr");
    newRow.innerHTML =`<td>${name}</td> <td>${email}</td> <td>${age}</td>`
    // attach to table
    tableBody.appendChild(newRow);
    Form.reset();    //clears the form so that it goes back to normal
}
  