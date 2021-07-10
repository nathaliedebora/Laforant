$(function(){
  window.addEventListener('scroll', reveal);

  function reveal(){
    var reveals = document.querySelectorAll('.animate-text');

    for(var i = 0; i < reveals.length; i++){

      var windowheight = window.innerHeight;
      var revealtop = reveals[i].getBoundingClientRect().top;
      var revealpoint = 125;

      if(revealtop < windowheight - revealpoint){
        reveals[i].classList.add('active');
      }
    }
  }

  let dropdown = $(".game-info-btn")
  let items = $(".items")
  let flag = false
  dropdown.click(()=>{
    if (!flag){
      items.css({
        opacity: "1",
        pointerEvents: "all",
        transform: "translateY(0px)"
      })
    }
    else{
      items.css({
        opacity: "0",
        pointerEvents: "none",
        transform: "translateY(-10px)"
      })
    }
    flag = !flag
  })
})