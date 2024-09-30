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
	if (scroll >= posArr[0]) activation(scroll_btns, 0);
	if (scroll >= posArr[1]) activation(scroll_btns, 1);
	if (scroll >= posArr[2]) activation(scroll_btns, 2);
	if (scroll >= posArr[3]) activation(scroll_btns, 3);
});

//activation func
function activation(arrEl, index) {
	arrEl.forEach(el => el.classList.remove("on"));
	arrEl[index].classList.add("on");
}
