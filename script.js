const form = document.querySelector('#formCadastro');

// ouvir evento submit do formulário
form.addEventListener("submit", function(event){
    event.preventDefault();
    Object.fromEntries([...form.elements].filter(element => element.id).map(element => [element.id, element.value]));


});