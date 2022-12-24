
const formEl = document.querySelector('.login-form');


formEl.addEventListener('submit', (event) => {
    event.preventDefault();

    const mail = event.currentTarget.elements.email.value;
    const password = event.currentTarget.elements.password.value;
    const formData = { mail, password };

    if (event.currentTarget.elements.email.value == '' || event.currentTarget.elements.password.value === '') {
    return alert("Все поля должны быть заполнены!")
    }
    
    if (event.currentTarget.elements.email.value !== '' && event.currentTarget.elements.password.value !== '') {
    console.log(formData)
    }
     
    formEl.reset();
})