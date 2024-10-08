document.getElementById('userForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission
    
    // Capture user input
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Display the captured data
    document.getElementById('displayName').textContent = `Name: ${name}`;
    document.getElementById('displayEmail').textContent = `Email: ${email}`;
    document.getElementById('displayMessage').textContent = `Message: ${message}`;

    // Show the output div
    document.getElementById('output').style.display = 'block';
});
