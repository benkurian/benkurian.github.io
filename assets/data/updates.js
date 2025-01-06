// Array containing information about updates
var updates = [
    {
      title: "Who Do I Want to Be?",
      src: "https://www.youtube.com/embed/ju_pT2KA4v0",
      description: "<i>Who Do I Want to Be?</i>, the second prize winner in C-SPAN's StudentCam 2024.",
      date: new Date("March 15, 2024")
    },
    {
      title: "Interview with Spectrum News",
      src: "https://www.youtube.com/embed/45F2b03aFZw",
      description: "My interview with Spectrum News about my documentary.",
      date: new Date("April 13, 2024")
    },
    {
      title: "Interview with 10TV",
      src: "https://www.10tv.com/embeds/video/530-d2156794-9c8b-40df-a21e-e45a40a19686/iframe",
      description: "My interview with 10TV about my documentary.",
      date: new Date("April 17, 2024")
    },
    {
      title: "Invasive Species Video",
      src: "https://www.youtube.com/embed/63WfRw47kys?si=uE6MAYzjskFyek4G",
      description: "The second prize winner in the World of 8 Billion 2024 Video Contest.",
      date: new Date("May 21, 2024")
    },
    {
      title: "TEDxOlentangy Liberty Youth",
      src: "/assets/images/compressed/index/tedx.webp",
      description: "I'm fortunate to have been selected as one of the speakers for our school's official TEDx event! Learn more <a href='https://www.ted.com/tedx/events/59648'>here</a>.",
      date: new Date("December 22, 2024")
    },
  ];
  
  // Sort the updates array based on date (from newest to oldest)
  updates.sort(function(a, b) {
    return a.date - b.date;
  });
  
  // Get the latest update from the array
  var latestUpdate = updates[updates.length - 1];
  
  // String to store HTML for displaying update content
  var updateContainerHTML = `
  <div class="col-sm-6 p-lg-5 my-5 animate__animated animate__fadeInDown">
    <h1 class="animate__animated animate__fadeInDown">Latest Update</h1>   
    <p class="lead">${latestUpdate.description}</p>
    <p class="text-secondary">${latestUpdate.date.getMonth() + 1}/${latestUpdate.date.getDate()}/${latestUpdate.date.getFullYear()}</p>
    <br>

  </div>
  <div class="col-sm-6">
    <img loading="lazy" class="rounded shadow animate__animated animate__fadeIn" src="${latestUpdate.src}" width="100%">
  </div>
  `;
  
  // Add the constructed HTML to the update container in the document
  document.getElementById("updateContainer").innerHTML = updateContainerHTML;  

  // <p>To get notified whenever I release something, click <a href="/mailinglist.html">here</a> to join my mailing list.</p>

  // <iframe loading="lazy" class="rounded shadow animate__animated animate__fadeIn" src="${latestUpdate.src}" title="${latestUpdate.title}" width="100%" height="100%" allowfullscreen></iframe>