/* ===========================================
   Abhishek Saini Portfolio
   =========================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* -------------------------------
       Navbar Scroll Effect
    --------------------------------*/

    const header = document.querySelector("header");

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {

            header.style.background = "rgba(15,23,42,.95)";
            header.style.boxShadow = "0 15px 40px rgba(0,0,0,.35)";

        } else {

            header.style.background = "rgba(15,23,42,.75)";
            header.style.boxShadow = "none";

        }

    });

    /* -------------------------------
       Smooth Scrolling
    --------------------------------*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });

            }

        });

    });

    /* -------------------------------
       Animated Statistics
    --------------------------------*/

    const counters = document.querySelectorAll(".stat-card h2");

    const speed = 70;

    const animateCounter = counter => {

        const text = counter.innerText;

        const number = parseInt(text.replace(/\D/g, ""));

        let current = 0;

        const increment = Math.ceil(number / speed);

        const update = () => {

            current += increment;

            if (current >= number) {

                counter.innerText = text;

            } else {

                counter.innerText = current + "+";

                requestAnimationFrame(update);

            }

        };

        update();

    };

    const observer = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                animateCounter(entry.target);

                observer.unobserve(entry.target);

            }

        });

    }, {

        threshold: 0.5

    });

    counters.forEach(counter => observer.observe(counter));

    /* -------------------------------
       Fade In Animation
    --------------------------------*/

    const revealItems = document.querySelectorAll(
        ".section, .stat-card, .skill-card, .timeline-item, .project-card"
    );

    revealItems.forEach(item => {

        item.style.opacity = "0";
        item.style.transform = "translateY(50px)";
        item.style.transition = "all .8s ease";

    });

    const revealObserver = new IntersectionObserver(entries => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";

            }

        });

    }, {

        threshold: .15

    });

    revealItems.forEach(item => revealObserver.observe(item));

    /* -------------------------------
       Hero Card Floating Animation
    --------------------------------*/

    const heroCard = document.querySelector(".hero-card");

    let direction = 1;

    setInterval(() => {

        if (!heroCard) return;

        heroCard.style.transform =
            direction === 1
                ? "translateY(-8px)"
                : "translateY(8px)";

        direction *= -1;

    }, 2500);

    /* -------------------------------
       Active Navigation
    --------------------------------*/

    const sections = document.querySelectorAll("section");

    const navLinks = document.querySelectorAll(".navbar ul li a");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const top = section.offsetTop - 140;

            if (pageYOffset >= top) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (link.getAttribute("href") === "#" + current) {

                link.classList.add("active");

            }

        });

    });

});
.navbar a.active{

    color:#38BDF8;

    font-weight:700;

}
/* ==========================================
   PREMIUM EFFECTS
========================================== */

.avatar{

    position:relative;

    overflow:hidden;

    animation:float 5s ease-in-out infinite;

}

.avatar::before{

    content:"";

    position:absolute;

    width:220%;

    height:220%;

    background:conic-gradient(

        transparent,

        rgba(255,255,255,.35),

        transparent

    );

    animation:rotate 6s linear infinite;

}

.avatar span{

    position:relative;

    z-index:10;

}

@keyframes rotate{

    from{

        transform:rotate(0deg);

    }

    to{

        transform:rotate(360deg);

    }

}

@keyframes float{

    0%{

        transform:translateY(0px);

    }

    50%{

        transform:translateY(-12px);

    }

    100%{

        transform:translateY(0px);

    }

}

/* ----------------------------- */

.skill-card{

    overflow:hidden;

    position:relative;

}

.skill-card::before{

    content:"";

    position:absolute;

    width:100%;

    height:4px;

    top:0;

    left:0;

    background:

    linear-gradient(

    90deg,

    #2563EB,

    #38BDF8

    );

}

/* ----------------------------- */

.project-card{

    overflow:hidden;

    position:relative;

}

.project-card::after{

    content:"";

    position:absolute;

    left:0;

    bottom:0;

    width:0;

    height:4px;

    background:#38BDF8;

    transition:.4s;

}

.project-card:hover::after{

    width:100%;

}

/* ----------------------------- */

.timeline-item{

    transition:.35s;

}

.timeline-item:hover{

    transform:translateX(10px);

}

/* ----------------------------- */

::-webkit-scrollbar{

    width:10px;

}

::-webkit-scrollbar-track{

    background:#111827;

}

::-webkit-scrollbar-thumb{

    background:#2563EB;

    border-radius:20px;

}

::-webkit-scrollbar-thumb:hover{

    background:#3B82F6;

}

/* ----------------------------- */

::selection{

    background:#2563EB;

    color:white;

}

/* ----------------------------- */

body::before{

    content:"";

    position:fixed;

    inset:0;

    pointer-events:none;

    background-image:

    radial-gradient(

        rgba(255,255,255,.03) 1px,

        transparent 1px

    );

    background-size:40px 40px;

    opacity:.4;

}
