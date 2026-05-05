const gallery = document.getElementById("gallery");
const button = document.getElementById("fetch-btn");

button.addEventListener("click", loadImages);
window.addEventListener("load", loadImages);

function loadImages() {
  gallery.innerHTML = "";

  for (let i = 0; i < 5; i++) {
    const img = document.createElement("img");

    const randomId = Math.floor(Math.random() * 1000);
    img.src = `https://picsum.photos/300/300?random=${randomId}`;

    gallery.appendChild(img);
  }
}
