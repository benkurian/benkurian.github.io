var music = [{
    title: "Christmas Favorites on Piano and Violin",
    description: "The first album I created on December 23, 2023.",
    img: "/assets/images/music/christmasfavorites.jpeg",
    linkText: "Listen on <i class='bi bi-spotify'></i> Spotify",
    linkHref: "https://open.spotify.com/album/37wLcBz62t7JhlQjcCcqvp?si=opEh7L2bSZaMEmgJwvzGPQ",
    dateAdded: "December 23, 2023",
 },
 {
    title: "Who Do I Want to Be? Soundtrack",
    description: "The music to my StudentCam 2024 documentary.",
    img: "/assets/images/music/wdiwtb.jpeg",
    linkText: "Listen on <i class='bi bi-youtube'></i> YouTube",
    linkHref: "https://youtu.be/FUbPylyq6J0",
    dateAdded: "March 26, 2024",
 },
];

var cardContainerHTML = "";

for (var i = music.length - 1; i >= 0; i--) {
 cardContainerHTML += `
    <div class='card m-3 shadow animate__animated animate__fadeIn' style='width: 18rem; height: 33rem;'>
      <img oncontextmenu="return false;" src='${music[i].img}' class='mt-3 rounded w-100 h-100' alt='${music[i].title}' style='object-fit: cover;'>
      <div class='card-body pb-0'>
        <h5 class='card-title'>${music[i].title}</h5>
        <p class='card-text'>${music[i].description}</p>
        <a href='${music[i].linkHref}' class='btn btn-dark' target='_blank' rel='noopener noreferrer'>
          ${music[i].linkText}
        </a>
        <hr>
        <p class='text-secondary'>${music[i].dateAdded}</p>
      </div>
    </div>
  `;
}
document.getElementById("cardContainer").innerHTML = cardContainerHTML;