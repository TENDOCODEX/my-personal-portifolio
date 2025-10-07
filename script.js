document.addEventListener('DOMContentLoaded', () => {
    const hireButton = document.querySelector('.buttons button:first-child');
    const talkButton = document.getElementById('letsTalkBtn');


    if (hireButton) {
        hireButton.addEventListener('click', () => {
            window.location.href = 'contact.html';
        });
    }

    if (talkButton) {
        talkButton.addEventListener('click', () => {
            window.location.href = 'contact.html#contact-form';
        });
    }

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const fullName = document.getElementById('fullName').value;
            const message = document.getElementById('message').value;
            
            // Replace with your email service implementation
            window.location.href = `mailto:rutendosengera0701@gmail.comsubject=Portfolio Contact from ${fullName}&body=${message}`;
        });
    }
});
