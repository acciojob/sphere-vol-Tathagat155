 let radius=document.getElementById("radius");
let volume=document.getElementById("volume")
function volume_sphere() {
    //Write your code here
	let r=Number(radius.value);
	if(isNaN(r) || r<0){
		
		volume.value="NaN";
	}
		let result=((4/3)*(22/7)*(r*r*r));
	    volume.value=result.toFixed(4);

} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
