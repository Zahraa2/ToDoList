const addtask = document.getElementById('addtask') ;
const mytask = document.getElementById('mytask') ;
const mytodos  = document.getElementById('mytodos') ; 
// const close = document.querySelector('.fa-times') ; 


// Add New Task In The Todo
addtask.addEventListener('click' , (e) => {
  e.preventDefault() ;
  if (mytask.value.trim() != "") {
    const parentspan =  document.createElement('span') ; 
    const childspan =  document.createElement('span') ; 
    const myli = document.createElement('li') ;
    myli.innerText = mytask.value ; 
    childspan.innerHTML = ' <p class="fas fa-check"></p> <i class="fas fa-times"></i>' ; 
    parentspan.appendChild(myli) ; 
    parentspan.appendChild(childspan) ; 
    mytodos.appendChild(parentspan) ;
  }
  mytask.value = ''; 
})

// Remove The Task


mytodos.addEventListener('click' , (e) => {
  if (e.target.nodeName == 'I') {
    var confirming = confirm('are u sure ?') ; 
    if ( confirming == true) {
      e.target.parentNode.parentNode.remove() ;
    }
  }
})


// list as Done 
mytodos.addEventListener('click' , (e) => {
  if (e.target.nodeName == 'P') {
   e.target.parentNode.previousSibling.classList.toggle('done') ;
  }
})



