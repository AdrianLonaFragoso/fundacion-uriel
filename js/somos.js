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
