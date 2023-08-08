document.addEventListener('DOMContentLoaded', function () {
    const rsvpForm = document.getElementById('rsvpForm');
    const confirmationMessage = document.getElementById('confirmationMessage');
  
    rsvpForm.addEventListener('submit', function (event) {
      event.preventDefault(); // Prevent form submission
  
      const name = document.getElementById('name').value;
      const attendance = document.getElementById('attendance').value;
  
      if (attendance === 'attending') {
        // If the user is attending, display a positive message with a party emoji
        confirmationMessage.innerHTML = `🎉 Yay! We're excited to see you at the Character Gala, ${name}! 🎉`;
    
        // Add the background image to the body
        document.body.style.backgroundImage = 'url("https://media.giphy.com/media/l2JHPB58MjfV8W3K0/giphy.gif")';
        document.body.style.backgroundSize = 'cover'; 
    } else {
        // If the user is not attending, display a different message
        confirmationMessage.innerHTML = `We will miss you at the Character Gala, ${name}😞 We hope to see you next time!`;
        
        // Reset the background image if the user is not attending
        document.body.style.backgroundImage = 'none';
    }
  
      // Show the confirmation message
      confirmationMessage.style.display = 'block';
      rsvpForm.reset(); // Reset the form after submission
    });
  });
  