document.getElementById("regForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const roll = document.getElementById("roll").value;
  const message = document.getElementById("message");

  if (name && email && roll) {
    message.style.color = "green";
    message.textContent = "Registration successful!";
  } else {
    message.style.color = "red";
    message.textContent = "Please fill all fields.";
  }
});
