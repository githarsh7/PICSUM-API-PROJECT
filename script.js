const gallery = document.getElementById("gallery");
const button = document.getElementById("fetch-btn");

// Load images on button click
button.addEventListener("click", loadImages);

// Load once on page start
window.addEventListener("load", loadImages);

function loadImages() {
  gallery.innerHTML = "";

  const totalImages = 6;

  for (let i = 0; i < totalImages; i++) {
    const img = document.createElement("img");

    const randomId = Math.floor(Math.random() * 1000);
    img.src = `https://picsum.photos/300/300?random=${randomId}`;

    // Fade-in effect
    img.onload = () => {
      img.style.opacity = "1";
    };

    img.onerror = () => {
      img.src = "https://via.placeholder.com/300?text=Error";
      img.style.opacity = "1";
    };

    gallery.appendChild(img);
  }
}
