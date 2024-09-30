import Anime from "./anime.js";

let posArr = [];
const secArr = document.querySelector("main").children;
const scroll_btns = document.querySelectorAll(".scroller li");

for (let sec of secArr) posArr.push(sec.offsetTop);

scroll_btns.forEach((btn, idx) => {
	btn.addEventListener("click", () => {
		new Anime(window, { scroll: posArr[idx] });

		//btn activation
		scroll_btns.forEach(el => el.classList.remove("on"));
		scroll_btns[idx].classList.add("on");
	});
});

//window scroll event bind
window.addEventListener("scroll", () => {
	//console.log("scrollY", window.scrollY);
	//console.log("offsetTop", banner.offsetTop);
});
