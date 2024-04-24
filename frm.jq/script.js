const userForm = document.getElementById("userForm");
const userTable = document.getElementById("userTable");

// Initialize empty array to store user data
let users = [];

// Function to add user to table and array
function addUser(event) {
  event.preventDefault();
  const ci = document.getElementById("ci").value;
  const name = document.getElementById("name").value;
  const date = document.getElementById("date").value;
  const address = document.getElementById("address").value;

  // Create new user object
  const newUser = {
    ci,
    name,
    date,
    address,
  };

  // Add user to array
  users.push(newUser);

  // Create new table row and cells
  const row = document.createElement("tr");
  const ciCell = document.createElement("td");
  const nameCell = document.createElement("td");
  const dateCell = document.createElement("td");
  const addressCell = document.createElement("td");
  const actionsCell = document.createElement("td");

  // Add user data to cells
  ciCell.textContent = newUser.ci;
  nameCell.textContent = newUser.name;
  dateCell.textContent = newUser.date;
  addressCell.textContent = newUser.address;

  // Create edit button
  const editButton = document.createElement("button");
  editButton.textContent = "Edit";
  editButton.classList.add("btn", "btn-primary", "me-2");

  // Create delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.classList.add("btn", "btn-danger");

  // Add buttons to actions cell
  actionsCell.appendChild(editButton);
  actionsCell.appendChild(deleteButton);

  // Add cells to row
  row.appendChild(ciCell);
  row.appendChild(nameCell);
  row.appendChild(dateCell);
  row.appendChild(addressCell);
  row.appendChild(actionsCell);

  // Add row to table
  userTable.appendChild(row);

  // Reset form
  userForm.reset();
}

// Add event listener to form
userForm.addEventListener("submit", addUser);
