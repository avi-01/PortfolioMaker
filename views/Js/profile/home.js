
console.log("home")

const home = document.getElementById('home');
const bigCircle = document.getElementById('bigCircle');
const quoteDiv = document.getElementById('quote');
const _CURSOR = document.getElementById('cursor');


const pageWidth = window.innerWidth;
const pageHeight = window.innerHeight;
const offsetRatio = 180/(pageWidth);
const quotes = ['Eat...','Sleep...','Code...'];

var _PART = 0;
var _PART_INDEX = 0;
var _INTERVAL_VAL;


window.addEventListener("mousemove", (e) => {

    var initialRotate =(90 + (pageWidth/2 - e.pageX)*offsetRatio);

    bigCircle.style.transform = "rotateZ("+ initialRotate +"deg)";

})

function Type() { 
	var text =  quotes[_PART].substring(0, _PART_INDEX + 1);
	quoteDiv.innerHTML = text;
	_PART_INDEX++;

	if(text === quotes[_PART]) {
		_CURSOR.style.display = 'none';

		clearInterval(_INTERVAL_VAL);
		setTimeout(function() {
			_INTERVAL_VAL = setInterval(Delete, 50);
		}, 1000);
	}
}

function Delete() {
	var text =  quotes[_PART].substring(0, _PART_INDEX - 1);
	quoteDiv.innerHTML = text;
	_PART_INDEX--;

	if(text === '') {
		clearInterval(_INTERVAL_VAL);

		if(_PART == (quotes.length - 1))
			_PART = 0;
		else
			_PART++;
		
		_PART_INDEX = 0;

		setTimeout(function() {
			_CURSOR.style.display = 'inline-block';
			_INTERVAL_VAL = setInterval(Type, 100);
		}, 200);
	}
}


const quoteAnimation = function () {
    setTimeout(function(){_INTERVAL_VAL = setInterval(Type, 100);},3000);
}


quoteAnimation();