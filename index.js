const pic = document.getElementById('pic');
const picbtn = document.getElementById('imgchange');
const displayText = document.getElementById('output')
var page = 1;
var x = 12;
var y = 0;

function changepic(){

    if (page == 1){
        pic.src = "alt.webp";
        picbtn.innerHTML = "Previous Picture";
        page =2;
        }else{
        pic.src = "main.webp";
        picbtn.innerHTML = "Next Picture";
        page = 1;
    }
}

function fontchange(){
    if (x < 32){
        x += 3;
    }
    else{
        x = 16;
    }
    displayText.style.fontSize = x.toString()+"px";
}

function themes(){
    if (y==0){
        document.body.style.backgroundColor = "#0d84ec";
        y = 1;
    }else{
        document.body.style.backgroundColor = "red";
        y = 0;
    }
    
}

