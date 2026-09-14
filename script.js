
/* ==========================================
   PAGE TRANSITION
========================================== */

document.addEventListener("DOMContentLoaded", () => {

    document.querySelectorAll("a").forEach(link => {

        const href = link.getAttribute("href");

        if(
            !href ||
            href.startsWith("#") ||
            href.startsWith("http") ||
            href.startsWith("mailto:")
        ){
            return;
        }

        link.addEventListener("click", function(e){

            e.preventDefault();

            const destination = this.href;

            document.body.classList.add("leaving");

            setTimeout(() => {
                window.location.href = destination;
            }, 700);

        });

    });

});


/* ==========================================
   SCROLL REVEAL
========================================== */

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    entries => {

        entries.forEach(entry => {

            if(entry.isIntersecting){
                entry.target.classList.add("active");
            }

        });

    },
    {
        threshold:0.12
    }
);

revealElements.forEach(el => {
    revealObserver.observe(el);
});


/* ==========================================
   CERTIFICATE LIGHTBOX
========================================== */

const lightbox = document.querySelector(".lightbox");
const lightboxImage = document.querySelector(".lightbox img");
const closeLightbox = document.querySelector(".close-lightbox");

document.querySelectorAll(".certificate-img").forEach(item => {

    item.addEventListener("click", () => {

        const image = item.querySelector("img");

        if(!image) return;

        lightboxImage.src = image.src;
        lightbox.classList.add("show");

    });

});


if(closeLightbox){

    closeLightbox.addEventListener("click", () => {
        lightbox.classList.remove("show");
    });

}


if(lightbox){

    lightbox.addEventListener("click", e => {

        if(e.target === lightbox){
            lightbox.classList.remove("show");
        }

    });

}


document.addEventListener("keydown", e => {

    if(e.key === "Escape" && lightbox){
        lightbox.classList.remove("show");
    }

});

