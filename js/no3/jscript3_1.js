    var smallbox = document.getElementById("smallbox");
    var oNavlist = document.getElementById("nav").children;
    var slider = document.getElementById("slider");
    var left = document.getElementById("left");
    var right = document.getElementById("right");
    var index = 1;
    var timer;
    function next(){
        index++;
        navChange();
        animate(slider,{left:-900*index},function(){
            if(index === 6){
                slider.style.left = "-900px";
                index = 1;
            }
        })
    }
    function prev(){
        index--;
        navChange();
        animate(slider,{left:-900*index},function(){
            if(index === 0){
                slider.style.left = "-4500px";
                index = 5;
            }
        })
    }
    //鼠标划入清定时器
    smallbox.onmouseover = function(){
        animate(left,{opacity:50});
        animate(right,{opacity:50});
        clearInterval(timer);
    }
    //鼠标划出开定时器
    smallbox.onmouseout = function(){
        animate(left,{opacity:0});
        animate(right,{opacity:0});
        timer = setInterval(next,3000);
    }
    right.onclick = next;
    left.onclick = prev;
    //小按钮点击事件
    for(var i = 0;i < oNavlist.length;i++){
        oNavlist[i].idx = i;
        oNavlist[i].onclick = function(){
            index = this.idx + 1;
            navChange();
            animate(slider,{left:-900*index});
        }
    }
    //小按钮背景色切换
    function navChange(){
        for(var i = 0;i < oNavlist.length;i++){
            oNavlist[i].className = "";
        }
        if(index === 6){
            oNavlist[0].className = "active";
        }
        else if(index === 0){
            oNavlist[4].className = "active";
        }
        else{
            oNavlist[index-1].className = "active";                     
        }
    }

    var b1 = document.getElementById("b1");
    var left1 = document.getElementById("left_1");
    var right1 = document.getElementById("right_1");

    left1.onmouseover = function(){
        animate(left_1,{opacity:50});
    }
    left1.onmouseout = function(){
        animate(left_1,{opacity:0});
    }
    right1.onmouseover = function(){
        animate(right_1,{opacity:50});
    }
    right1.onmouseout = function(){
        animate(right_1,{opacity:0});
    }
    left1.onclick = function (){
        b1.style.color = "#cd9b9b";   
    }
    right1.onclick = function (){
        b1.style.color = "#000";   
    }
    
    var b2 = document.getElementById("b2");
    var left2 = document.getElementById("left_2");
    var right2 = document.getElementById("right_2");

    left2.onmouseover = function(){
        animate(left_2,{opacity:50});
    }
    left2.onmouseout = function(){
        animate(left_2,{opacity:0});
    }
    right2.onmouseover = function(){
        animate(right_2,{opacity:50});
    }
    right2.onmouseout = function(){
        animate(right_2,{opacity:0});
    }
    left2.onclick = function (){
        b2.style.color = "#000";    
    }
    right2.onclick = function (){
        b2.style.color = "#cd9b9b";     
    }


    var b3 = document.getElementById("b3");
    var left3 = document.getElementById("left_3");
    var right3 = document.getElementById("right_3");

    left3.onmouseover = function(){
        animate(left_3,{opacity:50});
    }
    left3.onmouseout = function(){
        animate(left_3,{opacity:0});
    }
    right3.onmouseover = function(){
        animate(right_3,{opacity:50});
    }
    right3.onmouseout = function(){
        animate(right_3,{opacity:0});
    }
    left3.onclick = function (){
        b3.style.color = "#cd9b9b";   
    } 
    right3.onclick = function (){
        b3.style.color = "#000";   
    }

    var b4 = document.getElementById("b4");
    var left4 = document.getElementById("left_4");
    var right4 = document.getElementById("right_4");

    left4.onmouseover = function(){
        animate(left_4,{opacity:50});
    }
    left4.onmouseout = function(){
        animate(left_4,{opacity:0});
    }
    right4.onmouseover = function(){
        animate(right_4,{opacity:50});
    }
    right4.onmouseout = function(){
        animate(right_4,{opacity:0});
    }
    left4.onclick = function (){
        b4.style.color = "#000";   
    }   
    right4.onclick = function (){
        b4.style.color = "#cd9b9b";         
    }

    var seventh = document.getElementById("seventh");
    var letter = document.getElementById("letter");
    var middle = document.getElementById("middle");
    var smallbox = document.getElementById("smallbox");
    var bigbox = document.getElementById("bigbox");

    seventh.onclick = function(){
        middle.style.height = "550px";
        letter.style.display = "block";
        smallbox.style.display = "none";
        bigbox.style.display = "none";
    }
    












