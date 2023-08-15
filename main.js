//close Button
const exitBtn = document.querySelector('.modal-close-btn');
const exitBtn2 = document.querySelector('.btn-newsletter');

// the div we need close
const box = document.querySelector('.modal');

//the function 
exitBtn.addEventListener('click', () => {
  box.style = "display:none;";
})

exitBtn2.addEventListener('click', ()=> {
  box.style ="display:none;";
})
