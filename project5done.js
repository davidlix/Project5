 //locations.js    project 5 DONE!    
        
     //scores
        var currentScore    = 0;
        var northScore      = 1;
        var eastScore       = 1;
        var southScore      = 1;
        var westScore       = 1; 
     //items available             
        var suitcase        = true;
        var woods           = true;
        var volleyball      = true;
        var food            = true;
     //location   
        var movecounter     = 1;
        var north           = 0;
        var east            = 1;
        var south           = 2;
        var west            = 3;
        var currentlocation = 0
        var inventory = [];
    // Nav Array
        var nav = [                    
                     /*Location 0 */      [ 1,  4,  6,  8], 
                     /*1*/                [ 2, -1,  0, -1], 
                     /*2*/                [ 3, -1,  1, -1], 
                     /*3*/                [-1, -1,  2, -1], 
                     /*4*/                [-1,  5, -1,  0], 
                     /*5*/                [-1, -1, -1,  4], 
                     /*6*/                [ 0, -1,  7, -1], 
                     /*7*/                [ 6, -1, -1, -1], 
                     /*8*/                [-1,  0, -1,  9], 
                     /*9*/                [-1,  8, -1, -1],        
                   ];         
    
    function inventoryReader () {
        for (var i=0; i < inventory.length; i++){
          UpdateDisplay (inventory[i]);
        }
    } 
    function move(direction){
          movecounter = movecounter + 1; 
            var newlocation = nav[currentlocation][direction];
            if (newlocation !== -1){
            currentlocation = newlocation;     
            displayNewLocation ();
            }else {
                UpdateDisplay ("Invalid! Please try again");
          }    
       }
    
    // location prototype
    function locationInfo(_locationName, _info, _score) {
       this.name      = _locationName;
       this.info     = _info;
       this.score    = _score;
       this.toString = function() {
          var retVal = "";
          retVal = "Name of Location:"    +"\n"+ this.name     + "\n" +
                   "Information:"     +"\n"+ this.info     + "\n";
          return retVal;
       }   
    }
    
    // Item prototype
    function itemDesc(_description) {
       this.info     = _description;
       this.toString = function() {
          var retVal = "";
          retVal = "Item found...:" +"\n"+ this.info + "\n";
          return retVal;
       }   
    }

    function displayNewLocation (){
         var Items    = []; 
         var location = [];          
          switch (currentlocation){    
              case 0 :  Items   [0] =  Start =  new itemDesc("There is a suitcase on the ground");
                                        UpdateDisplay (Start); 
                        location [0] =  Start =  new locationInfo ("You are in the tent, you need to find food and woods because you are hungry and cold,", location0());
                                        UpdateDisplay (Start);   
                                       
                                       break;
              
              case 1 :  Items    [1] = North1 =  new itemDesc("Nothing on the ground.");
                                       UpdateDisplay (North1);
                        location [1] = North1  = new locationInfo("You are next to the plane.", location1());
                                       UpdateDisplay (North1); 
                      
                                       break;
                                       
              case 2 : Items    [2] =  North2 =  new itemDesc("Your backpack is on the ground.");
                                       UpdateDisplay (North2);
                       location [2] =  North2 = new locationInfo ("You are walking to the river.", location2());
                                       UpdateDisplay (North2);               
                                       
                                       break;
                                       
              case 3 : Items    [3] = North3 =  new itemDesc("Nothing on the ground.");
                                       UpdateDisplay (North3);
                        location [3] =  North3 = new locationInfo ("You are walking up to the volcano.", location3());
                                       UpdateDisplay (North3); 
                                       
                                       break;
                                       
              case 4 : Items    [4] = East1 =  new itemDesc("Nothing on the ground.");
                                       UpdateDisplay (East1);
                       location [4] =  East1 = new locationDesc ("you are inside the cave.", location4());
                                       UpdateDisplay (East1); 
                                       
                                       break;
                                       
              case 5 : Items    [5] = East2 =  new itemDesc("There are woods on the ground");
                                       UpdateDisplay (East2);
                       location [5] =  East2 = new locationInfo ("You are next to the coconut tree.", location5());
                                       UpdateDisplay (East2); 
                                       
                                       break;
                                       
              case 6 : Items    [6] = South1 =  new itemDesc("Nothing on the ground.");
                                       UpdateDisplay (South2);
                       location [6] =  South1 = new locationInfo ("You are at the beach.", location6());
                                       UpdateDisplay (South1); 
                                       
                                       break;
                                       
              case 7 : Items    [7] = South2 =  new itemDesc("Nothing on the ground.");
                                       UpdateDisplay (South2);
                        location [7] = South2 = new locationInfo ("You are walking to the forrest.", location7());
                                       UpdateDisplay (South2); 
                                       
                                       break;
                                       
              case 8 : Items    [8] = West1 =  new itemDesc("Nothing on the ground.");
                                       UpdateDisplay (West1);
                       location [8] =  West1 = new locationInfo ("You are on the dead bodies.", location8());
                                       UpdateDisplay(West1); 
                                       
                                       break;
                                       
              case 9 : Items    [9] = West2 =  new itemDesc("There is a volleybal on the edge .");
                                       UpdateDisplay (West2);
                       location [9] =  West2 = new locationInfo ("You are next to the deep hole.", location9());
                                       UpdateDisplay (West2); 
                                       break;
                                       
  }
  }                                     
                                       
                function StartingDisplay(){
              msg = "Your survival starts now";
             UpdateDisplay (msg)
    }            
    function location0 (){       
             document.getElementById("idNorth").style.visibility="visible";
             document.getElementById("idEast").style.visibility="visible";
             document.getElementById("idWest").style.visibility="visible";
             document.getElementById("idSouth").style.visibility="visible";
               }           
    function location1 (){    
             document.getElementById("idNorth").style.visibility="visible";
             document.getElementById("idEast").style.visibility="hidden";
             document.getElementById("idWest").style.visibility="hidden";
             document.getElementById("idSouth").style.visibility= "visible";   
               if ( northScore === 1 ){
                score = (score + 5)
                northScore= northScore + 1;     
               }
               }
    function location2 (){
             document.getElementById("idNorth").style.visibility="visible";
             document.getElementById("idEast").style.visibility="hidden";
             document.getElementById("idWest").style.visibility="hidden";
             document.getElementById("idSouth").style.visibility= "visible";   
                if ( northScore === 2 ){
                score = (score + 5)
                northScore= northScore + 1;     
               }
               }
     function location3  (){
             document.getElementById("idNorth").style.visibility="hidden";
             document.getElementById("idEast").style.visibility="hidden";
             document.getElementById("idWest").style.visibility="hidden";
             document.getElementById("idSouth").style.visibility= "visible";   
                if ( northScore === 3 ){
                score = (score + 5)
                northScore= northScore + 1;     
               }
               }
     function location4 (){
             document.getElementById("idNorth").style.visibility="hidden";
             document.getElementById("idEast").style.visibility="visible";
             document.getElementById("idWest").style.visibility="visible";
             document.getElementById("idSouth").style.visibility= "hidden";  
                if ( eastScore === 1 ){
                 score = (score + 5)
                 eastScore= eastScore + 1; 
                 }
                 }                   
    function location5 (){ 
             document.getElementById("idNorth").style.visibility="hidden";
             document.getElementById("idEast").style.visibility="hidden";
             document.getElementById("idWest").style.visibility="visible";
             document.getElementById("idSouth").style.visibility= "hidden";  
                if ( eastScore === 2 ){
                 score = (score + 5)
                 eastScore= eastScore + 1; 
                 }
                 }                   
    function location6 (){
              document.getElementById("idEast").style.visibility="hidden";
              document.getElementById("idWest").style.visibility="hidden";
              document.getElementById("idSouth").style.visibility="visible";                    
              document.getElementById("idNorth").style.visibility="visible"; 
                if ( southScore === 1 ){
                 score = (score + 5)
                 southScore= southScore + 1;
                 }
                 }
                 
    function location7 (){
              document.getElementById("idEast").style.visibility="hidden";
              document.getElementById("idWest").style.visibility="hidden";
              document.getElementById("idSouth").style.visibility="hidden";                    
              document.getElementById("idNorth").style.visibility="visible"; 
                if ( southScore === 2 ){
                 score = (score + 5)
                 southScore= southScore + 1;
                 }
                 }
    function location8(){
              document.getElementById("idNorth").style.visibility="hidden";
              document.getElementById("idEast").style.visibility="visible";
              document.getElementById("idWest").style.visibility="visible";
              document.getElementById("idSouth").style.visibility= "hidden";
                if ( westScore === 1 ){
                 score = (score + 5)
                 westScore= westScore + 1;
                 }
                 }
    function location9 (){ 
              document.getElementById("idNorth").style.visibility="hidden";
              document.getElementById("idEast").style.visibility="visible";
              document.getElementById("idWest").style.visibility="hidden";
              document.getElementById("idSouth").style.visibility= "hidden";
                if ( westScore === 2 ){
                 score = (score + 5)
                 westScore= westScore + 1;
                }
                }            
    function btn_Score_click () {                    
              UpdateDisplay ("Current Score; " + score);
              }   
              
              
              
   function btn_go_click(){
          var userinput = document.getElementById("txtCommand"); 
          switch (userinput.value){
              case "N": move(north); break;     
              case "n": move(north); break;     
              case "E": move(east);  break;  
              case "e": move(east);  break;  
              case "S": move(south); break;  
              case "s": move(south); break;  
              case "W": move(west);  break;  
              case "w": move(west);  break;  
              case "Take": Take();   break;
              case "Help": Help();   break;
              case "Inventory": inventoryReader(); break;
              case Valid_commands (userinput.value): break;         
              }
    }
    
    function Help(){
              UpdateDisplay("Please use commands: N,S,E,W,n,s,e,w. Please Enter 'Take' to take item on the ground. Please Enter 'Inventory' to view your items.");
              }                   
    
    function Valid_commands(){
              UpdateDisplay ("Please enter 'Help' for more information."); 
              } 
    
    function Take (){  
      switch (currentlocation) {  
          
          case 0:
          if (suitcase === false){
          UpdateDisplay ("You already took the suitcase.");
          }else{
          
            inventory.push("You have suitcase in your inventory.");
            UpdateDisplay ("You have picked up the suitcase");
          suitcase = false;
         } 
          
          break;
          
          case 1:
          UpdateDisplay ("There are no items on the ground");
          
          break;
          
          case 2:
          if (woods === false){
          UpdateDisplay ("You already taken the woods");
          }else{
            inventory.push("You have woods in your inventory.");
            UpdateDisplay ("You have picked up some woods");
          woods = false;
          }
          
          break;          
          
          case 3:
          UpdateDisplay ("There are no items on the ground");
          
          break;
          
          case 4:
          UpdateDisplay ("There are no items on the ground");
          
          break;
           
          case 5:
          if (volleyball === false){
          UpdateDisplay ("You already have a volleyball.");
          }else{
            inventory.push("You have a volleyball in your inventory.");
            UpdateDisplay ("You have picked up a volleyball");
          volleyball = false;
          }
          
          break;
          
          case 6:
          UpdateDisplay ("There are no items on the ground");
          
          break; 
          
          case 7:
          UpdateDisplay ("There are no items on the ground");
          
          break;        
      
          case 8:
          UpdateDisplay ("There are no items on the ground");
          
          break;
      
          case 9:
          if (foods === false){
          UpdateDisplay ("You already have foods.");
          }else{
          inventory.push("You have foods in your inventory.");
            UpdateDisplay ("You have picked up some foods");
          foods = false;break;
          }
          }
          }
                    
     
    function UpdateDisplay (msg) { 
        msg = msg;
        var ta= document.getElementById ("taGame");
        ta.value= msg + "\n" + ta.value; 
        } 
     
    
                                   