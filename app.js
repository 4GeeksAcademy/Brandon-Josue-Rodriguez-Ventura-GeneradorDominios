/*let pronoun = ["The ", "our "]
let adj = ["Great", "Big"]
let noun = ["Jogger", "Racoon"]

let prueba = pronoun[(Math.floor(Math.random(pronoun.length) * 2))]
let prueba3 = adj[(Math.floor(Math.random(pronoun.length) * 2))]
let prueba4 = noun[(Math.floor(Math.random(pronoun.length) * 2))]


console.log(prueba + prueba3 + prueba4)*/

let pronoun = ["The ", "our ","my ", "A "]
let adj = ["Great", "Big", "Little", "Beautiful"]
let noun = ["Jogger", "Racoon"]
let extensions=[".com",".net",".mx",".es"]

for(let i = 0;i < pronoun.length;i++){
    for(let j = 0;j< adj.length;j++){
        for(let l = 0; l < noun.length;l++){
            for(let k = 0; k < extensions.length;k++){
                console.log(`${pronoun[i]}${adj[j]}${noun[l]}${extensions[k]}`);
            }
        }
    }
}






