document.addEventListener("DOMContentLoaded", function() {
    const aboutLink = document.getElementById("aboutLink");
    const projectsLink = document.getElementById("projectsLink");
    const aboutModal = document.getElementById("aboutModal");
    const projectsModal = document.getElementById("projectsModal");
    const closeModalButtons = document.querySelectorAll(".modal .close");
    const navLinks = document.getElementById('navLinks');
    const menuToggle = document.getElementById('menuToggle');
    const loginSuccessModal = document.getElementById('loginSuccessModal');

    // Function to open a modal
    function openModal(modal) {
        modal.style.display = "block";
    }

    // Function to close a modal
    function closeModal(modal) {
        modal.style.display = "none";
    }

    // Event listener for the About link
    aboutLink.addEventListener("click", function(event) {
        event.preventDefault();
        openModal(aboutModal);
        navLinks.classList.remove('active');
    });

    // Event listener for the Projects link
    projectsLink.addEventListener("click", function(event) {
        event.preventDefault();
        openModal(projectsModal);
        navLinks.classList.remove('active');
    });

    // Event listeners for the close buttons
    closeModalButtons.forEach(button => {
        button.addEventListener("click", function() {
            const modal = button.closest(".modal");
            closeModal(modal);
        });
    });

    // Event listener to close modals when clicking outside of them
    window.addEventListener("click", function(event) {
        if (event.target == aboutModal) {
            closeModal(aboutModal);
        }
        if (event.target == projectsModal) {
            closeModal(projectsModal);
        }
        if (event.target == loginSuccessModal) {
            closeModal(loginSuccessModal);
        }
    });

    // Menu Toggle
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Close the menu when a nav link is clicked
    document.querySelectorAll('.nav-links .link').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });

    // Transition to the Register Form
    window.showRegisterForm = function() {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('registerForm').style.display = 'block';
    };

    // Transition to the Login Form
    window.showLoginForm = function() {
        document.getElementById('registerForm').style.display = 'none';
        document.getElementById('loginForm').style.display = 'block';
    };

    // Show success message for registration
    window.showSuccessMessage = function(event) {
        event.preventDefault();  // Prevent the form from submitting the traditional way
        alert('Account successfully created');
        event.target.reset(); // reset the form fields
    };

    // Handle login form submission
    window.handleLogin = function(event) {
        event.preventDefault();  // Prevent the form from submitting the traditional way
        const successModal = document.getElementById('loginSuccessModal');
        successModal.style.display = 'block';  // Show the login success modal
        event.target.reset();

        // Delay for 3 seconds before playing the video
        setTimeout(() => {
            closeModal(successModal);
            playVideo();
        }, 2000); // 2 seconds
    };

    // Close login success modal
    window.closeLoginSuccessModal = function() {
        const successModal = document.getElementById('loginSuccessModal');
        successModal.style.display = 'none';  // Hide the login success modal
    };

    // Play video on login success
    window.playVideo = function() {
        const videoModal = document.getElementById('videoModal');
        const video = document.getElementById('loginVideo');
        videoModal.style.display = 'block';  // Show the video modal
        video.play();  // Play the video
    };

    // Close video modal and stop video
    window.closeVideoModal = function() {
        const video = document.getElementById('loginVideo');
        video.pause();  // Pause the video
        video.currentTime = 0;  // Reset the video to the beginning
        const videoModal = document.getElementById('videoModal');
        videoModal.style.display = 'none';  // Hide the video modal
    };
});
