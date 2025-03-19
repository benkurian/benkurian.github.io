// Array containing information about updates
var updates = [
  {
    title: "Who Do I Want to Be?",
    src: `<iframe loading="lazy" class="rounded shadow animate__animated animate__fadeIn" src="https://www.youtube.com/embed/ju_pT2KA4v0" title="Who Do I Want to Be?" width="100%" height="100%" allowfullscreen></iframe>`,
    description: `<i>Who Do I Want to Be?</i>, the second prize winner in C-SPAN's StudentCam 2024.`,
    date: new Date("March 15, 2024")
  },
  {
    title: "Interview with Spectrum News",
    src: `<iframe loading="lazy" class="rounded shadow animate__animated animate__fadeIn" src="https://www.youtube.com/embed/45F2b03aFZw" title="Interview with Spectrum News" width="100%" height="100%" allowfullscreen></iframe>`,
    description: `My interview with Spectrum News about my documentary.`,
    date: new Date("April 13, 2024")
  },
  {
    title: "Interview with 10TV",
    src: `<iframe loading="lazy" class="rounded shadow animate__animated animate__fadeIn" src="https://www.10tv.com/embeds/video/530-d2156794-9c8b-40df-a21e-e45a40a19686/iframe" title="Interview with 10TV" width="100%" height="100%" allowfullscreen></iframe>`,
    description: `My interview with 10TV about my documentary.`,
    date: new Date("April 17, 2024")
  },
  {
    title: "Invasive Species Video",
    src: `<iframe loading="lazy" class="rounded shadow animate__animated animate__fadeIn" src="https://www.youtube.com/embed/63WfRw47kys?si=uE6MAYzjskFyek4G" title="Invasive Species Video" width="100%" height="100%" allowfullscreen></iframe>`,
    description: `The second prize winner in the World of 8 Billion 2024 Video Contest.`,
    date: new Date("May 21, 2024")
  },
  {
    title: "TEDxOlentangy Liberty Youth",
    src: `<img loading="lazy" class="rounded shadow animate__animated animate__fadeIn" src="/assets/images/compressed/index/tedx.webp" width="100%">`,
    description: `I'm fortunate to have been selected as one of the speakers for our school's official TEDx event! Learn more <a href="https://www.ted.com/tedx/events/59648">here</a>.`,
    date: new Date("December 22, 2024")
  },
  {
    title: "All-State Orchestra Vlog",
    src: `<iframe loading="lazy" class="rounded shadow animate__animated animate__fadeIn" src="https://www.youtube.com/embed/uktFtO1onPI?si=vcqXv7jeOshkh-Ek" title="All-State Orchestra Vlog" width="100%" height="100%" allowfullscreen></iframe>`,
    description: `Watch the OMEA All-State Orchestra 2025 Vlog!`,
    date: new Date("February 16, 2025")
  },
  {
    title: "Fan Favorite Voting NOW!",
    src: `<a href="/vote.html"><img loading="lazy" class="rounded shadow animate__animated animate__fadeIn" src="/assets/images/compressed/visionzero/visionzero-bg2.webp" width="100%"></a>`,
    description: `My winning documentary is top 12 in the nation for C-SPAN's StudentCam competition!<br>Voting runs from March 2 &ndash; to March 9.<br><br><a href="/vote.html">Vote</a> for me to win, every day, on every device!`,
    date: new Date("March 1, 2025")
  },
  {
    title: "1st Prize Winner in C-SPAN StudentCam!",
    src: `<a href="https://www.studentcam.org/studentcam-2025-prize-winners"><img loading="lazy" class="rounded shadow animate__animated animate__fadeIn" src="/assets/images/compressed/visionzero/visionzero-bg2.webp" width="100%"></a>`,
    description: `<i>The Road to Vision Zero</i> has won 1st Prize in the High School Central Division! Learn more <a href="https://www.studentcam.org/studentcam-2025-prize-winners/">here</a>.`,
    date: new Date("March 11, 2025")
  },
  {
    title: "TEDx Talk",
    src: `<img loading="lazy" class="rounded shadow animate__animated animate__fadeIn" src="/assets/images/compressed/miscellaneous/ted-talk.webp" width="100%">`,
    description: `Just delivered my talk to TEDxOlentangy Liberty Youth! A recording should be up in a few months on TEDx's YT channel.`,
    date: new Date("March 18, 2025")
  },
];

// Sort the updates array based on date (from newest to oldest)
updates.sort(function(a, b) {
  return b.date - a.date;
});

// Initialize the current index to the latest update
var currentIndex = 0;

// Function to go to the previous update
function previous() {
  currentIndex = (currentIndex - 1 + updates.length) % updates.length;
  update();
}

// Function to go to the next update
function next() {
  currentIndex = (currentIndex + 1) % updates.length;
  update();
}

// Function to display the current update
function update() {
  var currentUpdate = updates[currentIndex];
  var updateContainerHTML = `
    <div class="col-sm-6 p-lg-5 my-5 animate__animated animate__fadeInDown">
      <h1 class="animate__animated animate__fadeInDown">Latest Update</h1>   
      <p class="lead">${currentUpdate.description}</p>
      <p class="text-secondary">${currentUpdate.date.getMonth() + 1}/${currentUpdate.date.getDate()}/${currentUpdate.date.getFullYear()}</p>
      <br>
      <nav aria-label="Page navigation example">
        <ul class="pagination">
          <li class="page-item">
            <a class="page-link" onclick="previous();" aria-label="Previous">
              <span aria-hidden="true">&laquo;</span>
              <span class="sr-only">Previous</span>
            </a>
          </li>
          <li class="page-item">
            <a class="page-link" onclick="next();" aria-label="Next">
              <span aria-hidden="true">&raquo;</span>
              <span class="sr-only">Next</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div class="col-sm-6">
      ${currentUpdate.src}
    </div>
  `;
  document.getElementById("updateContainer").innerHTML = updateContainerHTML;  
}

// Display the initial update
update();