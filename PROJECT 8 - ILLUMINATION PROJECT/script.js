document.addEventListener("DOMContentLoaded", () => {
    const root = document.documentElement;

    document.addEventListener("mousemove", (e) => {
        root.style.setProperty("--x", e.clientX + "px");
        root.style.setProperty("--y", e.clientY + "px");
    });
});