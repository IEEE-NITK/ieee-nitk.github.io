$(document).ready(function () {

    AOS.init({
        offset: 200,
        duration: 400,
        easing: 'ease-in-sine',
        delay: 75,
        once: true,
    });
    
    // Navigation bar
    // Toggling between top and side navigation based on screen width
    function toggleNav () {
        let nav = $('nav');
        if (window.matchMedia("(max-width : 600px)").matches) {
            nav.removeClass('side-nav');
            nav.removeClass('top-nav');
            nav.addClass('side-nav');
        } else {
            nav.removeClass('side-nav');
            nav.removeClass('top-nav');
            nav.addClass('top-nav');
        }
    }
    toggleNav();
    $(window).resize(toggleNav);


    // Hide Navbar on scroll 
    let prev = 0;
    let $window = $(window);
    let nav = $('.top-nav');

    $window.on('scroll', function() {
        var scrollTop = $window.scrollTop();
        nav.toggleClass('hidden', scrollTop > prev);
        prev = scrollTop;
    });

    // Changing active tab
    function changeActiveTab (event) {
        if (event.currentTarget != undefined) {
            $('.top-nav a').removeClass('active');
            $(event.currentTarget).addClass('active');
        } else {
            $('.top-nav a').removeClass('active');
            $(event).addClass('active');
        }
    }

    $('.top-nav a:not(.icon)').on('click', changeActiveTab);

    // Hamburger button action in sidebar
    $('nav .icon').on('click', function () {
        let bar = $('.side-nav');
        if (bar.hasClass('show')) {
            bar.removeClass('show');
        } else {
            bar.addClass('show');
        }
    });

    // Close sidebar on selection of a section
    $('.side-nav a').on('click', function () {
        let bar = $('.side-nav');
        if (bar.hasClass('show')) {
            bar.removeClass('show');
        } else {
            bar.addClass('show');
        }
    });

    // Scroll Spy to change active tab in navigation bar
    $(window).on('scroll', function () {
        let $window = $(window);
        let currentScroll = $window.scrollTop(), currentSection;
        let sections = $('a:not(.arrow-down)');
        for (section of sections) {
            if (section.hash !== "") {
                if ($(section.hash).offset().top <= currentScroll + $('nav').outerHeight()) {
                    currentSection = section;
                }
            }
        }
        // console.log(currentSection);
        changeActiveTab(currentSection);
    });
    // Navigation bar ends 

    // Smooth scroll effect
    $('a').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
    
            $('html, body').animate({
            scrollTop: $(hash).offset().top
            }, 800, function(){
            return false;
            });
        }
    });

    // Accordion animation
    $('.accordion').click(function () {
        if ($(this).hasClass('active')) {
            $('.accordion').removeClass('active');
        } else {
            $('.accordion').removeClass('active');
            $(this).addClass('active');
        }

        $('.panel').slideUp(300);
        if ($(this).hasClass('active')) {
            $(this).siblings('.panel').slideDown(300);
        }
    });

    // Make robot follow cursor in faq section
    $('#faq').mouseover(function (e) {
        let faqRobot = $('.faq-robot');
        faqRobot.css({
            top: (e.screenY-$('#faq').scrollTop()-0.2*$('#faq').scrollTop()) + 'px',
        });
    });

    // Bottom to Top button
    let bottomToTop = $('.bottom-to-top');
    $window.on('scroll', function() {
        var scrollTop = $window.scrollTop();
        if (scrollTop > 100) {
            bottomToTop.fadeIn('slow');
        } else {
            bottomToTop.fadeOut('slow');
        }
    });

});