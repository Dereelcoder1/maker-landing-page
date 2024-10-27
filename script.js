document.getElementById('ctaForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting immediately

    const emailInput = document.getElementById('emailInput');
    const errorMessage = document.getElementById('errorMessage');
    const emailValue = emailInput.value.trim();

    // Regex pattern for a basic email validation
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    // Clear previous error message
    errorMessage.style.display = 'none';
    errorMessage.textContent = '';

    if (emailValue === '') {
        // Display error if the email input is empty
        errorMessage.textContent = 'Email is required.';
        errorMessage.style.display = 'block';
        emailInput.focus();
    } else if (!emailPattern.test(emailValue)) {
        // Display error if the email format is incorrect
        errorMessage.textContent = 'Please enter a valid email address.';
        errorMessage.style.display = 'block';
        emailInput.focus();
    } else {
        // Clear error message and simulate form submission
        alert('Thank you for subscribing!'); // Placeholder action
    }

    console.log('Email input value:', emailValue);
});
