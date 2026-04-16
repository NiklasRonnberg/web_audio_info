document.addEventListener("DOMContentLoaded", () => {
    const iframe = document.getElementById("content-frame");
    const links = document.querySelectorAll(".top-menu a[data-url]");

    links.forEach(link => {
        link.addEventListener("click", event => {
            event.preventDefault();

            // Update iframe
            iframe.src = link.dataset.url;

            // Update menu highlight
            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });

    const initial = Array.from(links).find(
        l => l.dataset.url === iframe.src
    );
    if (initial) {
        initial.classList.add("active");
    }
});