function asyncFunciton()
{
    return new Promise((resolve, reject) => {
        setTimeout(() => {
           let x='Aishwarya vijay saundane';
           resolve (x);
        }, 1000);
    });
}
asyncFunciton()
.then(result => {
    console.log(result);
})
.catch(error => {
    console.error(error);
}

