// const btn1 = document.querySelector('.btn1');
// const btn2 = document.querySelector('.btn2');
// const btn3 = document.querySelector('.btn3');
// const btn4 = document.querySelector('.btn4');
// const text = document.querySelector('.text');

const health = 100;

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
      name: "Guild",
      "button text": ["Guild","Wild","Cave","Store"],
      "button func": [],
      text: "Welcome to the Guild, Adventurer! Take a rest. It will heal you. Make sure to equip yourself for your next journey. Good Luck!"
    },
    {
      name: "Wild",
      "button text": ["Skills","Dodge","Observe","Flee"],
      "button func" :[],
      text: "You have encounter an Enemy in the Wild."
    },
    {
      name: "Cave",
      "button text": ["Skills","Dodge","Observe","Flee"],
      "button func" :[],
      text: "You have encounter an Enemy in the Cave."
    },
    {
      name: "Store",
      "button text": ["Buy Weapon","Buy Skills","Sell","Guild"],
      "button func" :[],
      text: "Welcome to the Store. Find anything fancy?"
    }
];