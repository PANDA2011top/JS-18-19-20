let spaceForm = document.querySelector(".formSpace");
let spaceLogin = document.querySelector(".login");
let spaceParol = document.querySelector(".parol");
let spaceEye = document.querySelector(".koz");
let btn = document.querySelector(".submit");
let errorMsg = document.querySelector(".error-msg"); 

spaceEye.addEventListener("mousedown", (evt) =>{
    evt.preventDefault();
    spaceParol.setAttribute("type" , "text");
});

spaceEye.addEventListener("mouseup", (evt) =>{
    evt.preventDefault();
    spaceParol.setAttribute("type" , "password");
});


spaceForm.addEventListener("submit", (bot) => {
    bot.preventDefault();
    let login = Number(spaceLogin.value.trim());
    let parol = Number(spaceParol.value.trim());

    let topilganStudent = null;

    oquvchilar.forEach(oquvchi => {
        if(oquvchi.id === login && oquvchi.password === parol){
            topilganStudent = oquvchi;
            // alert(topilganStudent.name)
            console.log(topilganStudent);
        }
    })

})
