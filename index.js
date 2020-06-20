const imageBox=document.querySelectorAll('.img');
const mainBox=document.querySelector('.main');
const crossBox=document.querySelector('.cross');
const placeBox=document.querySelector('.place');
//adding Event Listeners
for(var i=0;i<imageBox.length;i++){
  imageBox[i].addEventListener('click',function(event){
    let currentBox=event.target.className;
    mainBox.style.pointerEvents='none';
    // placeBox.style.display='block';
    placeBox.style.backgroundImage=getComputedStyle(document.querySelector("."+currentBox.split(" ")[1])).backgroundImage;
    placeBox.style.transform='translate(-50%,-50%) scale(1)';
    placeBox.style.transition='transform .2s';
    // placeBox.style.backgroundImage=getComputedStyle(imageBox[i]).backgroundImage;
    //console.log(getComputedStyle(document.querySelector("."+currentBox.split(" ")[1])).backgroundImage);
    //console.log(currentBox.split(" ")[1]);
  })
}
crossBox.addEventListener('click',function(){
  //placeBox.style.display='none';
  mainBox.style.pointerEvents='all';
  placeBox.style.transition='transform .2s';
  placeBox.style.transform='translate(-50%,-50%) scale(0)';
})
//
// console.log(getComputedStyle(imageBox[0]).backgroundImage);
