'use strict';


const hole = document.querySelectorAll('.hole'),
      btn = document.querySelector('button');

let num;
btn.addEventListener('click', start);
function start (){ 
    setInterval(getNumberHome,3000);
    function getNumberHome() {
        function getRandom(min, max) {
            num = Math.floor(Math.random() * (max - min) + min);
            return num;
        }
        console.log(getRandom(1, 9));
        for (let i = 0; i < 9; i++) {
            hole[i].classList.remove('show');
        }
        hole[num-1].classList.add('show');
        }
    }