//Exercice 1

let formHeure = document.getElementById('formHeure');

formHeure.addEventListener('submit', e => {
    e.preventDefault()

    let affiche = document.getElementById('valider');
    let heure = Number(document.getElementById('heure').value);
    let minutes = Number(document.getElementById('minutes').value);
    let secondes = Number(document.getElementById('secondes').value);

    secondes ++ 

    if(secondes == 60){
        minutes = +1;
        secondes == 0;


    }
  }
//Exercicese 2

let candidat1 = prompt("candidat");
let suffrage = Number(prompt("entrer la note"));
let candidat2 = prompt("candidat");
let suffrage = Number(prompt("entrer la note"));
let candidat3 = prompt("candidat");
let suffrage = Number(prompt("entrer la note"));
let candidat4 = prompt("candidat");
let suffrage = Number(prompt("entrer la note"));

if (suffrage > 50 ){

    console.log ("le candidat est élu dès le premier tour");


}else if (suffrage < 50 && suffrage <= 12 ){
    console.log(" le candidat participe au deuxieme tour");
} else{
    console.log("pas d'impot");
}

//Exercicese 6

let table1 = [4 , 8 , 7 , 12];
let table2 = [3, 6];
let resultat;
for(i = 0 ; i < table2.length ; i++){

for(j = 0 ; j< table1.length ; j++){

   console.log(table2[j] + '*' +  table1[i] + '=' + table2[j]* table1[i]); 
   resultat = resultat + table2[i] * table1[j];
   alert(resultat);

    }
}
