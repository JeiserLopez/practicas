const btn = document.querySelector("[data-form-btn]");
const createTask = (evento) => {
    evento.preventDefault();
    const input = document.querySelector("[data-form-input]");
    console.log(input.value);
}

//listener
//btn.addEventListener("click", function(evento){
//Function arrow funciones flechas o anaonimas
btn.addEventListener("click", createTask);