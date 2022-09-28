/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 25
let jamieLannisterAttack =35

if (jonSnowAttack > jamieLannisterAttack) {
    console.log("Jon SNow has better attack than Jamie Lannister")
} else if (jamieLannisterAttack > jonSnowAttack){
    console.log("Jamie Lannister has a better attack than Jon Snow")
}else {
    console.log("Jamie Lannister has better attack than Jon Snow")
}
let jonSnowHealth = 100
let jonSnowDefense = 0

if (jonSnowHealth <= jamieLannisterAttack) {
    jonSnowHealth = 0
    console.log("jon Snow has been slain.")
} else {
    jonSNowHealth = jonSnowHealth - jamieLannisterAttack
    //jonSnowHealth -= jamieLannisterAttack
    console.log(`Jon Snow's Health is down to ${jonSnowHealth}`)
}
//Jon picks up a shield, add to his defense
jonSnowDefense += 25

if (jonSnowHealth <= jamieLannisterAttack -jonSnowDefense) {
console.log("jon Snow has been slain")
} else {
jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
console.log(`Jon SNow's Health is down to ${jonSnowHealth}`)
}
