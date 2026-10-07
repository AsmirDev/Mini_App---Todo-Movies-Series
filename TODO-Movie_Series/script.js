let myInput = document.querySelector("#myInput");
let myFavorite = document.querySelector("#myFavorite");
let value = myInput.value;

document.querySelector("#click").addEventListener("click", function(){
   document.querySelector("#myFavorite").innerHTML += `<li>${myInput.value}</li>`;
});

myInput.addEventListener("keypress", function(event){
   if (event.key === "Enter") {
      event.preventDefault();
      document.querySelector("#click").click();
   }
})

myFavorite.addEventListener("click", function(event){
   myFavorite.removeChild(event.target);
});


