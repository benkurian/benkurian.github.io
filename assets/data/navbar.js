var navbar = `
    <div class="container-fluid">
        <a class="navbar-brand" href="/index.html"><img width="150" src="/assets/images/original/index/logo-wide-black.svg" alt="Logo"></a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div class="navbar-nav">
            <a class="nav-link" href="/index.html">Home</a>
            <a class="nav-link" href="#about">About</a>
            <a class="nav-link" href="/music.html">Music</a>
            <a class="nav-link" href="/sheetmusic.html">Sheet Music</a>
            <a class="nav-link" href="/videos.html">Videos</a>
            <div class="dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
                Projects
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="/visionzero.html">The Road to Vision Zero</a>    
                <a class="dropdown-item" href="/bts.html">Breaking the Silence</a>
                <!-- <a class="dropdown-item" href="/lls.html">Leukemia & Lymphoma Society</a> -->
            </div>
            </div>
            <!-- <a class="nav-link" href="/mailinglist.html">Mailing List</a> -->
            <a class="nav-link" href="/assets/resume.pdf">Resume</a>
        </div>
        </div>
    </div>
`;

// Update the navbar container's innerHTML
var navbarContainer = document.getElementById("navbarContainer");
navbarContainer.innerHTML = navbar;

// Set the active link based on the current URL
var currentPath = window.location.pathname;
var navLinks = navbarContainer.querySelectorAll(".nav-link");
navLinks.forEach(link => {
    if (link.getAttribute("href") === currentPath) {
    link.classList.add("active");
    link.setAttribute("aria-current", "page");
    } else {
    link.classList.remove("active");
    link.removeAttribute("aria-current");
    }
});

document.getElementById("navbarContainer") = navbar;