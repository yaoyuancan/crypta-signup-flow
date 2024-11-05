document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const phone = document.getElementById('phone');

    if (!validateEmail(email.value)) {
        alert("Invalid email format.");
        return;
    }

    if (!validatePassword(password.value)) {
        alert("Password must be at least 8 characters long.");
        return;
    }

    if (!validatePhone(phone.value)) {
        alert("Invalid phone number format.");
        return;
    }

    alert("Signup complete!");
});

function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePassword(password) {
    return password.length >= 8;
}

function validatePhone(phone) {
    const phoneRegex = /^\d{10}$/;
    return phoneRegex.test(phone);
}

function updateRisk() {
    const slider = document.getElementById("riskSlider");
    const percentageDisplay = document.getElementById("riskPercentage");
    const value = slider.value;

    //percentage display
    percentageDisplay.textContent = `${value}%`;

    // Adjust the slider's background color based on risk level
    const green = Math.max(0, 255 - (value * 2.55)); // Decrease green as value increases
    const red = Math.min(255, value * 2.55);          // Increase red as value increases
    slider.style.background = `linear-gradient(to right, rgb(51, 132, 91), rgb(${red}, ${green}, 25))`;
}
