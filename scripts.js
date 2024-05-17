document.getElementById('signup-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    
    if (name && email) {
        alert(`Thank you for signing up, ${name}! We have received your email: ${email}`);
        document.getElementById('signup-form').reset();
    } else {
        alert('Please enter both your name and a valid email address.');
    }
});
