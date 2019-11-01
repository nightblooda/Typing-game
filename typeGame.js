     window.addEventListener('load', init);
    const level= document.querySelector("#level");

    let levelChange= {
      easy: 5,
      medium: 3,
      hard: 1
    };

    
    //  Global variables
    let time= level.value;
    let score= 0;
    let isPlaying;
    //  DOM Elements
    const wordInput= document.querySelector('#input');
    const currentWord= document.querySelector('#word');
    const scoreDisplay= document.querySelector('#score');
    const timeDisplay= document.querySelector('#time');
    const message= document.querySelector('#message');
    const seconds= document.querySelector('#seconds');
    const highScore= document.querySelector('#highScore');
    const words= [
      'hat', 'river', 'lucky', 'statue', 'generate', 'stubborn', 'cocktail', 'runaway', 'joke', 'developer', 'establishement', 'hero', 'javascript', 'nutrition', 'revolver', 'echo', 'siblings', 'investigate', 'horrendous', 'symptom', 'laughter', 'magic', 'master', 'space', 'defination'
    ];
    function init(){
      showWord(words);
      wordInput.addEventListener("input", startMatch);
      setInterval(countDown, 1000);
      setInterval(checkStatus, 50);
      
    }

    function showWord(words){
      const randomIndex= Math.floor(Math.random()*words.length);
      currentWord.innerHTML= words[randomIndex];
    }
    let hs= score;

    function startMatch(){
        if(matchWord()){
          score++;
          wordInput.value= "";
          time= level.value;
          time++;
          showWord(words);
          
        }
        if(score<0){
          score++;
        }
        scoreDisplay.innerHTML= score;
        if(score> hs){
            hs= score;
          }
      }
      

//match the word
    function matchWord(){
      if(wordInput.value=== currentWord.innerHTML){
        message.innerHTML= "Correct !!!";
        return true;
      }else{
        
        return false;
      }

    }

//countDown starts
    function countDown(){
      if(time> 0){
        time--;
        }
      timeDisplay.innerHTML= time;
    }


//checkStatus everytime
    function checkStatus(){
      if(time===0){
        message.innerHTML= 'Game Over!!!';
        score= -1;
        highScore.innerHTML= hs;
      }
      seconds.innerHTML= level.value;

    }

    
