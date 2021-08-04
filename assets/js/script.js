const form = document.forms.cadastro;

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const {firstName, lastName, email} = form; 
    console.log(firstName.value, lastName.value, email.value)
    localStorage.setItem('cadastro', JSON.stringify({firstName:firstName.value, lastName:lastName.value, email:email.value})) 

    form.reset()
    window.alert('Cadastro efetuado com sucesso!');
})




