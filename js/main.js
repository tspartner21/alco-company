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

/*
	문제점1 - 특정 위치로 스크롤 이동후 브라우저 리사이즈시 버튼(박스) 활성화 위치 어긋남 문제 
	문제점2 - 브라우저를 작게 리사이즈한 상태에서는 마지막 버튼 활성화 안되는 문제
	문제점3 - 브라우저 리사이즈하고 세로 스크롤 이동 버튼 클릭시 이상한 위치로 이동되는 문제

	위와 같은 문제가 발생하는 근본적인 이유
	- 이동할 박스들의 높이값이 고정형이 가변형이기 때문 (100vh)

	문제점1 원인 - posArr에 각 박스의 세로 위치값을 저장하는 시점이 브라우저 로딩시 한번, 브라우저 리사이즈 각 박스의 높이값이 변경되므로 해당 posArr의 값들은 갱신되야 됨에도 불구하고 값이 로딩된 시점이 고정되어 있음

	문제점2 원인 - 4번째 버튼이 활성화 되려면 초기에 posArr에 등록한 마지막 박스 세로 위치보다 스크롤값이 넘어서야 되는데, 브라우저를 작게 리사이즈하면 스크롤할 수 있는 최대영역이 물리적으로 줄어들기 때문에 처음 로딩시에 저장된 마지막 위치값으로 도달이 불가

	문제점3 원인 - 초기 저장된 posArr의 이동 위치값과 브라우저 리사이즈시에 실제 이동해야되는 위치값이 달라지기 때문
*/
