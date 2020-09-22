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


// window.onload = () => {
//     const options = {
//         // родитель целевого элемента - область просмотра
//         root: null,
//         // без отступов
//         rootMargin: '0px',
//         // процент пересечения - половина изображения
//         threshold: 0.5
//     }
//     const observer = new IntersectionObserver((entries, observer) => {
//         // для каждой записи-целевого элемента
//         entries.forEach(entry => {
//             // если элемент является наблюдаемым
//             if (entry.isIntersecting) {
//                 const section = entry.target
//                 // выводим информацию в консоль - проверка работоспособности наблюдателя
//                 console.log(section)
//                 // меняем фон контейнера
//                 // section.style.background = 'deepskyblue'
//
//                 // прекращаем наблюдение
//                 observer.unobserve(section)
//             }
//         })
//     }, options)
//
//     // с помощью цикла следим за всеми img на странице
//     // const arr = document.querySelectorAll('img')
//     // arr.forEach(i => {
//     //     observer.observe(i)
//     // })
//
//     const arr = document.querySelectorAll('section')
//     arr.forEach(i => {
//         observer.observe(i)
//     })
// }


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
    duration: 500,
    easing: 'linear',
    opacity: 0,
    // rotate: '1turn',
    keyframes: [
        {scale: 0},
        {opacity: 1, scale: 1.2},
        {scale: 1},
    ],
});

window.onload = function () {
    // window.setTimeout(function () {
        document.body.classList.add('loaded_hiding');
        window.setTimeout(function () {
            document.body.classList.add('loaded');
            document.body.classList.remove('loaded_hiding');
        }, 500);
    // }, 1000)
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
    threshold: .5
})

observer.observe(document.querySelector('.left_item'))
observer.observe(document.querySelector('.mid_item'))
observer.observe(document.querySelector('.right_item'))
observer.observe(document.querySelector('.about_me_block'))
observer.observe(document.querySelector('.gallery'))
observer.observe(document.querySelector('.testimonials'))
observer.observe(document.querySelector('.contact_us'))



