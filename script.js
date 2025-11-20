 let radius=document.getElementById("radius");
let volume=document.getElementById("volume")
function volume_sphere() {
    //Write your code here
	let r=parseInt(radius.value);
	if(isNaN(r) || r<0){	
		volume.value="NaN";
	}else{
		let v = (4/3) * Math.PI * Math.pow(r, 3);
	    volume.value=v.toFixed(4);
	}
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
