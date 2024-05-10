/// SNACK 3

let parola ="ciao"
let reverse = parola.split("").reverse().join("")
console.log(reverse)
/// SNACK 4


let uno = [1,2,3];
let due = ["a","b","c"]
let tre=[]
for(x=0; x < 3;x++){
    y=uno[x]
    z=due[x]
    tre.push(y)
    tre.push(z)
}
console.log(tre)
///SNACK 5


// Scrivi una funzione che accetti tre argomenti:
// un array e due numeri (“a” più piccolo di “b” e “b” grande al massimo
// quanto il numero di elementi dell’array).
// La funzione ritornerà un nuovo array con i valori che hanno la posizione
// compresa tra “a” e “b”

let totale = [1, 2, 3, 4, 75, 6, 7, "paolo", 28, 9, "macchina", "gatto", 12 ,13 ,414 ,15 ,16 ,17 ,418 ,19 ]
let min= 3;
let max = 15
let nuovoArray = mix(totale,min,max) 
console.log("il nuovo array", nuovoArray)
function mix(array,rangeMin,rangeMax){
    let mixA =[];
    for(i=0;i < array.length;i++){
        element = array[i]
        if(i>rangeMin && i<rangeMax){
            mixA.push(element)
        } 
    }return mixA
}