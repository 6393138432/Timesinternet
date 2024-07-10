let items = document.querySelectorAll('.carousel .carousel-item')

items.forEach((el) => {
    const minPerSlide = 3
    let next = el.nextElementSibling
    for (var i = 1; i < minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})






    window.addEventListener('scroll', function() {
        var header = document.getElementById('header');
        if (window.scrollY > 300) {
            header.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        } else {
            header.style.backgroundColor = 'transparent';
        }
    });

$('#owlcarouselTestimonial').owlCarousel({
    loop: true,
    margin: 24,
    dots: false,
    nav: true,
    items: 3,
    autoplay: true,
    responsive: {
        0: {
            items: 1
        },
        450: {
            items: 1.3
        },
        500: {
            items: 1.5
        },
        600: {
            items: 2
        },
        768: {
            items: 2.5
        },
        960: {
            items: 3
        }
    }
})


var textWrapper = document.querySelector('.aboutmasterdetail');
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

anime.timeline()
    .add({
        targets: '.letter',
        scale: [0, 1],
        duration: 1500,
        elasticity: 600,
        delay: (el, i) => 45 * (i + 1)
    }).add(
        {
            content: "...Read more",
        }
    )
    ;

$(document).ready(function () {
    $("input").click(function () {
        $(".hideaboutmasterdetail ").slideToggle(3000).style('transform', "scale(1)");
    });
});

$(document).ready(function () {
    $(".dropdown").click(function () {
        $(".dropdown-content ").slideToggle(3000);
    });
});

$(document).ready(function () {
    $(".viewmore").click(function () {
        $(".hidesecondattendees ").slideToggle(3000);
    });
});