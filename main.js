$(document).ready(function(){

    //Stickey NavBar
    $(window).scroll(dunction(){
        if($(this).scrollTop()>0){
            $('.navbar').addClass('bg-black');
        }else{
            $('.navbar').removeClass('bg-black'); 
        }
    })
})

