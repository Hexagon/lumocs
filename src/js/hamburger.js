document.addEventListener("DOMContentLoaded", () => {
  let position = undefined;

  // Show/Hide hamburger menu
  document.getElementById("hamburger-wrapper").addEventListener(
    "click",
    function () {
      const sidebar = document.querySelector(".menu");
      if (sidebar.style.display === "none" || sidebar.style.display === "") {
        sidebar.style.display = "inline";
      } else {
        sidebar.style.display = "";
      }
      position = window.scrollY;
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  );

  // Hide hamburger menu when clicking outside
  document.addEventListener("click", function (event) {
    const sidebar = document.querySelector(".menu");
    const isClickInside = sidebar.contains(event.target);
    const isHamburgerClicked = document.getElementById("hamburger-wrapper")
      .contains(event.target);
    if (!isClickInside && !isHamburgerClicked && window.innerWidth <= 992) {
      sidebar.style.display = "";
      window.scrollTo({ top: position, behavior: "smooth" });
    }
  });
});
