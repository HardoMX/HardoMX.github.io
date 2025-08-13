// Theme switching button
// Check browser color scheme
let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
// Save preference locally
let theme = localStorage.getItem('theme');
if (theme == null && systemInitiatedDark) {
    localStorage.setItem('theme', 'dark');
    theme = 'dark';
} else if (theme === "dark") {
    localStorage.setItem('theme', 'dark');
} else {
    localStorage.setItem('theme', 'light');
}

//Set initial icon and theme-data
if (theme === "dark") {
    document.getElementById("moon").style.visibility = "hidden";
    document.getElementById("sun").style.visibility = "visible";
    document.documentElement.setAttribute('data-theme', 'dark');
} else {
    document.getElementById("moon").style.visibility = "visible";
    document.getElementById("sun").style.visibility = "hidden";
    document.documentElement.setAttribute('data-theme', 'light');
}

// Switch scheme
function modeSwitch() {
    if (document.documentElement.getAttribute('data-theme') === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        document.getElementById("moon").style.visibility = "visible";
        document.getElementById("sun").style.visibility = "hidden";
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        document.getElementById("moon").style.visibility = "hidden";
        document.getElementById("sun").style.visibility = "visible";
        localStorage.setItem('theme', 'dark');
    }
}



// Menu button
var menu = document.querySelector(".hamburger");
var sidebar = document.querySelector(".sidebar");
var expanded = false;

function toggleMenu() {
    menu.classList.toggle("hamburger-active");
    expanded = !expanded;
    menu.setAttribute("aria-expanded", expanded);
    sidebar.classList.toggle("sidebar-active");
}



// Close menu when nav menu is clicked
var navLinks = document.querySelectorAll(".navigation");

navLinks.forEach(link => {
    link.addEventListener("click", closeMenu)
});

function closeMenu() {
    if (window.innerWidth < 800) {
        toggleMenu();
        console.log("woo");
    }
}
