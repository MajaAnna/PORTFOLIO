$(function(){
    // navigation
    const hamburgerBtn = $('.icon-menu'),
          menu = $('.menu'),
          cancelBtn = $('.icon-cancel');

          console.log(cancelBtn)

    menu.hide();

    hamburgerBtn.on('click', function(){
        $(this).hide();
        menu.show();
    })

    cancelBtn.on('click', function(){
        menu.hide();
        hamburgerBtn.show();
    })
})