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
let currentWeapon = ["Wooden Sword"];
let currentSkill = [];
let gold = 500;
let health = 50;
let currentHealth = 40;
let showhealth = `${currentHealth}/${health}`;
let btnUpdate = null;
let intervalId;
let healing;
let heals = false;
let isConfuse = false;
let isBleed = false;
let isPoison  = false;
let effectContinue = false;
let effectCountConfuse = 0;
let effectCountBleed = 0;
let effectCountPoison = 0;
let currentMonsterHealth = 0;
let currentMonsterName = 0;
const home = () => update(loc[0]);
const guild = () => update(loc[1]);
const wild = () => {
  update(loc[2]);
  let healthEnemy = wildEnemy[0].health;
  const name = wildEnemy[0].name;
  currentMonsterHealth = wildEnemy[0].health;
  currentMonsterName = wildEnemy[0].name;

  const div = document.createElement('div');
  div.className = "monsterstat";
  div.style.display = "flex";
  div.style.alignItems = "center";
  div.style.justifyContent = "center";
  editable.appendChild(div);

  const monsterName = document.createElement('p');
  monsterName.innerHTML = `Enemy Name: ${name}`;
  monsterName.style.width = "200px";
  monsterName.style.height = "30px";
  monsterName.style.display = "flex";
  monsterName.style.alignItems = "center";
  monsterName.style.fontWeight = "bold";
  monsterName.style.color = "white";
  monsterName.style.textShadow = "3px 3px 3px red, 1px 3px 3px red, 2px -2px 3px red, -2px -2px 3px red";
  div.appendChild(monsterName);

  //Enemy Stat 
  
  const monsterHealth = document.createElement('p');
  monsterHealth.className = "monsterHealth";
  monsterHealth.innerHTML = `Enemy Health: ${currentMonsterHealth} / ${healthEnemy}`;
  monsterHealth.style.width = "200px";
  monsterHealth.style.height = "30px";
  monsterHealth.style.display = "flex";
  monsterHealth.style.alignItems = "center";
  monsterHealth.style.fontWeight = "bold";
  monsterHealth.style.color = "white";
  monsterHealth.style.textShadow = "3px 3px 3px red, 1px 3px 3px red, 2px -2px 3px red, -2px -2px 3px red";
  div.appendChild(monsterHealth);

}
const cave = () => {
  console.log(currentMonsterName === wildEnemy[0].name);
  update(loc[3]);
  let healthEnemy = caveEnemy[0].health;
  const name = caveEnemy[0].name;
  currentMonsterHealth = caveEnemy[0].health;
  currentMonsterName = caveEnemy[0].name;
  //effects 

  const div = document.createElement('div');
  div.className = "monsterstat";
  div.style.display = "flex";
  div.style.alignItems = "center";
  div.style.justifyContent = "center";
  editable.appendChild(div);

  const monsterName = document.createElement('p');
  monsterName.innerHTML = `Enemy Name: ${name}`;
  monsterName.style.width = "200px";
  monsterName.style.height = "30px";
  monsterName.style.display = "flex";
  monsterName.style.alignItems = "center";
  monsterName.style.fontWeight = "bold";
  monsterName.style.color = "white";
  monsterName.style.textShadow = "3px 3px 3px red, 1px 3px 3px red, 2px -2px 3px red, -2px -2px 3px red";
  div.appendChild(monsterName);

  //Enemy Stat 
  
  const monsterHealth = document.createElement('p');
  monsterHealth.className = "monsterHealth";
  monsterHealth.innerHTML = `Enemy Health: ${currentMonsterHealth} / ${healthEnemy}`;
  monsterHealth.style.width = "200px";
  monsterHealth.style.height = "30px";
  monsterHealth.style.display = "flex";
  monsterHealth.style.alignItems = "center";
  monsterHealth.style.fontWeight = "bold";
  monsterHealth.style.color = "white";
  monsterHealth.style.textShadow = "3px 3px 3px red, 1px 3px 3px red, 2px -2px 3px red, -2px -2px 3px red";
  div.appendChild(monsterHealth);

}
const store = () => update(loc[4]);
const ranks = () => update(loc[5]);
const buySkill = () => update(loc[6]); 
const buyWeapon = () => update(loc[7]);
const Defeat = () => update(loc[8]);
const Win = () => update(loc[9]);
const activeSkill = () => update(loc[10]);
const back = () => update(loc[11]);
const backcave = () => update(loc[12]);
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
    console.log("Healing");
  }
  else{
    clearInterval(intervalId);
    clearInterval(healing);
    console.log("not healing!");
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
  }
  else{
    clearInterval(intervalId);
    clearInterval(healing);
    console.log("not healing");
  }
})

