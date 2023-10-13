const  form =  document.querySelector("form");
const divMessage = document.querySelector("#message");
const text = document.querySelector("#text");


form.addEventListener("submit",(e) =>{

    e.preventDefault();
    form.remove();
    divMessage.textContent = text.value;
});



