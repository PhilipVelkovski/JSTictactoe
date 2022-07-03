const computerPlays = ["one","two","three","four","five","six","seven","eight","nine"];

// random function generator for pc player
function generateRandom (){

    var random = Math.floor(Math.random()*computerPlays.length);

    var elementRandom = computerPlays[random];
    
    return elementRandom;
    
};
var z = generateRandom();

console.log(z + "SSDASDADS");
//ova vraka lista od site elementi so class "box";

const box = document.getElementsByClassName("box");


var box1 = document.getElementById("one");

var box2 = document.getElementById("two");

var box3 = document.getElementById("three");

var box4 = document.getElementById("four");

var box5 = document.getElementById("five");

var box6 = document.getElementById("six");

var box7 = document.getElementById("seven");

var box8 = document.getElementById("eight");

var box9 = document.getElementById("nine");


function checkWinforX(){
    if(box1.textContent.includes("X") && box2.textContent.includes("X") && box3.textContent.includes("X") ){
     console.log("YOU WIN");
     document.getElementById("win").innerHTML = " Player X wins !";
     return true;
    };
    if(box4.textContent.includes("X") && box5.textContent.includes("X") && box6.textContent.includes("X") ){
     console.log("YOU WIN");
     
     document.getElementById("win").innerHTML = " Player X wins !";
     return true;
    };
    if(box7.textContent.includes("X") && box8.textContent.includes("X") && box9.textContent.includes("X") ){
     console.log("YOU WIN");
     
     document.getElementById("win").innerHTML = " Player X wins !";
     return true;
    };


    if(box1.textContent.includes("X") && box4.textContent.includes("X") && box7.textContent.includes("X") ){
     console.log("YOU WIN");
     
     document.getElementById("win").innerHTML = " Player X wins !";
     return true;
     
    };
    if(box2.textContent.includes("X") && box5.textContent.includes("X") && box8.textContent.includes("X") ){
     console.log("YOU WIN");
     console.log("YOU WIN");
     
     document.getElementById("win").innerHTML = " Player X wins !";
     return true;
    };
    if(box3.textContent.includes("X") && box6.textContent.includes("X") && box9.textContent.includes("X") ){
     console.log("YOU WIN");
     
     document.getElementById("win").innerHTML = " Player X wins !";
     return true;
    };


    if(box1.textContent.includes("X") && box5.textContent.includes("X") && box9.textContent.includes("X") ){
     console.log("YOU WIN");
     
     document.getElementById("win").innerHTML = " Player  X wins !";
     return true;
    };
    if(box3.textContent.includes("X") && box5.textContent.includes("X") && box7.textContent.includes("X") ){
     console.log("YOU WIN");
     
     document.getElementById("win").innerHTML = " Player X  wins !";
     return true;

    };
  
   };

   function checkWinfoO(){
     if(box1.textContent.includes("O") && box2.textContent.includes("O") && box3.textContent.includes("O") ){
        console.log("YOU WIN");
     
        document.getElementById("win").innerHTML = " Player O  wins !";
        return true;
     
     };
     if(box4.textContent.includes("O") && box5.textContent.includes("O") && box6.textContent.includes("O") ){
      console.log("YOU WIN");
      document.getElementById("win").innerHTML = " Player O  wins !";
      return true;
     
     };
     if(box7.textContent.includes("O") && box8.textContent.includes("O") && box9.textContent.includes("O") ){
      console.log("YOU WIN");
      document.getElementById("win").innerHTML = " Player O  wins !";
      return true;
      
    };


     if(box1.textContent.includes("O") && box4.textContent.includes("O") && box7.textContent.includes("O") ){
      console.log("YOU WIN");
      document.getElementById("win").innerHTML = " Player O  wins !";
      return true;
   
     };
     if(box2.textContent.includes("O") && box5.textContent.includes("O") && box8.textContent.includes("O") ){
      console.log("YOU WIN");
      document.getElementById("win").innerHTML = " Player O  wins !";
      return true;
     
     };
     if(box3.textContent.includes("O") && box6.textContent.includes("O") && box9.textContent.includes("O") ){
      console.log("YOU WIN");
      document.getElementById("win").innerHTML = " Player O  wins !";
      return true;
     
     };


     if(box1.textContent.includes("O") && box5.textContent.includes("O") && box9.textContent.includes("O") ){
      console.log("YOU WIN");
      document.getElementById("win").innerHTML = " Player O  wins !";
      return true;
      
     };
     if(box3.textContent.includes("O") && box5.textContent.includes("O") && box7.textContent.includes("O") ){
      console.log("O YOU WIN");
      document.getElementById("win").innerHTML = " Player O  wins !";
      return true;
    
     };

      
    };


