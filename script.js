'use strict';
let secretNumber = Math.trunc(Math.random()*20)+1;
const inMessage = document.querySelector('.message').textContent;
let score = Number(document.querySelector('.score').textContent);
let highscore = Number(document.querySelector('.highscore').textContent);
let bgColor = document.querySelector('body').style.backgroundColor;
let msg = document.querySelector('.message').textContent;
console.log(score)
document.querySelector('.check').addEventListener('click',function (){
  const guess = Number(document.querySelector('.guess').value);
  if(!guess){
    document.querySelector('.message').textContent = 'No number';
  }else if(score > 1){
    if(guess > secretNumber){
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
    }
    else if(guess < secretNumber){
      document.querySelector('.message').textContent = '📉 Too low!';
      score--;
    }else{
      document.querySelector('.message').textContent = 'correct answer';
      if(score > highscore){
        highscore = score
        document.querySelector('.highscore').textContent = highscore;
      }
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.number').style.width = '30rem'
    }
    document.querySelector('.guess').clear;
    document.querySelector('.score').textContent = score;
  }else{
    document.querySelector('.message').textContent = 'you loose the game';
    document.querySelector('.score').textContent = 0;
  }
})

document.querySelector('.again').addEventListener('click',function() {
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = bgColor;
  secretNumber = Math.trunc(Math.random()*20)+1;
  document.querySelector('.message').textContent = msg;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = null;
})
