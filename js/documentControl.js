var isBtnActing = false;
var isOptActing = false;
var typingIdx=0;
var tyInt;
var typingTxt=["Unknown","String","Wanted"];
var typingBool = false;
var mapURLDic={};
var discriptionText={};
/*재발 작동되라 제발*/
$(document).ready(function(){
	$.ajax({
		url:"json/mapURLs.json",
		method:"GET",
		dataType:"json",
		success: function(data){
			mapURLDic=data;
			console.log(mapURLDic);
		}
	})
	$.ajax({
		url:"json/textDiscription.json",
		method:"GET",
		dataType:"json",
		success: function(data){
			discriptionText=data;
			console.log(mapURLDic);
		}
	})
})
var referLinkDic={}
	//VLD
	referLinkDic["블라디보스토크"]=["https://boriborikim.tistory.com/692","https://travelblog.expedia.co.kr/15346"];
	referLinkDic["블라디보스토크 역"]=["https://boriborikim.tistory.com/692","https://travelblog.expedia.co.kr/15346"];
	referLinkDic["블라디보스토크"]=["https://boriborikim.tistory.com/692","https://travelblog.expedia.co.kr/15346"];	
	referLinkDic["블라디보스토크"]=["https://boriborikim.tistory.com/692","https://travelblog.expedia.co.kr/15346"];	
	referLinkDic["블라디보스토크"]=["https://boriborikim.tistory.com/692","https://travelblog.expedia.co.kr/15346"];	
	referLinkDic["블라디보스토크"]=["https://boriborikim.tistory.com/692","https://travelblog.expedia.co.kr/15346"];
function applyLoction(){
	document.getElementById("ipt").style.display="inline";
	}
function applyButton(ipt){
	newbtn=document.createElement("button");
	const val=ipt.value;
	newbtn.setAttribute("id","val");
	newbtn.innerText=val
	document.getElementById("btnpanel").appendChild(newbtn);
	ipt.style.display="none";
	ipt.innerHTML="";
	}
function primFunction(btn){
	releaseButton();
	btn.disabled=true;
	if(isBtnActing==false){
	    createButtons(btn);
	}
	else{
		alterButtons(btn);
	}
	if (isOptActing){
	    var para=document.getElementById("board");
		para.innerHTML=" ";
		para.style.display="none";
	}
	if(typingBool)
		breakIntv();
	isBtnActing=true;
	setLocation(btn);
	}
function releaseButton(){
	$("button:disabled").attr("disabled",false);
	}
function createButtons(btn){
	$("#optionPanel").css("display","block");
	$(".optinBtn").css("display","inline");
	alterButtons(btn);
	}
function alterButtons(btn){
	var bt0=document.getElementById('optionPanel').getElementsByTagName("button")[0];
	var bt1=document.getElementById('optionPanel').getElementsByTagName("button")[1];
	var bt2=document.getElementById('optionPanel').getElementsByTagName("button")[2];
	var bt3=document.getElementById('optionPanel').getElementsByTagName("button")[3];
	var bt4=document.getElementById('optionPanel').getElementsByTagName("button")[4];
	var bt5=document.getElementById('optionPanel').getElementsByTagName("button")[5];
	var bt6=document.getElementById('optionPanel').getElementsByTagName("button")[6];
	var bt7=document.getElementById('optionPanel').getElementsByTagName("button")[7];
	var bt8=document.getElementById('optionPanel').getElementsByTagName("button")[8];
	var bt9=document.getElementById('optionPanel').getElementsByTagName("button")[9];
	if(btn.getAttribute("id")=="VLD"){
		bt0.textContent="블라디보스토크 역";
		bt1.textContent="니콜라이황태자 개선문";
		bt2.textContent="독수리 전망대";
		bt3.textContent="혁명광장";
		bt4.textContent="댑 버거";
		bt5.textContent="레스토랑 주마";
		bt6.textContent="해적커피";
		bt7.textContent="블라디보스토크 굼";
		bt8.textContent="프리모르스키 아쿠아리움";
		bt0.setAttribute("onclick", "setLocation(this)");
		bt1.setAttribute("onclick", "setLocation(this)");
		bt2.setAttribute("onclick", "setLocation(this)");
		bt3.setAttribute("onclick", "setLocation(this)");
		bt4.setAttribute("onclick", "setLocation(this)");
		bt5.setAttribute("onclick", "setLocation(this)");
		bt6.setAttribute("onclick", "setLocation(this)");
		bt7.setAttribute("onclick", "setLocation(this)");
    	bt8.setAttribute("onclick", "setLocation(this)");
		}
	else if(btn.getAttribute("id")=="NGK"){
	    bt0.textContent="나가사키 공항";
		bt1.textContent="하우스 텐 보스";
		bt2.textContent="하시마 섬";
		bt0.setAttribute("onclick", "setLocation(btn)");
		bt1.setAttribute("onclick", "setLocation(btn)");
		bt2.setAttribute("onclick", "setLocation(btn)");
		}
	else if(btn.getAttribute("id")=="IRK"){
		bt0.textContent="바이칼 호수";
		bt1.textContent="데카브리스트 박물관";
		bt2.textContent="알렉산드르 3세 동상";
		bt0.setAttribute("onclick", "setLocation(this)");
		bt1.setAttribute("onclick", "setLocation(this)");
		bt2.setAttribute("onclick", "setLocation(this)");
		}
	else if(btn.getAttribute("id")=="TBI"){
		bt0.textContent="타이베이 공항";
		bt1.textContent="지우펀";
		bt2.textContent="닝샤 야시장";
		bt0.setAttribute("onclick", "setLocation(this)");
		bt1.setAttribute("onclick", "setLocation(this)");
		bt2.setAttribute("onclick", "setLocation(this)");
		}
	}
function setLocation(btn){	
	if(typingBool)
		breakIntv();
	document.getElementById('googleMap').src=mapURLDic[btn.innerHTML];
	if(isOptActing==false)
		addDiscription(btn.innerHTML);
	else
		alterDiscription(btn.innerHTML)
	isOptActing=true;
	}
function addDiscription(num){
	var panel = document.getElementById('optionPanel');
	var paragraph=document.createElement("p");
	paragraph.setAttribute("id","board");
	panel.appendChild(paragraph);
	paragraph.setAttribute("align","middle");
	alterDiscription(num);
	}
function alterDiscription(num){
	var par = document.getElementById('board');
	par.innerHTML="";
	par.style.display="block";
    startType(num);
    }
function startType(num){
    typingTxt=discriptionText[num].split("");
    if(typingBool==false){
    	typingBool=true; 
    	tyInt = setInterval(typing,70); 
    	}
	}
function typing(){
    if(typingIdx<typingTxt.length){ 
        document.getElementById("board").append(typingTxt[typingIdx]);
        typingIdx++;
       	} 
	else
		breakIntv();
    } 
function breakIntv(){
    typingIdx=0;
	typingBool=false;
	clearInterval(tyInt);
	linkGenerator();
	}
function linkGenerator(){
	var newLink=document.createElement("a");
	var board=document.getElementById("board");
	board.innerHTML=board.innerHTML+"<br>"+"관련 링크"+"<br>";
	newLink.setAttribute("href","https://www.youtube.com/");
	newLink.setAttribute("target","_blank");
	newLink.innerHTML="Hello";
	board.appendChild(newLink);
	}
