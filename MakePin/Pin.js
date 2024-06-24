let shake = 0 ;
let erroAniamtion = 0;
function CreatePin() {
    let PIN = document.getElementById("pin");
    if (PIN.value === "") {
        PinTry()
    }
    else {
        let Account = false;
        localStorage.setItem("PIN", PIN.value); 
        localStorage
        window.location.href = "../Home/home.html"
    }

}
function PinTry() {    
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

