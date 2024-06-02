// Array containing existing video information
var videos = [
  {
    title: "Aquaponics Video",
    description: "First-prize winner of World of 7 Billion 2022.",
    img: "aquaponics.webp",
    linkText: "Watch on <i class='bi bi-youtube'></i> YouTube",
    linkHref: "https://youtu.be/zsHRN33V4IA",
    dateAdded: new Date("May 9, 2022"),
  },
  {
    title: "Losing A Generation",
    description: "First-prize winner of C-SPAN StudentCam 2023.",
    img: "lag.webp",
    linkText: "Watch on <i class='bi bi-youtube'></i> YouTube",
    linkHref: "https://youtu.be/-rcz3fX9laQ",
    dateAdded: new Date("March 15, 2023"),
  },
  {
    title: "E-Waste Video",
    description: "Second-prize winner of World of 8 Billion 2023.",
    img: "ewaste.webp",
    linkText: "Watch on <i class='bi bi-youtube'></i> YouTube",
    linkHref: "https://youtu.be/d1BNiJjgWQ8",
    dateAdded: new Date("May 8, 2023"),
  },
  {
    title: "COMA Cricket Tourney",
    description: "A 1-min commercial I made for COMA's Cricket Tournament.",
    img: "coma.webp",
    linkText: "Watch on <i class='bi bi-youtube'></i> YouTube",
    linkHref: "https://youtu.be/FI9LKZP8Ppc",
    dateAdded: new Date("July 15, 2023"),
  },
  {
    title: "Who Do I Want to Be?",
    description: "Second-prize winner of C-SPAN StudentCam 2024.",
    img: "wdiwtb.webp",
    linkText: "Watch on <i class='bi bi-youtube'></i> YouTube",
    linkHref: "https://youtu.be/ju_pT2KA4v0",
    dateAdded: new Date("March 13, 2024"),
  },
  {
    title: "Invasive Species Video",
    description: "Second-prize winner of World of 8 Billion 2024.",
    img: "invasive.webp",
    linkText: "Watch on <i class='bi bi-youtube'></i> YouTube",
    linkHref: "https://youtu.be/63WfRw47kys",
    dateAdded: new Date("May 21, 2024"),
  },
];

// Sort the videos array based on dateAdded (from newest to oldest)
videos.sort(function(a, b) {
  return b.dateAdded - a.dateAdded;
});

// String to store HTML for displaying video cards
var cardContainerHTML = "";

// Construct HTML for each card using forEach loop
videos.forEach(function(item) {
  cardContainerHTML += `
    <div class='card m-3 shadow animate__animated animate__fadeIn' style='width: 18rem; height: 33rem;'>
      <img oncontextmenu="return false;" loading="lazy" src='/assets/images/compressed/videos/${item.img}' class='mt-3 rounded w-100 h-100' alt='${item.title}' style='object-fit: cover;'>
      <div class='card-body pb-0'>
        <h5 class='card-title'>${item.title}</h5>
        <p class='card-text'>${item.description}</p>
        <a href='${item.linkHref}' class='btn btn-dark' target='_blank' rel='noopener noreferrer'>
          ${item.linkText}
        </a>
        <hr>
        <p class='text-secondary'>${item.dateAdded.getMonth() + 1}/${item.dateAdded.getDate()}/${item.dateAdded.getFullYear()}</p>
      </div>
    </div>
  `;
});

// Add the constructed HTML to the card container in the document
document.getElementById("cardContainer").innerHTML = cardContainerHTML;