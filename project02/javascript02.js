const sidebar = document.getElementById("sidebar");

function openMenu(){
  sidebar.classList.remove("-translate-x-full");
}

function closeMenu(){
  sidebar.classList.add("-translate-x-full");
}
