var typeWords = document.getElementById("typeWords");
var i = 0, j=0, timer, flag = 1;
var str1 = "If you wait, all that happens is you getting older.";
var str2 = "倘若你再等一等，结果只能是你又老了一岁。";

function typing1(){
	if(flag){
			timer = setInterval(function(){
					typeWords.innerHTML = str2.slice(0, i++) + "|";
					if(i == str1.length){
						clearInterval(timer);
						flag = 0;
						typing1();
					}
			}, 150)
	}
	else{
		timer = setInterval(function(){
			typeWords.innerHTML = str2.slice(0, i--) + "|";
			if(i == 0){
				clearInterval(timer);
				flag = 1;
				typing2();
			}
		}, 100)
	}
}

function typing2(){
	if(flag){
			timer = setInterval(function(){
					typeWords.innerHTML = str1.slice(0, i++) + "|";
					if(i == str1.length){
						clearInterval(timer);
						flag = 0;
						typing2();
					}
			}, 100)
	}
	else{
		timer = setInterval(function(){
			typeWords.innerHTML = str1.slice(0, i--) + "|";
			if(i == 0){
				clearInterval(timer);
				flag = 1;
				typing1();
			}
		}, 100)
	}
}
window.onload = typing2;