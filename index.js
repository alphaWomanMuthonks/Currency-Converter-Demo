document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
// Function to validate user input
function validateInput(name, email, message) {
    return name.length > 0 && email.includes('@') && message.length > 0;
}

// Function to display user input in the output section
function displayOutput(userData) {
    document.getElementById('displayName').textContent = `Name: ${userData.name}`;
    document.getElementById('displayEmail').textContent = `Email: ${userData.email}`;
    document.getElementById('displayMessage').textContent = `Message: ${userData.message}`;
}
    // Show the output div
    document.getElementById('output').style.display = 'block';
});
