(function() {
	var box = document.querySelector('.wrap'); //获取整个大盒子
	var child = box.children;  // 获取每个分页HTMLcollection
	var i = 0;
	console.log(child.length)
	
	//滚动条事件
	Array.prototype.forEach.call(child, function(el, index) {
		window.onmousewheel = function(e){
			if(e.wheelDelta > 0 && i < 0){
				i++;
				box.style.top = i  + "00%";
			}else if(e.wheelDelta < 0 && i > -4){
				i--;
				box.style.top = i + "00%";
			}
			
		}
	})
	
	//自定义停止几秒
	function sleep(numberMillis){
		var now = new Date(); 
		var exitTime = now.getTime() + numberMillis;
		while(true){
			now = new Date();
			if(now.getTime() > exitTime)
				return;
		}
	}
})()