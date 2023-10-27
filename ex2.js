let tueur = [["jason", 100]["blond", "yeuxbleu", "lunette", "barbe", "policier", "alcoolique"], [0.3, 0.8, 1]]
let personnages = ["juliette", "victor", "henriette", "jasmine", "hugo", "emmanuel", "salomé", "kilian"," hermine", "joshua", "alan", "camille", "jérémyé", "valentin", "sahmi", "tchoupi", "trotro", "titeuf"]
let victimes = []
let max = 17
let ver = true
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  let max2 = 10

function getRandomInt2(max2) {
    console.log(Math.floor((Math.random() * max2)/2))
    return Math.floor((Math.random() * max2)/2);
}

function getRandom(){ 
    return Math.random()
}
  

function victime(personnages, victimes){
    for (let i = 0; i < 5; i++) {
        let num = getRandomInt(max)
        
        if (victimes.indexOf(personnages[num]) <= 0) {
            victimes[i]=personnages[num]
            
        
        }
        else{
            victime(personnages, victimes)
        }
        
    
        
    } 
    alert(victimes) 
    Atack(personnages, tueur,victimes)
       
}


function verified(tueur, victimes){
    if (victimes = []){
        console.log("jason as gagné, les survivants sont tous morts")
    }
    else if(tueur[0][1]<= 0){
        ("jason est mort, les civils ont gagné")
    }
    else{
        Atack(personnages, tueur,victimes)
    }
}



function Atack(personnages, tueur,victimes){
    let choix = getRandomInt2(max2) 
    let num2 = getRandom()
    let v1 = tueur[2][0]
    let v2 = tueur[2][1]
    console.log(num2)
    if(num2 <= v1){
        console.log("jason as tué" + personnages[choix] )
        victimes= personnages.splice(personnages[choix], 1)
        verified(tueur, victimes)
        return personnages
    }
    else if( v2>= num2 && num2() >v1) {
        tueur[0][1] = tueur[0][1] - 10
        console.log("jason as perdu 10 pv")
        verified(tueur, victimes)
        return tueur
    }
    else{
        console.log(personnages[choix] + "as esquivé et infligé à Jason 15 dégats" )
        victimes= personnages.splice(personnages[choix], 1)
        tueur[0][1] = tueur[0][1] - 15
        verified(tueur, victimes)
        return personnages, tueur
    }

}

victime(personnages, victimes)