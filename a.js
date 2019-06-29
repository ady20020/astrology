var dialLines = document.getElementsByClassName('lines');
var clockEl = document.getElementsByClassName('bg')[0];
var roman = document.getElementsByClassName("roman")[0].children[0];
var monthClass = document.getElementsByClassName("monthClass")[0].children[0];
var sign = document.getElementsByClassName("sign")[0].children[0];
var border = document.getElementsByClassName("border")[0].children[0];
var group = document.getElementsByClassName("group");
var button = document.getElementById('toggle-animation');


button.onclick = function(){ 
document.getElementsByClassName("roman")[0].classList.toggle('run'),
document.getElementsByClassName("monthClass")[0].classList.toggle('run'),
document.getElementsByClassName("sign")[0].classList.toggle('run'),
document.getElementsByClassName("border")[0].classList.toggle('run');
}


for (var i = 1; i < 60; i++) {
  clockEl.innerHTML += "<div class='lines'></div>";

    
  dialLines[i].style.transform = "rotate(" + 6 * i + "deg)";
}

for (var i = 0; i < 12; i++) {
  roman.innerHTML += "<li><span class='asteric'>&#x2605;</span></li>";
  roman.children[i].style.transform = "rotate(" + 30 * i + "deg)";
}

var month =
["\bJANUARY","\bFEBRUARY","\bMARCH","\bAPRIL","\bMAY\b","\bJUNE\b","\bJULY\b","\bAUGUST\b","\bSEPTEMBER","\bOCTOBER","\bNOVEMBER","\bDECEMBER","\b"];
var k = 0;
for(var i = 0; i<month.length;i++){

  var m = month[i].split("");
            
  for(var j = 0;j<m.length;j++){
              if(m[j] =="\b"){m[j]= "&nbsp;";}

if(j == '1'){
    monthClass.children[k-1].style.borderLeft = "2px solid #FFFEE0";
}
monthClass.innerHTML += "<li><span class='smonth'>" + m[j] + "</span></li>";
monthClass.children[k].style.transform = "rotate(" + k * 4  +"deg)";
++k;
}
}
var zodiac = "qcegkmoswuia".split("");
for(var i = 0;i<zodiac.length;i++){
sign.innerHTML += "<li><span class='ssign'>" + zodiac[i] +"</span></li>";
sign.children[i].style.transform ="rotate(" + 30 * i + "deg)";

//sign.children[i].style.borderLeft ="4px solid red";
//sign.children[i].style.backgroundColor ="green";
}

for (var i = 0; i < zodiac.length; i++) {
  border.innerHTML += "<li><span></span></li>";
  border.children[i].style.transform = "rotate(" + 30 * i + "deg)";
}

var innerRay = document.getElementsByClassName("innerRay")[0].children[0];
for(var i = 0;i<7;i++){
	innerRay.innerHTML +="<li></li>";
	innerRay.children[i].style.transform = "rotate("+12*i+"deg)";
}

var ray = document.getElementsByClassName("r")[0].children;
for(var i =0;i<4;i++){
for(var j=0;j<13;j++){
	ray[i].innerHTML += "<li><img id='image' src='a.png'></li>";
	ray[i].children[j].style.transform  = "rotate("+ 27.5 *j +"deg)";
}
}