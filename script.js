
/* =========================================================
   GALAXY WARP PAGE TRANSITION
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    /*
       สร้างระบบ Transition อัตโนมัติ
    */

    const transition = document.createElement("div");

    transition.className = "dimension-transition";

    transition.innerHTML = `

        <div class="warp-stars"></div>

        <div class="galaxy-spiral"></div>

        <div class="wormhole"></div>

        <div class="dimension-flash"></div>

        <div class="dimension-text">

            <span>ENTERING NEXT DIMENSION</span>

            <strong>WARPING...</strong>

        </div>

    `;

    document.body.appendChild(transition);


    /* =====================================================
       สร้างดาวจำนวนมาก
    ===================================================== */

    const starContainer =
        transition.querySelector(".warp-stars");


    for(let i = 0; i < 180; i++){

        const star =
            document.createElement("span");

        star.className = "warp-star";


        /*
           กระจายดาวรอบจุดศูนย์กลาง
        */

        const x =
            (Math.random() - 0.5) * 100 + "vw";

        const y =
            (Math.random() - 0.5) * 100 + "vh";


        star.style.setProperty("--x", x);
        star.style.setProperty("--y", y);


        /*
           ทำให้ดาวแต่ละดวงเริ่มไม่พร้อมกัน
        */

        star.style.animationDelay =
            Math.random() * .35 + "s";


        /*
           ขนาดดาว
        */

        const size =
            Math.random() * 2.5 + 1;


        star.style.width = size + "px";
        star.style.height = size + "px";


        starContainer.appendChild(star);

    }


    /* =====================================================
       PAGE LINKS
    ===================================================== */

    document.querySelectorAll("a").forEach(link => {

        const href =
            link.getAttribute("href");


        /*
           ไม่ทำ Transition กับ
           anchor / external link / mail
        */

        if(
            !href ||
            href.startsWith("#") ||
            href.startsWith("http") ||
            href.startsWith("mailto:") ||
            link.target === "_blank"
        ){
            return;
        }


        link.addEventListener("click", function(e){

            e.preventDefault();


            const destination =
                this.href;


            /*
               เริ่ม Warp
            */

            document.body.classList.add("warping");

            transition.classList.add("active");


            /*
               เปลี่ยนหน้าเมื่อ Animation
               ทะลุมิติไปถึงจุดสูงสุด
            */

            setTimeout(() => {

                window.location.href =
                    destination;

            }, 1150);

        });

    });

});


/* =========================================================
   SCROLL REVEAL
========================================================= */

const revealElements =
    document.querySelectorAll(".reveal");


const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if(entry.isIntersecting){

                    entry.target.classList.add("active");

                }

            });

        },

        {
            threshold:.12
        }

    );


revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================================================
   CERTIFICATE LIGHTBOX
========================================================= */

const lightbox =
    document.querySelector(".lightbox");

const lightboxImage =
    document.querySelector(".lightbox img");

const closeLightbox =
    document.querySelector(".close-lightbox");


document.querySelectorAll(".certificate-img")
.forEach(item => {

    item.addEventListener("click", () => {

        const image =
            item.querySelector("img");


        if(!image) return;


        lightboxImage.src =
            image.src;


        lightbox.classList.add("show");

    });

});


if(closeLightbox){

    closeLightbox.addEventListener(
        "click",
        () => {

            lightbox.classList.remove("show");

        }
    );

}


if(lightbox){

    lightbox.addEventListener(
        "click",
        e => {

            if(e.target === lightbox){

                lightbox.classList.remove("show");

            }

        }
    );

}


document.addEventListener(
    "keydown",
    e => {

        if(
            e.key === "Escape" &&
            lightbox
        ){

            lightbox.classList.remove("show");

        }

    }
);

