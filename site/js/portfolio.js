const userAvatar = document.querySelector('.img-avatar');


userAvatar.addEventListener('click', function () {
  userAvatar.src = "image/avatar.svg";
});

// const changeName = document.querySelector('.change-name');
// const userName = document.getElementById("name");
// const bgDescription = document.querySelector('.pink-bg');

// changeName.addEventListener('click', () =>{
//     const color = prompt("Choose a color");
//     bgDescription.style.backgroundColor = color;
//     userName.style.color = "white";
//     userName.innerHTML = prompt("what's your name ?");
// } )


const changeName = document.querySelector('.change-name');
const userName = document.getElementById("name");
const changeColor = document.querySelectorAll('.pink-bg, .pink-text');


changeName.addEventListener('click', () =>{
    userName.innerHTML = prompt("what's your name ?");
    userName.style.color = "white";
    const color = prompt("Choose a color");

    changeColor.forEach(element => {
        if (element.classList.contains('pink-bg')){
            element.style.backgroundColor = color;
        } else {
            element.style.color = color;
       }
   })
} )