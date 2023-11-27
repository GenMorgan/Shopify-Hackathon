function hidehoverr(){
    document.getElementById("hoverbody").style.display= "none";
}




// function startset(){
//     let yar = document.getElementById("wrapper");
//     let mar = document.getElementById("upp");
//     let tar = document.getElementById("downpp");
//   let test =  yar.classList.toggle("active")
//     if(test){

//         tar.style.display = "block"
//         mar.style.display = "none"
//     }
//     else{
        
//         mar.style.display = "block"
//         tar.style.display = "none"
//     }

  
// }

function startset(){
    let yar = document.getElementById("wrapper");
   yar.classList.toggle("active");
   let mar = document.getElementById("downpp")
   mar.classList.toggle("active2")
   let tar = document.getElementById("upp")
   tar.classList.toggle("active3")
  
}

function expand1(){
    let ur = document.getElementById("norsetupCust");
    ur.classList.toggle("active4");
    let yr = document.getElementById("setupone");
    yr.classList.toggle("active5");
    
}