document.addEventListener('DOMContentLoaded' , function () {
    var tl = new TimelineMax ({repeat: -1, repeatDelay: 5}),
        intLogo = document.getElementsByClassName('logo_internet'),
        firstTExt = document.getElementsByClassName('first_text_container'),
        flag = document.getElementsByClassName('flag'),
        kpnText = document.getElementsByClassName('kpn_text'),
        ltOne = document.getElementById('first_lt'),
        ltTwo = document.getElementById('second_lt'),
        cbOne = document.getElementById('first_cb'),
        cbTwo = document.getElementById('second_cb'),
        kpnLastText = document.getElementsByClassName('kpn_last_text'),
        ltLastOne = document.getElementById('first_last_lt'),
        ltLastTwo = document.getElementById('second_last_lt'),
        priceBlock = document.getElementsByClassName('price_block'),
        button = document.getElementsByClassName('button');


    tl.from (intLogo , 0.8 , {left:600})
        .from (firstTExt , 0.8 , {left: -300} , '0')
        .from (flag , 0.6 , {top:-120})
        .to (firstTExt , 1 , {autoAlpha:0}, 2)
        .from (kpnText , 0.2 , {autoAlpha:0, top:130})
        .from (ltOne , 0.2 , {autoAlpha:0 , top:200})
        .from (ltTwo , 0.2 , {autoAlpha:0 , top:250})
        .to (cbOne , 0.2 , {backgroundSize:'10px', ease: Power2.easeOut})
        .to (cbTwo , 0.2 , {backgroundSize:'10px', ease: Power2.easeOut})
        .to (kpnText , 1 , {autoAlpha:0} , '+=1')
        .to (ltOne , 1 , {autoAlpha:0} , '-=1')
        .to (ltTwo , 1 , {autoAlpha:0}, '-=1')
        .from (kpnLastText , 0.2 , {autoAlpha:0, top:130})
        .from (ltLastOne , 0.2 , {autoAlpha:0, top: 165})
        .from (ltLastTwo , 0.2 , {autoAlpha:0, top: 185})
        .from (priceBlock , 0.2 , {autoAlpha:0 , top:215})
        .from (button , 0.4 , {autoAlpha:0 , top:485}, '+=0.5');


});