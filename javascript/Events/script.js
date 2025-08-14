// 1. Mouse Events 

let click = () => {
    let clickme = document.getElementById("clickme");

// Single click: change text
    clickme.addEventListener("click", () => {
        clickme.innerText = "Button Clicked!";
    });

// Double-click: change background color
    clickme.addEventListener("dblclick", () => {
        clickme.style.backgroundColor = "lightblue";
    });
//Mouse hover : text color red
     clickme.addEventListener("mouseover", () => {
        clickme.style.color= "Red";
    });
// mouseout
     clickme.addEventListener("mouseout", () => {
        clickme.style.color= "black";
    });
// mousedown
      clickme.addEventListener("mousedown", () => {
        clickme.innerText= "mousedown work well ";
    });
// mouseup
      clickme.addEventListener("mouseup", () => {
        alert("mouse up work well");
    });
// mousemove
     clickme.addEventListener("mousemove", (e) => {
       console.log("Mouse at", e.clientX, e.clientY)
    });
 
}

click();


// 2. Keyboard Events ⌨
let KeyboardEventTest = () => {
    let keyboardElement = document.getElementById("Keyboard");
// keydown
    keyboardElement.addEventListener("keydown", (event) => {
        alert(`Key pressed: ${event.key}`);
    });
 // Key up 
  keyboardElement.addEventListener("keyup", (event) => {
        alert(`Key pressed: ${event.key}`);
    });
}

KeyboardEventTest();


// 3. Form Events 

let formsubmit =()=>{
    let formsub = document.getElementById("form");

     formsub.addEventListener("submit",()=>{
      alert("Form Submit ")
    })

let nameInput = document.getElementById("name"); 
    nameInput.addEventListener("input", () =>{
console.log("Typing:", nameInput.value);

// Focus 
nameInput.addEventListener("focus", () => nameInput.style.backgroundColor = "purple"); 
// Blur 
nameInput.addEventListener("blur", () => nameInput.style.backgroundColor = ""); 
      } )
}
formsubmit();



// 4. Window / Document Events 

// Load 
window.addEventListener("load", () => console.log("Page fully loaded!")); 
// Resize 
window.addEventListener("resize", () => console.log("Window resized!")); 
// Scroll 
window.addEventListener("scroll", () => console.log("Scrolled!")); 

// 5. Clipboard Events 

let clip=()=>{
let copyBox = document.getElementById("copyBox"); 
copyBox.addEventListener("copy", () => alert("Text copied!")); 
copyBox.addEventListener("cut", () => alert("Text cut!")); 
copyBox.addEventListener("paste", () => alert("Text pasted!")); 
}
clip();


// 6. Media Events 

let video = document.getElementById("myVideo"); 
video.addEventListener("play", () => console.log("Video playing")); 
video.addEventListener("pause", () => console.log("Video paused")); 
video.addEventListener("ended", () => console.log("Video ended")); 


