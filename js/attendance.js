// ================= For Attendance Page =================
// alert("Attendance saved successfully!");

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
console.log(students);

function initAttendancePage() {
  // Show today's date
  const today = new Date().toLocaleDateString('en-US', {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });
  document.getElementById('dateInfo').textContent = today;

  const tbody = document.getElementById('studentBody');
  tbody.innerHTML = '';

  // Retrieve saved attendance (if exists)
  const savedData = JSON.parse(localStorage.getItem('attendanceData')) || {};

  // Fill table
  students.forEach(s => {
    const tr = document.createElement('tr');
    const isPresent = savedData[s.roll] ?? true; // default: present
    tr.innerHTML = `
      <td>${s.name}</td>
      <td>${s.roll}</td>
      <td><input type="checkbox" ${isPresent ? 'checked' : ''}></td>
    `;
    tbody.appendChild(tr);
  });

  console.log('✅ Attendance page initialized');
}

// ✅ Save attendance button
function saveAttendance() {
  const checkboxes = document.querySelectorAll('#studentBody input[type="checkbox"]');
  const rows = document.querySelectorAll('#studentBody tr');

  const attendanceData = {};

  rows.forEach((row, index) => {
    const roll = row.children[1].textContent;
    attendanceData[roll] = checkboxes[index].checked;
  });

  // Save in localStorage
  localStorage.setItem('attendanceData', JSON.stringify(attendanceData));

  // Show success message
  const msg = document.getElementById('successMsg');
  msg.classList.add('show');
  setTimeout(() => msg.classList.remove('show'), 3000);

  console.log('✅ Attendance saved:', attendanceData);
}

// ✅ Run when page loads
document.addEventListener("DOMContentLoaded", initAttendancePage);
