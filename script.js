const heartsContainer = document.querySelector(".hearts");

function createHeart() {
  const heart = document.createElement("span");
  heart.className = "heart";

  const size = Math.floor(Math.random() * 14) + 10;
  const left = Math.random() * 100;
  const duration = Math.random() * 12 + 12;
  const delay = Math.random() * 8;
  const opacity = Math.random() * 0.35 + 0.25;

  heart.style.width = `${size}px`;
  heart.style.height = `${size}px`;
  heart.style.left = `${left}%`;
  heart.style.animationDuration = `${duration}s`;
  heart.style.animationDelay = `${delay}s`;
  heart.style.opacity = opacity.toFixed(2);

  heartsContainer.appendChild(heart);
}

const HEART_COUNT = 22;
for (let i = 0; i < HEART_COUNT; i += 1) {
  createHeart();
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

document.querySelectorAll(".section").forEach((section) => {
  observer.observe(section);
});
