(function(){
    /* Array Creation of Buttons with Modal activation*/
    let activeClass = "is-active";
    let modalArray = document.querySelectorAll('[data-toggle]');
    
    
    /* Function Creation to Close previous active modals */
    function closeAll(current) {
      let allOpenArray = document.querySelectorAll('.' + activeClass + ':not('+ current +')');
    
      for (let openItem of allOpenArray) {
        openItem.classList.remove(activeClass);
      }
    }
    
    /* Function Creation to Toggle Active Class in Modals */
    function modal(modalBtn){
      let modalID = modalBtn.dataset.toggle;
    
      function toggleModal() {
        closeAll(modalID);
        document.querySelector(modalID).classList.toggle(activeClass)
      }
      
      modalBtn.addEventListener("click", toggleModal);
    }
    
    /* Loop Creation to Execute Modal Function for all the buttons in the array */
    for (let i=0; i < modalArray.length; i++){
      modal(modalArray[i]);
    }
})()
    
    