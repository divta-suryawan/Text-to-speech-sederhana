let btn = document.getElementById('btn');
btn.addEventListener('click', () => {
    let input = document.getElementById('input').value;
    if(input.trim() == ""){
        let hasil = document.getElementById("hasil");
        hasil.innerHTML = "Please enter text first!";
        hasil.style.color = "red";
        
        setTimeout(() => {
            document.getElementById("hasil").innerHTML = "";
        },2000);
    }

    let speack = new SpeechSynthesisUtterance();
    speack.lang ="id-ID";
    speack.text = input;
    window.speechSynthesis.speak(speack);
    
})