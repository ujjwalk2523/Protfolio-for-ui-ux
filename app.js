const video1 = document.getElementById('projectVideo1');
const video2 = document.getElementById('projectVideo2');
const video3 = document.getElementById('projectVideo3');

// Sidebar elements //
const sideBar = document.querySelector('.sidebar');
const menu = document.querySelector('.menu-icon');
const closeIcon = document.querySelector('.close-icon')


const hoverSign = document.querySelector('.hover-sign');

const videoList =[video1, video2, video3];

videoList.forEach (function(video){
    video.addEventListener("mouseover", function(){
        video.play()
        hoverSign.classList.add("active")
    })
    video.addEventListener("mouseout", function(){
    video.pause();
    hoverSign.classList.remove("active")
})
})

// Sidebar elements //
menu.addEventListener("click", function(){
    sideBar.classList.remove("close-sidebar")
    sideBar.classList.add("open-sidebar")
});

closeIcon.addEventListener("click", function(){
    sideBar.classList.remove("open-sidebar");
    sideBar.classList.add("close-sidebar");
    
})
// Contact Form Submission
const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const formData = {
    fullName: contactForm.fullName.value,
    email: contactForm.email.value,
    message: contactForm.message.value,
  };

  try {
   const res = await fetch("/api/contact", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(formData),
});


    const data = await res.json();
    if (data.success) {
      alert("✅ Message sent successfully!");
      contactForm.reset();
    } else {
      alert("❌ Failed to send message.");
    }
  } catch (err) {
    alert("⚠️ Error: " + err.message);
  }
});
// ====================
// Project Website Links
// ====================

const projectLinks = {
  "project1-btn": "https://www.figma.com/proto/KrKuAx7b4E96EQgFWgDwtH/Untitled?page-id=0%3A1&node-id=1-1907&starting-point-node-id=1%3A1907&t=CrohoQ6rXzdZakMz-1",  // Replace with your real link
  "project2-btn": "https://www.figma.com/proto/ibukJ2XhGjGIrWv6JZakDE/Gaming-website-ujjwal?page-id=0%3A1&node-id=1-3&viewport=522%2C564%2C0.12&t=FXm1M2EjXfXY3XlX-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=1%3A736",  // Replace with your real link
  "project3-btn": "https://www.figma.com/proto/BvVvT3cASLuTLLzTTI5mLl/paws?page-id=0%3A1&node-id=1-11&p=f&viewport=1118%2C949%2C0.78&t=yq3Q4IxszmfhAbKH-1&scaling=min-zoom&content-scaling=fixed"   // Replace with your real link
};

Object.keys(projectLinks).forEach(id => {
  const btn = document.getElementById(id);
  if (btn) {
    btn.addEventListener("click", () => {
      window.open(projectLinks[id], "_blank"); // Opens link in new tab
    });
  }
});
