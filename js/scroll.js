(function() {
	var box = document.querySelector('.wrap'); //获取整个大盒子
	var boxChild = box.children;  // 获取每个分页HTMLcollection
	var page = 0;  //当前所在页面
	var pageCount = boxChild.length
	var startTime = 0;  //时间间隔初始值
	//滚动条事件
	Array.prototype.forEach.call(boxChild, function(el, index) {
		window.onmousewheel = function(e){
			var now = new Date();
			overtTime = now.getTime();
			//设置滚动的间隔时间，但首页和尾页不设置间隔
			if(overtTime - startTime > 1000 || page == 0 || page == -1 * pageCount + 1){   
				if(e.wheelDelta > 0 && page < 0){
					page++;
					box.style.top = page  + "00%";
				}else if(e.wheelDelta < 0 && page > -1 * pageCount + 1){
					page--;
					box.style.top = page + "00%";
				}
				startTime = now.getTime();
			}
		}
	})
	
	box.onmousedown = function(e){
		"use strict"
		var clickX = e.clientX;
		var clickY = e.clientY;
		this.onmousemove = function(e){
			var newClickX = e.clientX - clickX;
			var newClickY = e.clientY - clickY;
			if(newClickY < 0){
				console.log('向下');
			}else if(newClickY > 0){
				console.log('向上`{newClickX}`');
			}
			clickX = e.clientX;
			clickY = e.clientY;
		}
		this.onmouseup = function(){
			this.onmousemove = null;
		}
	}
	
	
})()