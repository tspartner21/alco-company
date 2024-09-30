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
	modifyPos();
});

//scroll btn evnet
scroll_btns.forEach((btn, idx) => {
	btn.addEventListener("click", () => moveScroll(idx));
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
	posArr = [];
	for (let el of arrEl) posArr.push(el.offsetTop);
}

//move scroll
function moveScroll(index, speed = 500) {
	new Anime(window, { scroll: posArr[index] }, { duration: speed });
}

//when resize modifying scroll position
//현재 활성화된 버튼의 순번 위치로 모션없이 바로 스크롤 이동처리
function modifyPos() {
	const activeEl = document.querySelector("li.on");
	//Array.from(유사배열) - 유사배열을 순수배열 형태로 변환해서 반환
	//전체배열.indexOf(특정배열) : 전체배열에서 특정배열값의 순번을 반환
	//scroll_btns라는 버튼 그룹에서 on클래스가 붙어있는 버튼의 순서값을 반환
	const activeIndex = Array.from(scroll_btns).indexOf(activeEl);
	moveScroll(activeIndex, 0);
}
