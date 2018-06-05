$(function(){
    // navigation
    const hamburgerBtn = $('.icon-menu'),
          menu = $('.menu'),
          cancelBtn = $('nav .icon-cancel');
    menu.hide();

    hamburgerBtn.on('click', function(){
        $(this).hide();
        menu.show();
    })

    cancelBtn.on('click', function(){
        menu.hide();
        hamburgerBtn.show();
    })

    // form validation
    const form = $('form'),
          name = $('#formName'),
          surname = $('#formSurname'),
          email = $('#formEmail'),
          message = $('textarea'),
          errorMsg = $('.errorMsg'),
          modal = $('.modal'),
          modalCancelBtn = $('.modal .icon-cancel');

    modal.hide();

    form.on('submit', function(e){
        e.preventDefault();

        function errorMessage(content){
            let contentErrorMsg = $('<p>');
            errorMsg.append(contentErrorMsg);
            contentErrorMsg.text(content);
        }

        let error = false;
        errorMsg.html('');

        if(name.val().length < 3){
            error = true;
            errorMessage('Your name should be longer than three letters!')
        }

        if(surname.val().length < 3){
            error = true;
            errorMessage('Your surname should be longer than three letters!')
        }

        if(email.val().indexOf('@'< 0)){
            error = true;
            errorMessage('Your email should have "@"!')
        }

        if(message.html().length <= 10){
            error = true;
            errorMessage('Your message should be longer than 10 letters!')
        }

        // modal
        modal.fadeIn('slow').delay('slow');
        modalCancelBtn.on('click', function(){
            modal.fadeOut('slow');
        })

        if(error=true){
            e.preventDefault();
        }       
    })

    //COLLAGES
    let collageSectionPositionTop=$('#collageSection').position().top;
    let formSectionPositionBottom=$('#formSection').position().top;
    const nav = $('nav');

    //nav
    $(window).on('scroll', function() {   
        menu.hide();
        hamburgerBtn.show();
        
        let scrollTop = $(window).scrollTop();
        if (scrollTop >= collageSectionPositionTop-100) {
            nav.addClass('navScrolling');
        } else {
            nav.removeClass('navScrolling');
        }

        if (scrollTop >= collageSectionPositionTop+100) {
            nav.removeClass('navScrolling');
        }
    });

    //sizing
    const pictures = $('.pictures');
    let ulHeight = $('.pictures ul').height();
    let picturesHeight = ulHeight/7
    pictures.css('height', picturesHeight)

    $(window).on('resize', function(){
        let ulHeight = $('.pictures ul').height();
        let picturesHeight = ulHeight/7
        pictures.css('height', picturesHeight)
    })

    //buttons
    const nextBtn = $('button .icon-right-open-big')
    const prevBtn = $('button .icon-left-open-big')

    prevBtn.on('click', function(){
        console.log('click')
    })

    
})