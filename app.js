function hideContainer(container) {
  document
    .querySelectorAll(container)
    .forEach((el) => (el.style.display = "none"));

  alert("Refresh the page to see the content again.");

  console.log("Hello Javascript")
  console.log(navigator.userAgent)
}
