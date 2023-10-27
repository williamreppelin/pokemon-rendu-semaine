let personnage = ["john", 10]
let nombreFeux = 30
let chanson = ["anissa", "bande organisé", "dynamite", "dernière danse", "voila", "tourner dans le vide", "rap god", "formidable", "believer", "gangsta paradise"]
let chansonMaudite = "anissa"
let changements = 0
let radio = "aucune"
let max = 10

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }


function feuxRouge(personnage, nombreFeux, chanson, changements, chansonMaudite){
    nombreFeux = nombreFeux- 1
    if (nombreFeux > 0){
        let musiquejouee = getRandomInt(max)
        
        console.log(" la musique jouée est " + chanson[musiquejouee] + " il reste " + nombreFeux + " feux")
        if (chanson[musiquejouee] == chansonMaudite){
            personnage[1] = personnage[1] - 1
            death(personnage)
            return nombreFeux
        }
        else {
            feuxRouge(personnage, nombreFeux, chanson, changements, chansonMaudite)
            
             
        }   
        

    }
    else{
        alert("john est bien arrivé chez lui, il lui aura fallu faire " + changements + " changements")
    }

}




function death(personnage){
    if (personnage[1] == 0){
        alert("BOOOOMMM")
    }
    else{
        changements = changements + 1
        feuxRouge(personnage, nombreFeux, chanson, changements, chansonMaudite)
    }
}

feuxRouge(personnage, nombreFeux, chanson, changements, chansonMaudite)