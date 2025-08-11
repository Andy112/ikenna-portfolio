document.addEventListener("DOMContentLoaded", function () {
  const main = document.getElementById("main-content");

  document.body.addEventListener("click", function (e) {
    const link = e.target.closest("a.nav-link");
    if (link && link.host === location.host) {
      e.preventDefault();
      fetch(link.href)
        .then(res => res.text())
        .then(html => {
          const parser = new DOMParser();
          const doc = parser.parseFromString(html, "text/html");
          const newContent = doc.querySelector("#main-content").innerHTML;

          // Fade-out / Fade-in animation
          main.classList.add("fade-out");
          setTimeout(() => {
            main.innerHTML = newContent;
            main.classList.remove("fade-out");
            main.classList.add("fade-in");
            setTimeout(() => main.classList.remove("fade-in"), 300);
          }, 300);

          history.pushState({}, "", link.href);
        });
    }
  });

  // Handle back/forward
  window.addEventListener("popstate", function () {
    fetch(location.href)
      .then(res => res.text())
      .then(html => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, "text/html");
        main.innerHTML = doc.querySelector("#main-content").innerHTML;
      });
  });
});
