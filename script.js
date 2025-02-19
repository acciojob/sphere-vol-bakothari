function volume_sphere() {
    //Write your code here
   let r = parseFloat(document.getElementById("radius").value);
    let volumeField = document.getElementById("volume");

    if (isNaN(r) || r < 0) {
        volumeField.value = "NaN";
    } else {
        let volume = (4 / 3) * Math.PI * Math.pow(r, 3);
        volumeField.value = volume.toFixed(4);
    }

    return false;
} 

document.getElementById("submit").addEventListener("click", volume_sphere);

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