const restart = () =>{
  // const monsterStats = document.querySelector('.monsterstat');
  // currentHealth = 10;
  // health = 100;
  // healthStat.querySelector('span').innerText = "10/100";
  // gold = 0;
  // goldStat.querySelector('span').innerText = "0";
  // currentWeapon = [""];
  // weaponStat.querySelector('span').innerText = "Wooden Sword";
  // currentSkill = [];
  // skillsStat.querySelector('span').innerText = "";
  // currentMonsterHealth = wildEnemy[0].health;
  // if (monsterStats) {
  //   monsterStats.remove();
  // }
  // home();
  const url = "index.html";
  window.location.href = url;
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
        confuseActive();
        poisonActive();
        bleedActive();
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
    poisonActive();
    loc[10]["button text"][1] = "Poison";
  }
  else if(currentSkill.some(char => char === 'Poison')){
    text.innerText = " You already have a skill 'Poison'.";
  }
  else{
    text.innerText = " You do not have sufficient gold to buy a skill 'Poison'.";
  }
}

const confuse= () =>{
  if(gold>=100 && !currentSkill.some(char => char === 'Confuse')){
    gold -=100;
    goldStat.querySelector('span').innerHTML = gold;
    currentSkill.push("Confuse");
    skillsStat.querySelector('span').innerText = currentSkill;
    text.innerText = "You have purchased a skill 'Confuse'. Glory to Adventure!"
    loc[10]["button text"][0] = "Confuse";
    confuseActive();
  }
  else if(currentSkill.some(char => char === 'Confuse')){
    text.innerText = " You already have a skill 'Confuse'.";
  }
  else{
    text.innerText = " You do not have sufficient gold to buy a skill 'Confuse'.";
  }
  
}

