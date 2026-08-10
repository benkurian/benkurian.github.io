import type { SiteData } from '../types/site';


export const SITE_DATA: SiteData = {


 hero: {
   name: ["Ben", "Kurian"],
   subtitle: "",
   bgImage: "/images/hero.jpg"
 },


 about: {
   heading: "I’m Ben Kurian, a junior at Olentangy Liberty High School in Columbus, Ohio.",
   paragraphs: [
     "I’m interested in how healthcare decisions actually get made: who gets access, what gets prioritized, and how structures shape patient outcomes. That’s led me to work on a few different projects in that space.",
     "I co-founded SPAN, a student-led, nonpartisan healthcare advocacy organization now active across eighteen states. I also lead Project MedBridge, a Central Ohio initiative rerouting 30,000+ pounds of surplus medical equipment globally.",
     "A lot of my work takes different forms—documentary filmmaking, public speaking, and organizing—usually around the same core questions. I’ve been lucky to have some of that work recognized: airtime on national TV, recognition from Ohio’s Governor and U.S. Senators, and invitations to speak at conferences from Dallas to Philadelphia.",
     "Outside of that, I’m a competitive debater and a multi-instrumentalist. I bike everywhere, collect vinyl, and am always hunting down new Oreo flavors <i>(current favorite: Chocolate Ganache Thins)</i>.",
     "I’m planning to study public health, especially the policy side of how care is delivered and who it reaches.",
   ],
   photo: "/images/ben.jpg"
 },


 // Resume link in the nav — set to the path of your resume PDF
 resumeUrl: "/resume.pdf",


 sections: [
   {
     id: "projects",
     title: "Projects",
     layout: "hero-side",
     cards: [
       {
         id: "span",
         label: "National Organization",
         title: "Students for Patient Advocacy Nationwide",
         desc: "Youth-led healthcare advocacy organization shaping policy across 18 states and Congress.",
         bgImage: "/images/span.jpg",
         detail: {
           label: "National Organization",
           title: "Students for Patient Advocacy Nationwide",
           meta: "Co-Founder & Executive Director",
           content: `
           <p>SPAN (est. 2025) is a youth-led healthcare policy organization I co-founded to give students a direct role in decisions affecting patients. More than 50 high school, undergraduate, graduate, and medical students now work across 18 states and Congress, researching legislation, writing policy language, organizing outreach, and testifying before lawmakers.</p>

           <h2>Origin</h2>
           <p>SPAN began in response to Texas House Bill 5294, which threatened pass/fail grading at Texas medical schools and would have restricted how admissions committees considered race. We organized more than 100 medical students to contact lawmakers and testify at the Texas Capitol. The campaign protected roughly 8,000 Texas medical students and stalled the bill just weeks before reaching the Governor's desk.</p>

           <h2>Progress</h2>
           <p>Since then, SPAN has engaged more than 1,500 elected officials and shaped 53 healthcare bills across 18 states and Congress. Our work spans supporting, amending, opposing, and proposing legislation. A few highlights:</p>
           <ul>
             <li><span class='yr'>CA</span> Drafted amendment language expanding coverage to 15M+ Medi-Cal patients in SB 363.</li>
             <li><span class='yr'>TX</span> Drafted language adopted in SB 75 clarifying hospitals as critical infrastructure.</li>
             <li><span class='yr'>OH</span> Passed SB 137 so overdose patients leave hospitals with naloxone in hand.</li>
             <li><span class='yr'>AK</span> Working to introduce an AED mandate in all Alaskan K-12 schools.</li>
             <li><span class='yr'>MA</span> Advanced H.2284/S.2622, requiring multilingual resources in healthcare settings.</li>
           </ul>
           <p>We also publish weekly policy briefs on our blog and our social media reach has surpassed 250,000 views. Our partners include Unite America, Stanford’s Deliberative Democracy Lab, Harvard’s Health Fluency Project, Beyond Partisan, the Institute for Citizens & Scholars, and the Mass Speaks Coalition.</p>

           <h2>Recognition</h2>
           <p>On July 3, 2026, I was named <a href='https://www.pointsoflight.org/awards/better-health-care-begins-with-student-leadership/'>Daily Point of Light Award honoree #8361</a> for building SPAN and rallying young people around healthcare policy. SPAN has also received $7,500 through Carnegie Young Leaders and a $500 Beyond Partisan microgrant.</p>

           <h2>Featured: SPAN</h2>
           <div class='work-embed'><iframe src="https://www.youtube.com/embed/t9-e2QdTz78" title="Students for Patient Advocacy Nationwide" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>

           <p><a href='https://spanationwide.org'>spanationwide.org</a></p>
           `
         }
       },
       {
         id: "medbridge",
         label: "Central Ohio Initiative",
         title: "Project MedBridge",
         desc: "Rerouting 30,000+ pounds of surplus medical equipment from Central Ohio to facilities worldwide.",
         bgImage: "/images/medbridge.jpeg",
         detail: {
           label: "Central Ohio Initiative",
           title: "Project MedBridge",
           meta: "Co-Founder & Team Lead",
           content: `
           <p>Project MedBridge (est. 2026) is Central Ohio’s first medical supply redistribution network.</p>
           <p>U.S. hospitals discard an estimated two million pounds of unused, unexpired supplies each year, while health facilities around the world operate without essential equipment.</p>
           <p>We built a local pipeline that collects surplus from Central Ohio clinics and hospital systems, sorts and prepares it for redistribution, and routes it through established partners to facilities abroad. We've now rerouted more than 30,000 pounds of medical equipment serving communities in over 40 countries.</p>
            <figure>
             <img src="/images/medbridge-first-shipment.jpg" loading="lazy" alt="Project MedBridge co-founders seated at the back of the first shipment truck" />
             <figcaption>Project MedBridge’s first shipment, August 2026</figcaption>
           </figure>
           <h2>Carnegie funding and kickoff</h2>
           <p>Project MedBridge received $7,500 in Carnegie Young Leaders funding through the Institute for Citizens & Scholars. Additionally, I was invited to the Carnegie Young Leaders kickoff, meeting 70 other changemakers from across the country.</p>
           <figure>
             <img src="/images/medbridge-carnegie-kickoff.jpg" loading="lazy" alt="Ben Kurian and other youth leaders at the Carnegie Young Leaders kickoff" />
             <figcaption>Carnegie Young Leaders kickoff, July 2026</figcaption>
           </figure>

           <p><a href='https://projectmedbridge.org'>projectmedbridge.org</a></p>
          `
         }
       },
       {
         id: "docs",
         label: "Award-Winning Journalism",
         title: "Filmmaking",
         desc: "Four consecutive wins in C-SPAN’s StudentCam competition.",
         bgImage: "/images/documentary.jpeg",
         detail: {
           label: "Award-Winning Journalism",
           title: "Filmmaking",
           meta: "Director, producer, and composer",
           content: `
           <p>I’ve directed, produced, and scored films on healthcare, education, and public policy since 2022, earning national recognition in the largest student documentary contest in the country.</p>
           <p>I placed in the <a href='http://studentcam.org'>StudentCam documentary competition</a> four consecutive years, competing against roughly 4,000 entries annually. My films have aired on C-SPAN to a viewership of over 50 million and received more than 30,000 cumulative public votes.</p>
           <ul>
             <li><span class='yr'>2026</span> First Prize + Fan Favorite, <a href='https://youtu.be/OJTwR_BkjLY?si=a7UoUbbLySrIHX5s'><em>A Right to Health</em></a></li>
             <li><span class='yr'>2025</span> First Prize, <a href='https://youtu.be/h1dHoLHaSDc?si=qqFcZydKniJkvcRq'><em>The Road to Vision Zero</em></a></li>
             <li><span class='yr'>2024</span> Second Prize + Fan Favorite, <a href='https://youtu.be/ju_pT2KA4v0?si=0aXuxKS17ee5N0-H'><em>Who Do I Want to Be?</em></a></li>
             <li><span class='yr'>2023</span> First Prize + Fan Favorite, <a href='https://youtu.be/-rcz3fX9laQ?si=kv-Q0aieXBFVnGdG'><em>Losing a Generation</em></a></li>
           </ul>
           <p>My work has involved interviews with senior stakeholders, including public health officials, faculty from Harvard and Yale, and former U.S. Department of Transportation leadership. I’ve been formally recognized by <a href='https://www.studentcam.org/2023-first-prize-middle-school-losing-a-generation-by-ben-kurian/'>Governor DeWine, U.S. Senator Sherrod Brown</a>, and others, and have been invited to speak at national conferences in Dallas and Philadelphia.</p>
           <h2>Featured: <em>A Right to Health</em> (2026)</h2>
           <div class='work-embed'><iframe src="https://www.youtube.com/embed/OJTwR_BkjLY?si=9UzZoAUCy47qDBty" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
          
<p>This summer, I was selected as one of <a href='https://studentreportinglabs.org/news/introducing-the-2026-srl-summer-academy-fellows/'>18 fellows</a> nationwide for the <a href='https://studentreportinglabs.org/news/applications-now-open-2026-srl-summer-academy/'>PBS News Student Reporting Labs Summer Academy</a>: a highly competitive, all-expenses-paid week of professional video journalism training held June 24–30 on the Georgetown University campus in Washington, D.C., in collaboration with WETA.</p>
<p>As part of Team 4, I co-produced a reported story on <em>hometown DC</em>, a landmark, citywide oral history and outdoor exhibition project marking America's 250th anniversary. The project, led by HumanitiesDC in partnership with the DC History Center, DC Commission on the Arts and Humanities, and DC Public Library, captures the voices and lived experiences of 21 Washingtonians through filmed interviews and installations across all eight wards of the city.</p>


<p>The story will (hopefully!) air on PBS NewsHour later in 2026.</p>
 <h2>Featured: <em>Beyond the Capitol: Celebrating Everyday Life in DC
</em></h2>
           <div class='work-embed'><iframe src="https://www.youtube.com/embed/VtYdZgHb5Zs?si=9KrUZe3r_sVifyX4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
          
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
   //       detail: {
   //         label: "Youth Advisory Council · Member",
   //         title: "Columbus Medical Association Foundation",
   //         meta: "Dec 2025 – Present",
   //         content: "<p>Selected as one of 15 members on the Columbus Medical Association Foundation’s Youth Advisory Council. The council assesses community health needs and allocates $25,000 in annual grant funding to youth-focused organizations across Central Ohio.</p><p>In the current cycle, reviewing and funding programs addressing mental health, substance use, bullying, social inequities, and basic needs — including support for AthletesToAid and We Amplify Voices (WAV).</p>"
   //       }
   //     },
   //     {
   //       id: "selac",
   //       label: "Olentangy Schools",
   //       title: "SELAC Representative",
   //       desc: "Advising district administrators on equity, engagement, and student wellbeing policies.",
   //       bgImage: "",
   //       detail: {
   //         label: "Student Advisory Council · Liberty Representative",
   //         title: "SELAC — Student Experience Leadership Advisory Council",
   //         meta: "Oct 2025 – Present · Olentangy Local School District",
   //         content: "<p>Selected to represent Olentangy Liberty High School on OLSD’s SELAC program. Collaborating with district administrators and peers to enhance student life, shape district-wide initiatives, and advise on policies improving equity, engagement, and wellbeing.</p><p>Participating in regular meetings with district leaders to identify key challenges and design actionable solutions that strengthen the student experience across Olentangy Schools.</p>"
   //       }
   //     },
   //     {
   //       id: "cyl",
   //       label: "Carnegie Foundation",
   //       title: "Young Leaders Fellow",
   //       desc: "Leading Project Demos — a $7,500-backed civic engagement initiative in Central Ohio.",
   //       bgImage: "",
   //       detail: {
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
     title: "School",
     layout: "thirds",
     cards: [
       {
         id: "debate",
         label: "Lincoln-Douglas & World Schools",
         title: "Speech & Debate",
         desc: "National qualifying performances across Congressional and Lincoln-Douglas formats.",
         bgImage: "/images/debate.jpeg",
         detail: {
           label: "Lincoln-Douglas & World Schools",
           title: "Speech & Debate",
           meta: "Team Captain",
           content: `
             <p>As Captain of our Lincoln-Douglas Debate team, I lead a group of 10 students in two weekly practices, preparing for tournaments every Saturday. Under my leadership, the team achieved remarkable success, including three state and national qualifiers.</p>
           <figure>
           <img src="/images/osdastates.jpeg" loading="lazy" alt="Ben Kurian and teammates at the OSDA State Finals" />
           <figcaption>OSDA State Finals, March 2026</figcaption>
           </figure>
             <p>Additionally, I taught Lincoln-Douglas, Public Forum, and Congressional debate to 30+ middle and high school students through Olentangy’s Summer Enrichment Experience (SEE). I prepared materials for daily lessons and exercises, led instruction throughout the program, and helped organize a debate tournament for participating students.</p>
           <figure>
           <img src="/images/see.jpg" loading="lazy" alt="Ben Kurian with the student debate tournament champion at SEE" />
           <figcaption>Me with tournament champion Gavin at SEE, June 2026</figcaption>
           </figure>
             <h2>Awards</h2>
           <ul>
             <li><span class='yr'>LD</span> 4× OSDA State Finals Bids (2025–2026)</li>
             <li><span class='yr'>LD</span> Ranked 6th in state preliminaries (2026)</li>
             <li><span class='yr'>LD</span> First Alternate to the NSDA National Tournament (2026)</li>
             <li><span class='yr'>WS</span> National Qualifier (2026)</li>
           </ul>
           <p>I also represented the Ohio Speech and Debate Association at the <a href='https://conference.ohioschoolboards.org/2026'>Ohio School Boards Association statewide conference</a>, advocating for greater access to Speech and Debate in Ohio high schools, meeting with school board members and administrators across the state.</p>
           <figure>
           <img src="/images/osba.jpg" loading="lazy" alt="Ben Kurian presenting at the Ohio School Boards Association conference" />
           <figcaption>OSBA conference, November 2025</figcaption>
           </figure>
           `
         }
       },
       {
         id: "hosa",
         label: "International Awards",
         title: "HOSA—Future Health Professionals",
         desc: "State Vice President. Top 16 international finish in Biomedical Debate.",
         bgImage: "/images/hosa.jpeg",
         detail: {
           label: "International Awards",
           title: "HOSA—Future Health Professionals",
           meta: "State Vice President",
           content: `
             <p>I refounded the Olentangy Liberty High School HOSA chapter and currently serve as Vice President of Public Relations, as well as an elected member of Ohio HOSA’s State Executive Council.</p>


             <p>As State Vice President, I represent about 12,500 members and 250 chapters across Ohio, representing the state at the International Leadership Conference (Indianapolis, IN) this June and advocating for expanded health sciences education in Washington D.C. this September.</p>


             <p>Locally, I lead outreach and communications, growing our chapter membership from 60 to over 100 students. I’ve organized speaker events with neurosurgeons, psychiatrists, and medical students, and helped guide our chapter to 33+ state placers and 7+ international placers.</p>
            
             <h2>Awards</h2>
             <ul>
               <li><span class='yr'>2026</span> Top 10 globally in Allied Health Statistics, ILC</li>
               <li><span class='yr'>2025</span> Top 16 globally in Biomedical Debate, ILC (highest placement from Ohio, ~1,000 teams)</li>
               <li><span class='yr'>2025</span> 6th Place in Health Education, SLC</li>
               <li><span class='yr'>2026</span> 4th Place in Medical Law & Ethics, SLC</li>
             </ul>
             <figure>
             <img src="/images/hosasec.jpeg" loading="lazy" alt="Ben Kurian with Ohio HOSA state officers at the International Leadership Conference" />
             <figcaption>International Leadership Conference, June 2026</figcaption>
             </figure>
             <figure>
             <img src="/images/top16.jpeg" loading="lazy" alt="Ben Kurian and his team competing in the Biomedical Debate octafinal round" />
             <figcaption>Octafinal round in Biomedical Debate (team "Olentangy"), June 2025</figcaption>
             </figure>
           `
         }
       },
       {
         id: "tedx",
         label: "District-Wide Event",
         title: "TEDxOlentangy Liberty Youth",
         desc: "Delivered an official TEDx talk and now helps plan future events.",
         bgImage: "/images/tedx.jpg",
         detail: {
           label: "District-Wide Event",
           title: "TEDxOlentangy Liberty Youth",
           meta: "Speaker · Steering Committee Member",
           content: `
           <p>In March 2025, I delivered a TEDx talk titled <em>"5 Lessons to Transform a Community"</em>, featured on TEDx’s YouTube channel with over 40 million subscribers. The talk shared personal lessons in leadership from reviving my church’s Vacation Bible School</p>
    
           <p>As part of my involvement, I am now part of the steering committee for the <a href='https://www.ted.com/tedx/events/65993'>upcoming TEDxOlentangy Liberty Youth event</a> in April 2026.</p>


           <h2>5 Lessons to Transform a Community (2025)</h2>
           <div class='work-embed'><iframe src="https://www.youtube.com/embed/dcyyexBZ1u0?si=b7vq6hKtlwIgj8XO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
           `
         }
       }
     ]
   },
   {
     id: "music",
     title: "Music",
     layout: "halves",
     cards: [
       {
         id: "performance",
         label: "Piano · Violin · Drums · Bass Guitar",
         title: "Performance",
         desc: "Musician trained across 4 instruments.",
         bgImage: "/images/performance.png",
         detail: {
           label: "Piano · Violin · Drums · Bass Guitar",
           title: "Performance",
           meta: "Multi-instrumentalist",
           content: `
           <p>Music was the first discipline I grew up in. I began piano at age four, and over time expanded to violin, drums, and bass guitar.</p>


           <p>I currently serve as Concertmaster of the Olentangy Liberty Chamber Orchestra and Assistant Concertmaster of the Columbus Symphony Youth Orchestra, and have been selected twice to the OMEA All-State Orchestra as one of the top 30 violinists in Ohio.</p>


           <h2>Featured: <em>Violin Concerto No. 1 in G minor, Movement I</em> — Max Bruch (2026)</h2>
           <div class='work-embed'><iframe src="https://www.youtube.com/embed/3gJRLNuiUCA?si=bJVWfMuVLGoiOyYv" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
           <h2>Awards</h2>
           <ul>
             <li><span class='yr'>2026</span> Second Prize, Columbus Symphony Youth Orchestra Concerto Competition</li>
             <li><span class='yr'>2025–2026</span> 2× OMEA All-State Orchestra (Top 30 violinists in Ohio)</li>
             <li><span class='yr'>2021–2025</span> 6× National Piano Guild Superior Plus Rating</li>
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
         bgImage: "/images/composition.jpeg",
         detail: {
           label: "3× International Award",
           title: "Composition",
           meta: "Award-winning composer",
           content: `
             <p>Awarded internationally for original works across four consecutive years by the National Guild of Piano Teachers, selected among hundreds of submissions.</p>
             <p>Displayed in the 2023–2025 Piano Guild Notes Summer Issues.</p>
             <h2>Featured: <em>Consolation</em></h2>
             <div class='work-embed'><iframe src="https://www.youtube.com/embed/QGBV0MG8jp0?si=d6WWSNSUwpJMcbwe" title="Performance of Consolation by Ben Kurian" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
           `,
           linkSections: [
             {
               heading: 'Featured Works',
               items: [
                 { meta: '2025', title: 'Consolation', detail: 'Hubert Kaszynski Award + Arnetta Jonas Claymes Award', url: '/scores/consolation.pdf' },
                 { meta: '2025', title: 'The Turn of Winter', detail: 'Finalist', url: '/scores/the-turn-of-winter.pdf' },
                 { meta: '2024', title: 'The Heist', detail: 'Honorable Mention', url: '/scores/the-heist.pdf' },
                 { meta: '2023', title: 'Sinking', detail: 'Honorable Mention', url: '/scores/sinking.pdf' },
               ],
             },
           ],
         }
       }
     ]
   },
   {
     id: "public",
     title: "Public",
     layout: "thirds",
     cards: [
       {
         id: "civicweek",
         label: "Philadelphia, PA · 2026",
         title: "Civic Learning Week",
         desc: "Panelist discussing youth civic engagement with national leaders in education.",
         bgImage: "/images/civicweek.jpg",
         detail: {
           label: "Philadelphia, PA · 2026",
           title: "Civic Learning Week National Forum",
           meta: "Plenary Speaker",
           content: `
             <p>My sophomore year, I was invited by the Civic Learning Week Steering Committee for an all-expenses-paid presentation at the National Forum in Philadelphia, co-sponsored by the Bezos Family Foundation, Microsoft, Stanford’s Hoover Institution, and leading civic organizations.</p>
             <p>I joined three other high school students from across the U.S. on a plenary panel moderated by PBS host <a href='https://www.bensheehan.com'>Ben Sheehan</a>, discussing the future of civic learning ahead of America’s 250th anniversary. The panel was titled <em>"Student Perspectives on Liberty and Learning."</em> After the panel, <a href='https://www.civics101podcast.org/civics-101-episodes/clw2'>NHPR’s <em>Civics 101</em></a> interviewed several of us about what civic education looks like in our classrooms.</p>
             <h2>Student Perspectives on Liberty and Learning</h2>
             <div class='work-embed'><iframe src="https://www.youtube.com/embed/YAno089cApU?si=E4qiW1nx8GApaeSd&start=705" title="Student Perspectives on Liberty and Learning" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
           `,
           linkSections: [
             {
               heading: 'Press',
               items: [
                 { meta: 'Civics 101 · NHPR', title: 'Why Students Are Having a Tough Time', detail: 'March 2026', url: 'https://www.civics101podcast.org/civics-101-episodes/clw2' },
                 { meta: 'The Renovator', title: 'The Civic Learning Week National Forum', detail: 'March 2026', url: 'https://therenovator.substack.com/p/the-civic-learning-week-national' },
               ],
             },
           ],
         }
       },
       {
         id: "ibtta",
         label: "Dallas, TX · 2025",
         title: "IBTTA Technology Summit",
         desc: "Invited speaker on AI and road safety at the international transportation summit.",
         bgImage: "/images/ibtta.jpeg",
         detail: {
           label: "Dallas, TX · 2025",
           title: "IBTTA Technology Summit",
           meta: "Speaker",
           content: `
           <p>Invited to present to 1,100+ attendees at the International Bridge, Tunnel and Turnpike Association’s Technology Summit in Dallas, following recognition for <a href='https://youtu.be/h1dHoLHaSDc?si=385VILxfsBtdd1_K'><em>The Road to Vision Zero</em></a>, my documentary on AI-powered road safety.</p>
           <h2>Presentation</h2>
             <div class='work-embed'><iframe src="https://www.youtube.com/embed/axoGrMKPKs0?si=5S7v1kCm2K_hrvHT&amp;start=404" title="Ben Kurian at the IBTTA Technology Summit" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
           `
         }
       },
       {
         id: "news",
         label: "Officials & Media",
         title: "Recognition",
         desc: "Recognized by the Governor, U.S. Senators, and regional press for advocacy and filmmaking.",
         bgImage: "/images/news.jpg",
         detail: {
           label: "Officials & Media",
           title: "Recognition",
           meta: "Across press, elected officials, and others",
           content: `
             <p>Recognition from elected officials and coverage from regional media for documentary filmmaking, civic advocacy, and student leadership.</p>


             <h2>Ohio Governor Mike DeWine</h2>
             <figure>
             <div class='work-embed'><iframe src="https://www.youtube.com/embed/cUyLjtmfbcw?si=F36HiMEsjOamftsr" title="Recognition from Ohio Governor Mike DeWine" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
               <figcaption>Video of recognition, April 2025</figcaption>
             </figure>
             <h2>U.S. Senator Bernie Moreno</h2>
                           <figure>
               <img src="/images/bernie-moreno.jpg" loading="lazy" alt="Letter of recognition from U.S. Senator Bernie Moreno" />
               <figcaption>Letter of recognition, April 2025</figcaption>
             </figure>
                           <h2>U.S. Senator Sherrod Brown</h2>
             <figure>
               <img src="/images/sherrod-brown.jpg" loading="lazy" alt="Letter of recognition from U.S. Senator Sherrod Brown" />
               <figcaption>Letter of recognition, May 2023</figcaption>
             </figure>


             <h2>Ohio Director of Health Dr. Bruce Vanderhoff</h2>
             <figure>
             <div class='work-embed'><iframe src="https://www.youtube.com/embed/rrI8SK_bns8?si=4F99OQD9WcfzBklg" title="Recognition from Ohio Director of Health Dr. Bruce Vanderhoff" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></div>
               <figcaption>Video of recognition, April 2026</figcaption>
             </figure>
           `,
           linkSections: [
             {
               heading: 'Press',
               items: [
                 { meta: 'Delaware Gazette', title: 'Olentangy student honored for healthcare advocacy', detail: 'July 2026', url: 'https://www.delgazette.com/2026/07/15/olentangy-student-honored-for-healthcare-advocacy/' },
                 { meta: 'WOSU Public Media', title: 'Two Olentangy Liberty students win top honors in C-SPAN student documentary contest', detail: 'May 2026', url: 'https://www.wosu.org/arts-culture/2026-05-04/two-olentangy-liberty-students-win-top-honors-in-c-span-student-documentary-contest' },
                 { meta: 'Delaware Gazette', title: 'Kurian wins C-SPAN contest again', detail: 'March 2026', url: 'https://www.delgazette.com/2026/03/15/kurian-wins-c-span-contest-again/' },
                 { meta: 'WOSU Public Media', title: 'Fascinating Ohio: Teen Edition', detail: 'August 2025', url: 'https://www.wosu.org/show/all-sides/2025-08-07/fascinating-ohio-teen-edition-state-fair-junior-fair-board-member-ninja-warriors-documentarian' },
                 { meta: 'WOSU Public Media', title: 'Powell teen takes first prize in C-SPAN student documentary contest', detail: 'April 2025', url: 'https://www.wosu.org/arts-culture/2025-04-18/powell-teen-takes-first-prize-in-c-span-student-documentary-contest' },
                 { meta: 'NBC4 WCMH-TV', title: 'Olentangy student wins first place in documentary contest', detail: 'April 2025', url: 'https://www.nbc4i.com/news/local-news/powell/olentangy-student-wins-first-place-in-documentary-contest/' },
                 { meta: 'IBTTA', title: 'Young Voices, Big Impact: Ben Kurian and the Road to Vision Zero', detail: 'April 2025', url: 'https://www.ibtta.org/insights/ben-kurian-and-road-vision-zero' },
                 { meta: 'ABC6 / WSYX', title: 'Local student wins national documentary competition', detail: 'March 2025', url: 'https://abc6onyourside.com/news/local/local-student-wins-national-documentary-competition-olentangy-liberty-ben-kurian-ai-road-highway-safety-cspan-studentcam' },
                 { meta: '10TV', title: 'Central Ohio student wins national award for raising awareness of career education', detail: 'April 2024', url: 'https://www.10tv.com/video/news/local/central-ohio-student-wins-national-award-for-raising-awareness-of-career-education/530-d2156794-9c8b-40df-a21e-e45a40a19686' },
                 { meta: 'Spectrum News 1', title: "Powell student wins prize in C-SPAN’s StudentCam competition", detail: 'April 2024', url: 'https://spectrumnews1.com/oh/columbus/news/2024/04/12/powell-student-wins-prize-c-span-competition-' },
                 { meta: 'Delaware Gazette', title: 'Kurian places second in C-SPAN contest', detail: 'April 2024', url: 'https://www.delgazette.com/2024/04/10/kurian-places-second-in-c-span-contest/' },
                 { meta: 'NBC4 WCMH-TV', title: 'Olentangy Liberty middle schooler honored by C-SPAN', detail: 'April 2024', url: 'https://www.nbc4i.com/news/local-news/tell-me-something-good/olentangy-liberty-middle-schooler-honored-by-c-span/' },
                 { meta: 'Spectrum News 1', title: 'Middle school student creates documentary on opioids', detail: 'April 2023', url: 'https://spectrumnews1.com/oh/columbus/in-focus/2023/04/28/middle-school-student-creates-documentary-on-opioids' },
                 { meta: 'Delaware Gazette', title: 'Local student wins C-SPAN contest', detail: 'April 2023', url: 'https://www.delgazette.com/2023/04/05/local-student-wins-c-span-contest/' },
                 { meta: 'Spectrum News 1', title: 'Powell student wins international video competition', detail: 'June 2022', url: 'https://spectrumnews1.com/oh/columbus/news/2022/06/14/video-competition-winner-' },
               ],
             },
           ],
         }
       }
     ]
   }
 ],


 footer: {
   links: [
     { label: "Email", url: "mailto:hello@benkurian.com" },
     { label: "LinkedIn", url: "https://www.linkedin.com/in/ben-kurian/" },
     { label: "YouTube", url: "https://www.youtube.com/@benkurian317" },
     { label: "Instagram", url: "https://www.instagram.com/benkurian_/" }
   ],
   copy: "© 2026 Ben Kurian"
 }
};


export function getAllCardEntries() {
 return SITE_DATA.sections.flatMap((section) =>
   section.cards.map((card) => ({ sectionId: section.id, card })),
 );
}
