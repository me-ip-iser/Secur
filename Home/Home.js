document.addEventListener("DOMContentLoaded", ()=>{
    let video = document.getElementById("stream")
    navigator.mediaDevices.getUserMedia({
        audio:false,
        video:true
    }).then( stream =>{
        video.srcObject = stream;
    })
})