import Anime from "./anime.js";

//variables
let posArr = [];
const base = -400;
const secArr = document.querySelector("main").children;
const scroll_btns = document.querySelectorAll(".scroller li");

//init (get section position array)
//처음 로딩시 호출해서 초기 배열값 담아줌
getPosArr(secArr);

//get new position array whenever scrolls
//브라우저 리사이즈 이벤트 발생할 때마다 새로운 값으로 갱신
window.addEventListener("resize", () => {
	getPosArr(secArr);
});

//scroll btn evnet
scroll_btns.forEach((btn, idx) => {
	btn.addEventListener("click", () => {
		new Anime(window, { scroll: posArr[idx] });
	});
});

//window scroll event
window.addEventListener("scroll", () => {
	posArr.forEach((pos, idx) => {
		if (window.scrollY >= pos + base) {
			[scroll_btns, secArr].forEach(arr => activation(arr, idx));
		}
	});
});

//activation func
function activation(arrEl, index) {
	for (const el of arrEl) el.classList.remove("on");
	arrEl[index].classList.add("on");
}

//get box position array func
function getPosArr(arrEl) {
	//일단은 기존 posArr값을 비운뒤
	//새로운 새로 위치값을 배열에 담아줌
	posArr = [];
	for (let el of arrEl) posArr.push(el.offsetTop);
}
