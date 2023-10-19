document.addEventListener("DOMContentLoaded", () => {
  function handleUpClick(event) {
    event.preventDefault();
    const parentLi = event.target.closest("li");
    if (parentLi) {
      parentLi.classList.add("collapsed");
    }
  }

  function handleDownClick(event) {
    event.preventDefault();
    const parentLi = event.target.closest("li");
    if (parentLi) {
      parentLi.classList.remove("collapsed");
    }
  }

  for (const element of document.getElementsByClassName("up")) {
    element.addEventListener("click", handleUpClick);
  }

  for (const element of document.getElementsByClassName("down")) {
    element.addEventListener("click", handleDownClick);
  }
});