const bleed = () =>{
  if(gold>=200 && !currentSkill.some(char => char === 'Bleed')){
    gold -=200;
    goldStat.querySelector('span').innerHTML = gold;
    currentSkill.push("Bleed");
    skillsStat.querySelector('span').innerText = currentSkill;
    text.innerText = "You have purchased a skill 'Bleed'. Glory to Adventure!"
    bleedActive();
    loc[10]["button text"][2] = "Bleed";
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
    health: 50,
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
    health: 100,
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
  const enemyWeapon = wildEnemy[0].power;
  if(fleePercentage<=80){
    text.innerText = `You have Successfully dodge the attack. As you have dodge the enemy, you saw it's power which is ${enemyWeapon};`
    if(currentMonsterName === wildEnemy[0].name){
      back;
    }
    else{
      backcave();
    }
  }
  else{
    text.innerText = "You have Failed to dodge the attack."
    enemyAttack();
    if(currentMonsterName === wildEnemy[0].name){
      back;
    }
    else{
      backcave();
    }
  }
  if(isConfuse){
    effectCountConfuse+=1;
    if(effectCountConfuse===3){
      isConfuse = false;
    }
  }
  if(isBleed){
    effectCountBleed+=1;
    if(effectCountBleed===3){
      isBleed = false;
    }
  }
  if(isPoison){
    effectCountPoison+=1;
    if(effectCountPoison===3){
      isBleed = false;
    }
  }
}

const flee = () =>{
  const fleePercentage = Math.floor(Math.random()*100)+1;
  if(fleePercentage<=80){
    const remove = document.querySelector('.monsterstat');
    if (remove) {
      remove.remove();
      isConfuse = false;
      isBleed = false;
      isPoison = false;
    }
    guild();
  }
  else{
    text.innerText = "You have Failed to Flee."
    enemyAttack();
    if(currentMonsterName === wildEnemy[0].name){
      back;
    }
    else{
      backcave();
    }
  }
}
const confuseActive = () =>{
  if(currentSkill.includes('Confuse')){
    const confuseLoc = loc.find(loc => loc.name === "activeSkills");
    confuseLoc["button text"][0].loc = 'Confuse';
    return 'Confuse';
  }
  else{
    return "N/A";
  }
}
const poisonActive = () =>{
  if(currentSkill.includes('Poison')){
    return `Poison`;
  }
  else{
    return "N/A";
  }
}
const bleedActive = () =>{
  if(currentSkill.includes('Bleed')){
    return "Bleed";
  }
  else{
    return "N/A";
  }
}
const backFunction = () =>{
  update(loc[2]);
}

//difference between attack and attackcave
const usedConfuse = async() =>{
  const confuseChances = Math.floor(Math.random()*100+1);
  if(loc[10]["button text"][0] !=="N/A"){
    if(isConfuse){
      text.innerText = "The enemy is already 'Confuse'.";
      if(currentMonsterName === wildEnemy[0].name){
        back;
      }
      else{
        backcave();
      }
    }
    else{
      if (confuseChances<=80) {        
          text.innerText = "You have used 'Confuse' on the enemy! and it is successful.";
          isConfuse = true;
        await new Promise(resolve => setTimeout(()=>{
          if(currentMonsterName === wildEnemy[0].name){
            update(loc[11]);
          }
          else{
            update(loc[12]);
          }
      },2000))
      }
      else{
        text.innerText = "The enemy have resisted the skill 'Confuse'. And it attack.";
       
        if(currentMonsterName === wildEnemy[0].name){
          enemyAttack();
        }
        else{
          enemyAttackCave();
        }
        await new Promise(resolve => setTimeout(()=>{
          isConfuse = false;
          if(currentMonsterName === wildEnemy[0].name){
            back;
          }
          else{
            backcave();
          }
        },2000))

      }
    }
  }
  else{
    text.innerText = "You have not bought this skill yet!";
  }
}
const usedPoison = async() =>{
  const poisonChances = Math.floor(Math.random()*100+1);
  if(loc[10]["button text"][1] !=="N/A"){
    if(isPoison){
      text.innerText = "The enemy is already 'Poison'.";
      if(currentMonsterName === wildEnemy[0].name){
        back;
      }
      else{
        backcave();
      }
    }
    else{
      if (poisonChances<=80) {
          text.innerText = "You have used 'Poison' on the enemy! and it is successful.";
          isPoison = true;
        await new Promise(resolve => setTimeout(()=>{
          if(currentMonsterName === wildEnemy[0].name){
            update(loc[11]);
          }
          else{
            update(loc[12]);
          }
      },2000))
      }
      else{
        text.innerText = "The enemy have resisted the skill 'Poison'. And it attack.";
        await new Promise(resolve => setTimeout(()=>{
          isPoison = false;
          if(currentMonsterName === wildEnemy[0].name){
            back;
          }
          else{
            backcave();
          }
        },2000))
      }
    }
  }
  else{
    text.innerText = "You have not bought this skill yet!";
  }
}
const usedBleed = async() =>{
  
  const bleedChances = Math.floor(Math.random()*100+1);
  if(loc[10]["button text"][2] !=="N/A"){
    if(isBleed){
      text.innerText = "The enemy is already 'Bleed'.";
      
      if(currentMonsterName === wildEnemy[0].name){
        back;
      }
      else{
        backcave();
      }
    }
    else{
      if (bleedChances<=80) {
        
          text.innerText = "You have used 'Bleed' on the enemy! and it is successful.";
          isBleed = true;
        await new Promise(resolve => setTimeout(()=>{
          if(currentMonsterName === wildEnemy[0].name){
            update(loc[11]);
          }
          else{
            update(loc[12]);
          }
      },2000))
      }
      else{
        text.innerText = "The enemy have resisted the skill 'Bleed'. And it attack.";
        
        if(currentMonsterName === wildEnemy[0].name){
          enemyAttack();
        }
        else{
          enemyAttackCave();
        }
        await new Promise(resolve => setTimeout(()=>{
          isBleed = false;
          if(currentMonsterName === wildEnemy[0].name){
            back;
          }
          else{
            backcave();
          }
          
        },2000))
      }
    }
  }
  else{
    text.innerText = "You have not bought this skill yet!";
  }
}
const usedBash = () =>{}
const attack = async () => {
  let monsterStats = document.querySelector('.monsterstat');
  let enemyHealth = document.querySelector('.monsterHealth');
  text.innerText = " You attack it with your " + currentWeapon[0] + ".";
  const myWeapon = weapons.find(weapon => weapon.name === currentWeapon[0])?.power;
  const enemyWeapon = wildEnemy[0].power;
  let Maxenemy = wildEnemy[0].health;

  
  currentMonsterHealth = Math.max(0,currentMonsterHealth-myWeapon);
  enemyHealth.innerText = `Enemy Health: ${currentMonsterHealth}/${wildEnemy[0].health}`;
  
  
  if(isConfuse){
    effectCountConfuse+=1;
    if(effectCountConfuse===3){
      isConfuse = false;
    }
    // blind, hit itself, do nothing,
    const isConfuseEffect = Math.floor(Math.random()*100+1);
    if(isConfuseEffect>=20){
      text.innerText = "The enemy is 'Confuse' and it did nothing.";
    }
    else if(isConfuseEffect>20 && isConfuseEffect<=40){
      text.innerText = "The enemy is 'Confuse' and it hit itself";
      const enemyWeapon = wildEnemy[0].power;
      Maxenemy = wildEnemy[0].health;
      
      Maxenemy = Math.max(0,Maxenemy-enemyWeapon);
      healthStat.querySelector('span').innerText = `${currentHealth}/${health}`;
      currentHealth.innerText = `Enemy Health: ${currentHealth}/${health}`;
      
    }
    else if(isConfuseEffect>40 && isConfuseEffect<=60){
      text.innerText = "The enemy is 'Confuse' and it miss it's attack";
    }
    else{
      enemyAttack();
    }
  }
  if(isPoison){
    effectCountPoison+=1;
    if(effectCountPoison===3){
      isConfuse = false;
    }
    // blind, hit itself, do nothing,
    const isPoisonEffect = Math.floor(Math.random()*100+1);
    
    if(isPoisonEffect>=0 && isPoisonEffect<80){
      text.innerText += "The enemy is 'Poison' and it takes 10 damage.";
      if(!currentHealth<=0){
        const poisondamage = 10;
        currentMonsterHealth = Math.max(0,currentMonsterHealth-poisondamage);
        enemyHealth.innerText = `Enemy Health: ${currentMonsterHealth}/${wildEnemy[0].health}`;
        Maxenemy = Math.max(0,Maxenemy-10);
        healthStat.querySelector('span').innerText = `${currentHealth}/${health}`;
        currentHealth.innerText = `Enemy Health: ${currentHealth}/${health}`;
      }
      else{
        text.innerText = `You have defeated ${wildEnemy[0].name}.`;
        gold += wildEnemy[0].power;
        goldStat.querySelector('span').innerText = gold;
        await new Promise(resolve => setTimeout(()=>{
          if (monsterStats) {
            monsterStats.remove();
            isConfuse = false;
            isBleed = false;
            isPoison = false;
          }
          guild();
        },2000))
          }
    }
    else if(isPoisonEffect>=80 && isPoisonEffect<=100){
      text.innerText = "The enemy have resisted the poison";
      isPoison = false;      
      enemyAttack();
    }
    else{
      enemyAttack();
    }
  }
  if(isBleed){
    effectCountBleed+=1;
    if(effectCountBleed===3){
      isConfuse = false;
    }
    // blind, hit itself, do nothing,
    const isBleedEffect = Math.floor(Math.random()*100+1);
    
    if(isBleedEffect>=0 && isBleedEffect<80){
      text.innerText += "The enemy is 'Bleed' and it takes 10 damage.";
      if(!currentHealth<=0){
        const bleedDamage =20;
        currentMonsterHealth = Math.max(0,currentMonsterHealth-bleedDamage);
        enemyHealth.innerText = `Enemy Health: ${currentMonsterHealth}/${wildEnemy[0].health}`;
        Maxenemy = Math.max(0,Maxenemy-10);
        healthStat.querySelector('span').innerText = `${currentHealth}/${health}`;
        currentHealth.innerText = `Enemy Health: ${currentHealth}/${health}`;
      }
      else{
        text.innerText = `You have defeated ${wildEnemy[0].name}.`;
        gold += wildEnemy[0].power;
        goldStat.querySelector('span').innerText = gold;
        await new Promise(resolve => setTimeout(()=>{
          if (monsterStats) {
            monsterStats.remove();
            isConfuse = false;
            isBleed = false;
            isPoison = false;
          }
          guild();
        },2000))
          }
    }
    else if(isBleedEffect>=80 && isBleedEffect<=100){
      text.innerText = "The enemy have resisted the bleed";
      isBleed = false;      
      enemyAttack();
    }
    else{
      enemyAttack();
    }
  }
  if(currentMonsterHealth<=0){
    text.innerText = `You have defeated ${wildEnemy[0].name}.`;
    gold += wildEnemy[0].power;
    goldStat.querySelector('span').innerText = gold;
    await new Promise(resolve => setTimeout(()=>{
      if (monsterStats) {
        monsterStats.remove();
        isConfuse = false;
        isBleed = false;
        isPoison = false;
      }
      guild();
    },2000))
    // const remove = document.querySelector('.monsterstat');
    // if (remove) {
    //   remove.remove();
    // }
    // guild();
  }
  // if(isConfuse){
  //   effectCountConfuse+=1;
  //   if(effectCountConfuse===3){
  //     isConfuse = false;
  //   }
  // }
  enemyAttack();
};
const caveattack = async () => {
  let monsterStats = document.querySelector('.monsterstat');
  let enemyHealth = document.querySelector('.monsterHealth');
  text.innerText = " You attack it with your " + currentWeapon[0] + ".";
  const myWeapon = weapons.find(weapon => weapon.name === currentWeapon[0])?.power;
  const enemyWeapon = caveEnemy[0].power;
  let Maxenemy = caveEnemy[0].health;
  
  currentMonsterHealth = Math.max(0,currentMonsterHealth-myWeapon);
  enemyHealth.innerText = `Enemy Health: ${currentMonsterHealth}/${caveEnemy[0].health}`;
  
  if(isConfuse){
    effectCountConfuse+=1;
    if(effectCountConfuse===3){
      isConfuse = false;
    }
    // blind, hit itself, do nothing,
    const isConfuseEffect = Math.floor(Math.random()*100+1);
    if(isConfuseEffect>=20){
      text.innerText = "The enemy is 'Confuse' and it did nothing.";
    }
    else if(isConfuseEffect>20 && isConfuseEffect<=40){
      text.innerText = "The enemy is 'Confuse' and it hit itself";
      const enemyWeapon = caveEnemy[0].power;
      Maxenemy = caveEnemy[0].health;
      
      Maxenemy = Math.max(0,Maxenemy-enemyWeapon);
      healthStat.querySelector('span').innerText = `${currentHealth}/${health}`;
      currentHealth.innerText = `Enemy Health: ${currentHealth}/${health}`;
      
    }
    else if(isConfuseEffect>40 && isConfuseEffect<=60){
      text.innerText = "The enemy is 'Confuse' and it miss it's attack";
    }
    else{
      enemyAttackCave();
    }
    console.log(effectCount);
  }
  if(isPoison){
    effectCountPoison+=1;
    if(effectCountPoison===3){
      isConfuse = false;
    }
    // blind, hit itself, do nothing,
    const isPoisonEffect = Math.floor(Math.random()*100+1);
    
    if(isPoisonEffect>=0 && isPoisonEffect<80){
      text.innerText += "The enemy is 'Poison' and it takes 10 damage.";
      if(!currentHealth<=0){
        const poisondamage = 10;
        currentMonsterHealth = Math.max(0,currentMonsterHealth-poisondamage);
        enemyHealth.innerText = `Enemy Health: ${currentMonsterHealth}/${caveEnemy[0].health}`;
        Maxenemy = Math.max(0,Maxenemy-10);
        healthStat.querySelector('span').innerText = `${currentHealth}/${health}`;
        currentHealth.innerText = `Enemy Health: ${currentHealth}/${health}`;
        console.log("poison works");
      }
      else{
        console.log("poison dismissed");
        text.innerText = `You have defeated ${caveEnemy[0].name}.`;
        gold += caveEnemy[0].power;
        goldStat.querySelector('span').innerText = gold;
        await new Promise(resolve => setTimeout(()=>{
          if (monsterStats) {
            monsterStats.remove();
            isConfuse = false;
            isBleed = false;
            isPoison = false;
          }
          guild();
        },2000))
          }
    }
    else if(isPoisonEffect>=80 && isPoisonEffect<=100){
      text.innerText = "The enemy have resisted the poison";
      isPoison = false;      
      enemyAttackCave();
    }
    else{
      enemyAttackCave();
    }
  }
  if(isBleed){
    effectCountBleed+=1;
    if(effectCountBleed===3){
      isConfuse = false;
    }
    // blind, hit itself, do nothing,
    const isBleedEffect = Math.floor(Math.random()*100+1);
    
    if(isBleedEffect>=0 && isBleedEffect<80){
      text.innerText += "The enemy is 'Bleed' and it takes 10 damage.";
      if(!currentHealth<=0){
        const bleedDamage =20;
        currentMonsterHealth = Math.max(0,currentMonsterHealth-bleedDamage);
        enemyHealth.innerText = `Enemy Health: ${currentMonsterHealth}/${caveEnemy[0].health}`;
        Maxenemy = Math.max(0,Maxenemy-10);
        healthStat.querySelector('span').innerText = `${currentHealth}/${health}`;
        currentHealth.innerText = `Enemy Health: ${currentHealth}/${health}`;
      }
      else{
        text.innerText = `You have defeated ${caveEnemy[0].name}.`;
        gold += caveEnemy[0].power;
        goldStat.querySelector('span').innerText = gold;
        await new Promise(resolve => setTimeout(()=>{
          if (monsterStats) {
            monsterStats.remove();
            isConfuse = false;
            isBleed = false;
            isPoison = false;
          }
          guild();
        },2000))
          }
    }
    else if(isBleedEffect>=80 && isBleedEffect<=100){
      text.innerText = "The enemy have resisted the bleed";
      isBleed = false;      
      enemyAttackCave();
    }
    else{
      enemyAttackCave();
    }
  }
  if(currentMonsterHealth<=0){
    text.innerText = `You have defeated ${caveEnemy[0].name}.`;
    gold += caveEnemy[0].power;
    goldStat.querySelector('span').innerText = gold;
    await new Promise(resolve => setTimeout(()=>{
      if (monsterStats) {
        monsterStats.remove();
        isConfuse = false;
        isBleed = false;
        isPoison = false;
      }
      guild();
    },2000))
    // const remove = document.querySelector('.monsterstat');
    // if (remove) {
    //   remove.remove();
    // }
    // guild();
  }
  // if(isConfuse){
  //   effectCountConfuse+=1;
  //   if(effectCountConfuse===3){
  //     isConfuse = false;
  //   }
  // }
  enemyAttack();
};
// const caveattack = async() => {
//   let monsterStats = document.querySelector('.monsterstat');
//   let enemyHealth = document.querySelector('.monsterHealth');
//   text.innerText = " You attack it with your " + currentWeapon[0] + ".";
//   const myWeapon = weapons.find(weapon => weapon.name === currentWeapon[0])?.power;
//   const enemyWeapon = caveEnemy[0].power;
//   const Maxenemy = caveEnemy[0].health;

//   currentMonsterHealth = Math.max(0,currentMonsterHealth-myWeapon);
//   enemyHealth.innerText = `Enemy Health: ${currentMonsterHealth}/${caveEnemy[0].health}`;
  
//   if(currentMonsterHealth<=0){
//     text.innerText = `You have defeated ${caveEnemy[0].name}.`;
//     gold += caveEnemy[0].power;
//     goldStat.querySelector('span').innerText = gold;
//     await new Promise(resolve => setTimeout(()=>{
//       if (monsterStats) {
//         monsterStats.remove();
//       }
//       guild();
//     },2000))
//     // const remove = document.querySelector('.monsterstat');
//     // if (remove) {
//     //   remove.remove();
//     // }
//     // guild();
//   }

//   enemyAttack();

// };
const enemyAttack = async() =>{
  const enemyWeapon = wildEnemy[0].power;
  Maxenemy = wildEnemy[0].health;
  
  currentHealth = Math.max(0,currentHealth-enemyWeapon);  
  healthStat.querySelector('span').innerText = `${currentHealth}/${health}`;  
  text.innerText += "The " + caveEnemy[0].name + " attacks.";
  currentHealth.innerText = `Enemy Health: ${currentHealth}/${health}`;
  if(currentHealth<=0){
    Defeat();
  }
}
const enemyAttackCave = async() =>{
  const enemyWeapon = caveEnemy[0].power;
  Maxenemy = caveEnemy[0].health;
  
  currentHealth = Math.max(0,currentHealth-enemyWeapon);  
  healthStat.querySelector('span').innerText = `${currentHealth}/${health}`;  
  text.innerText += "The " + caveEnemy[0].name + " attacks.";
  currentHealth.innerText = `Enemy Health: ${currentHealth}/${Maxenemy}`;
  if(currentHealth<=0){
    Defeat();
  }
}
//missing skill,ranks
const loc =[
    {
      name: "Home",
      "button text": ["Guild","Wild","Cave","Store"],
      "button func": [guildHeal,wild,cave,store],
      text: "Welcome, Adventurer! Are up for the challenge to become the greatest Adventurer? Then climb up the ranks through fighting in the wilds and exploring the cave."
    },
    {
      name: "Guild",
      "button text": ["Guild","Wild","Cave","Store"],
      "button func": [guild,wild,cave,store],
      text: "Welcome to the Guild, Adventurer! Take a rest. It will heal you. Make sure to equip yourself for your next journey. Good Luck!"
    },
    {
      name: "Wild",
      "button text": ["Attack","Skills","Dodge","Flee"],
      "button func" :[attack,activeSkill,dodge,flee],
      text: `You have encounter an Enemy.`
    },
    {
      name: "Cave",
      "button text": ["Attack","Skills","Dodge","Flee"],
      "button func" :[caveattack,activeSkill,dodge,flee],
      text: `You have encounter an Enemy.`
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
      "button text": ["Buy Confuse for 50","Buy Poison for 100"," Buy Bleed for 200","Store"],
      "button func" :[confuse,poison,bleed,store],
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
      text: "You Die. Restart?"
    },
    {
      name: "Win",
      "button text": ["Continue?","Continue?","Restart?","Restart?"],
      "button func" :[guildHeal,guildHeal,restart,restart],
      text: "You have become the Best Adventurer in the Guild! Restart? or Continue"
    },
    {
      name: "activeSkills",
      "button text": [confuseActive(),poisonActive(),bleedActive(),"back"],
      "button func" :[usedConfuse,usedPoison,usedBleed,backFunction],
      text: "You can used skill for your advantage!"
    },
    {
      name: "Back",
      "button text": ["AttackWILD","Skills","Dodge","Flee"],
      "button func" :[attack,activeSkill,dodge,flee],
      text: "The enemy is right infront of you, fight or flight!"
    },
    {
      name: "BackCave",
      "button text": ["Attackcave","Skills","Dodge","Flee"],
      "button func" :[caveattack,activeSkill,dodge,flee],
      text: "The enemy is right infront of you, fight or flight!"
    }
];