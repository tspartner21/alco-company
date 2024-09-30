import Anime from "./anime.js";

//variables
let posArr = [];
const base = -400;
const secArr = document.querySelector("main").children;
const scroll_btns = document.querySelectorAll(".scroller li");

//init (get section position array)
getPosArr(secArr);

//get new position array whenever scrolls
<<<<<<< HEAD
window.addEventListener("resize", modifyPos);

//scroll btn evnet
scroll_btns.forEach((btn, idx) => btn.addEventListener("click", () => moveScroll(idx)));

//window scroll event
window.addEventListener("scroll", activateScroll);

=======
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
		//중첩 조건식 자체를 변수에 미리 할당(코드 가독성을 위해)
		//현재 반복 순번이 마지막 순번이 아닐 때는 두 박스 사이의 범위 동시 만족을 조건식으로 저장
		//그렇지 않을때는 해당 순번 위치의 박스 이상으로 하나의 조건식을 변수에 저장
		const condition =
			idx !== posArr.length - 1
				? window.scrollY >= posArr[idx] + base && window.scrollY < posArr[idx + 1] + base
				: window.scrollY >= posArr[idx] + base;

		//위의 분기처리된 조건식이 담겨있는 condition 변수를 조건식으로 활용
		if (condition) {
			scroll_btns[idx].classList.add("on");
			secArr[idx].classList.add("on");
		} else {
			//해당 영역에서 벗어났을때는 해당 순번의 요소에만 on을 제거
			scroll_btns[idx].classList.remove("on");
			secArr[idx].classList.remove("on");
		}
	});
});


>>>>>>> e3d30c6ffadac4a16a473b87d5de929607486eba
//get box position array func
function getPosArr(arrEl) {
	posArr = [];
	for (let el of arrEl) posArr.push(el.offsetTop);
}

<<<<<<< HEAD
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

=======
>>>>>>> e3d30c6ffadac4a16a473b87d5de929607486eba
//move scroll
function moveScroll(index, speed = 500) {
	new Anime(window, { scroll: posArr[index] }, { duration: speed });
}

//when resize modifying scroll position
function modifyPos() {
<<<<<<< HEAD
	//modifyPos가 호출될떄 어차피 getPosArr로 실행되야 하므로
	//해당 함수 안쪾에 자체적으로 getPosArr호출
	getPosArr(secArr);
=======
>>>>>>> e3d30c6ffadac4a16a473b87d5de929607486eba
	const activeEl = document.querySelector("li.on");
	const activeIndex = Array.from(scroll_btns).indexOf(activeEl);
	moveScroll(activeIndex, 0);
}
