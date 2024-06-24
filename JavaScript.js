let erroAniamtion = 0; // Declare and initialize erroAniamtion
let shake = 0;
document.addEventListener("DOMContentLoaded", ()=> {
    let True = localStorage.getItem("PIN");
    if (True) {
        document.getElementById("noPin").style.display = "none"
    }
})
function PinTry() {
    let PIN = document.getElementById("pin").value;
    let storedPIN = localStorage.getItem("PIN");
    
    if (storedPIN === PIN) {
        window.location.href = "./Home/home.html";
    } else {
        let Pintext = document.getElementById("textPin");
        if (erroAniamtion === 0) {
            Pintext.style.color = "red";
            Pintext.style.animation = "error 1s linear";
            erroAniamtion = 1;
            Pintext.style.animation = "shake 1s linear"
            if (shake === 0) {
                Pintext.style.animation = "shake 1s linear"
                shake = 1;
                setTimeout(() => {
                    Pintext.style.animation = "none"
                }, 1000);
            }
            else {
                shake = 0;
            }
            setTimeout(() => {
                erroAniamtion = 0;
                setTimeout(() => {
                    Pintext.style.color = "black"
                }, 1000);
            }, 1000); // Reset erroAniamtion after animation duration
        }
    }
}
