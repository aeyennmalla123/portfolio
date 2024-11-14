// Array of project details
const projects = [
  {
      title: "Ecommerce Website",
      description: "A fully-functional Ecommerce platform built using the MERN stack. Includes product management, shopping cart functionality, and secure user authentication.",
      technologies: "MongoDB, Express.js, React, Node.js, Bootstrap",
      image: "https://via.placeholder.com/600x400", // Add actual project image URL
      github: "https://github.com/yourusername/ecommerce-website",
      
  },
  {
      title: "Personal Portfolio Website",
      description: "A personal portfolio website to showcase skills, projects, and work experience. Designed with a responsive layout and interactive features.",
      technologies: "HTML, CSS, JavaScript, Bootstrap",
      image: "https://via.placeholder.com/600x400", // Add actual project image URL
      github: "https://github.com/yourusername/portfolio",
      
  },
  {
      title: "Dynamic Calendar",
      description: "A simple, dynamic calendar that displays the current date and allows users to navigate between months.",
      technologies: "HTML, CSS, JavaScript",
      image: "https://via.placeholder.com/600x400", // Add actual project image URL
      github: "https://github.com/aeyennmalla/dynamic-calendar",
      
  }
];

// Function to render projects dynamically
function renderProjects() {
  const projectContainer = document.getElementById('project-container');

  projects.forEach(project => {
      const projectItem = document.createElement('li');
      
      projectItem.classList.add('project-item');
      projectItem.innerHTML = `
          <div class="project-image">
              <img src="${project.image}" alt="${project.title}">
          </div>
          <div class="project-details">
              <h3>${project.title}</h3>
              <p><strong>Technologies Used:</strong> ${project.technologies}</p>
              <p>${project.description}</p>
              <a href="${project.github}" target="_blank" class="btn">View on GitHub</a>
            
          </div>
      `;
      
      projectContainer.appendChild(projectItem);
  });
}

// Run the render function when the page loads
document.addEventListener('DOMContentLoaded', renderProjects);
