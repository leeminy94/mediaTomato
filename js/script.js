//////////////////////////////////////////////////////////////////////////////
/*
토마토스 자바 스크립트
*/

//////////////////////////////////////////////////////////////////////////////
//All Focus
function allblur() {
	for (i = 0; i < document.links.length; i++) {
	var obj = document.links[i];
	if(obj.addEventListener) obj.addEventListener("focus", oneblur, false);
	else if(obj.attachEvent) obj.attachEvent("onfocus", oneblur);
	}
}
function oneblur(e) {
	var evt = e ? e : window.event;
	if(evt.target) evt.target.blur();
	else if(evt.srcElement) evt.srcElement.blur();
}
//All Focus End

//////////////////////////////////////////////////////////////////////////////
//Menu Open/Close I
function clickshow(num){
	menu = document.getElementById("block"+num);
	if( menu != null && typeof menu != "undefined" )
		{
			if (menu.style.display=="block"){
			menu.style.display="none";//Close
		}
	else{
		menu.style.display="block";//Sub Menu Open
		}
	}
}

//Menu Open/Close II
function reshow(num){
	menu = document.getElementById("rblock"+num);
	if( menu != null && typeof menu != "undefined" )
		{
			if (menu.style.display=="block"){
			menu.style.display="none";//Close
		}
	else{
		menu.style.display="block";//Sub Menu Open
		}
	}
}

//Menu Open/Close End
function clickblock(num) {
    try {
        for (i = 1; i <= 100; i++) {
            var menu = eval("cblock" + i + ".style");

            if (num == i) { menu.display = "block"; }
            else { menu.display = "none"; }
        }
    }
    catch (exception) {
    }
}

//Menu Open/Close End
function showblock(num) {
    try {
        for (i = 1; i <= 100; i++) {
            var menu = eval("sblock" + i + ".style");

            if (num == i) { menu.display = "block"; }
            else { menu.display = "none"; }
        }
    }
    catch (exception) {
    }
}

//////////////////////////////////////////////////////////////////////////////
// PNG Trans Start
function setPng24(obj) {
	obj.width=obj.height=1;
	obj.className=obj.className.replace(/\bpng24\b/i,'');
	obj.style.filter =
	"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='"+ obj.src +"',sizingMethod='image');"
	obj.src='';
	return '';
}
// PNG Trans End

//////////////////////////////////////////////////////////////////////////////
// quick
var stmnLEFT = -20; // 왼쪽 여백 (메뉴가 왼쪽에서 400픽셀 떨어진 곳에 보여집니다) 
var stmnGAP1 = 150; // 위쪽 여백 (메뉴가 위에서 10픽셀 떨어진 곳에 보여집니다) 
var stmnGAP2 = 150; // 스크롤시 브라우저 위쪽과 떨어지는 거리 
var stmnBASE = 150; // 스크롤 시작위치 
var stmnActivateSpeed = 35; 
var stmnScrollSpeed = 20; 

var stmnTimer; 

function RefreshStaticMenu() { 
	var stmnStartPoint, stmnEndPoint; 
	
	stmnStartPoint = parseInt(document.getElementById('STATICMENU').style.top, 10); 
	stmnEndPoint = Math.max(document.documentElement.scrollTop, document.body.scrollTop) + stmnGAP2; 
	if (stmnEndPoint < stmnGAP1) stmnEndPoint = stmnGAP1; 
	
	if (stmnStartPoint != stmnEndPoint) { 
		stmnScrollAmount = Math.ceil( Math.abs( stmnEndPoint - stmnStartPoint ) / 15 ); 
		document.getElementById('STATICMENU').style.top = parseInt(document.getElementById('STATICMENU').style.top, 10) + ( ( stmnEndPoint<stmnStartPoint ) ? -stmnScrollAmount : stmnScrollAmount ) + 'px'; 
		stmnRefreshTimer = stmnScrollSpeed; 
	}
	
	stmnTimer = setTimeout("RefreshStaticMenu();", stmnActivateSpeed); 
} 


function InitializeStaticMenu() {
	document.getElementById('STATICMENU').style.left = stmnLEFT + 'px'; 
	document.getElementById('STATICMENU').style.top = document.body.scrollTop + stmnBASE + 'px'; 
	RefreshStaticMenu();
}
// quick END

//////////////////////////////////////////////////////////////////////////////
// Layer Popup
isIE=document.all;
isNN=!document.all&&document.getElementById;
isN4=document.layers;
isHot=false;

function ddInit(e){
	topDog=isIE ? "BODY" : "HTML";
	whichDog=isIE ? document.all.divpop : document.getElementById("divpop");
	whichDog=isIE ? document.all.divpop1 : document.getElementById("divpop1");
	hotDog=isIE ? event.srcElement : e.target;
	while (hotDog.id!="titleBar"&&hotDog.tagName!=topDog){
		hotDog=isIE ? hotDog.parentElement : hotDog.parentNode;
	}
	if (hotDog.id=="titleBar"){
	offsetx=isIE ? event.clientX : e.clientX;
	offsety=isIE ? event.clientY : e.clientY;
	nowX=parseInt(whichDog.style.left);
	nowY=parseInt(whichDog.style.top);
	ddEnabled=true;
	document.onmousemove=dd;
	}
}

function dd(e){
	if (!ddEnabled) return;
	whichDog.style.left=isIE ? nowX+event.clientX-offsetx : nowX+e.clientX-offsetx;
	whichDog.style.top=isIE ? nowY+event.clientY-offsety : nowY+e.clientY-offsety;
	return false;
}

function ddN4(whatDog){
	if (!isN4) return;
	N4=eval(whatDog);
	N4.captureEvents(Event.MOUSEDOWN|Event.MOUSEUP);
	N4.onmousedown=function(e){
		N4.captureEvents(Event.MOUSEMOVE);
		N4x=e.x;
		N4y=e.y;
	}
	N4.onmousemove=function(e){
		if (isHot){
		N4.moveBy(e.x-N4x,e.y-N4y);
		return false;
		}
	}
	N4.onmouseup=function(){
		N4.releaseEvents(Event.MOUSEMOVE);
	}
}

function hideMe(){
	if (isIE||isNN) whichDog.style.visibility="hidden";
	else if (isN4) document.divpop.visibility="hide";
	else if (isN4) document.divpop1.visibility="hide";
	else if (isN4) document.divpop2.visibility="hide";
}
function showMe(){
	if (isIE||isNN) whichDog.style.visibility="visible";
	else if (isN4) document.divpop.visibility="show";
	else if (isN4) document.divpop1.visibility="show";
	else if (isN4) document.divpop2.visibility="show";
}

document.onmousedown=ddInit;
document.onmouseup=Function("ddEnabled=false");

function joinin(){
	document.getElementById("divpop").style.display='inline'
}
function joinout(){
	document.getElementById("divpop1").style.display='inline'
}
function goods(){
	document.getElementById("divpop2").style.display='inline'
}


function close_Layer(){
	document.getElementById("divpop").style.display='none'
}
function close_Layer(){
	document.getElementById("divpop1").style.display='none'
}
function close_Layer(){
	document.getElementById("divpop2").style.display='none'
}
// Layer Popup


