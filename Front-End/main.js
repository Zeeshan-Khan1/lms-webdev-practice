function loadHTML(id, file, callback) {
  fetch(file)
    .then(response => response.text())
    .then(data => {
      document.getElementById(id).innerHTML = data;
      if (callback) callback(); // ✅ Only runs if callback is passed
    })
    .catch(err => console.error('Error loading', file, err));
}
// Load layout sections
loadHTML("header", "header.html");
loadHTML("sidebar", "sidebar.html");
loadHTML("footer", "footer.html");

// Set current date
document.addEventListener('DOMContentLoaded', function() {
  const dateElement = document.getElementById('currentDate');
  if (dateElement) {
    const today = new Date().toLocaleDateString('en-US', { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    dateElement.textContent = `Today: ${today}`;
  }
});

// Load page content when clicking links in sidebar
function loadPage(page) {
  // Navigate to the page directly for better compatibility
  window.location.href = `${page}.html`;
}
  


// Teacher Dashboard Cards
const container = document.getElementById("cardContainer");
if (container) {
  const cards = [
    { 
      title: "Web Technologies", 
      tag: "CS-301", 
      status: "Active", 
      progress: "75%", 
      img: "img1.jpg",
      students: "45 Students",
      nextClass: "Tomorrow 10:00 AM"
    },
    { 
      title: "Database Systems", 
      tag: "CS-302", 
      status: "Active", 
      progress: "60%", 
      img: "img2.jpg",
      students: "38 Students",
      nextClass: "Today 2:00 PM"
    },
    { 
      title: "Operating Systems", 
      tag: "CS-303", 
      status: "Upcoming", 
      progress: "25%", 
      img: "img-3.jpg",
      students: "42 Students",
      nextClass: "Monday 9:00 AM"
    }
  ];

  cards.forEach(card => {
    container.innerHTML += `
      <div class="col-md-4 mb-4">
        <div class="card-custom">
          <img src="${card.img}" class="img-fluid mb-2" style="height: 120px; object-fit: cover;" />
          <h6>${card.title}</h6>
          <p class="text-muted">${card.tag} · <span class="badge bg-${card.status === 'Active' ? 'success' : 'warning'}">${card.status}</span></p>
          <div class="mb-2">
            <small class="text-muted">📚 ${card.students}</small><br>
            <small class="text-muted">⏰ ${card.nextClass}</small>
          </div>
          <div class="progress mb-2" style="height: 6px;">
            <div class="progress-bar" role="progressbar" style="width: ${card.progress}"></div>
          </div>
          <div class="d-flex gap-2">
            <a href="courses.html" class="btn btn-primary btn-sm">Manage Course</a>
          </div>
        </div>
      </div>
    `;
  });
}
