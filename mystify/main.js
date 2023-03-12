// TODO: Remove commented unnecessary code 
//       Add responsive behavior to the background

$(document).ready(function () {

    // AOS.init({
    //     offset: 200,
    //     duration: 400,
    //     easing: 'ease-in-sine',
    //     delay: 75,
    //     once: true,
    // });
    
    // Navigation bar
    // Toggling between top and side navigation based on screen width
    function toggleNav () {
        let nav = $('nav');
        if (window.matchMedia("(max-width : 600px)").matches) {
            nav.removeClass('side-nav');
            nav.removeClass('top-nav');
            nav.addClass('side-nav');
            $('.navbar-logo').css({'position': 'fixed', 'opacity': '0.7'});
            $('.top-logo').css({'display': 'none'});
            $('.side-logo').css({'display': 'block'});
        } else {
            nav.removeClass('side-nav');
            nav.removeClass('top-nav');
            nav.addClass('top-nav');
            $('.navbar-logo').css({'position': 'absolute', 'opacity': '1'});
            $('.side-logo').css({'display': 'none'});
            $('.top-logo').css({'display': 'block'});
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
            $('.top-nav .nav-items a').removeClass('active');
            $(event.currentTarget).addClass('active');
        } else {
            $('.top-nav .nav-items a').removeClass('active');
            $(event).addClass('active');
        }
    }

    $('.top-nav .nav-items a:not(.icon)').on('click', changeActiveTab);

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
            scrollTop: $(hash).offset().top - 60
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

    // Randomly Scatter lottie files in the background
    // function RandomlyScatterAnimation (width) {
    //     if (window.matchMedia(`(min-width : ${width})`).matches) {
    //         let lottieHtml = $('.lottie-animation').html();
    //         let height = $('body').outerHeight();
    //         let outerWidth = $('body').outerWidth();
    //         console.log(height);
    //         let increment = Math.floor(100/(height/(outerWidth/5)));
    //         for (let i = 0; i < 95; i+=increment) {
    //             for (let j = 0; j < 100; j+=20) {
    //                 lottieHtml += 
    //                 `
    //                 <lottie-player src="/mystify/assets/animation/background-animation.json" background="transparent" speed="0.1" mode="bounce" loop autoplay style="top: ${i}%; left: ${j}%"></lottie-player>
    //                 `;

    //             }
    //         }
    //         $('.lottie-animation').html(lottieHtml);
    //     }
    // }
    // RandomlyScatterAnimation('600px');

    function RandomlyScatterAnimation (size=300) {
        let lottieHtml = '';
        $('.lottie-animation').html(lottieHtml);

        let outerHeight = $('body').outerHeight(), outerWidth = $('body').outerWidth();

        let xCount = Math.floor(outerWidth/size);
        let yCount = Math.floor(outerHeight/size);

        let xStart = Math.floor(outerWidth-xCount*size)/2;

        // let increment = Math.floor(100/(outerHeight/(outerWidth/5)));

        for (let i = 0; i < yCount; i++) {
            for (let j = 0; j < xCount; j++) {
                lottieHtml += 
                `
                <lottie-player class="background-animation" src="/mystify/assets/animation/background-animation.json" background="transparent" speed="0.1" mode="bounce" loop autoplay style="top: ${i*size}px; left: ${xStart+j*size}px"></lottie-player>
                `;
            }
        }

        $('.lottie-animation').html(lottieHtml);
    }
    
    RandomlyScatterAnimation(300);

    // $(window).resize(function () {
    //     let start = new Date().getTime();
    //     while (new Date().getTime() < start+3000) {
    //         if ($(window).resize()) {
    //             return;
    //         }
    //     }
    //     RandomlyScatterAnimation(300);
    // });
});