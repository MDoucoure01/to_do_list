const infos_taches = [

]

let objet_planning = {
    titre : '',
    date : '',
    jour : '',
}
let titre_tache = document.querySelector('.task_titre')
let titre_date = document.querySelector('.task_date')
let recuperation_titre = document.querySelector('.champ_dajout')
let recuperation_date = document.querySelector('#champ_dajout_titre')
let ajouter = document.querySelector('.ajouter')
let montrer = document.querySelector('.montrer')
let bloc_ajout = document.querySelector('.bloc_ajout')

montrer.addEventListener('click',()=>{
    bloc_ajout.style.display = 'flex'
    recuperation_titre.style.display = 'block'
    recuperation_date.style.display = 'block'
})

ajouter.addEventListener('click',()=>{
    objet_planning.titre = recuperation_titre.value;
    objet_planning.date = recuperation_date.value
    console.log(objet_planning);
    recuperation_titre.value = ''
    recuperation_date.value = ''
})