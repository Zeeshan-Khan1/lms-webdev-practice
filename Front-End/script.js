// Dummy student data
const students = [
    'Ali Ahmed',
    'Aiza Khan',
    'Ehtsham Malik',
    'Fatima Riaz',
    'Hassan Ali',
    'Iqra Bibi',
    'Jawad Khan',
    'Kiran Fatima',
    'Mubashir Ali',
    'Nadia Shah'
];

// Show current date when page loads
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('attendanceDate').textContent = 
        new Date().toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
});

function showAttendance() {
    const section = document.getElementById('attendanceSection');
    section.classList.add('show');
    
    // Generate student list
    const studentList = document.getElementById('studentList');
    studentList.innerHTML = '';
    
    students.forEach((student, index) => {
        const studentItem = document.createElement('div');
        studentItem.className = 'student-item';
        studentItem.innerHTML = `
            <input type="checkbox" class="student-checkbox" id="student${index}" checked>
            <label for="student${index}" class="student-name">${student}</label>
        `;
        studentList.appendChild(studentItem);
    });
    
    // Scroll to attendance section
    section.scrollIntoView({ behavior: 'smooth' });
}

function saveAttendance() {
    const checkboxes = document.querySelectorAll('.student-checkbox');
    let presentCount = 0;
    
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) presentCount++;
    });
    
    // Show success message
    const successMsg = document.getElementById('successMessage');
    successMsg.classList.add('show');
    
    // Hide success message after 3 seconds
    setTimeout(() => {
        successMsg.classList.remove('show');
    }, 3000);
    
    // Hide attendance section after 2 seconds
    setTimeout(() => {
        document.getElementById('attendanceSection').classList.remove('show');
    }, 2000);
}