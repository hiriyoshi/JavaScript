const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const text = document.querySelector('.text');
const editable = document.querySelector('.editable');
const healthStat = document.querySelector('.health');
const goldStat = document.querySelector('.gold');
const weaponStat = document.querySelector('.weapon');
const skillsStat = document.querySelector('.skills');
const currentWeapon = ["Wooden Sword"];
const currentSkill = ["Confuse"];
let gold = 500;
let health = 100;
let currentHealth = 10;
let showhealth = `${currentHealth}/${health}`;
let btnUpdate = null;
let intervalId;
let healing;
let heals = false;

const home = () => update(loc[0]);
const guild = () => update(loc[1]);
const wild = () => {
  update(loc[2]);
  const div = document.createElement('div');
  div.className = "monsterstat";
  div.style.display = "flex";
  div.style.alignItems = "center";
  div.style.justifyContent = "center";
  editable.appendChild(div);

  const monsterName = document.createElement('p');
  monsterName.innerHTML = `Enemy Name: ${wildEnemyRandom()}`;
  monsterName.style.width = "200px";
  monsterName.style.height = "30px";
  monsterName.style.display = "flex";
  monsterName.style.alignItems = "center";
  monsterName.style.fontWeight = "bold";
  monsterName.style.color = "white";
  monsterName.style.textShadow = "3px 3px 3px red, 1px 3px 3px red, 2px -2px 3px red, -2px -2px 3px red";
  div.appendChild(monsterName);

  const monsterHealth = document.createElement('p');
  monsterHealth.innerHTML = `Enemy Health: ${wildEnemy.find(wildEnemyRandom).health} / ${wildEnemy.find(wildEnemyRandom).health}`;
  monsterHealth.style.width = "200px";
  monsterHealth.style.height = "30px";
  monsterHealth.style.display = "flex";
  monsterHealth.style.alignItems = "center";
  monsterHealth.style.fontWeight = "bold";
  monsterHealth.style.color = "white";
  monsterHealth.style.textShadow = "3px 3px 3px red, 1px 3px 3px red, 2px -2px 3px red, -2px -2px 3px red";
  div.appendChild(monsterHealth);

}
const cave = () => update(loc[3]);
const store = () => update(loc[4]);
const ranks = () => update(loc[5]);
const buySkill = () => update(loc[6]);
const buyWeapon = () => update(loc[7]);
const Defeat = () => update(loc[8]);
const Win = () => update(loc[9]);

const update = (place)=>{
  btnUpdate = place;
  btn1.innerText = place["button text"][0];
  btn2.innerText = place["button text"][1];
  btn3.innerText = place["button text"][2];
  btn4.innerText = place["button text"][3]; 
  btn1.onclick = place["button func"][0];
  btn2.onclick = place["button func"][1];
  btn3.onclick = place["button func"][2];
  btn4.onclick = place["button func"][3];
  text.innerText = place.text;
}

const liveUpdate = () => {
  intervalId = setInterval(()=>{
    console.log("live update");
    showhealth = `${currentHealth}/${health}`;
    healthStat.querySelector('span').innerText = showhealth;
    goldStat.querySelector('span').innerText = gold;
    weaponStat.querySelector('span').innerText = currentWeapon;
    skillsStat.querySelector('span').innerText = currentSkill;
  },1000)
}


const initializeStat = () =>{
  healthStat.querySelector('span').innerText = showhealth;
  goldStat.querySelector('span').innerText = gold;
  weaponStat.querySelector('span').innerText = currentWeapon;
  skillsStat.querySelector('span').innerText = currentSkill;
  btn1.onclick = guild;
  btn2.onclick = wild;
  btn3.onclick = cave;
  btn4.onclick = store;
  liveUpdate();
}
initializeStat();

btn1.addEventListener("click",()=>{
  if(btnUpdate.name === "Guild"){
    heal();
    console.log("working");
  }
  else{
    clearInterval(intervalId);
    clearInterval(healing);
    console.log("not");
  }
})
btn2.addEventListener("click",()=>{
  if(btnUpdate.name === "Guild"){
    heal();
    console.log("2working");
  }
  else{
    clearInterval(intervalId);
    clearInterval(healing);
    console.log("not");
  }
})
btn3.addEventListener("click",()=>{
  if(btnUpdate.name === "Guild"){
    heal();
    console.log("3working");
  }
  else{
    clearInterval(intervalId);
    clearInterval(healing);
    console.log("not");
  }
})
btn4.addEventListener("click",()=>{
  if(btnUpdate.name === "Guild"){
    heal();
    console.log("4working");
  }
  else{
    clearInterval(intervalId);
    clearInterval(healing);
    console.log("not");
  }
})


