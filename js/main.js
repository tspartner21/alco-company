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
	posArr.forEach((pos, idx) => {
		if (window.scrollY >= pos) [scroll_btns, secArr].forEach(arr => activation(arr, idx));
	});
});

//activation func
function activation(arrEl, index) {
	for (const el of arrEl) el.classList.remove("on");
	arrEl[index].classList.add("on");
}
