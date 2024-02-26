let gamButtons=document.getElementById("gam-buttons");
let gammsg=document.getElementById("gam-msg");
let gamp=document.getElementById("gam-p");
let gamButtonsNum = [];
let newArray=[];
//let additionalButtons=[];
let numArray="";
let addButton=document.getElementById("buttonAdd");
let clickCount = 0;
const audio = new Audio("../src/audio/buttonClick.wav");

const audio2 = new Audio("../src/audio/cong.mp3");

let i;


for(let i=0;i<10;i++){
  // gamButtonsNum +=i + "" ;
   gamButtonsNum +=`<div class="butn bg-[#FF5C00] text-[#ffffff]  rounded-full w-[50px] h-[50px] text-center pt-3" id="gambtnNum" ><button class="gambtnNum"><p id="p-num" class=" hidden">${i}</p></button>
   </div>`
   newArray.push(i);
   numArray = newArray[newArray.length - 1];
   newArray.pop();
  } 
  let addNumbers=numArray;
  addNumbers +=1;
  console.log("myNum"+addNumbers)
  let randum=Math.floor(Math.random() * addNumbers);
console.log(randum);

let pnum=document.getElementById("p-num");
let msgBox=document.getElementById("btn-msgbox");
let msgBoxP=document.getElementById("msg-text");
let btnTry=document.getElementById("try");




btnTry.addEventListener('click' ,function(){
 location.reload();
});
function limitFind(){
  clickCount++;
if (clickCount >= 4) {
  msgBox.style.display="flex";
  msgBoxP.innerHTML="You can try only three times.!"

      button.disabled = true;
      
  }
       
}


gamButtons.addEventListener("click",function(eve){
  limitFind();
  audio.play();
  let num = eve.target.querySelector("p").textContent;
  console.log(num);
  
    eve.target.innerHTML=num;
    console.log(eve.target.innerHTML);
  if (eve.target.innerHTML === randum.toString() || eve.target.innerHTML>randum.toString()) {
    msgBox.style.display="flex";
    audio2.play();
    msgBoxP.style.display="none";
    //msgBoxP.innerHTML="!...Yes you have found the secret number"+" "+eve.target.innerHTML;
   document.getElementById("imgGif").style.display="block";
  
  } else {
    msgBox.style.display="flex";
    msgBoxP.innerHTML=eve.target.innerHTML+" "+" Not Your secret number" ;
    
  }
       
  
  })
let btnAddition="";
gamButtons.innerHTML=gamButtonsNum;
audio.play();
console.log("num"+addNumbers);
//let lastElement="";
addButton.addEventListener('click', function() {
  let randum=Math.floor(Math.random() * addNumbers);
  console.log("ram"+randum);
  if (addNumbers >= 9) { // Check if the last number is 9 or greater
    addNumbers++; // Increment the last number
    gamButtonsNum += `
        <div class="bg-[#FF5C00] butn text-[#ffffff] rounded-full w-[50px] h-[50px] text-center pt-3" id="gambtnNum">
            <button class="gambtnNum"><p id="p-num" class="hidden">${addNumbers}</p></button>
        </div>
    `;
    gamButtons.innerHTML = gamButtonsNum; // Update the button container with the new buttons
}
});

// Get the list element
const btnColors=document.getElementById("btnColors");
const colorList = document.getElementById("colorList");
const list0=document.getElementById("li0");
const list1=document.getElementById("li1");
const list2=document.getElementById("li2");
const list3=document.getElementById("li3");
const list4=document.getElementById("li4");
const list5=document.getElementById("li5");
btnColors.addEventListener('click',function(){
  if (colorList.style.display === "flex") {
    colorList.style.display = "none";
} else {
    colorList.style.display = "flex";
}
})


list0.addEventListener("click",function(){
  const buttons = document.querySelectorAll(".butn");
    // Loop through each button and set its background color
  buttons.forEach((button) => {
      button.style.backgroundColor = "#e11d48";
  });
});
list1.addEventListener("click",function(){
  const buttons = document.querySelectorAll(".butn");
  // Loop through each button and set its background color
buttons.forEach((button) => {
    button.style.backgroundColor = "#d946ef";
});
});
list2.addEventListener("click",function(){
  const buttons = document.querySelectorAll(".butn");
  // Loop through each button and set its background color
buttons.forEach((button) => {
    button.style.backgroundColor = "#6d28d9";
});
});
list3.addEventListener("click",function(){
  const buttons = document.querySelectorAll(".butn");
  // Loop through each button and set its background color
buttons.forEach((button) => {
    button.style.backgroundColor = "#84cc16";
});
});
list4.addEventListener("click",function(){
  const buttons = document.querySelectorAll(".butn");
  // Loop through each button and set its background color
buttons.forEach((button) => {
    button.style.backgroundColor = "#0d9488";
});
});
list5.addEventListener("click",function(){
  const buttons = document.querySelectorAll(".butn");
  // Loop through each button and set its background color
buttons.forEach((button) => {
    button.style.backgroundColor = "#3b82f6";
});
});