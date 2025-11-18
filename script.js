 let radius=document.getElementById("radius");
let volume=document.getElementById("volume")
function volume_sphere() {
    //Write your code here
	let r=Number(radius.value);
	if(r>=0){
		volume.value=((4/3)*(22/7)*(r*r*r)).toFixed(4);
	}else{
		volume.value=NaN;
	}
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
