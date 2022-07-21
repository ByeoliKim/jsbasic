//trythis 60쪽

const weeks = ['일', '월', '화', '수', '목', '금', '토'];
//let widx = -1; 전역변수로 나가 있기 때문에 사이드 이펙트가 생긴다
const getNextWeek = (function () {
    let widx = 0; //프라이빗한 변수를 외부에 노출시키지 않겠다.
    return function() {
        if (widx >= weeks.length) widx = 0;
        return `${weeks[widx++]}요일`;
    };
    //widx += 1; // side-effect!
}());

let cnt = 0;
const intl = setInterval(() => {
  // widx += 2; // side-effect!
  console.log('call', cnt, getNextWeek());
  if ((cnt += 1) === 7) clearInterval(intl);
}, 100);

//정답
// const weeks = ['일', '월', '화', '수', '목', '금', '토'];
// const getNextWeek = (() => {
// 	let widx = -1;
// 	return () => {
// 		widx += 1; // side-effect!
// 		if (widx >= weeks.length) widx = 0;
// 		return weeks[widx];
// 	};
// })();

// let cnt = 0;
// const intl = setInterval(() => {
// 	// widx += 2; // side-effect!
// 	const w = getNextWeek();
// 	console.log('call', cnt, w);
// 	if ((cnt += 1) === 8) clearInterval(intl);
// }, 200);