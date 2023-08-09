for (var p of document.getElementsByTagName('p')) {
    p.onclick = function () {
        this.style.color = this.style.color === 'red' ? 'black' : 'red';
    }
}