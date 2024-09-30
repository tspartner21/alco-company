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
	//posArr.forEach((pos, idx) => scroll >= pos && activation(scroll_btns, idx));
	posArr.forEach((pos, idx) => {
		if (scroll >= pos) activation(scroll_btns, idx);
	});
});

//activation func
function activation(arrEl, index) {
	arrEl.forEach(el => el.classList.remove("on"));
	arrEl[index].classList.add("on");
}
