document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const firstname = document.getElementById('firstname').value.trim();
    const lastname = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const mobile = document.getElementById('mobile').value.trim();
    const gender = document.getElementById('gender').value;
    const classValue = document.getElementById('class').value.trim();
    const rollNumber = document.getElementById('rollNumber').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const namePattern = /^[A-Za-z]+$/;
    const emailPattern = /^[a-zA-Z0-9._%+-]+@(gmail|yahoo)\.com$/;
    const mobilePattern = /^[6-9]\d{9}$/;
    const passwordPattern = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!namePattern.test(firstname) || !namePattern.test(lastname)) {
        alert('First Name and Last Name should only contain alphabets.');
        return;
    }

    if (!emailPattern.test(email)) {
        alert('Please enter a valid email address.');
        return;
    }

    if (!mobilePattern.test(mobile)) {
        alert('Mobile number should start with 6, 7, 8, or 9 and be exactly 10 digits long.');
        return;
    }

    if (!passwordPattern.test(password)) {
        alert('Password should contain at least one capital letter, one special character, one number, and be at least 8 characters long.');
        return;
    }

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    const student = {
        firstname,
        lastname,
        email,
        mobile,
        gender,
        class: classValue,
        rollNumber,
        password
    };

    let students = JSON.parse(localStorage.getItem('students')) || [];
    students.push(student);
    localStorage.setItem('students', JSON.stringify(students));

    alert('Registration successful!');
    document.getElementById('registrationForm').reset();
});
