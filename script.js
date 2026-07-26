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
