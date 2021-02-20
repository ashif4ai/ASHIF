// document.getElementById("demo").disabled = true;
let qrcode = select("img");
let qrtext = select ("textarea")
// let qrbtn = select("button");
// qrbtn.addEventListener("click",generateQR);

function generateQR(){
	
	let key = "1000x1000";		
	var apikey = qrtext.value;
	let detailMovie = `https://api.qrserver.com/v1/create-qr-code/?size=${key}&data=${apikey}`;

	qrcode.src = detailMovie;
	// document.write(apikey);

}

function generatetxt(){
	var a = document.getElementById ("name").value;
	var b = document.getElementById ("gName").value;
	var c = document.getElementById ("gender").value;
	var d = document.getElementById ("yob").value;
	var e = document.getElementById ("dob").value;
	var f = document.getElementById ("vill").value;
	var g = document.getElementById ("vct").value;
	var l = document.getElementById ("post").value;
	var h = document.getElementById ("dist").value;
	var i = document.getElementById ("state").value;
	var j = document.getElementById ("pin").value;
	var k = document.getElementById ("uidn").value;
var uidr;
var show;
	
	if((c=="M") || (c=="m"))
	{show = "S/O";}
	else if ((c=="F") || (c=="f"))
	{show = "C/O"; }

uidr="<?xml version=\"1.0\" encoding=\"UTF-8\"?> <PrintLetterBarcodeData uid=\""+k+"\" name=\""+a+"\" gender=\""+c+"\" yob=\""+d+"\" co=\""+show+": "+b+"\" house=\""+f+"\" vtc=\""+g+"\" po=\""+l+"\" dist=\""+h+"\" state=\""+i+"\" pc=\""+j+"\" dob=\""+e+"\"\/>";


document.getElementById("demo").innerHTML = (uidr);
// document.getElementById("demo").disabled = true;

}


function select(el){
	return document.querySelector(el);
}
// <?xml version="1.0" encoding="UTF-8"?> <PrintLetterBarcodeData uid="650442644690" name="samsudin ansari" gender="m" yob="1979" co="S/O: rasul ansari" house="29" vtc="bhopatpur" po="bharthiya" dist="siwan" state="Bihar" pc="841416" dob="01/01/1979"/>

// <?xml version="1.0" encoding="UTF-8"?> <PrintLetterBarcodeData uid="650442644690" name="samsudin ansari" gender="M" yob="1979" co="S/O: rasul ansari" house="29" vtc="bhopatpur" po="bharthiya" dist="siwan" state="Bihar" pc="841416" dob="01/01/1979"/>

