// Slider testimonials

const testimSlider = () => {
    let position = 0;
    const slidesToShow = 1;
    const slidesToScroll = 1;
    const container = document.querySelector(".slider-container");
    const track = document.querySelector(".slider-track");
    const items = document.querySelectorAll(".slider-item");
    const itemsCount = items.length;
    const btnPrev = document.querySelector(".btn-prev");
    const btnNext = document.querySelector(".btn-next");
    const itemWidth = container.clientWidth / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;
    let n = 0;

    items.forEach((item) => {
        item.style.minWidth = `${itemWidth}px`;
    });

    btnNext.addEventListener("click", () => {
        if (!btnNext.disabled) {
            n += 2;
        }
        const itemsLeft =
            itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

        position -=
            itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
        setPosition(n);
        checkBtns();
    });

    btnPrev.addEventListener("click", () => {
        if (!btnPrev.disabled) {
            n -= 2;
        }
        const itemsLeft = Math.abs(position) / itemWidth;
        position += itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
        setPosition(n);
        checkBtns();
    });

    const setPosition = (n) => {
        track.style.transform = `translateX(${position - n}px)`;
    };
    const checkBtns = () => {
        btnPrev.disabled = position === 0;
        btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
        if (btnPrev.disabled) {
            btnPrev.style.color = '#333'
        } else {
            btnPrev.style.color = '#69577F'
        }
        if (btnNext.disabled) {
            btnNext.style.color = '#333'
        } else {
            btnNext.style.color = '#69577F'
        }
    };
    checkBtns();
}


//Slider photo_1

const photoSlider1 = () => {
    let position = 0;
    const slidesToShow = 1;
    const slidesToScroll = 1;
    const container = document.querySelector(".photo-container1");
    const track = document.querySelector(".photo-track1");
    const items = document.querySelectorAll(".photo-item1");
    const itemsCount = items.length;
    const btnPrev = document.querySelector("#ps1-btn-prev");
    const btnNext = document.querySelector("#ps1-btn-next");
    const itemWidth = container.clientWidth / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;

    items.forEach((item) => {
        item.style.minWidth = `${itemWidth}px`;
    });

    btnNext.addEventListener("click", () => {
        const itemsLeft =
            itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

        position -=
            itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
        setPosition();
        checkBtns();
    });

    btnPrev.addEventListener("click", () => {
        const itemsLeft = Math.abs(position) / itemWidth;
        position +=
            itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
        setPosition();
        checkBtns();
    });

    const setPosition = () => {
        track.style.transform = `translateX(${position}px)`;
    };
    const checkBtns = () => {
        btnPrev.disabled = position === 0;
        btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;
    };

    checkBtns();
}
const photoSlider2 = () => {
    let position = 0;
    const slidesToShow = 1;
    const slidesToScroll = 1;
    const container = document.querySelector(".photo-container2");
    const track = document.querySelector(".photo-track2");
    const items = document.querySelectorAll(".photo-item2");
    const itemsCount = items.length;
    const btnPrev = document.querySelector("#ps2-btn-prev");
    const btnNext = document.querySelector("#ps2-btn-next");
    const itemWidth = container.clientWidth / slidesToShow;
    const movePosition = slidesToScroll * itemWidth;

    items.forEach((item) => {
        item.style.minWidth = `${itemWidth}px`;
    });

    btnNext.addEventListener("click", () => {
        const itemsLeft =
            itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;

        position -=
            itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
        setPosition();
        checkBtns();
    });

    btnPrev.addEventListener("click", () => {
        const itemsLeft = Math.abs(position) / itemWidth;
        position +=
            itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
        setPosition();
        checkBtns();
    });

    const setPosition = () => {
        track.style.transform = `translateX(${position}px)`;
    };
    const checkBtns = () => {
        btnPrev.disabled = position === 0;
        btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;

    };

    checkBtns();
}

testimSlider();
photoSlider1();
photoSlider2();


// //Sticky menu background
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function () {
    if (window.scrollY > 100) {
        navbar.style.background = '#F9E9F4'
        navbar.style.opacity = 0.9;
        navbar.style.padding = '1.5rem 3rem';
    } else {
        navbar.style.background = "none"
        navbar.style.padding = '3rem 3rem 0.5rem 3rem';
    }
})


// //Smooth scrolling
$('.navbar a').on('click', function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top
            },
            800
        )
    }
})


