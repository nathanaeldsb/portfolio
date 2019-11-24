// JAVASCRIPT AUDIO START
// How to use:
// Active area with class "sound-area" and 
// an attributes data-emouseenter="true" OR data-click="true"
// inside of them, a child with the class "sound-area__audio"

(function(){

  // Array creation
  let areasArray = document.querySelectorAll('.sound-area');

  // Function creation
  function areaActive(area){
    function audioPlay() {
      area.querySelector('.sound-area__audio').play();
    }
    area.dataset.emouseenter ? area.addEventListener('mouseenter', audioPlay) : '';
    area.dataset.eclick ? area.addEventListener('click', audioPlay) : '';
  }

  // Function execution for all the elements in the array in loop
  for (let i=0; i < areasArray.length; i++){
    areaActive(areasArray[i]);
  }
  
})()

// JAVASCRIPT AUDIO END