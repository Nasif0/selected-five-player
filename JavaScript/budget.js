document.getElementById('calculate-1').addEventListener('click',function(){

var perPlayerInput = document.getElementById('per-player');
var perPlayerInputString = perPlayerInput.value;
var perPlayer = parseFloat(perPlayerInputString);

var totalPlayer = perPlayer * 6;
 var playerExpensesField = document.getElementById('player-expenses');
 var playerExpensesFieldString = playerExpensesField.innerText;
 var playerExpenses = parseFloat(playerExpensesFieldString);
 
 
 playerExpensesField.innerText = totalPlayer;
 



});


document.getElementById('calculate-2').addEventListener('click', function(){


     var playerExpensesField = document.getElementById('player-expenses');
     var playerExpensesFieldString = playerExpensesField.innerText;
     var playerExpenses = parseFloat(playerExpensesFieldString);

     var managerInputField = document.getElementById('manager');
     var managerInputFieldString = managerInputField.value;
     var manager = parseFloat(managerInputFieldString);

     
     

     var coachInputField = document.getElementById('coach');
     var coachInputFieldString = coachInputField.value;
     var coach = parseFloat(coachInputFieldString);

     var totalInputField = document.getElementById('total');
     var totalInputFieldString = totalInputField.value;
     var total = parseFloat(totalInputFieldString);

     var totalAmount = playerExpenses + manager + coach;
     
     totalInputField.value = totalAmount;
    
});