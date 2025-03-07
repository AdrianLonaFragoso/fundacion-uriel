const toggleButtonVisibility = () => {
  const handleScroll = () => {
    const button = document.querySelector("#btnUp");
    if (button) {
      button.classList.toggle("hidden", window.scrollY <= 768);
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll(); // Revisar el estado inicial por si el botón ya existe
};

// Iniciar la función
toggleButtonVisibility();

openSidenav = () => {
  const open = document.getElementById("sidenav");

  open.classList.remove("-left-80");
  open.classList.add("left-0");
};

closeSidenav = () => {
  const open = document.getElementById("sidenav");

  open.classList.remove("left-0");
  open.classList.add("-left-80");
};
