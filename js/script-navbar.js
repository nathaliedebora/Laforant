$(function(){
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

  const navSlide = () => {
    const burger = document.querySelector('.burger')
    const nav = document.querySelector('.dropdown')
    burger.addEventListener('click', ()=>{
      //Toggle Nav
      nav.classList.toggle('nav-active')

      //Burger Animation
      burger.classList.toggle('toggle')
    })
  }
  navSlide()
})