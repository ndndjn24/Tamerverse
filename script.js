function show(id){
document.querySelectorAll(".screen").forEach(s=>{
s.classList.remove("active");
});
document.getElementById(id).classList.add("active");
}

function startAccess(){

let name = document.getElementById("username").value.trim();

if(name === ""){
name = "VISITOR";
}

show("verify");

setTimeout(()=>{
document.getElementById("welcome").innerText =
"WELCOME, " + name.toUpperCase();
show("granted");
},2500);

setTimeout(()=>{
show("realm");
},4500);

}
