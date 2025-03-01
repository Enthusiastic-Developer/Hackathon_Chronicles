const fs = require('fs');
const path = require('path');

// List of projects
const allProjects = [
  "Expanding Cards", "Progress Steps", "Rotating Navigation Animation",
  "Hidden Search Widget", "Blurry Loading", "Scroll Animation",
  "Split Landing Page", "Form Wave", "Sound Board", "Dad Jokes",
  "Event Keycodes", "Faq Collapse", "Random Choice Picker", "Animated Navigation",
  "Incrementing Counter", "Drink Water", "Movie App", "Background Slider",
  "Theme Clock", "Button Ripple Effect", "Drag N Drop", "Drawing App",
  "Kinetic Loader", "Content Placeholder", "Sticky Navbar", "Double Vertical Slider",
  "Toast Notification", "Github Profiles", "Double Click Heart", "Auto Text Effect",
  "Password Generator", "Good Cheap Fast", "Notes App", "Animated Countdown",
  "Image Carousel", "Hoverboard", "Pokedex", "Mobile Tab Navigation",
  "Password Strength Background", "3d Background Boxes", "Verify Account UI",
  "Live User Filter", "Feedback UI Design", "Custom Range Slider",
  "Netflix Mobile Navigation", "Quiz App", "Testimonial Box Switcher",
  "Random Image Feed", "Todo List", "Insect Catch Game", "Simple Timer (Bonus Day 1)"
];

// Directory where all project folders will be created
const baseDir = './Challenge';

// Function to create folders and required files
function createProjectFolders() {
  // Loop through all projects
  allProjects.forEach(project => {
    const projectFolder = path.join(baseDir, project);

    // Check if project folder already exists
    if (!fs.existsSync(projectFolder)) {
      // Create the project folder
      fs.mkdirSync(projectFolder, { recursive: true });

      // Create necessary files inside the project folder
      fs.writeFileSync(path.join(projectFolder, 'index.html'), `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${project}</title>
  <link rel="stylesheet" href="style.css">
</head>
<body>
  <h1>${project}</h1>
  <p>Project details for ${project} will be here.</p>
  <script src="script.js"></script>
</body>
</html>`);

      fs.writeFileSync(path.join(projectFolder, 'style.css'), `/* Add your CSS for ${project} here */`);
      fs.writeFileSync(path.join(projectFolder, 'script.js'), `// Add your JS for ${project} here`);

      console.log(`Created folder and files for: ${project}`);
    } else {
      console.log(`Folder already exists for: ${project}`);
    }
  });
}

// Call the function to create folders and files
createProjectFolders();
