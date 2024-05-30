document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission

    // Display the success message
    document.getElementById('successMessage').style.display = 'block';

    // Optionally, you can reset the form after displaying the message
    this.reset();
});
