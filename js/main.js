import Anime from "./anime.js";

//variables
let posArr = [];
const base = -400;
const secArr = document.querySelector("main").children;
const scroll_btns = document.querySelectorAll(".scroller li");

//init (get section position array)
getPosArr(secArr);

//get new position array whenever scrolls
window.addEventListener("resize", () => {
	getPosArr(secArr);
	modifyPos();
});

//scroll btn evnet
scroll_btns.forEach((btn, idx) => {
	btn.addEventListener("click", () => moveScroll(idx));
});

//window scroll event
window.addEventListener("scroll", () => {
	posArr.forEach((_, idx) => {
		//특정 영역사이일때만 해당 순번의 요소에만 on을 붙이고
		if (window.scrollY >= posArr[idx] + base && window.scrollY < posArr[idx + 1] + base) {
			scroll_btns[idx].classList.add("on");
			secArr[idx].classList.add("on");
		} else {
			//해당 영역에서 벗어났을때는 해당 순번의 요소에만 on을 제거
			scroll_btns[idx].classList.remove("on");
			secArr[idx].classList.remove("on");
		}
	});
});

//activation func
function activation(arrEl, index) {
	//for (const el of arrEl) el.removeClass("on");
	arrEl[index].classList.add("on");
}

//get box position array func
function getPosArr(arrEl) {
	posArr = [];
	for (let el of arrEl) posArr.push(el.offsetTop);
}

//move scroll
function moveScroll(index, speed = 500) {
	new Anime(window, { scroll: posArr[index] }, { duration: speed });
}

//when resize modifying scroll position
function modifyPos() {
	const activeEl = document.querySelector("li.on");
	const activeIndex = Array.from(scroll_btns).indexOf(activeEl);
	moveScroll(activeIndex, 0);
}
