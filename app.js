//   const countUp = new CountUp('number', 10000);
//         if (!countUp.error) {
//             countUp.start();
//         } else {
//             console.error(countUp.error);
//         }
//         countUp.start()
var menu = document.getElementById("menu");
var nav = document.getElementById("nav");
var exit = document.getElementById("exit");

menu.addEventListener("click", function (e) {
    // nav.classList.toggle("menu-items");
    // nav.style.transform = "scaleY(1)";
    nav.style.width= '100%';
    e.preventDefault();
});
exit.addEventListener("click", function (e) {
    // nav.classList.add("menu-items");
    nav.style.width = "0";
    e.preventDefault();
});
// if (document.body.scrollWidth > 789) {
//     menu.addEventListener("click", function (e) {
//         // nav.classList.toggle("menu-items");
//         nav.style.width = "25%";
//         e.preventDefault();
//     });
if(document.body.pageYOffset>456){
    const navbar= document.querySelector('.nav');
    navbar.classList.toggle('toggleNav') 
    console.log('windows height')
}
if(Math.floor(window.pageYOffset>534)){
console.log('hello')
}