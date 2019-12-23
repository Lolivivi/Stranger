    var btn1 = document.getElementById("one");
    var btn2 = document.getElementById("two");
    var btn3 = document.getElementById("three");
    var video = document.getElementById("video");
    var send = document.getElementById("send");
    var eight = document.getElementById("eight");
    var attentioned = document.getElementById("attentioned");
    var attention = document.getElementById("four_1");
    var nine = document.getElementById("nine");
    var zan = document.getElementById("two_2");
    var ten = document.getElementById("ten");
    var dairy = document.getElementById("dairy");
    var firstpage = document.getElementById("firstpage");
    
    function createBarrage(content){
        var barrage=document.createElement("span");
        barrage.innerText=content;
        barrage.className="barrage";
        barrage.style.top=randomNum(10,380)+'px';
        barrage.style.width=content.length*16+'px';
        barrage.style.color=randomColor();
        document.getElementById("video").appendChild(barrage);
        rolling(barrage)
    }

    //取随机数
    function randomNum(minNum,maxNum){ 
        return parseInt(Math.random()*(maxNum-minNum+1)+minNum,10); 
    } 

    //取随机颜色
    function randomColor(){
        var color="#";
        for(var i=0;i<6;i++){
            color += (Math.random()*16 | 0).toString(16);
        }
        return color;
    }

    //滚动弹幕
    function rolling(object){
        var a= setInterval(function () {
            if (object.offsetLeft>-object.innerHTML.length*16) {
                object.style.left=object.offsetLeft-1+'px';
            }else{
                object.parentNode.removeChild(object);
                clearInterval(a);
            }
        }, 10);
    }

    function sendtext(){
        createBarrage(document.getElementById('content').value)
    }
    attention.onclick = function(){    
        attention.style.backgroundColor = "#ff1493";
        nine.value++;  
    }
    
    zan.onclick = function(){
        ten.value++;
    }
    btn1.onclick = function(){
        btn2.style.backgroundColor = "#fff";
        btn3.style.backgroundColor = "#fff";
        btn1.style.backgroundColor = "#ff1493";
        dairy.style.display = "block";
        video.style.display = "none";
        send.style.display = "none";
        attentioned.style.display = "none";
        firstpage.style.display = "none";
    }

    btn2.onclick = function(){
        btn1.style.backgroundColor = "#fff";
        btn3.style.backgroundColor = "#fff";
        btn2.style.backgroundColor = "#ff1493";
        video.style.display = "block";
        send.style.display = "block";
        dairy.style.display = "none";
        attentioned.style.display = "none";
        firstpage.style.display = "none";
    }
    
    btn3.onclick = function(){
        btn1.style.backgroundColor = "#fff";
        btn2.style.backgroundColor = "#fff";
        btn3.style.backgroundColor = "#ff1493";
        attentioned.style.display = "block";
        video.style.display = "none";
        send.style.display = "none";
        dairy.style.display = "none";
        eight.value++;
        firstpage.style.display = "none";
    }