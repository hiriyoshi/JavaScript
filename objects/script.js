const btn1 = document.querySelector('.btn1');
const btn2 = document.querySelector('.btn2');
const btn3 = document.querySelector('.btn3');
const btn4 = document.querySelector('.btn4');
const text = document.querySelector('.text');
const healthStat = document.querySelector('.health');
const goldStat = document.querySelector('.gold');
const weaponStat = document.querySelector('.weapon');
const skillsStat = document.querySelector('.skills');
const currentWeapon = ["Wooden Sword"];
const currentSkill = ["Confuse"];
let gold = 100;
let health = 100;
let currentHealth = 10;
let showhealth = `${currentHealth}/${health}`;

const home = () => update(loc[0])
const guild = () => update(loc[1]);
const wild = () => update(loc[2]);
const cave = () => update(loc[3]);
const store = () => update(loc[4]);
const ranks = () => update(loc[5]);
const buySkill = () => update(loc[6]);

const initializeStat = () =>{
  healthStat.querySelector('span').innerText = showhealth;
  goldStat.querySelector('span').innerText = gold;
  weaponStat.querySelector('span').innerText = currentWeapon;
  skillsStat.querySelector('span').innerText = currentSkill;
  btn1.onclick = guild;
  btn2.onclick = wild;
  btn3.onclick = cave;
  btn4.onclick = store;
}
initializeStat();
const update = (place)=>{
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

const guildHeal = () =>{
  heal();
  guild();
}

const heal = () =>{
  if(currentHealth<health){
    const healing = setInterval(()=>{
      if(currentHealth<health){
        currentHealth +=1;
        healthStat.innerText.span = showhealth;
      }
      else{
        clearInterval(healing);
      }
    },300);
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
    text.innerText = " You do not have sufficient gold to buy this."
  }
}

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
    currentSkill.push('Poison');
    currentSkill.querySelector('span').innerText = 'Poison';
    goldStat -= 50;
    goldStat.querySelector('span').innerText = goldStat;
    currentSkill.querySelector('span').innerText = currentSkill;
  }
  else{
    text.innerText = "You do not have sufficient gold to buy this."
  }  
}
const blind = () =>{
  if(!currentSkill.some(char => char === 'Blind')){
    currentSkill.push('Blind');
  }
}
const bleed = () =>{
  if(!currentSkill.some(char => char === 'Bleed')){
    currentSkill.push('Bleed');
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
      "button text": ["Skills","Dodge","Observe","Flee"],
      "button func" :[],
      text: `You have encounter an ${wildEnemy[Math.floor(Math.random()*3)].name} in the Wild.`
    },
    {
      name: "Cave",
      "button text": ["Skills","Dodge","Observe","Flee"],
      "button func" :[],
      text: `You have encounter an ${caveEnemy[Math.floor(Math.random()*3)].name} in the Cave.`
    },
    {
      name: "Store",
      "button text": ["Buy Weapon","Buy Skills","Buy Health","Guild"],
      "button func" :[,buySkill,buyHealth,guildHeal],
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