
// Simple booking form script
const bookBtn = document.querySelector('.booking-form button');

bookBtn.addEventListener('click', () => {
  const name = document.querySelector('.booking-form input[type="text"]').value.trim();
  const dateTime = document.querySelector('.booking-form input[type="datetime-local"]').value;
  const treatment = document.querySelector('.booking-form select').value;

  if (!name || !dateTime || treatment === "Treatment Type") {
    alert('Please fill out all fields.');
    return;
  }

  alert(`Thank you, ${name}! Your ${treatment} appointment is booked for ${dateTime}.`);
});

document.addEventListener("DOMContentLoaded", () => {
  const playIcons = document.querySelectorAll(".play-icon");
  const modal = document.getElementById("videoModal");
  const videoFrame = document.getElementById("videoFrame");
  const closeBtn = document.querySelector(".close");

  // Replace with your actual video URLs:
  const videoURLs = [
    "https://www.youtube.com/embed/jbtdckE7ca8",
    "https://www.youtube.com/embed/hPerxgy08u8",
    "https://www.youtube.com/embed/UPDQaQgHH0c",
  ];

  playIcons.forEach((icon, index) => {
    icon.addEventListener("click", () => {
      videoFrame.src = videoURLs[index];
      modal.style.display = "flex";
    });
  });

  closeBtn.addEventListener("click", () => {
    modal.style.display = "none";
    videoFrame.src = "";
  });

  window.addEventListener("click", (e) => {
    if (e.target === modal) {
      modal.style.display = "none";
      videoFrame.src = "";
    }
  });
});

document.addEventListener("DOMContentLoaded", () => {
  // Read More Toggle
  const readMoreBtn = document.querySelector(".read-more-btn");
  const aboutContent = document.querySelector(".about-content");

  if (readMoreBtn) {
    readMoreBtn.addEventListener("click", (e) => {
      e.preventDefault();
      aboutContent.classList.toggle("expanded");
      if (aboutContent.classList.contains("expanded")) {
        readMoreBtn.textContent = "Read Less";
      } else {
        readMoreBtn.textContent = "Read More";
      }
    });
  }

  // Hover overlays for Why Choose Us (Optional fade effect)
  const whyItems = document.querySelectorAll(".why-item .overlay");

  whyItems.forEach((overlay) => {
    const parent = overlay.parentElement;

    parent.addEventListener("mouseenter", () => {
      overlay.style.opacity = "1";
    });

    parent.addEventListener("mouseleave", () => {
      overlay.style.opacity = "0";
    });

    // Initially hide overlay if needed
    overlay.style.transition = "opacity 0.3s ease";
    overlay.style.opacity = "0";
  });
});
let scrollContainer = document.querySelector(".gallery");
let backbtn = document.getElementById("backbtn");
let nextbtn = document.getElementById("nextbtn");

scrollContainer.addEventListener("wheel", (evt) => {
  evt.preventDefault();
  scrollContainer.scrollLeft += evt.deltaY;
  scrollContainer.style.scrollBehavior = "auto";
});

nextbtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft += 900;
});

backbtn.addEventListener("click", () => {
  scrollContainer.style.scrollBehavior = "smooth";
  scrollContainer.scrollLeft -= 900;
});

function toggleMenu() {
  document.getElementById("nav").classList.toggle("active");
  document.getElementById("header-right").classList.toggle("active");
}

document.querySelectorAll('a.nav-link[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent default jump

    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

function sendToWhatsApp() {
  const name = document.getElementById("name").value.trim();
  const date = document.getElementById("datetime").value.trim();
  const treatment = document.getElementById("treatment").value;

  if (!name || !date || !treatment) {
    alert("Please fill all fields before booking.");
    return;
  }

  const message = `New Appointment Booking:\nName: ${name}\nTreatment: ${treatment}\nDate & Time: ${date}`;
  // const doctorNumber = "917016845273"; 
  const url = `https://wa.me/${917016845273}?text=${encodeURIComponent(message)}`;

  window.open(url, "_blank");
}

document.querySelector("form").addEventListener("submit", function (e) {
  e.preventDefault();

  // Get trimmed form values
  const firstName = document.querySelector('input[name="firstName"]').value.trim();
  const lastName = document.querySelector('input[name="lastName"]').value.trim();
  const email = document.querySelector('input[name="email"]').value.trim();
  const phone = document.querySelector('input[name="phoneNumber"]').value.trim();
  const message = document.querySelector('textarea[name="message"]').value.trim();

  // Validation (optional)
  if (!firstName || !lastName || !email || !phone) {
    alert("Please fill all required fields.");
    return;
  }

  // Doctor WhatsApp number
  const doctorWhatsAppNumber = "917016845273"; // correct format: country code + number

  // Construct message
  const text =
    "*Appointment Request*\n" +
    "Name: " + firstName + " " + lastName + "\n" +
    "Email: " + email + "\n" +
    "Phone: " + phone + "\n" +
    "Message: " + (message || "N/A");
  // WhatsApp link
  const url = `https://wa.me/${doctorWhatsAppNumber}?text=${encodeURIComponent(text)}`;

  // Open WhatsApp in new tab
  window.open(url, '_blank');
});