function animateProgressBar(el, width){
  el.animate(
      {width: width}, 
      {
          duration: 2000,
          step: function(now, fx) {
              if(fx.prop == 'width') {
                  el.html(el.data("name") + ": " + Math.round(now * 100) / 100 + '%');
              }
          }
      }        
  );    
}


$('.progress').each(function(){
 animateProgressBar($(this).find("div"), $(this).data("width")) 
});


// window.onscroll = () => {
//     console.log('----');
//     console.log(window.innerHeight);
//     console.log(window.scrollY);
//     console.log(document.body.offsetHeight);
//     if ( document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000 ) {
        
//         document.getElementById("container").className = "slideUp";
//         document.getElementById("container2").className = "slideUp";
//         bar.animate(0.8);  // Number from 0.0 to 1.0
//         bar2.animate(0.6);  // Number from 0.0 to 1.0
        
//     }
// };

