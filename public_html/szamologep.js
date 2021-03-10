szamolas();
var valtA = "";
var valtB = "";
var valtM = "";
var eredmeny = 0;

function osszead(){
    eredmeny = Number(valtA) + Number(valtB);
    document.getElementById("szoveg").innerHTML = "Eredmény: "+ eredmeny;
}
function kivonas(){
    eredmeny = Number(valtA) - Number(valtB);
    document.getElementById("szoveg").innerHTML = "Eredmény: "+ eredmeny;
}
function szorzas(){
    eredmeny = Number(valtA) * Number(valtB);
    document.getElementById("szoveg").innerHTML = "Eredmény: "+ eredmeny;
}
function osztas(){
    eredmeny = Number(valtA) / Number(valtB);
    document.getElementById("szoveg").innerHTML = "Eredmény: "+ eredmeny;
}
function szamolas(){
    valtA = document.getElementById("a").value;
    valtB = document.getElementById("b").value;
    valtM = document.getElementById("muv").value;
    
    if(valtM === "+"){
        osszead();
    }
    else if(valtM === "-"){
        kivonas();
    }
    else if(valtM === "*"){
        szorzas();
    }
    else if(valtM === "/"){
        osztas();
    }
    

}
