let slideIndex = 0;

    function moveSlide(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        const slides = document.querySelectorAll('.gallery-slider img');
        if (n >= slides.length) { slideIndex = 0 }
        if (n < 0) { slideIndex = slides.length - 1 }
        const offset = -slideIndex * 100;
        document.querySelector('.gallery-slider').style.transform = `translateX(${offset}%)`;
    }