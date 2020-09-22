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