function playXandO(){
    document.getElementById(this.id).innerHTML = "X";

   
    var m = this.id;
    
    console.log(m + "  OVA E KLIKNATIOT BOX");
           
    var circle = generateRandom();

    console.log(circle + "  PRVIOT IDEX od RANDOM");
    

    if((checkWinfoO()!= true ) && (checkWinforX() != true)){
        if( !(document.getElementById(circle).innerHTML == "X") && !(document.getElementById(circle).innerHTML == "O") ){
            // circle = new generateRandom();
            console.log(circle + " VO PRVIOT IF AKO NEMA X ILI O");
             setInterval(function(){
                  document.getElementById(circle).innerHTML = "O";
                },2000);
          } else { 
      
              var novKrug = generateRandom();
              console.log(novKrug + " PRVIOT NOV KRUG VTORION RAMDOM IZGENERIRAN");
              while((document.getElementById(novKrug).textContent.includes("X")) || (document.getElementById(novKrug).textContent.includes("O"))){
                  var newCirc = generateRandom();

                  console.log( newCirc + " NEW RANDNOM ID IN WHILE ");
                  //var incnew_CIRCLE = newCirc++ ;
                  //console.log("THIS IS new circle++ => " + incnew_CIRCLE);
                      if((document.getElementById(newCirc).innerHTML == "")){
                          setInterval(function(){
                              document.getElementById(newCirc).innerHTML = "O";
                            },2000);
                          console.log(newCirc + " WHILE GENERATOROT AKO VTORIOT new ID ima X ili O  ");
                    
                          return true;
                      };
              };
      
              if(novKrug != circle){
                  if((document.getElementById(novKrug).innerHTML == "") ){
                      setInterval(function(){
                          document.getElementById(novKrug).innerHTML = "O";
                        },2000);
                     console.log(novKrug + " VO 2 IF AKO ID-1 != noviod ID");
                      
                  };
              } 
          
        };
         
       
    };
    if((checkWinfoO() == true ) || (checkWinforX() == true)){
       document.getElementById("start-over").innerHTML = "Start Over";
       
       document.getElementById("start-over").style.border = "1px solid";
      };
};


for(var i = 0 ;i < box.length ; i++){
    box[i].addEventListener("click",playXandO);

};

var start_again =   document.getElementById("reset");
function Reset(){
   location.reload();
};



// if(checkWinfoO() == true){
//     box.removeEventListener("click",playXandO());
//     document.getElementById("win").innerHTML = " Player O wins"
// };
// if( checkWinforX() == true){
    
//     box.removeEventListener("click",playXandO());
// };






/*
const winingBoxes = [
    ["one","two","three"],
    ["one","four","seven"],
    ["one","five","nine"],
    ["three","five","seven"],
    ["four","five","six"],
    ["seven","eight","nine"],
    ["one","four","seven"],
    ["two","five","eight"],
    ["three","six","nine"],
];
console.table(winingBoxes);
for(var m = 0 ; m < winingBoxes.length; m++){
    for(var n = 2; n < winingBoxes[m].length; n++){
        console.log( winingBoxes[m].length + " ssda");

        var cominations = winingBoxes[m];
    };
};

       
       
       
  */

//         document.getElementById(this.id).innerHTML = "X";
        
//         var dd = document.getElementById("nine");
//         if(!(dd.textContent.includes('X'))){
//             console.log("VAKA MOZES DA PROVERIS DALI E X ili O i kade se X i O ");
//         }

    //     enteredBoxes.push(this.id);
    //     // console.log(enteredBoxes.join("")+ " - the clicked divs");
    //     console.log(enteredBoxes);
    //    // console.log(this.id);
    //     if(i == 3){
    //         const m = enteredBoxes.join();
    //         console.log(m + " - clicked");
    //        checkWin(wincombinations,m);
           
    //     //    enteredBoxes.push(this.id);
    //     //    console.log(enteredBoxes);
    //         console.log("three divs were clicked");
    //         i = 0;
    //     } 
//         const clickedBox = this.id;
//         //sega znaes koj element e kliknat
      
        
//         console.log(clickedBox);

//         console.log(i);
//     }); 
//     console.log(boxes);
//     boxes.style.color = "blue";
// };


// box.addEventListener("click", function(event){
//    console.log("23");
// });