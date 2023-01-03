let formEl = document.querySelector('form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
    event.preventDefault();
    const { elements: { email, password } } = event.currentTarget
    if (email.value === '' || password.value === '') {
        return alert ('all fields required!')
    }
    console.log({ Email: email.value, Password: password.value })
    event.currentTarget.reset()
}
