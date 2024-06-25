document.getElementById('registrationForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const response = await fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name, email, password })
    });

    const result = await response.json();
    const messageDiv = document.getElementById('message');
    if (result.success) {
        messageDiv.textContent = 'Registration successful!';
        messageDiv.style.color = 'green';
    } else {
        messageDiv.textContent = 'Registration failed: ' + result.message;
    }
});
