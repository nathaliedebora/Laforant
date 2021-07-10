const sliderItems = 6;
const width = 300;
const height= 550;
const sliderWidth = width * sliderItems;

$('#btnLaquo').click(function(){
    slide(-1);
});

$('#btnRaquo').click(function(){
    slide(1);
});

$('.box').css({
    width: width + 'px',
    height: height + 'px'
});

let index = 0;
let slide = function(change) {
    index += change;
    if(index < 0)
        index = 3;
    else if(index >= 4)
        index = 0;
    $('.container').animate({
        right: width * index,
    },1500);
};

$('.slider').css({
    overflow: 'hidden',
    width: (width*3 - 10) + 'px',
    height: height + 'px'
});

$('.container').css({
    display: 'flex',
    position: 'relative',
    width: sliderWidth + 'px',
    height: height + 'px'
});


