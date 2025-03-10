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

showDonate = () => {
  const donateBtn = document.querySelector("#donateCard");

  donateBtn.classList.remove("right-[-450px]");
  donateBtn.classList.add("right-0");
};

hideDonate = () => {
  const donateBtn = document.querySelector("#donateCard");

  donateBtn.classList.add("right-[-450px]");
  donateBtn.classList.remove("right-0");
};

const formatNumber = (num) => new Intl.NumberFormat("en-US").format(num);

const animateCounter = (element, start, end, duration) => {
  return new Promise((resolve) => {
    const startTime = performance.now();

    const updateCounter = (currentTime) => {
      const elapsedTime = currentTime - startTime;
      const progress = Math.min(elapsedTime / duration, 1);
      const value = Math.floor(progress * (end - start) + start);

      element.textContent = formatNumber(value);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      } else {
        resolve(); // Finaliza la animación
      }
    };

    requestAnimationFrame(updateCounter);
  });
};

(async () => {
  const counterElement = document.getElementById("contador");
  await animateCounter(counterElement, 0, 24_407, 2000); // Desde 0 hasta 25,000 en 2s
})();
