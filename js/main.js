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
        position +=
            itemsLeft >= slidesToScroll ? movePosition : itemsLeft * itemWidth;
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
            btnPrev.style.color = "grey";
            btnPrev.addEventListener('mouseover', () => {
                btnPrev.style.color = 'grey';
                btnPrev.style.cursor = 'initial';
            })
            btnPrev.addEventListener('mouseout', () => {
                btnPrev.style.color = 'grey';
                btnPrev.style.cursor = 'initial';
            })
        } else if (!btnPrev.disabled) {
            btnPrev.style.color = "#69577f";
            btnPrev.addEventListener('mouseover', () => {
                btnPrev.style.color = '#9481AC';
                btnPrev.style.cursor = 'pointer';
            })
            btnPrev.addEventListener('mouseout', () => {
                btnPrev.style.color = '#69577f';
            })
        }
        if (btnNext.disabled) {
            btnNext.style.color = "grey";
            btnNext.addEventListener('mouseover', () => {
                btnNext.style.color = 'grey';
                btnNext.style.cursor = 'initial';
            })
        } else if (!btnNext.disabled) {
            btnNext.style.color = "#69577f";
            btnNext.addEventListener('mouseover', () => {
                btnNext.style.color = '#9481AC';
                btnNext.style.cursor = 'pointer';
            })
            btnNext.addEventListener('mouseout', () => {
                btnNext.style.color = '#69577f';
            })
        }
    };
    checkBtns();
};

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
        if (btnPrev.disabled) {
            btnPrev.style.color = "grey";
            btnPrev.addEventListener('mouseover', () => {
                btnPrev.style.color = 'grey';
                btnPrev.style.cursor = 'initial';
            })
            btnPrev.addEventListener('mouseout', () => {
                btnPrev.style.color = 'grey';
                btnPrev.style.cursor = 'initial';
            })
        } else if (!btnPrev.disabled) {
            btnPrev.style.color = "#69577f";
            btnPrev.addEventListener('mouseover', () => {
                btnPrev.style.color = '#9481AC';
                btnPrev.style.cursor = 'pointer';
            })
            btnPrev.addEventListener('mouseout', () => {
                btnPrev.style.color = '#69577f';
            })
        }
        if (btnNext.disabled) {
            btnNext.style.color = "grey";
            btnNext.addEventListener('mouseover', () => {
                btnNext.style.color = 'grey';
                btnNext.style.cursor = 'initial';
            })
        } else if (!btnNext.disabled) {
            btnNext.style.color = "#69577f";
            btnNext.addEventListener('mouseover', () => {
                btnNext.style.color = '#9481AC';
                btnNext.style.cursor = 'pointer';
            })
            btnNext.addEventListener('mouseout', () => {
                btnNext.style.color = '#69577f';
            })
        }


    };

    checkBtns();
};
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
        if (btnPrev.disabled) {
            btnPrev.style.color = "grey";
            btnPrev.addEventListener('mouseover', () => {
                btnPrev.style.color = 'grey';
                btnPrev.style.cursor = 'initial';
            })
            btnPrev.addEventListener('mouseout', () => {
                btnPrev.style.color = 'grey';
                btnPrev.style.cursor = 'initial';
            })
        } else if (!btnPrev.disabled) {
            btnPrev.style.color = "#69577f";
            btnPrev.addEventListener('mouseover', () => {
                btnPrev.style.color = '#9481AC';
                btnPrev.style.cursor = 'pointer';
            })
            btnPrev.addEventListener('mouseout', () => {
                btnPrev.style.color = '#69577f';
            })
        }
        if (btnNext.disabled) {
            btnNext.style.color = "grey";
            btnNext.addEventListener('mouseover', () => {
                btnNext.style.color = 'grey';
                btnNext.style.cursor = 'initial';
            })
        } else if (!btnNext.disabled) {
            btnNext.style.color = "#69577f";
            btnNext.addEventListener('mouseover', () => {
                btnNext.style.color = '#9481AC';
                btnNext.style.cursor = 'pointer';
            })
            btnNext.addEventListener('mouseout', () => {
                btnNext.style.color = '#69577f';
            })
        }
    };

    checkBtns();
};

testimSlider();
photoSlider1();
photoSlider2();

// //Sticky menu background
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


window.onload = () => {
    const options = {
        // родитель целевого элемента - область просмотра
        root: null,
        // без отступов
        rootMargin: '0px',
        // процент пересечения - половина изображения
        threshold: 0.5
    }
    const observer = new IntersectionObserver((entries, observer) => {
        // для каждой записи-целевого элемента
        entries.forEach(entry => {
            // если элемент является наблюдаемым
            if (entry.isIntersecting) {
                const section = entry.target
                // выводим информацию в консоль - проверка работоспособности наблюдателя
                console.log(section)
                // меняем фон контейнера
                // section.style.background = 'deepskyblue'

                // прекращаем наблюдение
                observer.unobserve(section)
            }
        })
    }, options)

    // с помощью цикла следим за всеми img на странице
    // const arr = document.querySelectorAll('img')
    // arr.forEach(i => {
    //     observer.observe(i)
    // })

    const arr = document.querySelectorAll('section')
    arr.forEach(i => {
        observer.observe(i)
    })
}

// Animate logo
// let logoAnim = anime({
//     delay: 1000,
//     targets: "#logo",
//     duration: 6000,
//     rotate: "1turn",
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

particlesJS("particles-container", {
    "particles": {
        "number": {
            "value": 20,
            "density": {
                "enable": false,
                "value_area": 800
            }
        },
        "color": {
            "value": "#f9e9f4"
        },
        "shape": {
            "type": "circle",
            "stroke": {
                "width": 0,
                "color": "#000000"
            },
            "polygon": {
                "nb_sides": 6
            },
            "image": {
                "src": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Five_Pointed_Star_Solid.svg/390px-Five_Pointed_Star_Solid.svg.png",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 1,
            "random": false,
            "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
            }
        },
        "size": {
            "value": 19.729625216039402,
            "random": false,
            "anim": {
                "enable": true,
                "speed": 5,
                "size_min": 3,
                "sync": false
            }
        },
        "line_linked": {
            "enable": false,
            "distance": 150,
            "color": "#ffffff",
            "opacity": 0.4,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 3,
            "direction": "none",
            "random": true,
            "straight": false,
            "out_mode": "bounce",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 3044.57904688652,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": false,
                "mode": "repulse"
            },
            "onclick": {
                "enable": false,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 1
                }
            },
            "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
            },
            "repulse": {
                "distance": 200,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 4
            },
            "remove": {
                "particles_nb": 2
            }
        }
    },
    "retina_detect": true
});

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



