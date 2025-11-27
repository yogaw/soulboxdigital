document.addEventListener('DOMContentLoaded', function() {
    // Skip splash screen entirely
    document.getElementById('auth-screen').classList.add('active');
    
    // Auth tab switching
    const tabBtns = document.querySelectorAll('.tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all tabs
            tabBtns.forEach(b => b.classList.remove('active'));
            // Add active class to clicked tab
            btn.classList.add('active');
            
            // Hide all forms
            document.querySelectorAll('.auth-form').forEach(form => {
                form.classList.remove('active');
            });
            
            // Show selected form
            const formId = btn.getAttribute('data-tab') + '-form';
            document.getElementById(formId).classList.add('active');
            
            // Reset form state when switching tabs
            if (formId === 'login-form') {
                resetLoginForm();
            } else if (formId === 'signup-form') {
                resetSignupForm();
            }
        });
    });

    // Function to reset login form to initial state
    function resetLoginForm() {
        document.querySelector('.otp-section').classList.add('hidden');
        document.querySelector('.password-section').classList.add('hidden');
        document.getElementById('request-otp-btn').style.display = 'block';
        document.getElementById('phone').value = '';
        document.getElementById('password').value = '';
        document.querySelectorAll('.otp-input').forEach(input => input.value = '');
        document.getElementById('toggle-auth').textContent = 'Password';
    }
    
    // Function to reset signup form to initial state
    function resetSignupForm() {
        document.querySelector('.signup-otp-section').classList.add('hidden');
        document.getElementById('signup-request-otp-btn').style.display = 'block';
        document.getElementById('signup-phone').value = '';
        document.getElementById('name').value = '';
        document.querySelectorAll('.signup-otp-section .otp-input').forEach(input => input.value = '');
    }

    // Initialize forms to ensure proper state on page load
    resetLoginForm();
    resetSignupForm();

    // Toggle between OTP and Password login
    const toggleAuth = document.getElementById('toggle-auth');
    toggleAuth.addEventListener('click', () => {
        const otpSection = document.querySelector('.otp-section');
        const passwordSection = document.querySelector('.password-section');
        const requestOtpBtn = document.getElementById('request-otp-btn');
        
        if (toggleAuth.textContent === 'Password') {
            // Switch to Password
            otpSection.classList.add('hidden');
            passwordSection.classList.remove('hidden');
            requestOtpBtn.style.display = 'none';
            toggleAuth.textContent = 'OTP';
        } else {
            // Switch to OTP
            passwordSection.classList.add('hidden');
            otpSection.classList.add('hidden'); // Always hide OTP section when switching back
            requestOtpBtn.style.display = 'block';
            toggleAuth.textContent = 'Password';
        }
    });

    // Request OTP button
    const requestOtpBtn = document.getElementById('request-otp-btn');
    requestOtpBtn.addEventListener('click', () => {
        const phone = document.getElementById('phone').value;
        if (phone) {
            document.querySelector('.otp-section').classList.remove('hidden');
            requestOtpBtn.style.display = 'none';
            // Focus on first OTP input
            document.querySelector('.otp-input').focus();
            
            // Simulate OTP sent
            alert('OTP sent to ' + phone);
        } else {
            alert('Please enter your phone number');
        }
    });

    // Signup Request OTP button
    const signupRequestOtpBtn = document.getElementById('signup-request-otp-btn');
    signupRequestOtpBtn.addEventListener('click', () => {
        const phone = document.getElementById('signup-phone').value;
        const name = document.getElementById('name').value;
        
        if (phone && name) {
            document.querySelector('.signup-otp-section').classList.remove('hidden');
            signupRequestOtpBtn.style.display = 'none';
            // Focus on first OTP input
            document.querySelector('.signup-otp-section .otp-input').focus();
            
            // Simulate OTP sent
            alert('OTP sent to ' + phone);
        } else {
            alert('Please enter your phone number and name');
        }
    });

    // OTP Input Handling
    const otpInputs = document.querySelectorAll('.otp-input');
    otpInputs.forEach((input, index) => {
        input.addEventListener('input', (e) => {
            const value = e.target.value;
            
            // Move to next input if value is entered
            if (value.length === 1 && index < otpInputs.length - 1) {
                otpInputs[index + 1].focus();
            }
        });
        
        // Handle backspace
        input.addEventListener('keydown', (e) => {
            if (e.key === 'Backspace' && !e.target.value && index > 0) {
                otpInputs[index - 1].focus();
            }
        });
    });

    // Verify OTP button
    document.getElementById('verify-otp-btn').addEventListener('click', () => {
        // Simulate successful verification
        document.getElementById('auth-screen').classList.remove('active');
        document.getElementById('dashboard-screen').classList.add('active');
    });

    // Signup Verify OTP button
    document.getElementById('signup-verify-otp-btn').addEventListener('click', () => {
        // Simulate successful signup and login
        document.getElementById('auth-screen').classList.remove('active');
        document.getElementById('dashboard-screen').classList.add('active');
    });

    // Login with password button
    document.getElementById('login-password-btn').addEventListener('click', () => {
        const password = document.getElementById('password').value;
        
        if (password) {
            // Simulate successful login
            document.getElementById('auth-screen').classList.remove('active');
            document.getElementById('dashboard-screen').classList.add('active');
        } else {
            alert('Please enter your password');
        }
    });

    // Profile button in header
    document.getElementById('header-profile-btn').addEventListener('click', () => {
        // Redirect to profile page
        window.location.href = 'profile.html';
    });

    // For demo purposes - allow direct access to dashboard
    // Remove this in production
    setTimeout(() => {
        // Uncomment to auto-login for testing
        // document.getElementById('auth-screen').classList.remove('active');
        // document.getElementById('dashboard-screen').classList.add('active');
    }, 1000);
});

