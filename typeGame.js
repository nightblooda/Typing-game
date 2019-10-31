    function init(){
      showWord(words);
      wordInput.addEventListener("input", startMatch);
      setInterval(countDown, 1000);
      setInterval(checkStatus, 50);
      
    }
