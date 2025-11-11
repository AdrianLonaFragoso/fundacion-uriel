document.addEventListener("DOMContentLoaded", () => {
  console.log("it works!");
  const dropdowns = document.querySelectorAll(".has-submenu");
  let timeoutId;

  // Check if screen is desktop (lg breakpoint and above)
  const isDesktop = () => window.innerWidth >= 1024; // Tailwind's lg breakpoint is 1024px

  const setupDropdowns = () => {
    dropdowns.forEach((dropdown) => {
      const submenu = dropdown.querySelector(".submenu");
      
      // Remove existing event listeners to prevent duplicates
      dropdown.removeEventListener("mouseenter", handleMouseEnter);
      dropdown.removeEventListener("mouseleave", handleMouseLeave);
      if (submenu) {
        submenu.removeEventListener("mouseenter", handleSubmenuEnter);
        submenu.removeEventListener("mouseleave", handleSubmenuLeave);
      }

      // Only add event listeners for desktop
      if (isDesktop()) {
        dropdown.addEventListener("mouseenter", handleMouseEnter);
        dropdown.addEventListener("mouseleave", handleMouseLeave);
        if (submenu) {
          submenu.addEventListener("mouseenter", handleSubmenuEnter);
          submenu.addEventListener("mouseleave", handleSubmenuLeave);
        }
      }
    });
  };

  const handleMouseEnter = (e) => {
    if (!isDesktop()) return;
    const submenu = e.currentTarget.querySelector(".submenu");
    clearTimeout(timeoutId);
    submenu?.classList.remove("lg:hidden", "lg:opacity-0");
    submenu?.classList.add("lg:block", "lg:opacity-100");
  };

  const handleMouseLeave = (e) => {
    if (!isDesktop()) return;
    const submenu = e.currentTarget.querySelector(".submenu");
    timeoutId = setTimeout(() => {
      submenu?.classList.add("lg:hidden", "lg:opacity-0");
      submenu?.classList.remove("lg:block", "lg:opacity-100");
    }, 200);
  };

  const handleSubmenuEnter = (e) => {
    if (!isDesktop()) return;
    clearTimeout(timeoutId);
  };

  const handleSubmenuLeave = (e) => {
    if (!isDesktop()) return;
    timeoutId = setTimeout(() => {
      e.currentTarget.classList.add("lg:hidden", "opacity-0");
      e.currentTarget.classList.remove("opacity-100");
    }, 200);
  };

  // Initial setup
  setupDropdowns();

  // Update on window resize
  window.addEventListener('resize', setupDropdowns);
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

// showDonate = () => {
//   const donateBtn = document.querySelector("#donateCard");

//   donateBtn.classList.remove("right-[-450px]");
//   donateBtn.classList.add("right-0");
// };

// hideDonate = () => {
//   const donateBtn = document.querySelector("#donateCard");

//   donateBtn.classList.add("right-[-450px]");
//   donateBtn.classList.remove("right-0");
// };

openPaypalPopup = (event) => {
  event.preventDefault();
  const url = "https://www.paypal.com/donate?hosted_button_id=CQYKVESADGHPW";
  const width = 500;
  const height = 700;
  const left = (window.innerWidth - width) / 2;
  const top = (window.innerHeight - height) / 2;
  window.open(
    url,
    "PayPal Donation",
    `width=${width},height=${height},top=${top},left=${left}`
  );
};
