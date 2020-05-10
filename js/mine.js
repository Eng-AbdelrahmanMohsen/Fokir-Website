$(window).scroll(function() {


    if ($(window).scrollTop() >= 50) {
        $("nav").addClass("bg-dark");
    } else {
        $("nav").removeClass("bg-dark");
    }

})



$("nav a").click(function() {

    let aHref = $(this).attr("href");

    let SectionOffset = $(aHref).offset().top;


    $("body , html").animate({ scrollTop: SectionOffset }, 1000)


})


$('.counter').counterUp({
    delay: 10,
    time: 1000
});


$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})