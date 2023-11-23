const inpone = document.getElementById("exampleInputusername1")
const inptwo = document.getElementById("exampleInputsurname1")
const inpthree = document.getElementById("exampleInputfathername1")
const inpfourth = document.getElementById("exampleInputEmail1")
const inpfives = document.getElementById("exampleInputPassword1")
const myForm = document.getElementById("myForm")
myForm.addEventListener("submit", function (event) {
    event.preventDefault();
    axios.post('https://northwind.vercel.app/api/customers', {
        Username: inpone.value,
        Surname: inptwo.value,
        Fathername: inpthree.value,
        Emailaddress: inpfourth.value,
        FIN: inpfives.value
    })
        .then(res => {
            console.log(res.data);
        })
})