import Anime from "./anime.js";

//variables
let posArr = [];
const base = -400;
const secArr = document.querySelector("main").children;
const scroll_btns = document.querySelectorAll(".scroller li");

//init (get section position array)
getPosArr(secArr);

//get new position array whenever scrolls
window.addEventListener("resize", modifyPos);

//scroll btn evnet
scroll_btns.forEach((btn, idx) => btn.addEventListener("click", () => moveScroll(idx)));

//window scroll event
window.addEventListener("scroll", activateScroll);

//get box position array func
function getPosArr(arrEl) {
	posArr = [];
	for (let el of arrEl) posArr.push(el.offsetTop);
}

//scroll activation func
function activateScroll() {
	posArr.forEach((_, idx) => {
		const condition =
			idx !== posArr.length - 1
				? window.scrollY >= posArr[idx] + base && window.scrollY < posArr[idx + 1] + base
				: window.scrollY >= posArr[idx] + base;

		condition
			? [scroll_btns, secArr].forEach(arr => arr[idx].classList.add("on"))
			: [scroll_btns, secArr].forEach(arr => arr[idx].classList.remove("on"));
	});
}

//move scroll
function moveScroll(index, speed = 500) {
	new Anime(window, { scroll: posArr[index] }, { duration: speed });
}

//when resize modifying scroll position
function modifyPos() {
	//modifyPos가 호출될떄 어차피 getPosArr로 실행되야 하므로
	//해당 함수 안쪾에 자체적으로 getPosArr호출
	getPosArr(secArr);
	const activeEl = document.querySelector("li.on");
	const activeIndex = Array.from(scroll_btns).indexOf(activeEl);
	moveScroll(activeIndex, 0);
}
