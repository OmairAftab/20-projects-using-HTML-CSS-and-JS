const scrollindicator=document.getElementById("indicator");

const scrollheight=document.body.scrollHeight-window.innerHeight;

function updatescroll() {
    const scrollpercentage=(window.scrollY/scrollheight) *100;
    scrollindicator.style.width=scrollpercentage+"%";
}

window.addEventListener("scroll",updatescroll);
updatescroll();