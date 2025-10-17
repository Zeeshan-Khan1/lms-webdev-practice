// Set current time as default lecture time
document.addEventListener('DOMContentLoaded', () => {
    const now = new Date();
    const timeStr = now.toTimeString().slice(0, 5); // HH:MM
    document.getElementById('timeInput').value = timeStr;
});

function createLecture() {
    const course = document.getElementById('courseSelect').value;
    const type   = document.getElementById('typeSelect').value;
    const time   = document.getElementById('timeInput').value;
    const room   = document.getElementById('roomSelect').value;

    if (!course || !room) {
        alert('Please select a course and a room.');
        return;
    }

    // Store data in localStorage for the attendance page
    const lectureData = { course, type, time, room };
    localStorage.setItem('lectureData', JSON.stringify(lectureData));

    // Navigate to attendance page
    window.location.href = 'attendance.html';
}
