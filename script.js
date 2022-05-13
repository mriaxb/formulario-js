const form = document.getElementById('form')
const username = document.getElementById('username')
const email = document.getElementById('email')
const senha = document.getElementById('senha')
const confirmacaoSenha = document.getElementById('confirmacao-senha')

document.getElementById("botao").disabled = true

//
form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    checkInputs()
})
//verificaçao

function checkInputs(){
    const usernameValue = username.value
    const emailValue = email.value
    const senhaValue = senha.value
    const confirmacaoSenhaValue = confirmacaoSenha.value

    //validacao do nome d usuario
    if (usernameValue === ''){
        errorValidation(username, 'este campo é obrigatório')
        document.getElementById("botao").disabled = true
    
    }else{
        successValidation(username)
    }
    if(usernameValue.length <25 && usernameValue.length > 3  ){
        successValidation(username)

    }else{
        errorValidation(username, 'o username deve ter entre 3 e 25 caracteres')
        document.getElementById("botao").disabled = true
    }
    //validacao do email
    if (emailValue === ''){
        errorValidation(email, 'este campo é obrigatório')
        document.getElementById("botao").disabled = true
    
    }else{
        successValidation(email)
    }
    // validacao da senha
    if (senhaValue === ''){
        errorValidation(senha, 'este campo é obrigatório')
        document.getElementById("botao").disabled = true
    
    }else if(senhaValue.length < 8  ){
        errorValidation(senha, 'a senha deve conter no mínimo 8 caracteres')
        document.getElementById("botao").disabled = true
        

    }else{
        successValidation(senha)
    }

    //validacao da confirmaçao d senha
    if (confirmacaoSenhaValue === ''){
        errorValidation(confirmacaoSenha, 'este campo é obrigatório')
        document.getElementById("botao").disabled = true

    }else{
        successValidation(confirmacaoSenha)
    }

    if(senhaValue != confirmacaoSenhaValue){
        errorValidation(confirmacaoSenha, 'as senhas tem que ser iguais')
        document.getElementById("botao").disabled = true
    }else{
        successValidation(confirmacaoSenhaValue)
       
    }
    document.getElementById("botao").disabled = false
}

//funcao de erro
function errorValidation(input, message){
    const formControl = input.parentElement;
    const small = formControl.querySelector('small')

    small.innerText = message

    formControl.className = 'form-control error'
}

//funçao de sucesso
function successValidation(input){
    const formControl = input.parentElement;
    
    formControl.className = 'form-control success'
}

//debounce

function debounce(func, timeout = 300){
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => { func.apply(this, args); }, timeout);
    };
}
    
function saveInput(){
    console.log('Saving data');
}
  
const processChanges = debounce(() => saveInput());
//

document.querySelector("input")
.addEventListener("keyup", handleKeyUp)

// locação usando LocalStorage

const nameForm = document.querySelector("#username")

nameForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const nameInput = document.querySelector("#username")

    localStorage.setItem("username", nameIunput.value)

    nameInput.value = ""
}) 

// verificaçao d email valido
function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1)&&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {

        successValidation(email)
    }
    else{
        errorValidation(email, 'email invalido')
    }
}

// ativaçao do botao 

let input = document.querySelector("form");
let botao = document.querySelector("botao");
botao.disabled = true;
form.addEventListener("change", stateHandle);
function stateHandle() {
  if (document.querySelector("form").value === "") {
    botao.disabled = true; 
  } else {
    botao.disabled = false;
  }
}

// apagar dados

function apagaForm() {
	document.getElementById('form').reset();
}