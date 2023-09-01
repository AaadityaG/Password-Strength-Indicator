let pass = document.getElementById("password");
let msg = document.getElementById("message");
let str = document.getElementById("strength");


pass.addEventListener("input", () => {
    if(pass.value.length > 0){
        msg.style.display = "block";
    }
    else{
        msg.style.display = "none";
    }

    if(pass.value.length < 4){
        str.innerHTML = "Weak";
        str.style.color = "#ff0000"
        pass.style.borderColor = "#ff5925";
    }
    else if(pass.value.length >= 4 && pass.value.length <= 8){
        str.innerHTML = "Medium";
        str.style.color = "#e9ff26"
        pass.style.borderColor = "yellow";
    }
    else if(pass.value.length > 8){
        str.innerHTML = "Strong";
        str.style.color = "#0aff0a"
        pass.style.borderColor = "green";
    }
}) 
