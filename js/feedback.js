    const form = document.getElementById('feedbackForm');
    const thankYou = document.getElementById('thankYouMessage');

    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('studentName').value.trim();
      const rating = document.getElementById('rating').value;

      if (!name || !rating) {
        alert('Please fill in all required fields.');
        return;
      }
    //   else  if (name.trim() !== a) {
    //         alert("Name should not start or end with spaces!");
    //         event.preventDefault();
    //         return false;
    //     }
         var namePattern = /^[A-Za-z0-9 ]+$/;
        if (!namePattern.test(name)) {
            alert("Name should contain only letters and numbers (no spaces or special characters)!");
            event.preventDefault();
            return false;
        }

      form.style.display = 'none';
      thankYou.style.display = 'block';
    });