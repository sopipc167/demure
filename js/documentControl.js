var isBtnActing = false;
var isOptActing = false;
var typingIdx=0;
var tyInt;
var typingTxt=["Unknown","String","Wanted"];
var typingBool = false;
var mapURLDic={};
/*재발 작동되라 제발*/
$(document).ready(function(){
	$.ajax({
		url:"test.json",
		method:"GET",
		dataType:"json",
		success: function(data){
			mapURLDic=JSON.parse(data);
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
var discriptionText={}
	//블라디보스토크 지역 설명
	discriptionText["블라디보스토크"]="블라디보스토크는 극동의 LA라고도 불리는 곳이다.";
	discriptionText["블라디보스토크 역"]="그 유명한 『시베리아 횡단철도』의 종착역이다. \r\n윾시 갓양이라 그런지 역사 외부도 굉장히 아름답고 바다와 인접해있어서 여러모로 볼 거리가 많다.\r\n다만, 『시베리아 횡단철도』를 이용해 여행하겠다는 생각은 접어두는 것이 좋을 것이다.\r\n돈이 얼마나 들든간에 시간이 많이 걸린다. 장장 8일동안 아무것도 안한다고 생각해봐라(훈련소 격리기간과 비슷하게) 차라리 비행기를 타고 경유하는 것이 시간과 돈을 모두 절약할 수 있을 지도 모른다.";
	discriptionText["니콜라이황태자 개선문"]="이 개선문이 만들어진 시기는 1891년. 러시아 제국의 마지막 황제였던 니콜라이 2세가 황태자 신분이었을 때....(생략) 개선문이라기엔 솔직히 초라하지만 나름 아담한 서양미가 넘치는 건축물이다. 옆에는 2차세계대전의 전사자들을 추모하기위한 기념물인 『꺼지지 않는 불꽃』과 입장료 단돈 100루블(약 1500원)인 『S-51잠수함 박물관』과, 『성 안드레아 소성당』이 위치해 있다.";
	discriptionText["독수리 전망대"]="전망대다";
	discriptionText["해적커피"]="카페다";
	discriptionText["혁명광장"]="광장이다";
	discriptionText["댑 버거"]="햄버거가게다";
	discriptionText["레스토랑 주마"]="킹크랩 전문 레스토랑이다";
	discriptionText["블라디보스토크 굼"]="러시아의 백화점을 굼이라고 한다";
	discriptionText["프리모르스키 아쿠아리움"]="수족관이다";
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
