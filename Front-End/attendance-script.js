// Dummy student data
const students = [
    { name: 'Ali', roll: '01' },
    { name: 'Aiza', roll: '02' },
    { name: 'Ehtsham', roll: '03' },
    { name: 'Mahnoor', roll: '04' },
    { name: 'Hassan', roll: '05' },
    { name: 'Iqra', roll: '06' },
    { name: 'Jawad', roll: '07' },
    { name: 'Kiran', roll: '08' },
    { name: 'Mubashir', roll: '09' },
    { name: 'Nadia', roll: '10' }
];

document.addEventListener('DOMContentLoaded', () => {
    // Retrieve lecture data
    const data = JSON.parse(localStorage.getItem('lectureData')) || {};
    const { course = '', type = '', time = '', room = '' } = data;

    // Show header info
    document.getElementById('courseInfo').textContent = 
        `${course} (${type}) - ${room} @ ${time}`;

    const today = new Date().toLocaleDateString('en-US', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
    });
    document.getElementById('dateInfo').textContent = today;

    // Populate table
    const tbody = document.getElementById('studentBody');
    students.forEach(s => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td>${s.name}</td>
            <td>${s.roll}</td>
            <td><input type="checkbox" checked></td>
        `;
        tbody.appendChild(tr);
    });
});

function saveAttendance() {
    // In a real app you would send data to a server.
    // Here we just show a success message.
    const msg = document.getElementById('successMsg');
    msg.classList.add('show');
    setTimeout(() => msg.classList.remove('show'), 3000);
}
