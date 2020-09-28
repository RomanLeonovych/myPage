//Sticky menu background
const navbar = document.querySelector(".navbar");
window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
        navbar.style.background = "#F9E9F4";
        navbar.style.opacity = 0.9;
        navbar.style.padding = "1.5rem 3rem";
    } else {
        navbar.style.background = "none";
        navbar.style.padding = "3rem 3rem 0.5rem 3rem";
    }
});

// //Smooth scrolling
$(".navbar a").on("click", function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top - 100,
            },
            800
        );
    }
});

// // //Smooth scrolling for mob
// $(".navbar_mob a").on("click", function (event) {
//     if (this.hash !== "") {
//         event.preventDefault();
//
//         const hash = this.hash;
//
//         $("html, body").animate(
//             {
//                 scrollTop: $(hash).offset().top - 100,
//             },
//             800
//         );
//     }
// });


//Animate About Us

// let leftBubbleAnim = anime({
//     targets: "#left_bubble",
//     direction: "alternative",
//     autoplay: false,
//     rotate: 360,
//     easing: "easeInOutQuad",
// });
// let leftBubbleAnimRev = anime({
//     targets: "#left_bubble",
//     direction: "alternative",
//     autoplay: false,
//     rotate: -360,
//     easing: "easeInOutQuad",
// });
//
// let leftBubble = document.getElementById("left_bubble");
// leftBubble.addEventListener("mouseover", () => {
//     leftBubbleAnim.play();
// });
// leftBubble.addEventListener("mouseout", () => {
//     leftBubbleAnimRev.play();
// });

// Animate logo
let logoAnim = anime({
    delay: 100,
    targets: ".preload_logo",
    // duration: 6000,
    duration: 900,
    easing: 'linear',
    opacity: 0,
    keyframes: [
        {scale: 0},
        {opacity: 1, scale: 1.2},
        {scale: 1},
    ],
});

window.onload = function () {
    document.body.classList.add('loaded_hiding');
    window.setTimeout(function () {
        document.body.classList.add('loaded');
        document.body.classList.remove('loaded_hiding');
    }, 900);
}


let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("fadeIn");
        }
        // else {
        //     entry.target.classList.remove('fadeIn');
        // }
    })
}, {
    threshold: .2
})

observer.observe(document.querySelector('.left_item'))
observer.observe(document.querySelector('.mid_item'))
observer.observe(document.querySelector('.right_item'))
observer.observe(document.querySelector('.about_me_block'))
observer.observe(document.querySelector('.about_me_block_mob'))
observer.observe(document.querySelector('.gallery'))
observer.observe(document.querySelector('.testimonials'))
observer.observe(document.querySelector('.contact_us'))


const links = document.querySelectorAll(".menu_link");
const hamburger = document.querySelector(".checkbox-toggle");

links.forEach(link => {
    link.addEventListener('click', () => {
        if (hamburger.checked) {
            hamburger.checked = false;
        }
    })
})


