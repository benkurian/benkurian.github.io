export const SITE_DATA = {

  hero: {
    date: "Portfolio — 2026",
    name: ["Ben", "Kurian"],
    subtitle: "",
    bgImage: "/images/hero.jpg"
  },

  about: {
    label: "About",
    heading: "I'm Ben Kurian, a sophomore at Olentangy Liberty High School in Columbus, Ohio.",
    paragraphs: [
      //  "My work sits at the intersection of medicine and systems-level thinking: understanding not just how healthcare works, but how the decisions around it get made. That led me to co-found SPAN, a nonpartisan youth healthcare advocacy organization now active in over fifteen states, and to start Project MedBridge, which redirects surplus medical supplies from Central Ohio clinics to low-resource communities abroad.",
      "My work sits at the intersection of medicine and systems-level thinking: understanding not just how healthcare works, but how the decisions around it get made. That led me to co-found SPAN, a nonpartisan youth healthcare advocacy organization now active in over fifteen states.",
      "This very thread runs in most of what I do, be it through documentary filmmaking, public speaking, or civic leadership. I’ve been lucky to have some of this work recognized: four consecutive wins in C-SPAN’s StudentCam competition, recognition from Ohio's Governor and U.S. Senators, and invitations to speak at conferences from Dallas to Philadelphia.",
      "Outside of all that, I’m a multi-instrumentalist and competitive debater. I bike everywhere, collect vinyl, and am always hunting down new Oreo flavors (<em>current favorite: Chocolate Ganache Thins</em>).",
      "Above all, I am a student. I want to study psychiatry, because it feels like the niche where everything I care about converges: systems, people, and the messy space in between."
    ],
    photo: "/images/ben.jpg",
    video: null
  },

  // Resume link in the nav — set to the path of your resume PDF
  resumeUrl: "/resume.pdf",

  sections: [
    {
      id: "projects",
      number: "01",
      title: "Projects",
      layout: "hero-side",
      cards: [
        {
          id: "span",
          label: "National Organization",
          title: "Students for Patient Advocacy Nationwide",
          desc: "Youth-led healthcare advocacy org working across 15+ states and the U.S. Congress.",
          bgImage: "/images/span.jpg",
          modal: {
            label: "National Organization",
            title: "Students for Patient Advocacy Nationwide",
            meta: "Co-Founder & Executive Director",
            content: `
            <p>SPAN (est. 2025) is an organization I co-founded that empowers high school, undergraduate, and medical students to engage directly with state and federal legislation affecting patients. What started as a response to gaps in youth representation in healthcare policy has grown into a national team of over 40 members working across 15+ states and the U.S. Congress.</p>
            <p>We've worked with over 1,500 legislators through letters, cold calls, and testimony: influencing 52 healthcare bills, including stalling Texas House Bill 5294 and helping introduce legislation to mandate AEDs in Alaskan K–12 schools. SPAN has also partnered with Unite America, Stanford's Deliberative Democracy Lab, and Harvard's Health Fluency Project, and reached over 250,000 people across social media.</p>
            <a href='https://spanationwide.org' class='modal-link'>Visit SPAN →</a>
            `
          }
        },
        // {
        //   id: "medbridge",
        //   label: "Central Ohio Initiative",
        //   title: "Project MedBridge",
        //   desc: "Collecting surplus medical supplies from Columbus clinics to facilitate access to care abroad.",
        //   bgImage: "/images/medbridge.jpeg",
        //   modal: {
        //     label: "Central Ohio Initiative · Founder",
        //     title: "Project MedBridge",
        //     meta: "Founder & Team Lead",
        //     content: `
        //     <p>Project MedBridge (est. 2026) is a medical supply redistribution network I founded to address a major issue in our city. U.S. hospitals discard an estimated 2 million pounds of unused, unexpired supplies each year; but unlike Northeast and Southeast Ohio, Central Ohio has no mechanism to redirect any of it.</p>
        //     <p>Our model works in cycles: we collect surplus from local healthcare providers, organize quarterly Boxing Days where student volunteers sort and package materials, and ship everything to healthcare facilities in over 135 countries. Each shipment reaches over 30,000 people.</p>
        //     <p>MedBridge will (<em>hopefully!</em>) be backed by a $7,500 grant from the Carnegie Foundation, and operates in partnership with Ohio HOSA’s statewide chapter and hospital network. Our first-year targets include three Boxing Days, 1,000–3,000 pounds of redirected supplies, and a formal policy recommendation to the Columbus Board of Health on redirecting surplus.</p>
        //     <h4>Carnegie Young Leaders Pitch Video</h4>
        //     <div class='modal-embed'><iframe src="https://www.youtube.com/embed/8lhsXuLN2Fc?si=E_lXhPYCivNCWUhM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
        //     `
        //   }
        // },
                {
          id: "medbridge",
          label: "",
          title: "Coming Soon",
          desc: "",
          bgImage: "/images/medbridge.jpeg",
          modal: {
            label: "",
            title: "",
            meta: "",
            content: ``
          }
        },
        {
          id: "docs",
          label: "Award-Winning Journalism",
          title: "Documentary Filmmaking",
          desc: "Four consecutive wins in C-SPAN's StudentCam competition.",
          bgImage: "/images/documentary.jpeg",
          modal: {
            label: "Award-Winning Journalism",
            title: "Documentary Filmmaking",
            meta: "Director, producer, and composer",
            content: `
            <p>I've directed, produced, and scored films on healthcare, education, and public policy since 2022, earning national recognition in the largest student documentary contest in the country.</p>
            <p>I placed in the <a href='http://studentcam.org'>StudentCam documentary competition</a> four consecutive years, competing against roughly 4,000 entries annually. My films have aired on C-SPAN to a viewership of over 50 million and received more than 30,000 cumulative public votes.</p>
            <ul>
              <li><span class='yr'>2026</span> First Prize + Fan Favorite, <a href='https://youtu.be/OJTwR_BkjLY?si=a7UoUbbLySrIHX5s'><em>A Right to Health</em></a></li>
              <li><span class='yr'>2025</span> First Prize, <a href='https://youtu.be/h1dHoLHaSDc?si=qqFcZydKniJkvcRq'><em>The Road to Vision Zero</em></a></li>
              <li><span class='yr'>2024</span> Second Prize + Fan Favorite, <a href='https://youtu.be/ju_pT2KA4v0?si=0aXuxKS17ee5N0-H'><em>Who Do I Want to Be?</em></a></li>
              <li><span class='yr'>2023</span> First Prize + Fan Favorite, <a href='https://youtu.be/-rcz3fX9laQ?si=kv-Q0aieXBFVnGdG'><em>Losing a Generation</em></a></li>
            </ul>
            <p>My work has involved interviews with senior stakeholders, including public health officials, faculty from Harvard and Yale, and former U.S. Department of Transportation leadership. I've been formally recognized by <a href='https://www.studentcam.org/2023-first-prize-middle-school-losing-a-generation-by-ben-kurian/'>Governor DeWine, U.S. Senator Sherrod Brown</a>, and others, and have been invited to speak at national conferences in Dallas and Philadelphia.</p>
            <h4>Featured: <em>A Right to Health</em> (2026)</h4>
            <div class='modal-embed'><iframe src="https://www.youtube.com/embed/OJTwR_BkjLY?si=9UzZoAUCy47qDBty" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
            `
          }
        }
      ]
    },
    // {
    //   id: "leadership",
    //   number: "02",
    //   title: "Community",
    //   layout: "thirds",
    //   cards: [
    //     {
    //       id: "cma",
    //       label: "Columbus Medical Association",
    //       title: "Youth Advisory Council",
    //       desc: "One of 15 members allocating $25,000 in annual grant funding to youth health organizations.",
    //       bgImage: "",
    //       modal: {
    //         label: "Youth Advisory Council · Member",
    //         title: "Columbus Medical Association Foundation",
    //         meta: "Dec 2025 – Present",
    //         content: "<p>Selected as one of 15 members on the Columbus Medical Association Foundation's Youth Advisory Council. The council assesses community health needs and allocates $25,000 in annual grant funding to youth-focused organizations across Central Ohio.</p><p>In the current cycle, reviewing and funding programs addressing mental health, substance use, bullying, social inequities, and basic needs — including support for AthletesToAid and We Amplify Voices (WAV).</p>"
    //       }
    //     },
    //     {
    //       id: "selac",
    //       label: "Olentangy Schools",
    //       title: "SELAC Representative",
    //       desc: "Advising district administrators on equity, engagement, and student wellbeing policies.",
    //       bgImage: "",
    //       modal: {
    //         label: "Student Advisory Council · Liberty Representative",
    //         title: "SELAC — Student Experience Leadership Advisory Council",
    //         meta: "Oct 2025 – Present · Olentangy Local School District",
    //         content: "<p>Selected to represent Olentangy Liberty High School on OLSD's SELAC program. Collaborating with district administrators and peers to enhance student life, shape district-wide initiatives, and advise on policies improving equity, engagement, and wellbeing.</p><p>Participating in regular meetings with district leaders to identify key challenges and design actionable solutions that strengthen the student experience across Olentangy Schools.</p>"
    //       }
    //     },
    //     {
    //       id: "cyl",
    //       label: "Carnegie Foundation",
    //       title: "Young Leaders Fellow",
    //       desc: "Leading Project Demos — a $7,500-backed civic engagement initiative in Central Ohio.",
    //       bgImage: "",
    //       modal: {
    //         label: "Carnegie Young Leaders · Fellow",
    //         title: "Project Demos",
    //         meta: "Jul 2025 – Present · $7,500 Carnegie Foundation Grant",
    //         content: "<p>Selected as a Carnegie Young Leaders for Civic Preparedness Fellow through the Institute for Citizens & Scholars. Leading Project Demos, a youth-led civic engagement initiative backed by a $7,500 grant from the Carnegie Foundation.</p><p>Part of a year-long program supporting 500 changemakers nationwide. Demos helps high school students in Central Ohio influence municipal governments by organizing voter registration drives, campaigns, and speaker events — building a replicable model for civic engagement across Ohio.</p>"
    //       }
    //     }
    //   ]
    // },
    {
      id: "school",
      number: "03",
      title: "School",
      layout: "thirds",
      cards: [
        {
          id: "debate",
          label: "Lincoln-Douglas & World Schools",
          title: "Speech & Debate",
          desc: "National qualifying performances across Congressional and Lincoln-Douglas formats.",
          bgImage: "/images/debate.jpeg",
          modal: {
            label: "Lincoln-Douglas & World Schools",
            title: "Speech & Debate",
            meta: "Team Captain",
            content: `
              <p>As Captain of our Lincoln-Douglas Debate team, I lead a group of 10 students in two weekly practices, preparing for tournaments every Saturday. Under my leadership, the team achieved remarkable success, including three state and national qualifiers.</p>
            <figure>
            <img src="/images/osdastates.jpeg" loading="lazy"/>
            <figcaption>OSDA State Finals, March 2026</figcaption>
            </figure>
              <h4>Awards</h4>
            <ul>
              <li><span class='yr'>LD</span> 4× OSDA State Finals Bids (2025–2026)</a></li>
              <li><span class='yr'>LD</span> Ranked 6th in state preliminaries (2026)</li>
              <li><span class='yr'>LD</span> First Alternate to the NSDA National Tournament (2026)</li>
              <li><span class='yr'>WS</span> National Qualifier (2026)</li>
            </ul>
            <p>I also represented the Ohio Speech and Debate Association at the <a href='https://conference.ohioschoolboards.org/2026'>Ohio School Boards Association statewide conference</a>, advocating for greater access to Speech and Debate in Ohio high schools, meeting with school board members and administrators across the state.</p>
            <figure>
            <img src="/images/osba.jpg" loading="lazy"/>
            <figcaption>OSBA conference, November 2025</figcaption>
            </figure>
            `
          }
        },
        {
          id: "hosa",
          label: "International Awards",
          title: "HOSA—Future Health Professionals",
          desc: "Chapter VP and State Officer candidate. Top 16 international finish in Biomedical Debate.",
          bgImage: "/images/hosa.jpeg",
          modal: {
            label: "International Awards",
            title: "HOSA—Future Health Professionals",
            meta: "Vice President · State Officer Candidate",
            content: `
              <p>I refounded the Olentangy Liberty High School HOSA chapter, and currently serve as Vice President of Public Relations. I'm also running for a position on the Ohio State Executive Council.</p>
              <p>I lead outreach and communications, growing our chapter membership from 60 to over 100 students. I coordinated speaker events featuring neurosurgeons, psychiatrists, and medical students, and helped guide our chapter to 21+ state placers and 7+ international placers.</p>
              
              <h4>Awards</h4>
              <ul>
                <li><span class='yr'>2025</span> Top 16 globally in Biomedical Debate, ILC (highest placement from Ohio, ~1000 teams)</li>
                <li><span class='yr'>2025</span> 6th Place in Health Education, SLC</li>
                <li><span class='yr'>2026</span> 1st Place in Medical Law & Ethics, R5LC</li>
              </ul>
              
              <figure>
              <img src="/images/top16.jpeg" />
              <figcaption>Octafinal round in Biomedical Debate (team "Olentangy"), June 2026</figcaption>
              </figure>
            `
          }
        },
        {
          id: "tedx",
          label: "District-Wide Event",
          title: "TEDxOlentangy Liberty Youth",
          desc: "Delivered and official TEDx talk and now plan future events.",
          bgImage: "/images/tedx.jpg",
          modal: {
            label: "District-Wide Event",
            title: "TEDxOlentangy Liberty Youth",
            meta: "Speaker · Steering Committee Member",
            content: `
            <p>In March 2025, I delivered a TEDx talk titled <em>"5 Lessons to Transform a Community"</em>, featured on TEDx's YouTube channel with over 40 million subscribers. The talk shared personal lessons in leadership from reviving my church's Vacation Bible School</p>
      
            <p>As part of my involvement, I am now part of the steering committee for the <a href='https://www.ted.com/tedx/events/65993'>upcoming TEDxOlentangy Liberty Youth event</a> in April 2026.</p>

            <h4>5 Lessons to Transform a Community (2025)</h4>
            <div class='modal-embed'><iframe src="https://www.youtube.com/embed/dcyyexBZ1u0?si=b7vq6hKtlwIgj8XO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
            `
          }
        }
      ]
    },
    {
      id: "music",
      number: "04",
      title: "Music",
      layout: "halves",
      cards: [
        {
          id: "performance",
          label: "Piano · Violin · Drums · Bass Guitar",
          title: "Performance",
          desc: "Musician trained across 4 instruments.",
          bgImage: "/images/performance.png",
          modal: {
            label: "Piano · Violin · Drums · Bass Guitar",
            title: "Performance",
            meta: "Multi-instrumentalist",
            content: `
            <p>Music was the first discipline I grew up in. I began piano at age four, and over time expanded to violin, drums, and bass guitar.</p>

            <p>I currently serve as Concertmaster of the Olentangy Liberty Chamber Orchestra and Assistant Concertmaster of the Columbus Symphony Youth Orchestra, and have been selected twice to the OMEA All-State Orchestra as one of the top 30 violinists in Ohio.</p>

            <h4>Featured: <em>Violin Concerto No. 1 in G minor, Movement I</em> — Max Bruch (2026)</h4>
            <div class='modal-embed'><iframe src="https://www.youtube.com/embed/3gJRLNuiUCA?si=EVVt5P6gwf0xP12G" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
            <h4>Awards</h4>
            <ul>
              <li><span class='yr'>2026</span> Second Prize, Columbus Symphony Youth Orchestra Concerto Competition</li>
              <li><span class='yr'>2025–2026</span> 2× OMEA All-State Orchestra (Top 30 violinists in Ohio)</li>
              <li><span class='yr'>2019–2025</span> 6× National Piano Guild Superior Plus Rating</li>
            </ul>

            <p>Beyond formal performance, I’ve been deeply involved in community-based music. I began accompanying my church choir on piano in elementary school, and continue to perform at cultural events including the Central Ohio Malayalee Association’s <a href='https://www.youtube.com/watch?v=0qIzNiniAo8'>Onam</a> and <a href='https://www.youtube.com/watch?v=AByqwfRPoDc'>Christmas</a> programs. I also direct and mentor student bands for the Vindhya Band Competition, where <a href='https://www.youtube.com/watch?v=VAMmX9S9Q8E'>groups I’ve led</a> have earned first place in five consecutive years.</p>
            `
          }
        },
        {
          id: "composition",
          label: "3× International Award",
          title: "Composition",
          desc: "Original works awarded internationally by the National Guild of Piano Teachers.",
          bgImage: "/images/composition.jpg",
          modal: {
            label: "3× International Award",
            title: "Composition",
            meta: "Award-winning composer",
            content: `
              <p>Awarded internationally for original works across four consecutive years by the National Guild of Piano Teachers, selected among hundreds of submissions.</p>
              <h4>Featured Works</h4>
              <ul class="score-list">
                <li class="score-item">
                  <div class="score-info">
                    <span class="yr">2025</span>
                    <em>Consolation</em>
                    <small>Hubert Kaszynski Award + Arnetta Jonas Claymes Award</small>
                  </div>
                  <a href="/scores/consolation.pdf" class="score-btn" target="_blank" rel="noopener">View Score</a>
                </li>
                <li class="score-item">
                  <div class="score-info">
                    <span class="yr">2025</span>
                    <em>The Turn of Winter</em>
                    <small>Finalist</small>
                  </div>
                  <a href="/scores/the-turn-of-winter.pdf" class="score-btn" target="_blank" rel="noopener">View Score</a>
                </li>
                <li class="score-item">
                  <div class="score-info">
                    <span class="yr">2024</span>
                    <em>The Heist</em>
                    <small>Honorable Mention</small>
                  </div>
                  <a href="/scores/the-heist.pdf" class="score-btn" target="_blank" rel="noopener">View Score</a>
                </li>
                <li class="score-item">
                  <div class="score-info">
                    <span class="yr">2023</span>
                    <em>Sinking</em>
                    <small>Honorable Mention</small>
                  </div>
                  <a href="/scores/sinking.pdf" class="score-btn" target="_blank" rel="noopener">View Score</a>
                </li>
              </ul>
              <p>Displayed in the 2023–2025 Piano Guild Notes Summer Issues.</p>
            `
          }
        }
      ]
    },
    {
      id: "public",
      number: "05",
      title: "Public",
      layout: "thirds",
      cards: [
        {
          id: "civicweek",
          label: "Philadelphia, PA · 2026",
          title: "Civic Learning Week",
          desc: "Panelist discussing youth civic engagement with national leaders in education.",
          bgImage: "/images/civicweek.jpg",
          modal: {
            label: "Philadelphia, PA · 2026",
            title: "Civic Learning Week National Forum",
            meta: "Plenary Speaker",
            content: `
              <p>My sophomore year, I was invited by the Civic Learning Week Steering Committee for an all-expenses-paid presentation at the National Forum in Philadelphia, co-sponsored by the Bezos Family Foundation, Microsoft, Stanford's Hoover Institution, and leading civic organizations.</p>
              <p>I joined three other high school students from across the U.S. on a plenary panel moderated by PBS host <a href='https://www.bensheehan.com'>Ben Sheehan</a>, discussing the future of civic learning ahead of America's 250th anniversary. The panel was titled <em>"Student Perspectives on Liberty and Learning."</em></p>
              <h4>Student Perspectives on Liberty and Learning</h4>
              <div class='modal-embed'><iframe src="https://www.youtube.com/embed/YAno089cApU?si=E4qiW1nx8GApaeSd&start=705" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
            `
          }
        },
        {
          id: "ibtta",
          label: "Dallas, TX · 2025",
          title: "IBTTA Technology Summit",
          desc: "Invited speaker on AI and road safety at the international transportation summit.",
          bgImage: "/images/ibtta.jpeg",
          modal: {
            label: "Dallas, TX · 2025",
            title: "IBTTA Technology Summit",
            meta: "Speaker",
            content: `
            <p>Invited to present to 1,100+ attendees at the International Bridge, Tunnel and Turnpike Association's Technology Summit in Dallas, following recognition for <a href='https://youtu.be/h1dHoLHaSDc?si=385VILxfsBtdd1_K'><em>The Road to Vision Zero</em></a>, my documentary on AI-powered road safety.</p>
            <h4>Presentation</h4>
              <div class='modal-embed'><iframe src="https://www.youtube.com/embed/axoGrMKPKs0?si=5S7v1kCm2K_hrvHT&amp;start=404" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
            `
          }
        },
        {
          id: "news",
          label: "Officials & Media",
          title: "Recognition",
          desc: "Recognized by the Governor, U.S. Senators, and regional press for advocacy and filmmaking.",
          bgImage: "/images/news.jpg",
          modal: {
            label: "Officials & Media",
            title: "Recognition",
            meta: "Across press, elected officials, and others",
            content: `
              <p>Recognition from elected officials and coverage from regional media for documentary filmmaking, civic advocacy, and student leadership.</p>

              <h4>Recognition from Governor Mike DeWine</h4>
              <div class='modal-embed'><iframe src="https://www.youtube.com/embed/cUyLjtmfbcw?si=F36HiMEsjOamftsr" title="Recognition from Ohio Governor Mike DeWine" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

              <h4>Recognition from Senator Bernie Moreno</h4>
                            <figure>
                <img src="/images/bernie-moreno.jpg" loading="lazy" alt="Letter of recognition from U.S. Senator Sherrod Brown" />
                <figcaption>Letter of recognition from U.S. Senator Bernie Moreno, April 2025</figcaption>
              </figure>
                            <h4>Recognition from Senator Sherrod Brown</h4>
              <figure>
                <img src="/images/sherrod-brown.jpg" loading="lazy" alt="Letter of recognition from U.S. Senator Sherrod Brown" />
                <figcaption>Letter of recognition from U.S. Senator Sherrod Brown, May 2023</figcaption>
              </figure>

            `,
            pressItems: [
              { year: "2026", title: "Kurian wins C-SPAN contest again",                                          outlet: "Delaware Gazette",        date: "March 2026",   type: "read",   url: "https://www.delgazette.com/2026/03/15/kurian-wins-c-span-contest-again/" },
              { year: "2025", title: "Fascinating Ohio: Teen Edition",                                            outlet: "WOSU Public Media",       date: "August 2025",  type: "listen", url: "https://www.wosu.org/show/all-sides/2025-08-07/fascinating-ohio-teen-edition-state-fair-junior-fair-board-member-ninja-warriors-documentarian" },
              { year: "2025", title: "Powell teen takes first prize in C-SPAN student documentary contest",       outlet: "WOSU Public Media",       date: "April 2025",   type: "read",   url: "https://www.wosu.org/arts-culture/2025-04-18/powell-teen-takes-first-prize-in-c-span-student-documentary-contest" },
              { year: "2025", title: "Olentangy student wins first place in documentary contest",                 outlet: "NBC4 WCMH-TV",            date: "April 2025",   type: "read",   url: "https://www.nbc4i.com/news/local-news/powell/olentangy-student-wins-first-place-in-documentary-contest/" },
              { year: "2025", title: "Young Voices, Big Impact: Ben Kurian and the Road to Vision Zero",         outlet: "IBTTA",                   date: "April 2025",         type: "read",   url: "https://www.ibtta.org/insights/ben-kurian-and-road-vision-zero" },
              { year: "2025", title: "Local student wins national documentary competition",                       outlet: "ABC6 / WSYX",             date: "March 2025",   type: "read",   url: "https://abc6onyourside.com/news/local/local-student-wins-national-documentary-competition-olentangy-liberty-ben-kurian-ai-road-highway-safety-cspan-studentcam" },
              { year: "2024", title: "Central Ohio student wins national award for raising awareness of career education", outlet: "10TV",          date: "April 2024",         type: "watch",  url: "https://www.10tv.com/video/news/local/central-ohio-student-wins-national-award-for-raising-awareness-of-career-education/530-d2156794-9c8b-40df-a21e-e45a40a19686" },
              { year: "2024", title: "Powell student wins prize in C-SPAN's StudentCam competition",              outlet: "Spectrum News 1",         date: "April 2024",   type: "read",   url: "https://spectrumnews1.com/oh/columbus/news/2024/04/12/powell-student-wins-prize-c-span-competition-" },
              { year: "2024", title: "Kurian places second in C-SPAN contest",                                    outlet: "Delaware Gazette",        date: "April 2024",   type: "read",   url: "https://www.delgazette.com/2024/04/10/kurian-places-second-in-c-span-contest/" },
              { year: "2024", title: "Olentangy Liberty middle schooler honored by C-SPAN",                      outlet: "NBC4 WCMH-TV",            date: "April 2024",         type: "read",   url: "https://www.nbc4i.com/news/local-news/tell-me-something-good/olentangy-liberty-middle-schooler-honored-by-c-span/" },
              { year: "2023", title: "Middle school student creates documentary on opioids",                      outlet: "Spectrum News 1",         date: "April 2023",   type: "read",   url: "https://spectrumnews1.com/oh/columbus/in-focus/2023/04/28/middle-school-student-creates-documentary-on-opioids" },
              { year: "2023", title: "Local student wins C-SPAN contest",                                         outlet: "Delaware Gazette",        date: "April 2023",   type: "read",   url: "https://www.delgazette.com/2023/04/05/local-student-wins-c-span-contest/" },
              { year: "2022", title: "Powell student wins international video competition",                        outlet: "Spectrum News 1",         date: "June 2022",    type: "read",   url: "https://spectrumnews1.com/oh/columbus/news/2022/06/14/video-competition-winner-" },
            ]
          }
        }
      ]
    }
  ],

  footer: {
    heading: "Get in touch",
    links: [
      { label: "Email", url: "mailto:hello@benkurian.com" },
      { label: "LinkedIn", url: "https://www.linkedin.com/in/ben-kurian/" },
      { label: "YouTube", url: "https://www.youtube.com/@benkurian317" },
      { label: "Instagram", url: "https://www.instagram.com/benkurian317/" }
    ],
    copy: "© 2026 Ben Kurian"
  }
};