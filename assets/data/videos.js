// Array containing existing video information
var videos = [
  {
    title: "Aquaponics Video",
    description: "First-prize winner of World of 7 Billion 2022.",
    img: "/assets/images/videos/aquaponics.jpeg",
    linkText: "Watch on <i class='bi bi-youtube'></i> YouTube",
    linkHref: "https://youtu.be/zsHRN33V4IA",
    dateAdded: "May 9, 2022",
  },
  {
    title: "Losing A Generation",
    description: "First-prize winner of C-SPAN StudentCam 2023.",
    img: "/assets/images/videos/lag.jpeg",
    linkText: "Watch on <i class='bi bi-youtube'></i> YouTube",
    linkHref: "https://youtu.be/-rcz3fX9laQ",
    dateAdded: "March 15, 2023",
  },
  {
    title: "E-Waste Video",
    description: "Second-prize winner of World of 8 Billion 2023.",
    img: "/assets/images/videos/ewaste.jpeg",
    linkText: "Watch on <i class='bi bi-youtube'></i> YouTube",
    linkHref: "https://youtu.be/d1BNiJjgWQ8",
    dateAdded: "May 8, 2023",
  },
  {
    title: "COMA Cricket Tourney",
    description: "A 1-min commercial I made for COMA's Cricket Tournament.",
    img: "/assets/images/videos/coma.jpeg",
    linkText: "Watch on <i class='bi bi-youtube'></i> YouTube",
    linkHref: "https://youtu.be/FI9LKZP8Ppc",
    dateAdded: "July 15, 2023",
  },
  {
    title: "Who Do I Want to Be?",
    description: "Second-prize winner of C-SPAN StudentCam 2024.",
    img: "/assets/images/videos/wdiwtb.jpeg",
    linkText: "Watch on <i class='bi bi-youtube'></i> YouTube",
    linkHref: "https://youtu.be/ju_pT2KA4v0",
    dateAdded: "March 13, 2024",
  },
];

// String to store HTML for displaying video cards
var cardContainerHTML = "";

// Loop through each video in reverse order and construct HTML for each video card
for (var i = videos.length - 1; i >= 0; i--) {
  cardContainerHTML += `
    <div class='card m-3 shadow animate__animated animate__fadeIn' style='width: 18rem; height: 33rem;'>
      <img oncontextmenu="return false;" src='${videos[i].img}' class='mt-3 rounded w-100 h-100' alt='${videos[i].title}' style='object-fit: cover;'>
      <div class='card-body pb-0'>
        <h5 class='card-title'>${videos[i].title}</h5>
        <p class='card-text'>${videos[i].description}</p>
        <a href='${videos[i].linkHref}' class='btn btn-dark' target='_blank' rel='noopener noreferrer'>
          ${videos[i].linkText}
        </a>
        <hr>
        <p class='text-secondary'>${videos[i].dateAdded}</p>
      </div>
    </div>
  `;
}

// Add the constructed HTML to the card container in the document
document.getElementById("cardContainer").innerHTML = cardContainerHTML;