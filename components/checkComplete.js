const checkComplete = () => {
    const i = document.createElement("i");
    i.classList.add("far","fa-check-square","icon");
    i.addEventListener("click", completeTask);
    return i;
};
const completeTask = (evento) =>{
    const element = evento.target;
    //toggle si la clase existe la quita y si no la coloca
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    element.classList.toggle("far");

};

export default checkComplete;