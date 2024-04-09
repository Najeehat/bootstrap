$(document).ready(function(){
    //Stickey NavBar
$(window).scroll(function(){
    var sc = $(this).scrollTop();
    if(sc> 100){
        $('header').addClass('sticky');
    }else{
        $('header').removeClass('sticky');
    }
})
})