// Add this to your existing script.js file

document.addEventListener('DOMContentLoaded', function() {
    // Carousel functionality
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const indicators = Array.from(document.querySelectorAll('.indicator'));
    const prevButton = document.querySelector('.carousel-nav.prev');
    const nextButton = document.querySelector('.carousel-nav.next');
    
    let currentIndex = 0;
    
    // Function to update carousel
    function updateCarousel() {
        // Update slides
        slides.forEach((slide, index) => {
            if (index === currentIndex) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
        
        // Update indicators
        indicators.forEach((indicator, index) => {
            if (index === currentIndex) {
                indicator.classList.add('active');
            } else {
                indicator.classList.remove('active');
            }
        });
    }
    
    // Event listeners for navigation
    prevButton.addEventListener('click', () => {
        currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
        updateCarousel();
    });
    
    nextButton.addEventListener('click', () => {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    });
    
    // Event listeners for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            currentIndex = index;
            updateCarousel();
        });
    });
    
    // Auto-advance carousel every 5 seconds
    setInterval(() => {
        currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
        updateCarousel();
    }, 5000);
});

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get elements
    const rescheduleButtons = document.querySelectorAll('.reschedule-btn');
    const rescheduleForm = document.getElementById('rescheduleForm');
    const cancelButton = document.getElementById('cancelReschedule');
    const confirmButton = document.getElementById('confirmReschedule');
    const trainerOptions = document.querySelectorAll('.trainer-option');
    const dayOptions = document.querySelectorAll('.day-option:not(.disabled)');
    const timeOptions = document.querySelectorAll('.time-option:not(.disabled)');
    const confirmationModal = document.getElementById('confirmationModal');
    const cancelConfirmation = document.getElementById('cancelConfirmation');
    const finalConfirm = document.getElementById('finalConfirm');
    const successMessage = document.getElementById('successMessage');
    const doneBtn = document.getElementById('doneBtn');
    const scheduleCard = document.getElementById('scheduleCard');
    
    // Session being rescheduled
    let currentSession = {
        day: "Wednesday",
        time: "14:00",
        trainer: "John"
    };
    
    // New session details
    let newSession = {
        day: "Wednesday",
        time: "14:00",
        trainer: "John"
    };
    
    // Show reschedule form when reschedule button is clicked
    rescheduleButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Get the day from data attribute
            currentSession.day = this.getAttribute('data-day');
            
            // Update the session to reschedule text
            document.querySelector('.session-to-reschedule').textContent = 
                `${currentSession.day}, ${currentSession.time} with ${currentSession.trainer}`;
            
            // Show the form
            rescheduleForm.style.display = 'block';
            scheduleCard.style.display = 'none';
            
            // Scroll to the form
            rescheduleForm.scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Hide reschedule form when cancel button is clicked
    if (cancelButton) {
        cancelButton.addEventListener('click', function() {
            rescheduleForm.style.display = 'none';
            scheduleCard.style.display = 'block';
        });
    }
    
    // Handle trainer selection
    trainerOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove selected class from all options
            trainerOptions.forEach(opt => opt.classList.remove('selected'));
            // Add selected class to clicked option
            this.classList.add('selected');
            // Update new session trainer
            newSession.trainer = this.getAttribute('data-trainer');
        });
    });
    
    // Handle day selection
    dayOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove selected class from all options
            dayOptions.forEach(opt => opt.classList.remove('selected'));
            // Add selected class to clicked option
            this.classList.add('selected');
            // Update new session day
            newSession.day = this.getAttribute('data-day');
        });
    });
    
    // Handle time selection
    timeOptions.forEach(option => {
        option.addEventListener('click', function() {
            // Remove selected class from all options
            timeOptions.forEach(opt => opt.classList.remove('selected'));
            // Add selected class to clicked option
            this.classList.add('selected');
            // Update new session time
            newSession.time = this.getAttribute('data-time');
        });
    });
    
    // Show confirmation modal when confirm button is clicked
    if (confirmButton) {
        confirmButton.addEventListener('click', function() {
            // Update confirmation modal with current and new session details
            document.getElementById('oldDay').textContent = currentSession.day;
            document.getElementById('oldTime').textContent = currentSession.time;
            document.getElementById('oldTrainer').textContent = currentSession.trainer;
            
            document.getElementById('newDay').textContent = newSession.day;
            document.getElementById('newTime').textContent = newSession.time;
            document.getElementById('newTrainer').textContent = newSession.trainer;
            
            // Show confirmation modal
            confirmationModal.style.display = 'flex';
        });
    }
    
    // Hide confirmation modal when back button is clicked
    if (cancelConfirmation) {
        cancelConfirmation.addEventListener('click', function() {
            confirmationModal.style.display = 'none';
        });
    }
    
    // Show success message when final confirm button is clicked
    if (finalConfirm) {
        finalConfirm.addEventListener('click', function() {
            // Hide confirmation modal
            confirmationModal.style.display = 'none';
            // Hide reschedule form
            rescheduleForm.style.display = 'none';
            
            // Update success message with new session details
            document.getElementById('updatedDay').textContent = newSession.day;
            document.getElementById('updatedTime').textContent = newSession.time;
            document.getElementById('updatedTrainer').textContent = newSession.trainer;
            
            // Show success message
            successMessage.style.display = 'block';
        });
    }
    
    // Return to schedule card when done button is clicked
    if (doneBtn) {
        doneBtn.addEventListener('click', function() {
            // Hide success message
            successMessage.style.display = 'none';
            
            // Update the schedule card with new session details
            if (currentSession.day === "Wednesday") {
                const wednesdaySession = document.getElementById('wednesdaySession');
                wednesdaySession.querySelector('.schedule-time').textContent = newSession.time;
                wednesdaySession.querySelector('.schedule-trainer').textContent = `with Trainer ${newSession.trainer}`;
                
                // If day changed, update the day too
                if (newSession.day !== "Wed") {
                    wednesdaySession.querySelector('.schedule-day').textContent = newSession.day;
                }
            } else if (currentSession.day === "Friday") {
                const fridaySession = document.getElementById('fridaySession');
                fridaySession.querySelector('.schedule-time').textContent = newSession.time;
                fridaySession.querySelector('.schedule-trainer').textContent = `with Trainer ${newSession.trainer}`;
                
                // If day changed, update the day too
                if (newSession.day !== "Fri") {
                    fridaySession.querySelector('.schedule-day').textContent = newSession.day;
                }
            }
            
            // Show schedule card
            scheduleCard.style.display = 'block';
        });
    }
    
    // Initially hide the reschedule form, confirmation modal, and success message
    if (rescheduleForm) {
        rescheduleForm.style.display = 'none';
    }
    if (confirmationModal) {
        confirmationModal.style.display = 'none';
    }
    if (successMessage) {
        successMessage.style.display = 'none';
    }
});