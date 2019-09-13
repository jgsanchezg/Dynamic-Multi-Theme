// Import stylesheets
import './style.css';
import './functions.js'

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Dynamic Multi Theme</h1>`;
appDiv.innerHTML += `<br><button onclick="changeTheme('themeOne')">Theme One</button>`;
appDiv.innerHTML += `<br><button onclick="changeTheme('themeTwo')">Theme Two</button>`;


