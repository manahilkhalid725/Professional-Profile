document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll(".main > section");
  const navLinks = document.querySelectorAll(".nav-links a");

  const profileData = {
    name: "Manahil Khalid",
    picture: "850_6727-PRINT.jpg",
    education: [
      {
        school: "Divisional Public School",
        degree: "Matriculation in Science",
        date: "(2018-2020)",
      },
      {
        school: "Govt Girls College",
        degree: "FSc Pre Engineering",
        date: "(2020-2022)",
      },
      {
        school: "ITU Lahore",
        degree: "Bachelor's in Computer Science",
        date: "(2022-Present)",
        details:
          "Pursuing a Bachelor's degree with a focus on software development, algorithms, and data structures. Coursework includes advanced programming, software engineering, and database management.",
      },
    ],
    projects: [
      {
        title: "Go FOOD",
        date: "May 2024",
        description:
          "Developed a sophisticated and responsive website for a food delivery platform using Tailwind CSS and PHP Laravel.",
        features: [
          "User Authentication: Implemented secure login and registration functionalities.",
          "Real-Time Order Tracking: Integrated a real-time tracking system.",
          "Responsive Design: Ensured seamless performance on desktop and mobile devices.",
          "Performance Optimization: Focused on fast load times and high traffic handling.",
        ],
      },
      {
        title: "Chess Game",
        date: "October 2023",
        description: "Designed and implemented an OOP chess game.",
        features: [
          "Class Design: Created distinct classes for pieces, the board, and logic.",
          "Rule Enforcement: Implemented accurate rule enforcement for various scenarios.",
          "User Interface: Developed a user-friendly graphical interface.",
        ],
      },
      {
        title: "Ludo Game",
        date: "December 2023",
        description: "Developed a Ludo game using OOP principles and SFML.",
        features: [
          "Object-Oriented Design: Applied OOP principles to build a modular structure.",
          "Game Mechanics: Implemented core mechanics like dice rolls, player movements.",
          "Visual Elements: Utilized SFML for dynamic graphics and animations.",
        ],
      },
      {
        title: "Other Games",
        description:
          "Developed classic games including Tic-Tac-Toe, Snake, Bead 12, Minesweeper using C++.",
        features: [
          "Gameplay Mechanics: Implemented core features and rules.",
          "User Interface: Developed intuitive interfaces for user interaction.",
          "Efficient Code Implementation: Focused on performance and maintainability.",
        ],
      },
    ],
    skills: {
      hardSkills: [
        "C++: Proficient in developing robust applications.",
        "C#: Experienced in Windows applications and game development.",
        "Python: Skilled in scripting and data analysis.",
        "HTML: Expertise in creating semantic web content.",
        "CSS: Proficient in designing responsive layouts.",
        "PHP: Experienced in server-side scripting.",
        "MySQL: Skilled in database design and query optimization.",
      ],
      softSkills: [
        "Analytical Skills: Adept at developing effective solutions.",
        "Problem-solving: Creative and efficient approach.",
        "Leadership: Proven capability in leading projects.",
        "Graphic Design: Skilled in creating engaging elements.",
        "Communication: Effective in collaborating with teams.",
      ],
    },
    hobbies: [
        "<strong>Reading:</strong> Engages with diverse literature, from timeless classics to contemporary non-fiction, stimulating creativity and critical thinking.",
        "<strong>Swimming:</strong> Offers both physical exercise and mental relaxation, fostering discipline and stress management.",
        "<strong>Sports:</strong> Develops essential qualities such as teamwork, strategic thinking, and leadership through active participation.",
        "<strong>Traveling:</strong> Broadens my global perspective by immersing in diverse cultures, enhancing creativity and adaptability.",
        "<strong>Music:</strong> Provides a creative outlet and relaxation, fostering a balanced and reflective mindset.",
        "<strong>Volunteering:</strong> Enhances social responsibility and leadership skills through community service and collaboration on diverse projects.",
        "<strong>Technology Exploration:</strong> Keen on exploring emerging technologies, staying updated with industry trends, and fostering continuous learning and innovation.",
      ],
    contact: {
      email: "manahilkhalid725@gmail.com",
      phone: "+92 3356300648",
    },
    socialMedia: {
      linkedin: "https://www.linkedin.com/in/manahil-khalid-49453431a/",
      instagram: "https://www.instagram.com/manahilkhalid._.mk/?hl=en",
    },
    certifications: [
      {
        name: "ITU Code Rush",
        description:
          "In the ITU Code Rush competition, I engaged in a highly esteemed and rigorous coding challenge that attracts top programming talent. This competition is renowned for its demanding problems, which test participants' abilities in algorithmic thinking, code efficiency, and innovative problem-solving.<br><br>"+
          "Throughout the event, I tackled a variety of complex algorithmic problems, which required a deep understanding of data structures, algorithms, and computational complexity. The competition format included solving multiple problems under tight time constraints, which honed my ability to think critically and manage stress effectively. Each problem presented unique challenges that necessitated creative and optimized solutions, pushing me to leverage advanced programming techniques and refine my coding skills.<br><br>"+
          "My participation not only demonstrated my proficiency in developing and implementing efficient algorithms but also showcased my adaptability in a high-pressure environment. The experience was instrumental in enhancing my problem-solving capabilities, improving my time management skills, and gaining exposure to competitive programming practices. It also provided a platform for networking with peers and professionals, offering insights into industry trends and practices."
      },
    ],
  };

  function populateProfile() {
    //name and picture
    document.getElementById("profile-name").textContent = profileData.name;
    document.getElementById("profile-picture").src = profileData.picture;

    //education
    const educationSection = document.getElementById("education");
    educationSection.innerHTML =
      `<h2>Education</h2>` +
      profileData.education
        .map(
          (edu) => `
            <ul>
                <li class="school"><strong>${edu.school}</strong></li>
                <li>${edu.degree}</li>
                <li class="date"><em>${edu.date}</em></li>
                ${edu.details ? `<li class="details">${edu.details}</li>` : ""}
            </ul>
        `
        )
        .join("");

    //projects
    const projectsSection = document.getElementById("projects");
    projectsSection.innerHTML =
      `<h2>Projects</h2>` +
      profileData.projects
        .map(
          (project) => `
            <ul>
                <li><strong>${project.title}</strong> - <em>${
            project.date
          }</em></li>
                <p>${project.description}</p>
                <ul>${project.features
                  .map((feature) => `<li>${feature}</li>`)
                  .join("")}</ul>
            </ul>
        `
        )
        .join("");

    //skills
    const skillsSection = document.getElementById("skills");
    skillsSection.innerHTML = `<h2>Skills</h2>
        <div class="skills-container">
            <div class="hard-skills">
                <h3>Hard Skills</h3>
                <ul>${profileData.skills.hardSkills
                  .map((skill) => `<li>${skill}</li>`)
                  .join("")}</ul>
            </div>
            <div class="soft-skills">
                <h3>Soft Skills</h3>
                <ul>${profileData.skills.softSkills
                  .map((skill) => `<li>${skill}</li>`)
                  .join("")}</ul>
            </div>
        </div>`;

    //hobbies
    const hobbiesSection = document.getElementById("hobbies");
    hobbiesSection.innerHTML = `<h2>Hobbies & Interests</h2>
    <ul>${profileData.hobbies
      .map((hobby) => `<li>${hobby}</li>`)
      .join("")}</ul>`;

    //contact
    const contactSection = document.getElementById("contact");
    contactSection.innerHTML = `<h2>Contact</h2>
      <p><i class="fas fa-envelope"></i> ${profileData.contact.email}</p>
      <p><i class="fas fa-phone"></i> ${profileData.contact.phone}</p>`;

    //social media
    const socialMediaSection = document.getElementById("social-media");
    socialMediaSection.innerHTML = `<h2>Social Media</h2>
        <p><a href="${profileData.socialMedia.linkedin}" target="_blank">LinkedIn</a></p>
        <p><a href="${profileData.socialMedia.instagram}" target="_blank">Instagram</a></p>`;

    //certifications
    const certificationsSection = document.getElementById("certifications");
    certificationsSection.innerHTML = `<h2>Certifications</h2>
        <ul>${profileData.certifications
          .map(
            (cert) => `
            <li><strong>${cert.name}</strong>: ${cert.description}</li>
        `
          )
          .join("")}</ul>`;
  }

  function handleNavClick(event) {
    event.preventDefault();

    sections.forEach((section) => section.classList.remove("active"));

    navLinks.forEach((link) => link.classList.remove("active"));

    const targetSection = event.target.getAttribute("data-target");

    event.target.classList.add("active");
    document.getElementById(targetSection).classList.add("active");
  }
  navLinks.forEach((link) => {
    link.addEventListener("click", handleNavClick);
  });

  populateProfile();
});
