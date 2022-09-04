const Form1 = document.querySelector("#Form1");
const Form2 = document.querySelector("#Form2");
const Form3 = document.querySelector("#Form3");

const Next1 = document.querySelector("#Next1");
const Next2 = document.querySelector("#Next2");
const Back1 = document.querySelector("#Back1");
const Back2 = document.querySelector("#Back2");

const Progress = document.querySelector('#progress')

Next1.onclick = function (){
    Form1.style.left = "-450px";
    Form2.style.left = "40px";
    Progress.style.width = "240px"
}
Back1.onclick = function(){
    Form1.style.left = "40px";
    Form2.style.left = "450px";
    Progress.style.width = "120px"
}
Next2.onclick = function (){
    Form2.style.left = "-450px";
    Form3.style.left = "40px";
    Progress.style.width = "360px";
}
Back2.onclick = function(){
    Form2.style.left = "40px";
    Form3.style.left = "450px";
    Progress.style.width = "240px";
}