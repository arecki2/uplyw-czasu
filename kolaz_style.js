var directory_original = "./Ice Melting/";
var directory_cropped = "./Ice Melting (cropped)/";

for(var i=1; i<=27; i++) {
	var imgSrc = directory_original + i + ".png";
	var imgCropSrc = directory_cropped + i + ".png";
	
	var imgTag = document.createElement("img");
	imgTag.addEventListener("mouseover", hover(this, i));
	imgTag.addEventListener("mouseout", unhover(this, i));
	
	imgTag.src = imgCropSrc;
	//imgTag.style.width = "1280px";
	//imgTag.style.position = "absolute";
	//imgTag.style.display = "block";
	if(i != 1) {
		imgTag.style.marginTop = String(120-imgTag.naturalHeight) + "px";
	}
	//imgTag.style.bottom = String(600*(i-1)) + "px";
	
	document.getElementById("zdjecia").appendChild(imgTag);
}

function hover(element, i) {
	element.src = directory_original + i + ".png";
}

function unhover(element, i) {
	element.src = directory_cropped + i + ".png";
}