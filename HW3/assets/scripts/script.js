function clickColor() {
	var d
	d = document.getElementById('tagP');

	if (d.style.color='red') {
		d.style.color='black';
	}

	if (d.style.color='black') {
		d.style.color='red';
	}

	console.log(d.style.color);
}

// for (var p of document.getElementsByTagName('p')) {
//     p.onclick = function () {
//         this.style.color = this.style.color === 'red' ? 'black' : 'red';
//     }
// }