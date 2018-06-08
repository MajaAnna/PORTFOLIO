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

    ////////////////////////////////////////////////////////////////////
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
    const nextBtn = $('#nextPic'),
          prevBtn = $('#prevPic'),
          allPics = $('.gallery li'),
          ul = $('.gallery ul');
          let index = 0;

    prevBtn.on('click', function(){
        if(index <= 0){
            index = allPics.length-1;
            allPics.not(':last-child').fadeOut('slow');
        } else {
            index--;
            $(allPics[index]).fadeIn('slow');
        }
    })

    nextBtn.on('click', function(){
        if(index === allPics.length-1){
            index = 0;
            allPics.fadeIn('slow');
        } else {
            $(allPics[index]).fadeOut('slow');
            index++;
        }
    })

    //ABOUT ME
    //additional info
    const hiddenParagraphs = $('.infoAboutMe p'),
          hiddenUl = $('.infoAboutMe ul'),
          btn1 = $('#btn1'),
          btn2 = $('#btn2');

    hiddenParagraphs.hide();
    hiddenUl.hide();

    btn1.click(function(){
        hiddenParagraphs.slideToggle();
    })

    btn2.click(function(){
        hiddenUl.slideToggle();
    })

    //contact
    const mailIcon = $('.icon-mail'),
          mailSpan = $('.mailToggle');

    mailSpan.hide();

    mailIcon.on('mouseenter', function(){
        mailSpan.show();
    })
    mailIcon.on('mouseleave', function(){
        mailSpan.hide();
    })

    //what i do
    const leftTitles = $('.leftAlign'),
          rightTitles = $('.rightAlign'),
          whatIDoSection = $('#whatIDoSection');
    let whatIDoSectionPosition = whatIDoSection.position().top,
        newScroll = $(window).scrollTop();

        if(newScroll > whatIDoSectionPosition){
            leftTitles.click(function(){
                $(this).addClass('animated infinite slideInLeft')
            })

            rightTitles.scroll(function(){
                $(this).addClass('animated infinite slideInRight')
            })
        }
})