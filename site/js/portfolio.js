const userAvatar = document.querySelector('.img-avatar');


userAvatar.addEventListener('click', function () {
  userAvatar.src = "image/avatar.svg";
});

const changeName = document.querySelector('.change-name');
const userName = document.getElementById("name");
const bgDescription = document.querySelector('.pink-bg');

changeName.addEventListener('click', function () {
    const color = prompt("Choose a color");
    bgDescription.style.backgroundColor = color;
    
    userName.innerHTML = prompt("what's your name ?");
    userName.style.color = "white";
} )

