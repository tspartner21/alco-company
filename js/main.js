import Anime from "./anime.js";

//variables
let posArr = [];
const secArr = document.querySelector("main").children;
const scroll_btns = document.querySelectorAll(".scroller li");

//init (get section position array)
for (let sec of secArr) posArr.push(sec.offsetTop);

//scroll btn evnet
scroll_btns.forEach((btn, idx) => {
	btn.addEventListener("click", () => {
		new Anime(window, { scroll: posArr[idx] });
	});
});

//window scroll event
window.addEventListener("scroll", () => {
	const scroll = window.scrollY;
	posArr.forEach((pos, idx) => {
		//if (scroll >= pos) [scroll_btns, secArr].forEach(arr => activation(arr, idx));
		if (scroll >= pos) {
			activation(scroll_btns, idx);
			activation(secArr, idx);
		}
	});
});

//activation func
function activation(arrEl, index) {
	//arrEl.forEach(el => el.classList.remove("on"));
	for (const el of arrEl) el.classList.remove("on");
	arrEl[index].classList.add("on");
}

//미션 (2시 30분 까지)
//1- 현재 스크롤 기능에서 발생하는 문제점 찾아보기
//2- 문제점 찾았으면 해당 문제가 발생하는 원인 파악
//3- 원인 파악이 되었다면 해결 방안 고민
