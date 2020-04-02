window.onload = function() {
    document.getElementById("page").style.visibility='hidden';
    document.getElementById("fin").style.visibility='hidden';
}

function start(){
    document.getElementById("debut").style.visibility='hidden';
    document.getElementById("page").style.visibility='visible';
    webGLStart();
}

function gameOver(){
    document.getElementById("page").style.visibility='hidden';
    document.getElementById("fin").style.visibility='visible';
}
