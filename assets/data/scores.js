// Array containing information about track/album information
var scores = [
{
  title: "Sinking",
  img: "sinking.webp",
  description: "My first piano composition.",
  yearAdded: new Date("2022"),
},
{
  title: "Holy, Holy, Holy!",
  img: "holy.webp",
  description: "A piano arrangement of the hymn.",
  yearAdded: new Date("2022"),
},
{
  title: "Raaja Raaja Chozan",
  img: "raaja.webp",
  description: "Arranged for Vindhya 2023.",
  yearAdded: new Date("2023"),
},
{
  title: "Rondo in G Major",
  img: "rondo.webp",
  description: "A short piece from the summer.",
  yearAdded: new Date("2023"),
},
{
  title: "Separate Ways",
  img: "rondo.webp",
  description: "For LMS Fall Concert 2023.",
  yearAdded: new Date("2023"),
},
{
  title: "The Heist",
  img: "heist.webp",
  description: "Won Honorable Mention in Guild 2024.",
  yearAdded: new Date("2024"),
},
{
  title: "Rio",
  img: "rio.webp",
  description: "For LMS Winter Concert 2024.",
  yearAdded: new Date("2024"),
},
{
  title: "Eleanor Rigby",
  img: "eleanorrigby.webp",
  description: "For LMS Spring Concert 2024.",
  yearAdded: new Date("2024"),
},
{
  title: "Blessed Assurance",
  img: "blessedassurance.webp",
  description: "Lead sheet for piano.",
  yearAdded: new Date("2024"),
},
{
  title: "The Turn of Winter",
  img: "turnofwinter.webp",
  description: "Violin and cello duet.",
  yearAdded: new Date("2024"),
},
];

// Sort the scores array based on dateAdded (from newest to oldest)
scores.sort(function(a, b) {
return b.yearAdded - a.yearAdded;
});

// String to store HTML for displaying score cards
var cardContainerHTML = "";

// Construct HTML for each card using forEach loop
scores.forEach(function(score) {
cardContainerHTML += `
<div class='card m-3 shadow animate__animated animate__fadeIn' style='width: 18rem; height: 33rem;'>
  <img oncontextmenu="return false;" loading="lazy" src='/assets/images/compressed/sheetmusic/${score.img}' class='mt-3 rounded w-100 h-100' alt='${score.title}' style='object-fit: cover;'>
  <div class='card-body pb-0'>
    <h5 class='card-title'>${score.title}</h5>
    <p class='card-text'>${score.description}</p>
    <hr>
    <p class='text-secondary'>${score.yearAdded.getFullYear() + 1}</p>
  </div>
</div>
`;
});

// Add the constructed HTML to the card container in the document
document.getElementById("cardContainer").innerHTML = cardContainerHTML;