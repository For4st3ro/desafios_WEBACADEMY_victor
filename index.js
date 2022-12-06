//Desafio: desenvolva uma calculadora para as 4 operações básicas usando const com os dados vindo de um formulário.

/*
function sum(){
const formData = new FormData(document.querySelector('form'))
const n1 = formData.get('n1')
const n2 = formData.get('n2')
console.log(n1+' '+n2)
}


// Desafio 2: Armazene 5 dados numéricos em um vetor. Em seguida, copie para um objeto com as propriedades n1, n2, n3, n4 e n5. Utilize destructuring para copiar os valores para 5 variáveis. Construa um objeto JSON com os valores das variáveis.

const vectorChallenge = [77,45,3,8,123]

const objectChallenge = {
    n1: vectorChallenge[0],
    n2: vectorChallenge[1],
    n3: vectorChallenge[2],
    n4: vectorChallenge[3],
    n5: vectorChallenge[4],
}

const {n1, n2, n3, n4, n5} = objectChallenge

console.log(JSON.stringify({n1,n2,n3,n4,n5}))

// Desafio 3: Desenvolva uma calculadora que armazene em um objeto JSON o resultado das 4 operações básicas. Em outras palavras: crie um objeto calculadora, inicialize cada uma das operações da calculadora (que serão propriedades do objeto) com o resultado do processamento matemático vindo de duas variáveis e converta para um objeto JSON.

const num1 = 10
const num2 = 20
const calc = {
    soma: num1+num2,
    sub: num1-num2,
    mult: num1*num2,
    div: num1/num2
}
console.log(JSON.stringify(calc))

const myArrayFunction = function(a,b){
    return a+b
}
console.log(myArrayFunction(5,2))

function fora (){
    let x=7
    function somaXMais(x){
        return x + 8

    }
    return somaXMais()
}
() => ( (x=7) => (x=5))


/*Desafio: Crie um documento HTML com apenas um elemento ul, ou seja, uma lista não ordenada. Em seguida, crie um documento em JavaScript, utilize fetch (é uma API nativa do ES6 para requisições HTTP através de Promises) para pegar o conteúdo da página http://jsonplaceholder.typicode.com/users. Em seguida, dentro do fetch, utilize um then para converter o conteúdo da página para um objeto JSON e outro then para mapear o vetor com os dados do objeto JSON, puxando o nome e email de cada dado para a lista no HTML. Trate também o erro, quando houver.
Inicie suas pesquisas para resolver o problema em https://www.devmedia.com.br/javascript-fetch/41206.

fetch('http://jsonplaceholder.typicode.com/users')

.then((response) => response.json()) // passando a reposta do json
.then((data) => { //data e onde fica os dados brutos formato objeto
    const name = data.map((user) => user.name) // mapeando os dados nome para jogar na variavel do tipo vetor
    const email = data.map((user) => user.email)
    console.log(name)
    console.log(email)

    const ul = document.querySelector('ul') // selecionando um objeto da pasta html
    for(let i = 0; i < name.length; i++) { // percorrendo o vetor ate o fim dos elementos
        const li = document.createElement('li') // criando o elementos e adicionado 
        li.textContent = name[i]+' _ ' + email[i]
        ul.appendChild(li)//adiciona um novo ul
}


})
*/