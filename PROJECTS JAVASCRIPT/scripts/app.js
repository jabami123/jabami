let imaginea = document.querySelector('img');
imaginea.onclick = function(){
    let src = imaginea.getAttribute('src');
    if(src==='imagini/redbull.png'){
        imaginea.setAttribute('src', 'imagini/spiderman-1.jpg');
    }
    else{
        imaginea.setAttribute('src', 'imagini/redbull.png');
    }
}
let button = document.querySelector('button');
let myHeading = document.querySelector('h1');
{
    function setUserName() {
        let myName = prompt('Please enter your name.');
        if(!myName) {
          setUserName();
        } else {
          localStorage.setItem('name', myName);
          myHeading.innerHTML = 'Mozilla is cool, ' + myName;
        }
      }
  if(localStorage.getItem('name')) {
    setUserName();
  } else {
    let storedName = localStorage.getItem('name');
    myHeading.textContent = 'Mozilla is cool, ' + storedName;
  }
  button.onclick = function() {
    setUserName();
  }
}