// script.js
document.addEventListener('DOMContentLoaded', function() {
    // Form submission
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Prevent the form from submitting
  
      // Get form values
      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const message = document.getElementById('message').value;
  
      // Validate form values (you can add more validation if needed)
      if (!name || !email || !message) {
        alert('Please fill in all fields.');
        return;
      }
  
      // Display success message
      const successMessage = document.createElement('p');
      successMessage.textContent = 'Message sent successfully!';
      form.appendChild(successMessage);
  
      // Clear form fields
      form.reset();
    });
  });
  