const restart = () =>{
  healthStat = 100;
  goldStat = 0;
  currentWeapon = ["Wooden Sword"];
  currentSkill = ["Confuse"];
  healthStat.querySelector('span').innerText = healthStat;
  goldStat.querySelector('span').innerText = goldStat;
  currentWeapon.querySelector('span').innerText = currentWeapon[0];
  currentSkill.querySelector('span').innerText = currentSkill[0];
  home(); 
}
//add some tips while healing in the guild!
const guildHeal = () =>{
  heal();
  guild();
}

const heal = () =>{
  if(currentHealth<health){
    healing = setInterval(()=>{
      if(currentHealth<health && btnUpdate.name === "Guild"){
        healthStat.querySelector('span').style.color = "white";   
        setTimeout(()=>{
          healthStat.querySelector('span').style.color = "white";
          healthStat.querySelector('span').style.animation = 'color 0.3s ease';
        },250)
        setTimeout(()=>{
          healthStat.querySelector('span').style.color = "red";
          healthStat.querySelector('span').style.animation = 'color 0.3s ease';
        },500)
        currentHealth +=2;
        showhealth = `${currentHealth}/${health}`;      
        healthStat.querySelector('span').innerText = showhealth;
        console.log("Healing");
      }
      else{
        clearInterval(healing);
      }
    },500);
  }
}

const buyHealth = () =>{
  if(gold>=10){
    gold -=10;
    health +=10;
    currentHealth +=10;
    showhealth = `${currentHealth}/${health}`;
    text.innerText = "You have purchased 10 Max Health. Glory to adventure!"
    healthStat.querySelector('span').innerHTML = showhealth;
    goldStat.querySelector('span').innerHTML = gold;  
  }
  else{
    text.innerText = " You do not have sufficient gold to buy Max health"
  }
}
//make the weapons to be button and reselect their weapon to change it.
// make effect to look that it is being used
const weapons = [
  {
    name: "Wooden Sword",
    detail: "A standard weapon in training, it is used to train new adventurer.",
    power: 10,
    gold: 0
  },
  {
    name: "Bronze Sword",
    detail: "A common sword made out of bronze, it is typically used by beginner to start their journey.",
    power: 20,
    gold: 50
  },
  {
    name: "Iron Sword",
    detail: "A well made crafted sword that is well rounded usage for both adventurers and knights.",
    power: 30,
    gold: 100
  },
  {
    name: "Silver Sword",
    detail: "Made by a great blacksmith that serves as his pride, great weapon for tough enemies.",
    power: 40,
    gold: 150
  },
  {
    name: "Gold Sword",
    detail: "A blacksmith masterpiece that create prosperity and glory, the best weapon that can be created.",
    power: 100,
    gold: 300
  },
];
const bronzeSword = () =>{
  if(gold>=50 && !currentWeapon.some(char => char === 'Bronze Sword')){
    gold -=50;
    currentWeapon.pop();
    currentWeapon.push("Bronze Sword");
    weaponStat.querySelector('span').innerText = currentWeapon;
    text.innerText = "You have purchased a Bronze Sword. Glory to Adventure!"
    goldStat.querySelector('span').innerHTML = gold;
  }
  else if(currentWeapon.some(char => char === 'Bronze Sword')){
    text.innerText = " You already have a Bronze Sword.";
  }
  else{
    text.innerText = " You do not have sufficient gold to buy a Bronze Sword.";
  }
}
// still a bug about buying high to low
const ironSword = () =>{
  if(gold>=100 && !currentWeapon.some(char => char === 'Iron Sword')){
    gold -=100;
    currentWeapon.pop();
    currentWeapon.push("Iron Sword");
    weaponStat.querySelector('span').innerText = currentWeapon;
    text.innerText = "You have purchased a Iron Sword. Glory to Adventure!"
    goldStat.querySelector('span').innerHTML = gold;
  }
  else if(currentWeapon.some(char => char === 'Iron Sword')){
    text.innerText = " You already have a Iron Sword.";
  }
  else{
    text.innerText = " You do not have sufficient gold to buy a Iron Sword.";
  }
}
const silverSword = () =>{
  if(gold>=150 && !currentWeapon.some(char => char === 'Silver Sword')){
    gold -=150;
    currentWeapon.pop();
    currentWeapon.push("Silver Sword");
    weaponStat.querySelector('span').innerText = currentWeapon;
    text.innerText = "You have purchased a Silver Sword. Glory to Adventure!"
    goldStat.querySelector('span').innerHTML = gold;
  }
  else if(currentWeapon.some(char => char === 'Silver Sword')){
    text.innerText = " You already have a Silver Sword.";
  }
  else{
    text.innerText = " You do not have sufficient gold to buy Silver Sword.";
  }
}
const goldSword = () =>{
  if(gold>=300 && !currentWeapon.some(char => char === 'Gold Sword')){
    gold -=300;
    currentWeapon.pop();
    currentWeapon.push("Gold Sword");
    weaponStat.querySelector('span').innerText = currentWeapon;
    text.innerText = "You have purchased a Gold Sword. Glory to Adventure!"
    goldStat.querySelector('span').innerHTML = gold;
  }
  else if(currentWeapon.some(char => char === 'Gold Sword')){
    text.innerText = " You already have a Gold Sword.";
  }
  else{
    text.innerText = " You do not have sufficient gold to buy a Gold Sword.";
  }
}
const skills = [
  {
    name: "confuse",
    detail: "a spell that can give blind to the enemy by 30%",
    power: 5,
    gold: 0,
  },
  {
    name: "poison",
    detail: "a spell that gives the target damage over time.",
    power: 5,
    gold: 50,
  },
  {
    name: "blind",
    detail: "a skill that will make the enemy miss by 80%",
    power: 20,
    gold: 100,
  },
  {
    name: "Bleed",
    detail: "a skill that will pierce through any enemy and make it bleed over time",
    power: 30,
    gold: 200,
  },
  {
    name: "bash",
    detail: "a skill that will make a enemy stun for 2 turns", 
    power: 50,
    gold: 300,
  }
];
const poison = () =>{
  if(gold>=50 && !currentSkill.some(char => char === 'Poison')){
    gold -=50;
    goldStat.querySelector('span').innerHTML = gold;
    currentSkill.push("Poison");
    skillsStat.querySelector('span').innerText = currentSkill;
    text.innerText = "You have purchased a skill 'Poison'. Glory to Adventure!"

  }
  else if(currentSkill.some(char => char === 'Poison')){
    text.innerText = " You already have a skill 'Poison'.";
  }
  else{
    text.innerText = " You do not have sufficient gold to buy a skill 'Poison'.";
  }
}

