$(function(){
    var audio=document.getElementsByTagName('audio')[0];


    // $('.page1 p span').fadeIn(1000).animate({
    //             fontSize:'60px',
    //         },3000);
    
    $('.music').click(function(){
        if(audio.paused){
            audio.play();
            $(this).attr('class','music muc')
        }else{
            audio.pause();
            $(this).attr('class','music')
        }
        
    });
     
})

    