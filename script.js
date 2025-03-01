const allProjects = [
  { title: "Expanding Cards", description: "An interactive expanding card animation.", category: "animations" },
  { title: "Progress Steps", description: "A step-by-step progress bar.", category: "animations" },
  { title: "Rotating Navigation Animation", description: "A rotating navigation effect.", category: "animations" },
  { title: "Hidden Search Widget", description: "A search bar that hides when not in use.", category: "animations" },
  { title: "Blurry Loading", description: "A loading screen with a blurry background effect.", category: "animations" },
  { title: "Scroll Animation", description: "Elements that animate when scrolled into view.", category: "animations" },
  { title: "Split Landing Page", description: "A landing page with a split screen effect.", category: "web apps" },
  { title: "Form Wave", description: "A wave effect on form inputs.", category: "animations" },
  { title: "Sound Board", description: "An interactive soundboard.", category: "web apps" },
  { title: "Dad Jokes", description: "A random dad joke generator.", category: "web apps" },
  { title: "Event Keycodes", description: "Display the keycodes of pressed keys.", category: "web apps" },
  { title: "Faq Collapse", description: "A collapsible FAQ section.", category: "web apps" },
  { title: "Random Choice Picker", description: "Pick a random item from a list.", category: "web apps" },
  { title: "Animated Navigation", description: "A navigation bar with animated effects.", category: "web apps" },
  { title: "Incrementing Counter", description: "A counter that increments on a button click.", category: "animations" },
  { title: "Drink Water", description: "A hydration reminder app.", category: "web apps" },
  { title: "Movie App", description: "A movie search app using an API.", category: "web apps" },
  { title: "Background Slider", description: "A sliding background image effect.", category: "animations" },
  { title: "Theme Clock", description: "A clock with a theme change based on time.", category: "web apps" },
  { title: "Button Ripple Effect", description: "A ripple effect animation on buttons.", category: "animations" },
  { title: "Drag N Drop", description: "A drag and drop functionality for elements.", category: "web apps" },
  { title: "Drawing App", description: "An app that allows you to draw with your mouse.", category: "web apps" },
  { title: "Kinetic Loader", description: "A kinetic loader animation.", category: "animations" },
  { title: "Content Placeholder", description: "Simulate loading content with placeholders.", category: "animations" },
  { title: "Sticky Navbar", description: "A navbar that sticks at the top while scrolling.", category: "web apps" },
  { title: "Double Vertical Slider", description: "A split vertical slider effect.", category: "animations" },
  { title: "Toast Notification", description: "A simple toast notification system.", category: "web apps" },
  { title: "Github Profiles", description: "Display Github profiles with user data.", category: "web apps" },
  { title: "Double Click Heart", description: "A heart icon that animates on double-click.", category: "animations" },
  { title: "Auto Text Effect", description: "Automatically type out text on the screen.", category: "animations" },
  { title: "Password Generator", description: "Generate strong random passwords.", category: "web apps" },
  { title: "Good Cheap Fast", description: "A site that displays information about good, cheap, and fast concepts.", category: "web apps" },
  { title: "Notes App", description: "A simple notes app with CRUD functionality.", category: "web apps" },
  { title: "Animated Countdown", description: "An animated countdown timer.", category: "animations" },
  { title: "Image Carousel", description: "A carousel to cycle through images.", category: "web apps" },
  { title: "Hoverboard", description: "A hoverboard animation effect.", category: "animations" },
  { title: "Pokedex", description: "A Pokedex web app displaying Pokemon data.", category: "web apps" },
  { title: "Mobile Tab Navigation", description: "A tab navigation for mobile screens.", category: "web apps" },
  { title: "Password Strength Background", description: "A password strength indicator with a background change.", category: "web apps" },
  { title: "3d Background Boxes", description: "3D animated background with moving boxes.", category: "animations" },
  { title: "Verify Account UI", description: "A UI to verify user account.", category: "web apps" },
  { title: "Live User Filter", description: "Filter through live user data.", category: "web apps" },
  { title: "Feedback UI Design", description: "A feedback form UI with animated rating.", category: "web apps" },
  { title: "Custom Range Slider", description: "A custom range slider with styled thumbs.", category: "web apps" },
  { title: "Netflix Mobile Navigation", description: "Mobile navigation menu similar to Netflix.", category: "web apps" },
  { title: "Quiz App", description: "A multiple-choice quiz app with questions and answers.", category: "web apps" },
  { title: "Testimonial Box Switcher", description: "Switch between different testimonial boxes.", category: "web apps" },
  { title: "Random Image Feed", description: "A random image feed app.", category: "web apps" },
  { title: "Todo List", description: "A basic to-do list app with CRUD functionality.", category: "web apps" },
  { title: "Insect Catch Game", description: "A simple insect catching game.", category: "games" },
  { title: "Simple Timer (Bonus Day 1)", description: "A simple countdown timer.", category: "web apps" }
];

