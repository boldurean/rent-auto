$(document).ready(function () {

    const modal = $('.modal');
    const modalButton = $('.modal__dialog-button');
    const placesHeading = $('.places__heading')

    $('.slider').slick({
        infinite: true,
        asNavFor: '.contacts__current',
    });

    $('.places__slider').slick({
        infinite: true,
        slidesToShow: 2,
        responsive: [
            {
                breakpoint: 860,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    });
    $('.about__slider').slick({
        asNavFor: '.about__current'
    });
    $('.about__current').slick({
        slidesToShow: 1,
        arrows: false,
        asNavFor: '.about__slider',
        fade: true
    });
    $('.contacts__current').slick({
        slidesToShow: 1,
        arrows: false,
        asNavFor: '.slider',
        fade: true
    });



    $('.select-trigger').on('click', function () {
        $(this).parent().toggleClass('active');
    });

    $('.select-list li').on('click', function () {
        const day = $(this).data('day');
        const discount = $(this).data('discount');
        const parent = $(this).parents('.select');
        parent.find('.select-trigger .select-trigger-days').html(`${day} Дней`);
        parent.find('.select-trigger .select-trigger-discount').html(`-${discount}%`);
        $(this).parents('.select').removeClass('active');
        $('.input-days').val(day)
        $('.input-discount').val(discount)

    });


    $('.form').validate({
        errorElement: "div",
        errorClass: "invalid",
        rules: {
            userPhone: {
                required: true,
                minlength: 17
            },
        },
        //сообщения ошибок
        messages: {
            userPhone: {
                required: "Заполните поле",
                minlength: "Введите полный номер телефона"
            },
        },
        submitHandler: function (form) {
            $.ajax( {
                type: 'post',
                url: 'send.php',
                data: $(form).serialize(),
                success: function (response) {
                    $(form)[0].reset();
                    $(modal).addClass('visible');
                    ym(64653049,'reachGoal','button');
                    return true;
                }
            });
        }
    });

    //маска для номера телефона
    $('[type=tel]').mask('+7(000) 000-00-00');

    //настройки закрытия модалки

    $(document).keydown(function (event) {
        if (event.keyCode === 27) {
            $(modal).removeClass('visible');
        }
    });
    $(document).click(function (event) {
        if ($(event.target).is(modal)) {
            $(modal).removeClass('visible');
        }
    });

    modalButton.on('click', function () {
        modal.removeClass('visible')
    });

    //настройки для запуска Видео

    let player;
    let playerOne;
    let playerTwo;
    let playerThree;
    let playerFour;

    $('.video__play').on('click', function onYouTubeIframeAPIReady() {
        placesHeading.hide()
        player = new YT.Player('player', {
            height: '100%',
            width: '100%',
            videoId: 'BkGFhBypWrc',
            events: {
                'onReady': videoPlay,
            }
        });
    })
    $('.video__play-one').on('click', function onYouTubeIframeAPIReady() {
        placesHeading.hide()
        playerOne = new YT.Player('playerOne', {
            height: '100%',
            width: '100%',
            videoId: 'BkGFhBypWrc',
            events: {
                'onReady': videoPlay,
            }
        });
    })
    $('.video__play-two').on('click', function onYouTubeIframeAPIReady() {
        placesHeading.hide()
        playerTwo = new YT.Player('playerTwo', {
            height: '100%',
            width: '100%',
            videoId: 'BkGFhBypWrc',
            events: {
                'onReady': videoPlay,
            }
        });
    })
    $('.video__play-Three').on('click', function onYouTubeIframeAPIReady() {
        placesHeading.hide()
        playerThree = new YT.Player('playerThree', {
            height: '100%',
            width: '100%',
            videoId: 'BkGFhBypWrc',
            events: {
                'onReady': videoPlay,
            }
        });
    })
    $('.video__play-four').on('click', function onYouTubeIframeAPIReady() {
        placesHeading.hide()
        playerFour = new YT.Player('playerfour', {
            height: '100%',
            width: '100%',
            videoId: 'BkGFhBypWrc',
            events: {
                'onReady': videoPlay,
            }
        });
    })


    function videoPlay(event) {
        event.target.playVideo()
    }

    //Burger settings

    $('.menu-btn').on('click', function(e) {
        e.preventDefault();
        $(this).toggleClass('menu-btn_active');
        $('.menu-nav').toggleClass('menu-nav_active');
    });
    $('.menu-nav a').on('click', function () {
        $('.menu-nav').removeClass('menu-nav_active');
        $('.menu-btn').removeClass('menu-btn_active');
    });


    //настройки прокрутки страницы
    $(document).ready(function(){
        // Add smooth scrolling to all links
        $("a").on('click', function(event) {

            // Make sure this.hash has a value before overriding default behavior
            if (this.hash !== "") {
                // Prevent default anchor click behavior
                event.preventDefault();

                // Store hash
                let hash = this.hash;

                // Using jQuery's animate() method to add smooth page scroll
                // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
                $('html, body').animate({
                    scrollTop: ($(hash).offset().top) - ($('header').outerHeight()),
                }, 600, function(){

                    // Add hash (#) to URL when done scrolling (default click behavior)
                    window.location.hash = hash;
                });
            }
        });
    });

});