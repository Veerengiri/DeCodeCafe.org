const resorces = [
    "https://www.youtube.com/embed/zd7YOfNr_Wg",
    "https://www.youtube.com/embed/b9jhSOZRnW0",
    "https://www.youtube.com/embed/Hea2E8d5jb8",
    "https://www.youtube.com/embed/QnUzTRro1Sc"
]
let curind = 0;
let length = resorces.length;
const el = document.getElementById("iframetag");
const leftar = document.getElementById("leftar");
const rightar = document.getElementById('rightar');
el.src=resorces[0];

function next(){
    if(length>curind+1){
        curind+=1;
        el.src = resorces[curind];
        leftar.style.opacity=1;
    }else{
        rightar.style.opacity=.2;
    }
}
function prev(){
    if(0<=curind-1){
        curind-=1;
        el.src = resorces[curind];
        rightar.style.opacity=1;
    }else{
        leftar.style.opacity=.2;
    }
}