let currentIndex = 0;
const projectsPerPage = 10;
const loadingSpinner = document.getElementById('loading-spinner');

// Function to display a set of projects
function displayProjects() {
  const projectsContainer = document.querySelector('.projects');
  const filteredProjects = filterProjects();
  const currentProjects = filteredProjects.slice(currentIndex, currentIndex + projectsPerPage);

  // Show loading spinner while fetching projects
  loadingSpinner.style.display = 'block';

  setTimeout(() => {
    // Clear existing projects before adding new ones
    projectsContainer.innerHTML = '';

    currentProjects.forEach(project => {
      const projectCard = `
        <div class="project-card">
          <h3>${project.title}</h3>
          <p>${project.description}</p>
          <button onclick="navigateToProject('${project.title}')">View Project</button>
        </div>
      `;
      projectsContainer.innerHTML += projectCard;
    });

    currentIndex += projectsPerPage;

    // Hide "Load More" button if all projects are displayed
    if (currentIndex >= filteredProjects.length) {
      document.getElementById('load-more').classList.add('hidden');
    } else {
      document.getElementById('load-more').classList.remove('hidden');
    }

    // Hide loading spinner after projects are displayed
    loadingSpinner.style.display = 'none';

    // Show a message if no projects match the search or filter
    const noResultsMessage = document.querySelector('.no-results');
    if (filteredProjects.length === 0) {
      noResultsMessage.classList.remove('hidden');
    } else {
      noResultsMessage.classList.add('hidden');
    }
  }, 500); // Simulating delay for demonstration purposes
}

// Function to navigate to project pages
function navigateToProject(projectName) {
  const baseURL = './Challenge/';
  const projectURL = baseURL + projectName + '/index.html';

  // Check if the project URL exists before navigating
  fetch(projectURL, { method: 'HEAD' }).then(response => {
    if (response.ok) {
      window.location.href = projectURL;
    } else {
      // If project doesn't exist, navigate to the "Project Not Found" page
      window.location.href = 'project-not-found.html';
    }
  }).catch(error => {
    alert('Error navigating to project: ' + error.message);
  });
}

// Filter projects by category and search term
function filterProjects() {
  const categoryFilter = document.getElementById('category-filter').value;
  const searchTerm = document.getElementById('search-bar').value.toLowerCase();

  return allProjects.filter(project => {
    const matchesCategory = categoryFilter === 'all' || project.category === categoryFilter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm);
    return matchesCategory && matchesSearch;
  });
}

// Function to populate the category filter dropdown dynamically
function populateCategoryFilter() {
  const categoryFilter = document.getElementById('category-filter');
  const categories = ['all', ...new Set(allProjects.map(project => project.category))];  // Get unique categories
  categories.forEach(category => {
    const option = document.createElement('option');
    option.value = category;
    option.textContent = category.charAt(0).toUpperCase() + category.slice(1);  // Capitalize first letter
    categoryFilter.appendChild(option);
  });
}

// Event listener for "Load More" button
document.getElementById('load-more').addEventListener('click', function () {
  displayProjects();
});

// Event listeners for search and category filters
document.getElementById('category-filter').addEventListener('change', () => {
  currentIndex = 0;
  displayProjects();
});

document.getElementById('search-bar').addEventListener('input', () => {
  currentIndex = 0;
  displayProjects();
});

// Event listener for "Reset Filters" button
document.getElementById('reset-filters').addEventListener('click', () => {
  // Reset the category filter to 'all' and search bar
  document.getElementById('category-filter').value = 'all';
  document.getElementById('search-bar').value = '';

  // Reset the projects to show all
  currentIndex = 0;
  displayProjects();
});

// Initial call to populate category filter and display projects
populateCategoryFilter();
displayProjects();
