function main(){
	const set1 = document.querySelector('#wrap .title .list a#click1').addEventListener('click',view1);
	const set2 = document.querySelector('#wrap .title .list a#click2').addEventListener('click',view2);
	const set3 = document.querySelector('#wrap .title .list a#click3').addEventListener('click',view3);
}
function view1(){
	document.querySelector('#wrap .map .m1').classList.add('select');
	document.querySelector('#wrap .map .m2').classList.remove('select');
	document.querySelector('#wrap .map .m3').classList.remove('select');
}
function view2(){
	document.querySelector('#wrap .map .m1').classList.remove('select');
	document.querySelector('#wrap .map .m2').classList.add('select');
	document.querySelector('#wrap .map .m3').classList.remove('select');
}
function view3(){
	document.querySelector('#wrap .map .m1').classList.remove('select');
	document.querySelector('#wrap .map .m2').classList.remove('select');
	document.querySelector('#wrap .map .m3').classList.add('select');
}

