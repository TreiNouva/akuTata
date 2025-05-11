    document.querySelector('.mobile-menu-btn').addEventListener('click', function() {
      document.querySelector('nav').classList.toggle('open');
    });

    // Countdown Timer
    function updateCountdown() {
      const now = new Date();
      const endDate = new Date(now);
      endDate.setDate(now.getDate() + 2);
      endDate.setHours(now.getHours() + 18);
      endDate.setMinutes(now.getMinutes() + 45);
      endDate.setSeconds(now.getSeconds() + 32);
      
      const timeLeft = endDate - now;
      
      const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
      const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
      
      document.getElementById('days').textContent = days.toString().padStart(2, '0');
      document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
      document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
      document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
    }
    
    setInterval(updateCountdown, 1000);
    updateCountdown();

    // FAQ Accordion
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    faqQuestions.forEach(question => {
      question.addEventListener('click', () => {
        const answer = question.nextElementSibling;
        const isActive = question.classList.contains('active');
        
        // Close all other FAQs
        document.querySelectorAll('.faq-question').forEach(q => {
          q.classList.remove('active');
          q.nextElementSibling.classList.remove('active');
        });
        
        // Toggle current FAQ
        if (!isActive) {
          question.classList.add('active');
          answer.classList.add('active');
        }
      });
    });

    // Copy Coupon Code
    document.getElementById('copy-btn').addEventListener('click', function() {
      const couponCode = this.parentElement.textContent.trim().split('\n')[0];
      navigator.clipboard.writeText(couponCode)
        .then(() => {
          this.textContent = 'Copied!';
          setTimeout(() => {
            this.textContent = 'Copy';
          }, 2000);
        })
        .catch(err => {
          console.error('Failed to copy: ', err);
        });
    });