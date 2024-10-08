// Function to capture user input from the form
function getUserInput() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    return { name, email, message };
}

    
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
