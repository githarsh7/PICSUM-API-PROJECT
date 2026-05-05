const gallery = document.getElementById("gallery");
const button = document.querySelector("button");

// load images when button clicked
button.addEventListener("click", loadImages);

// optional: load once on page start
window.addEventListener("load", loadImages);

function loadImages() {
  gallery.innerHTML = ""; // clear old images

  const totalImages = 4;

  for (let i = 0; i < totalImages; i++) {
    const img = document.createElement("img");

    // show loading effect
    img.style.opacity = "0";

    // unique image every time (prevents caching issue)
    const randomId = Math.floor(Math.random() * 1000);
    img.src = `https://picsum.photos/300/300?random=${randomId}`;

    // when image loads → fade in
    img.onload = () => {
      img.style.transition = "0.5s";
      img.style.opacity = "1";
    };

    // if image fails (rare but safe handling)
    img.onerror = () => {
      img.src = "https://via.placeholder.com/300?text=Image+Error";
    };

    gallery.appendChild(img);
  }
}