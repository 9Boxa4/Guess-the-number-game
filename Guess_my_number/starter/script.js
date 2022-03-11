'use strict';


let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 20;
let highscore=0;
const displayMessage = (message) =>
{
    document.querySelector(`.message`).textContent = message
}

document.querySelector(`.check`).addEventListener('click',()=>
{
   const guess = Number(document.querySelector('.guess').value);

   if(!guess)
   {
    // document.querySelector(`.message`).textContent = 'No number 📛';
    displayMessage('No number 📛')
   }
   else if(guess === secretNumber)
   {
    // document.querySelector(`.message`).textContent = 'Correct number 🎉';
    displayMessage('Correct number 🎉')
    document.querySelector('.number').textContent = secretNumber;
    document.body.style.backgroundColor = "green";
    document.querySelector('.number').style.width = "30rem";
    document.querySelector(`.message`).style.color="white";
    if(score > highscore)
    {
        highscore = score;
        document.querySelector('.highscore').textContent = highscore;
    }
   }
   else if(guess !== secretNumber)
   {
    if(score > 1)
           {
            //    document.querySelector(`.message`).textContent =  guess > secretNumber?'Too high 🙈' : 'Too Low 🐭';
               displayMessage(guess > secretNumber?'Too high 🙈' : 'Too Low 🐭')
               document.querySelector(`.message`).style.color = "red";
               score--;
               document.querySelector(`.score`).textContent = score;
           }
           else
           {
            // document.querySelector(`.message`).textContent = 'Game Over 💀';
            displayMessage('Game Over 💀')
            document.querySelector(`.score`).textContent = 0;
            document.querySelector(`.score`).style.color="red"
           }
   }
   
   
})
   
   
   
   
   
   
   
   
   
//    {
//     document.querySelector(`.message`).style.color = "red";
//     score--;
//     document.querySelector(`.score`).textContent = score;
//     }
//      if(score <= 0)
//     {
//     document.querySelector(`.message`).textContent = 'Game Over 💀';
//     document.querySelector(`.score`).textContent = 0;
//     document.querySelector(`.score`).style.color="red"
//     }
//     else if(guess > secretNumber)
//     {
//         document.querySelector(`.message`).textContent = 'Too high 🙈';
//     }
//     else if (guess < secretNumber){
//         document.querySelector(`.message`).textContent = 'Too Low 🐭';

//     }  
  

// })



//    else if(guess > secretNumber)
//    {
//        if(score > 1)
//        {
//            document.querySelector(`.message`).textContent = 'Too high 🙈';
//            document.querySelector(`.message`).style.color = "red";
//            score--;
//            document.querySelector(`.score`).textContent = score;
//        }
//        else
//        {
//         document.querySelector(`.message`).textContent = 'Game Over 💀';
//         document.querySelector(`.score`).textContent = 0;
//         document.querySelector(`.score`).style.color="red"
//        }
//    }
//    else if(guess< secretNumber)
//    {
//        if(score>1)
//        {
//            document.querySelector(`.message`).textContent = 'Too Low 🐭';
//            document.querySelector(`.message`).style.color = "red";
//            score--; 
//         document.querySelector(`.score`).textContent = score;
//        }
//        else
//        {
//         document.querySelector(`.message`).textContent = 'Game Over 💀';
//         document.querySelector(`.score`).textContent = 0;
//         document.querySelector(`.score`).style.color="red"
//        }
    
//    }
 
// })

document.querySelector('.again').addEventListener('click', (e)=>
{
    score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

//   document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.score').style.color = "white";

  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector(`.message`).style.color = "white";


  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
})