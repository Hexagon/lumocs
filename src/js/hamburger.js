document.addEventListener("DOMContentLoaded", () => {

  let position = undefined;

  // Show/Hide hamburger menu
  document.getElementById("hamburger-wrapper").addEventListener(
    "click",
    function () {
      const sidebar = document.querySelector("aside");
      if (sidebar.style.display === "none" || sidebar.style.display === "") {
        sidebar.style.display = "block";
      } else {
        sidebar.style.display = "";
      }
      position = window.scrollY;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
  );

  // Hide hamburger menu when clicking outside
  document.addEventListener("click", function (event) {
    const sidebar = document.querySelector("aside");
    const isClickInside = sidebar.contains(event.target);
    const isHamburgerClicked = document.getElementById("hamburger-wrapper")
      .contains(event.target);
    if (!isClickInside && !isHamburgerClicked && window.innerWidth <= 992) {
      sidebar.style.display = "";
      window.scrollTo({ top: position, behavior: 'smooth' });
    }
  });

  document.getElementById("top_link").addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
  
});
