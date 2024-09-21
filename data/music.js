// Array containing information about track/album information
var music = [{
  title: "Christmas Favorites on Piano and Violin",
  description: "The first album I created on December 23, 2023.",
  img: "christmasfavorites.webp",
  linkText: "Listen on <i class='bi bi-spotify'></i> Spotify",
  linkHref: "https://open.spotify.com/album/37wLcBz62t7JhlQjcCcqvp?si=opEh7L2bSZaMEmgJwvzGPQ",
  dateAdded: new Date("December 23, 2023"),
},
{
  title: "Who Do I Want to Be? Soundtrack",
  description: "The music to my StudentCam 2024 documentary.",
  img: "wdiwtb.webp",
  linkText: "Listen on <i class='bi bi-spotify'></i> Spotify",
  linkHref: "https://open.spotify.com/album/6WOxGtJ2cwFJIXdNYZuXjK?si=zcsDU0TsR0S0fR3IJs-ZGQ",
  dateAdded: new Date("March 2, 2024"),
},
{
  title: "Landscapes<br><br>",
  description: "Coming soon: A collection of my Piano Guild pieces this year.",
  img: "landscapes.webp",
  linkText: "Listen on <i class='bi bi-spotify'></i> Spotify",
  linkHref: "",
  dateAdded: new Date("August 14, 2024"),
}
];

// Sort the music array based on dateAdded (from newest to oldest)
music.sort(function(a, b) {
return b.dateAdded - a.dateAdded;
});

// String to store HTML for displaying music cards
var cardContainerHTML = "";

// Construct HTML for each card using forEach loop
music.forEach(function(item) {
cardContainerHTML += `
<div class='card m-3 shadow animate__animated animate__fadeIn' style='width: 18rem; height: 33rem;'>
  <img oncontextmenu="return false;" loading="lazy" src='/assets/images/compressed/music/${item.img}' class='mt-3 rounded w-100 h-100' alt='${item.title}' style='object-fit: cover;'>
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