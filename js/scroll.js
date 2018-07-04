(function() {
	var box = document.querySelector('.wrap'); //获取整个大盒子
	var child = box.children;  // 获取每个分页HTMLcollection
	var page = 0;
	var startTime = 0;
	
	//滚动条事件
	Array.prototype.forEach.call(child, function(el, index) {
		window.onmousewheel = function(e){
			var now = new Date();
			overtTime = now.getTime();
			if(overtTime - startTime > 1000){   // 设置滚动间隔的时间
				if(e.wheelDelta > 0 && page < 0){
					page++;
					box.style.top = page  + "00%";
				}else if(e.wheelDelta < 0 && page > -4){
					page--;
					box.style.top = page + "00%";
				}
				startTime = now.getTime();
			}
			
			
		}
	})
	
	
})()