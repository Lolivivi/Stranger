function getStyle(obj, attr){
	if(obj.currentStyle){
		return obj.currentStyle[attr];
	} else {
		return getComputedStyle(obj, null)[attr];
	}
}
function animate(obj,json,callback){
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStop = true;
		for(var attr in json){
			var now = 0;
			if(attr == 'opacity'){
				now = parseInt(getStyle(obj,attr)*100);
			}else{
				now = parseInt(getStyle(obj,attr));
			}
			var speed = (json[attr] - now) / 8;
			speed = speed>0?Math.ceil(speed):Math.floor(speed);
			var cur = now + speed;
			if(attr == 'opacity'){
				obj.style[attr] = cur / 100;
			}else{
				obj.style[attr] = cur + 'px';
			}
			if(json[attr] !== cur){
				isStop = false;
			}
		}
		if(isStop){
			clearInterval(obj.timer);
			callback&&callback();
		}
	}, 30)
}
var box=document.getElementById("box");
var slider=document.getElementById("slider");
var left=document.getElementById("left");
var right=document.getElementById("right");
var index=1;
var nav=document.getElementById("nav");
var navlist=nav.getElementsByTagName("li");
// var navlist=document.getElementById("nav").children;
var isMoving=false;
var oMessageBox = document.getElementById("messageBox");
var oInput = document.getElementById("myInput");
var oPostBtn = document.getElementById("doPost");

//鼠标划入
box.onmouseover=function(){
	animate(left,{opacity:70});
	animate(right,{opacity:70});
}
//鼠标划出
box.onmouseout=function(){
	animate(left,{opacity:0});
	animate(right,{opacity:0});
}
	//点击左右操作
right.onclick=next;
left.onclick=prev;

//点击nav事件
for(var i=0;i<navlist.length;++i){
	navlist[i].value=i;
	navlist[i].onclick=function(){
		index=this.value+1;
		navmove();
		animate(slider,{left:-1200*index});
	}
}

//切换下一张函数
function next(){
	if(isMoving){
		return;
	}
	isMoving=true;
	index++;
	navmove();
	animate(slider,{left:-1200*index},function(){
		if(index===6){
			slider.style.left="-1200px";
			index=1;
		}
		isMoving=false;
	});
}

//切换上一张函数
function prev(){
	if(isMoving){
		return;
	}
	isMoving=true;
	index--;
	navmove();
	animate(slider,{left:-1200*index},function(){
		if(index===0){
			slider.style.left="-6000px";
			index=5;
		}
		isMoving=false;
	});
}

//轮播下一个nav
function navmove(){
	for(var i=0;i<navlist.length;++i){
		navlist[i].className=" ";
	}
	if(index===6){
		navlist[0].className="active";

	}else if(index===0){
		navlist[4].className="active";
	}else{
		navlist[index-1].className="active";
	}
}	

//留言板
oPostBtn.onclick = function(){
	if(oInput.value){
		//写入留言内容
		var oMessageContent = document.createElement("div");
		oMessageContent.className = "message_content";
		oMessageContent.innerHTML = oInput.value;
		oInput.value = "";
		oMessageBox.appendChild(oMessageContent);
		//写入发表留言的时间
		var oTime = document.createElement("div");
		oTime.className = "time";
		var date1=new Date();
		var year=date1.getFullYear();
		var month=date1.getMonth()+1;
		var currentDate=date1.getDate();
		var days=["SUN","MON","TUE","WED","THU","FRI","SAT"];
		var currentDay=date1.getDay();
		var hour=date1.getHours();
		var minute=date1.getMinutes();
		if(minute<10){
			minute="0"+minute;
		}
		var second=date1.getSeconds();
		if(second<10){
			second="0"+second;
		}
		var currentdate=year+"-"+month+"-"+currentDay+"  "+days[currentDay]+"  "+hour+":"+minute+":"+second;
		oTime.innerHTML =currentdate;
		oMessageBox.appendChild(oTime);
	}
}