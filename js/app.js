$(function(){
    // navigation
    const hamburgerBtn = $('.icon-menu'),
          menu = $('.menu'),
          cancelBtn = $('.icon-cancel');
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
          modal = $('.modal');

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

        if(error=true){
            e.preventDefault();
        }
    })
})