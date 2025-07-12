const items = document.querySelectorAll(".hero-carousel-item");
const carousel = document.querySelector(".hero-carousel");
gsap.registerPlugin(ScrollTrigger);


const isTouchDevice = () => {
    return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
};


if (!isTouchDevice()) {
    document.addEventListener("mousemove", (e) => {
        const centerX = window.innerWidth / 2;
        const offsetX = (e.clientX - centerX) / centerX;
        const moveX = offsetX * 25;

        items.forEach((item) => {
            gsap.to(item, {
                x: moveX,
                duration: 0.2,
                ease: "power1.out"
            });
        });
    });

    document.addEventListener("mouseleave", () => {
        items.forEach((item) => {
            gsap.to(item, {
                x: 0,
                duration: 0.3,
                ease: "power1.out"
            });
        });
    });
}




window.addEventListener("load", () => {
    if (isTouchDevice() && carousel) {
        const scrollCenter = (carousel.scrollWidth - carousel.clientWidth) / 2;
        carousel.scrollLeft = scrollCenter;
    }
});



gsap.to(".hovering-element", {
    y: 20,
    x: 0,
    duration: 3,
    rotate:4,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1
});

gsap.to(".hovering-element-tablet", {
    y: 20,
    x: 0,
    duration: 3,
    rotate:1,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1
});

gsap.to(".hovering-element-two", {
    y: 20,
    x: 0,
    duration: 3,
    rotate:1,
    ease: "power1.inOut",
    yoyo: true,
    repeat: -1
});
const element = document.querySelector(".animate-element");

if (element && window.getComputedStyle(element).display !== "none") {
    gsap.to(element, {
        y: 20,
        x: 0,
        rotate: 4,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
    });
}

const elementServices = document.querySelector(".services-animate-decor");


if (elementServices && window.getComputedStyle(element)) {
    gsap.to(elementServices, {
        y: 20,
        x: 0,
        rotate: 4,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1
    });
}




const cards = document.querySelectorAll(".cart-animate");

if(cards){
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".carts-animate",
            start: "top 80%",
            end: "bottom top",
            toggleActions: "play reverse play reverse",
        }
    });

    tl.fromTo(cards[2],
        {
            top: "120px",
            left: "26px",
            rotation: 0,
            opacity: 0,
            y: 30
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "back.out(1.7)"
        }
    )
        .fromTo(cards[1],
            {
                top: "90px",
                left: "40px",
                rotation: 0,
                opacity: 0,
                y: 60
            },
            {
                rotation: 9,
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "back.out(1.7)"
            },
            "-=0.4"
        )
        .fromTo(cards[0],
            {
                top: "65px",
                left: "62px",
                rotation: 0,
                opacity: 0,
                y: 60
            },
            {
                rotation: 16,
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "back.out(1.7)"
            },
            "-=0.4"
        );
    window.addEventListener("load", () => {
        ScrollTrigger.refresh();
    });
}




const desktopCards = document.querySelectorAll(".desktop-cart-animate");
if(desktopCards){
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".desktop-cart-animate",
            start: "top 80%",
            end: "bottom top",
            toggleActions: "play reverse play reverse",
        }
    });

    tl.fromTo(desktopCards[2],
        {
            top: "120px",
            left: "26px",
            rotation: 0,
            opacity: 0,
            y: 30
        },
        {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "back.out(1.7)"
        }
    )
        .fromTo(desktopCards[1],
            {
                top: "90px",
                left: "40px",
                rotation: 0,
                opacity: 0,
                y: 60
            },
            {
                rotation: 9,
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "back.out(1.7)"
            },
            "-=0.4"
        )
        .fromTo(desktopCards[0],
            {
                top: "65px",
                left: "62px",
                rotation: 0,
                opacity: 0,
                y: 60
            },
            {
                rotation: 16,
                opacity: 1,
                y: 0,
                duration: 0.6,
                ease: "back.out(1.7)"
            },
            "-=0.4"
        );
    window.addEventListener("load", () => {
        ScrollTrigger.refresh();
    });
}









const whiteCards = document.querySelectorAll(".white-item-cart");

if(whiteCards){
    gsap.set(whiteCards, { opacity: 0, y: 50 });

    gsap.to(whiteCards, {
        scrollTrigger: {
            trigger: ".technology-white-item",
            start: "top 80%",
            end: "bottom top",
            toggleActions: "play reverse play reverse",
        },
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: "back.out(1.7)",
        stagger: 0.1
    });

    window.addEventListener("load", () => {
        ScrollTrigger.refresh();
    });
}


gsap.to(".technology-animate-img img", {
    scrollTrigger: {
        trigger: ".technology-animate-img",
        start: "top bottom",
        end: "bottom top",
        scrub: true,
    },
    rotate: 90,
    ease: "none",
});



const btns = document.querySelectorAll('.animate-btn');

btns.forEach((btn) => {
    const icon = btn.querySelector('.animate-btn-icon');

    let hovered = false;

    function runAnimation() {
        if (hovered) return;

        const btnWidth = btn.offsetWidth;
        const iconWidth = icon.offsetWidth;
        const moveX = btnWidth - iconWidth - 16;

        let step1Done = false;
        let step2Done = false;
        let step3Done = false;

        const tween = gsap.to(icon, {
            x: moveX,
            rotation: 360,
            duration: 1.5,
            ease: "power2.inOut",
            onUpdate: () => {
                const progress = tween.progress();

                if (progress > 0.2 && !step1Done) {
                    btn.classList.add('step-1');
                    step1Done = true;
                }

                if (progress > 0.5 && !step2Done) {
                    btn.classList.add('step-2');

                    step2Done = true;

                }

                if (progress > 0.9 && !step3Done) {
                    btn.classList.add('step-3');
                    icon.classList.add('active');
                    step3Done = true;
                }
            },
            onComplete: () => {
                gsap.to(icon, {
                    x: 0,
                    rotation: 0,
                    duration: 1.5,
                    ease: "power2.inOut",
                    onStart: () => {
                        btn.classList.remove('step-1', 'step-2');
                        icon.classList.remove('active');
                        step1Done = false;
                        step2Done = false;
                        step3Done = false;
                    },
                    onComplete: () => {
                        btn.classList.remove('step-3');

                    }
                });
            }
        });
    }

    btn.addEventListener('mouseenter', () => {
        hovered = true;
        gsap.killTweensOf(icon);
        gsap.to(icon, {
            x: 0,
            rotation: 0,
            duration: 0.5,
            ease: "power2.out"
        });
        btn.classList.remove('step-1', 'step-2', 'step-3');
        icon.classList.remove('active');
    });

    btn.addEventListener('mouseleave', () => {
        hovered = false;
    });

    runAnimation();
    setInterval(runAnimation, 5000);
});


document.addEventListener('DOMContentLoaded', () => {
    const animationMap = {
        "fade-in-left": { x: -100, opacity: 0 },
        "fade-in-right": { x: 100, opacity: 0 },
        "fade-in-top": { y: -100, opacity: 0 },
        "fade-in-bottom": { y: 100, opacity: 0 },
        "fade-in-scale": { scale: 0.8, opacity: 0 }
    };

    Object.keys(animationMap).forEach(className => {
        gsap.utils.toArray(`.${className}`).forEach(elem => {
            gsap.from(elem, {
                scrollTrigger: {
                    trigger: elem,
                    start: "top 80%",
                    toggleActions: "play reverse play reverse",
                },
                ...animationMap[className],
                duration: 1,
                ease: "power2.out"
            });
        });
    });
});