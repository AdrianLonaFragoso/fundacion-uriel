document.addEventListener("DOMContentLoaded", () => {
  console.log("it works!");
  const dropdowns = document.querySelectorAll(".has-submenu");

  let timeoutId;

  dropdowns.forEach((dropdown) => {
    const submenu = dropdown.querySelector(".submenu");

    dropdown.addEventListener("mouseenter", () => {
      clearTimeout(timeoutId);
      submenu.classList.remove("lg:hidden", "lg:opacity-0");
      submenu.classList.add("lg:block", "lg:opacity-100");
    });

    dropdown.addEventListener("mouseleave", () => {
      timeoutId = setTimeout(() => {
        submenu.classList.add("lg:hidden", "lg:opacity-0");
        submenu.classList.remove("lg:block", "lg:opacity-100");
      }, 200);
    });

    submenu.addEventListener("mouseenter", () => {
      clearTimeout(timeoutId);
    });

    submenu.addEventListener("mouseleave", () => {
      timeoutId = setTimeout(() => {
        submenu.classList.add("lg:hidden", "opacity-0");
        submenu.classList.remove("opacity-100");
      }, 200);
    });
  });
});

const toggleButtonVisibility = () => {
  const handleScroll = () => {
    const button = document.querySelector("#btnUp");
    if (button) {
      button.classList.toggle("hidden", window.scrollY <= 768);
    }
  };

  window.addEventListener("scroll", handleScroll);
  handleScroll();
};

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
