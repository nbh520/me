/*
 * 
 * 流星划过
 */

var BodyWidth = document.body.offsetWidth;
var BodyHeight = document.body.offsetHeight;
var StarDom = document.getElementById("star");

/*
 * 星星对象，x,y坐标，宽度，长度，移动速度，透明值，生成dom元素
 */
function Star() {
	this.x = this.randomNum(0, BodyWidth * 2);
	this.y = BodyHeight + this.randomNum(0, BodyHeight);
	this.width = this.randomNum(15, 64);
	this.height = this.width / 64 * 143;
	this.speed = this.randomNum(3, 5);
	this.k = this.y - (this.height / this.width) * this.x + (this.width * this.height / this.width);
	this.opacity = this.randomNum(0.5, 1);
	this.dom = this.createNode();
}
Star.prototype = {
	createNode: function() {
		var img = new Image();
		img.src = "img/liuxing.png";
		img.width = this.width;
		img.height = this.height;
		img.style.left = this.x + "px";
		img.style.top = this.y + "px";
		img.style.opacity = this.opacity;
		img.className = "star-position";
		StarDom.appendChild(img);
		return img;
	},
	randomNum: function(min, max) {
		return Math.random() * (max - min) + min;
	}
}
var StarArr = [];
for(let i = 0; i < 100; i++) { //生成若干星星
	StarArr[i] = new Star();
}
/*
 * 
 * 每次刷新都重新对星星坐标进行绘制
 */
setInterval(function() {
	for(let i = 0; i < StarArr.length; i++) {
		if(StarArr[i].dom.offsetTop <= -(StarArr[i].height) ||
			StarArr[i].dom.offsetLeft <= -(StarArr[i].width)) {
			StarDom.removeChild(StarArr[i].dom);
			StarArr[i] = new Star();
		} else {
			StarArr[i].dom.style.top = StarArr[i].k - 1 + 'px';
			StarArr[i].dom.style.left = -1 * StarArr[i].width - 1 + 'px';
		}
	}
}, 1000);