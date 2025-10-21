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
loadHTML("header", "partials/header.html");
loadHTML("sidebar", "partials/sidebar.html");
loadHTML("footer", "partials/footer.html");

// Load page content when clicking links in sidebar
function loadPage(page) {
  fetch(`pages/${page}.html`)
    .then(res => res.text())
    .then(html => {
      const container = document.getElementById("main-content");
      container.innerHTML = html;
 if (page === "attendance") {
        const script = document.createElement("script");
        script.src = "js/attendance.js";
        document.body.appendChild(script);
      }
    })
    .catch(() => {
      document.getElementById("main-content").innerHTML = "<h4>Page not found.</h4>";
    });
}
  


// Default cards for dashboard
const container = document.getElementById("cardContainer");
if (container) {
  const cards = [
    { title: "Mastering UI/UX Design for Impactful Solutions",tag: "UI/UX", status: "Not Urgent", progress: "50%", img: "/images/img1.jpg" },
    { title: "Mastering UI Design for Impactful Experiences", tag: "Fundamental", status: "Not Urgent", progress: "50%", img: "/images/img2.jpg" },
    { title: "Where Innovation Meets Design", tag: "Design", status: "Not Urgent", progress: "50%", img: "/images/img-3.jpg" }
  ];

  cards.forEach(card => {
    container.innerHTML += `
      <div class="col-md-4">
        <div class="card-custom">
          <img src="${card.img}" class="img-fluid mb-2" />
          <h6>${card.title} </h6>
          <p class="text-muted">${card.tag} · ${card.status}</p>
          <div>✅ ${card.progress} Completed</div>
              <a href="https://getbootstrap.com/docs/5.3/components/card/#about" class="btn btn-primary">Go somewhere</a>

        </div>
      </div>
    `;
  });
}
