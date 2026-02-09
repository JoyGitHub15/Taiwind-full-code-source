const sidebar = document.getElementById("sidebar");

function openMenu() {
  sidebar.classList.remove("-translate-y-full");
  sidebar.classList.add("translate-y-0");
}

function closeMenu() {
  sidebar.classList.remove("translate-y-0");
  sidebar.classList.add("-translate-y-full");
}