const blind = () =>{
  if(gold>=100 && !currentSkill.some(char => char === 'Blind')){
    gold -=100;
    goldStat.querySelector('span').innerHTML = gold;
    currentSkill.push("Blind");
    skillsStat.querySelector('span').innerText = currentSkill;
    text.innerText = "You have purchased a skill 'Blind'. Glory to Adventure!"

  }
  else if(currentSkill.some(char => char === 'Blind')){
    text.innerText = " You already have a skill 'Blind'.";
  }
  else{
    text.innerText = " You do not have sufficient gold to buy a skill 'Blind'.";
  }
}

const bleed = () =>{
  if(gold>=200 && !currentSkill.some(char => char === 'Bleed')){
    gold -=200;
    goldStat.querySelector('span').innerHTML = gold;
    currentSkill.push("Bleed");
    skillsStat.querySelector('span').innerText = currentSkill;
    text.innerText = "You have purchased a skill 'Bleed'. Glory to Adventure!"

  }
  else if(currentSkill.some(char => char === 'Bleed')){
    text.innerText = " You already have a skill 'Bleed'.";
  }
  else{
    text.innerText = " You do not have sufficient gold to buy a skill 'Bleed'.";
  }
}
const bash = () =>{
  if(gold>=300 && !currentSkill.some(char => char === 'Bash')){
    gold -=300;
    goldStat.querySelector('span').innerHTML = gold;
    currentSkill.push("Bash");
    skillsStat.querySelector('span').innerText = currentSkill;
    text.innerText = "You have purchased a skill 'Bash'. Glory to Adventure!"

  }
  else if(currentSkill.some(char => char === 'Bash')){
    text.innerText = " You already have a skill 'Bash'.";
  }
  else{
    text.innerText = " You do not have sufficient gold to buy a skill 'Poison'.";
  }
}
const wildEnemy = [
  {
    name: "Bandit",
    health: 30,
    power: Math.floor(Math.random()*(12-4))+5,
    gold: Math.floor(Math.random()*(12-4))+5,
  },
  {
    name: "goblin",
    health: 25,
    power: Math.floor(Math.random()*(12-5))+4,
    gold: Math.floor(Math.random()*(12-5))+4,
  },
  {
    name: "Slime",
    health: 20,
    power: Math.floor(Math.random()*(12-5))+3,
    gold: Math.floor(Math.random()*(12-5))+3,
  }
];
const caveEnemy = [
  {
    name: "Bat",
    health: 40,
    power: Math.floor(Math.random()*(20-8))+10,
    gold: Math.floor(Math.random()*(20-8))+10,
  },
  {
    name: "Ghouls",
    health: 50,
    power: Math.floor(Math.random()*(20-8))+10,
    gold: Math.floor(Math.random()*(20-8))+10,
  },
  {
    name: "Trolls",
    health: 60,
    power: Math.floor(Math.random()*(20-8))+10,
    gold: Math.floor(Math.random()*(20-8))+10,
  },
  {
    name: "Minotaur",
    health: 70,
    power: Math.floor(Math.random()*(20-8))+10,
    gold: Math.floor(Math.random()*(20-8))+10,
  }
];

