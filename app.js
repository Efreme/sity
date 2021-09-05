
const BifImage = document.getElementById('photo');
console.log(BifImage);

//for (let index = 0; index < BifImage.length; index++) 
//    {
//    const inputBigImage = BifImage[index];
//    console.log(inputBigImage);  

BifImage.onclick = function(){
    
      
    BifImage.classList.add('_active');

}
   

//
//$(function() {
//    
//   let header = $("#header");
//    let intro = $("#intro")
//    let introH = intro.innerHeight();
//    let scrollPos = $(window).scrollTop();
//    
//    $(window).on("scroll load resize", function(){              
//       
//        scrollPos = $(this).scrollTop()
//        
//        if( scrollPos > introH) {
//            
//           header.addClass("fixed"); 
//            
//        } else {
//            header.removeClass("fixed");
//        }
//        
//        console.log(scrollPos);
//    
//    });
//    
//    
//    
//    
//   
//    
//    
//    $("[data-scroll]").on("click", function(event)
//    {
//        event.preventDefault();
//        
//        let elementId = $(this).data('scroll');
//        
//        let elementOffset = $(elementId).offset().top;
//        
//        console.log(elementOffset);
//        
//        $("html, body").animate({
//            scrollTop: elementOffset - 110
//        }, 1000);
//    });
//    
//    
//    let slider = $("#reviewsSlider");
//    slider.slick({
//    infinite: true,
//    slidesToShow: 1,
//    slidesToScroll: 1,
//    fade: true,
//    arrows: false,
//        dots: true
//});
//    
//    
//    
//});