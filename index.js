document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Function to capture user input from the form
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

// Function to display user input in the output section
function displayOutput(userData) {
    document.getElementById('displayName').textContent = `Name: ${userData.name}`;
    document.getElementById('displayEmail').textContent = `Email: ${userData.email}`;
    document.getElementById('displayMessage').textContent = `Message: ${userData.message}`;
}
    // Show the output div
    document.getElementById('output').style.display = 'block';
});
