var isBtnActing = false;
var isOptActing = false;
var typingIdx=0;
var tyInt;
var typingTxt=["Unknown","String","Wanted"];
var typingBool = false;
var mapURLDic={}
//블라디보스토크 관련 지도
	mapURLDic["블라디보스토크"]="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d93121.27036802335!2d131.88341839101878!3d43.166690846552264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fb39cba5249d485%3A0x186704d4dd967e35!2z65-s7Iuc7JWEIO2UhOumrOuqqOultOyKpO2CpCDtgazroIjsnbQg67iU652865SU67O07Iqk7Yag7YGs!5e0!3m2!1sko!2skr!4v1627801341813!5m2!1sko!2skr";
	mapURLDic["블라디보스토크 역"]="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d23299.348562363102!2d131.8924688820923!3d43.11673249482823!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x48b854dd68887a40!2z67iU652865SU67O07Iqk7Yag7YGs7Jet!5e0!3m2!1sko!2skr!4v1627986988380!5m2!1sko!2skr";
	mapURLDic["독수리 전망대"]="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d186615.23322277566!2d131.81496712459958!3d43.04431352501866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fb3920ad875b8bb%3A0x3b294a3c48d8ab54!2z64-F7IiY66as7KCE66ed64yAIO2RuOuLiOy_qOudvA!5e0!3m2!1sko!2skr!4v1628399632023!5m2!1sko!2skr";
	mapURLDic["해적커피"]="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.363959280268!2d131.8794038156923!3d43.117879894898095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fb38d2c470b658f%3A0x232059c57bdec2f8!2z7ZW07KCB7Lm07Y6Y!5e0!3m2!1sko!2skr!4v1628399732213!5m2!1sko!2skr";
	mapURLDic["니콜라이황태자 개선문"]="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11650.383696535868!2d131.8837944714138!3d43.113006047874414!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fb3917868212a5f%3A0xea7009c8807f262f!2z64uI7L2c65287J207Zmp7YOc7J6Q6rCc7ISg66y4!5e0!3m2!1sko!2skr!4v1628399822593!5m2!1sko!2skr";
	mapURLDic["혁명광장"]="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.4905613669007!2d131.88302631569232!3d43.115219895068435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fb38ddda3c06e6f%3A0x5dc7e86c77ef41d7!2z7KSR7JWZ6rSR7J6lIO2Ygeuqheq0keyepQ!5e0!3m2!1sko!2skr!4v1628399852747!5m2!1sko!2skr";
	mapURLDic["댑 버거"]="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.4599394678144!2d131.87988151569218!3d43.115863295027204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fb38df0a8f22b35%3A0x8b6e0d0b72f2e7ae!2z64yR67KE6rGw!5e0!3m2!1sko!2skr!4v1628399902996!5m2!1sko!2skr";
	mapURLDic["레스토랑 주마"]="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2448.8859618531346!2d131.87779643410627!3d43.12063950426926!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdffef2b5f3afa030!2z7KO866eIIOugiOyKpO2GoOuekQ!5e0!3m2!1sko!2skr!4v1628399949211!5m2!1sko!2skr";
	mapURLDic["블라디보스토크 굼"]="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2912.4795957803353!2d131.88574851569226!3d43.115450295053684!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5fb38df6fba8d8e3%3A0x9bc248f6cb501bf1!2z67iU652865SU67O07Iqk7Yag7YGsIOq1vCDrsLHtmZTsoJA!5e0!3m2!1sko!2skr!4v1628399995770!5m2!1sko!2skr";
	mapURLDic["프리모르스키 아쿠아리움"]="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11671.374985120538!2d131.91781177148263!3d43.00262465121116!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc3da4144dc3a7d94!2z7ZSE66as66qo66W07Iqk7YKkIOyVhOy_oOyVhOumrOybgA!5e0!3m2!1sko!2skr!4v1628400058638!5m2!1sko!2skr";

	//나가사키 관련 지도
	mapURLDic["나가사키"]="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d180572.5817668666!2d129.6714726085329!3d32.75818847779204!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35154c548418da67%3A0x8bf7a6edca32cc93!2z7J2867O4IOuCmOqwgOyCrO2CpO2YhCDrgpjqsIDsgqztgqTsi5w!5e0!3m2!1sko!2skr!4v1627802647005!5m2!1sko!2skr"
	mapURLDic[""]="";
	mapURLDic[""]="";
	mapURLDic[""]="";
	mapURLDic[""]="";
	mapURLDic[""]="";
	mapURLDic[""]="";
	mapURLDic[""]="";
	mapURLDic[""]="";
	mapURLDic[""]="";

	//타이페이 관련 지도
	mapURLDic["타이베이"]="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d231263.22577116164!2d121.42141734313677!3d25.085340344714425!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac6b61dbbd8b%3A0xbcd1baad5c06a482!2z64yA66eMIO2DgOydtOuyoOydtA!5e0!3m2!1sko!2skr!4v1628403052970!5m2!1sko!2skr";
	mapURLDic[""]="";
	mapURLDic[""]="";
	mapURLDic[""]="";
	mapURLDic[""]="";
	mapURLDic[""]="";
	mapURLDic[""]="";
	mapURLDic[""]="";
	mapURLDic[""]="";
	mapURLDic[""]="";

	//이르쿠츠크 관련 지도
	mapURLDic["이르쿠츠크"]="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d312502.5862606952!2d104.1741329!3d52.2719594!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5da83ad353e2f665%3A0x31d6cd1456d8e94e!2z65-s7Iuc7JWEIOydtOultOy_oOy4oOy5tOyVvCDsmKTruJTrnpjsiqTtirgg7J2066W07L-g7Lig7YGs!5e0!3m2!1sko!2skr!4v1627802832470!5m2!1sko!2skr";
	mapURLDic[""]="";
	mapURLDic[""]="";
	mapURLDic[""]="";
	mapURLDic[""]="";
	mapURLDic[""]="";
	mapURLDic[""]="";
	mapURLDic[""]="";
	mapURLDic[""]="";
	mapURLDic[""]="";
			
	//이스탄불 관련 지도
	mapURLDic["이스탄불"]="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d770809.0846015095!2d28.451771181959312!3d41.003964449432885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14caa7040068086b%3A0xe1ccfe98bc01b0d0!2z7YSw7YKkIOydtOyKpO2DhOu2iCDso7wg7J207Iqk7YOE67aI!5e0!3m2!1sko!2skr!4v1628403079737!5m2!1sko!2skr";
	mapURLDic[""]="";
	mapURLDic[""]="";
	mapURLDic[""]="";
	mapURLDic[""]="";
	mapURLDic[""]="";
	mapURLDic[""]="";
	mapURLDic[""]="";
	mapURLDic[""]="";
	mapURLDic[""]="";

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
	document.getElementById('VLD').disabled=false;
	document.getElementById('IRK').disabled=false;
	document.getElementById('TBI').disabled=false;
	document.getElementById('NGK').disabled=false;
	}
function createButtons(btn){
	document.getElementById('option0').style.display="inline";
	document.getElementById('option1').style.display="inline";
	document.getElementById('option2').style.display="inline";
	document.getElementById('option3').style.display="inline";
	document.getElementById('option4').style.display="inline";
	document.getElementById('option5').style.display="inline";
	document.getElementById('option6').style.display="inline";
	document.getElementById('option7').style.display="inline";
	document.getElementById('option8').style.display="inline";
	document.getElementById('option9').style.display="inline";
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
