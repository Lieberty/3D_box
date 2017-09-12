function Picture(wid,time){
	var oCss=document.getElementById("set");
	var aLeft=document.getElementsByClassName("left");
	var aRight=document.getElementsByClassName("right");

	var oBox = document.getElementById("pic_box");
	var aLi=oBox.getElementsByTagName("li");
	var oBnt=document.getElementsByTagName("button")[0];

	var aFace=document.getElementsByClassName("surface");

	var iNow=0;
	var iWidth=wid;
	var length=oBox.clientWidth/iWidth;

	for(let i=0;i<length;i++){	
		oBox.innerHTML+='<li class="ss"><span class="surface"></span><span class="surface"></span><span class="surface"></span><span class="surface"></span><span class="side left"></span><span class="side right"></span></li>';

		oCss.innerHTML+="#pic_box li:nth-of-type("+(i+1)+") span{ background-position:-"+i*iWidth+"px 0; left :"+i*iWidth+"px} ";

		aLeft[i].style.left=i*iWidth+'px';
		aRight[i].style.left=(i+1)*iWidth+'px';
		aLi[i].style.transition=time+"s "+i*50+"ms";
	}
	oBnt.onclick=function(){
		iNow++;
		for(var i=0;i<length;i++){
			aLi[i].style.transform='rotateX('+iNow*90+'deg)';
		}
	}
	
	
}

Picture(45,0.5);