
import "./profile/progress_ring.js"


const animateProgressRing = function () {

    const el = document.querySelectorAll('progress-ring');

    while(el==null);
     
    for(var i=0;i<el.length;i++) {
        el[i].progressAnimation();
    }

}

const setRadius = function () {

    const el = document.querySelectorAll('progress-ring');
    
    for(var i=0;i<el.length;i++) {
        el[i].setRadius();
    }

    animateProgressRing();

}

window.addEventListener('resize', () => {setRadius()});


animateProgressRing();