const wildEnemyRandom = () =>{
  
  return wildEnemy[Math.floor(Math.random()*3)].name;
}
const caveEnemyRandom = () =>{
  
  return caveEnemy[Math.floor(Math.random()*3)].name;
}

const liveFight = () =>{
  //name
  //health
  const div = document.createElement('div');
  div.className = "monsterstat";
  div.appendChild(editable);
}  

const dodge = () =>{
  const fleePercentage = Math.floor(Math.random()*100)+1;
  if(fleePercentage<=80){
    text.innerText = "You have Successfully dodge the attack."
  }
  else{
    text.innerText = "You have Failed to dodge the attack."
  }
}

const flee = () =>{
  const fleePercentage = Math.floor(Math.random()*100)+1;
  if(fleePercentage<=80){
    const remove = document.querySelector('.monsterstat');
    if (remove) {
      remove.remove();
    }
    guild();
  }
  else{
    text.innerText = "You have Failed to Flee."
  }
}
const attack = () =>{}
const activeSkill = () =>{}

const loc =[
    {
      name: "Home",
      "button text": ["Guild","Wild","Cave","Store"],
      "button func": [guildHeal,wild,cave,store],
      text: "Welcome, Adventurer! Are up for the challenge to become the greatest Adventurer? Then climb up the ranks through fighting in the wilds and exploring the cave."
    },
    {
      name: "Guild",
      "button text": ["Wild","Cave","Store","Ranks"],
      "button func": [wild,cave,store,ranks],
      text: "Welcome to the Guild, Adventurer! Take a rest. It will heal you. Make sure to equip yourself for your next journey. Good Luck!"
    },
    {
      name: "Wild",
      "button text": ["Attack","Skills","Dodge","Flee"],
      "button func" :[,,dodge,flee],
      text: `You have encounter an ${wildEnemyRandom()} in the Wild.`
    },
    {
      name: "Cave",
      "button text": ["Attack","Dodge","Skills","Flee"],
      "button func" :[,,dodge,flee],
      text: `You have encounter an ${caveEnemyRandom()} in the Cave.`
    },
    {
      name: "Store",
      "button text": ["Buy Weapon","Buy Skills","Buy Health","Guild"],
      "button func" :[buyWeapon,buySkill,buyHealth,guildHeal],
      text: "Welcome to the Store. Find anything fancy?"
    },
    {
      name: "Rank",
      "button text": ["Challenger","Ranker","The Champion","Guild"],
      "button func" :[,,,guildHeal],
      text: "Welcome to Ranks. Are you up to become be champion? Fight the adventurer in the guild."
    },
    {
      name: "Skill",
      "button text": ["Buy Poison for 50","Buy Blind for 100"," Buy Bleed for 200","Guild"],
      "button func" :[poison,blind,bleed,guildHeal],
      text: "Buying Skill will help you to become the greatest Adventurer! "
    },
    {
      name: "Weapon",
      "button text": ["Buy Bronze Sword for 50","Buy Iron Sword for 100"," Buy Silver Sword for 150","Guild"],
      "button func" :[bronzeSword,ironSword,silverSword,guildHeal],
      text: "Buying Weapon will help you to become the greatest Adventurer! "
    },
    {
      name: "Defeat",
      "button text": ["Restart?","Restart?","Restart?","Restart?"],
      "button func" :[restart,restart,restart,restart],
      text: "You have died. Restart?"
    },
    {
      name: "Win",
      "button text": ["Continue?","Continue?","Restart?","Restart?"],
      "button func" :[guildHeal,guildHeal,restart,restart],
      text: "You have become the Best Adventurer in the Guild! Restart? or Continue"
    }
];
