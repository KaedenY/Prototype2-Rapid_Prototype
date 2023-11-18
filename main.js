title = "Rally Racing";

description = `Don't crash`;

characters = [ 
  `
 lppl
  CC  
  pp
  pp
 lppl  
  `,
  `
  pp
 pppp 
lpLLpl
ll  ll
  `,
  `
  GG  
  gg
 gggg
gggggg
  ll 
  ll
  ` 
];

options = {
  isPlayingBgm: true,
  isReplayEnabled: true,
  seed: 34,
};

let randomrock;
let rocks;
let nextRock;
let pos;
let rockPos;
let carpos;

function update() {
	score += 1;
	if (!ticks) {
    //Starting location of car
    pos = vec(50, 75);
    carpos = vec(50, 75);
    nextRock = 100;
    rocks = [];
    randomrock = [];
  }
  //Rectangle for horizon
color("black");
rect(0, 40, 200, 1);

//Reactangle for sky
color("light_blue");
rect(0, 0, 200, 40);

//Rectangle for offroad
color("green")
rect(0, 41, 200, 5);

//Color black sets the character colors back to normal
color("black")

//Constantly "slows" car
pos.y += clamp(pos.y, 0.075, 0.15);

//Clamp prevents the car from leaving the sides of the screen
pos.x = clamp(input.pos.x, 2, 98);
  
  if(score % nextRock == 0) {
    rocks.push({
      pos: vec(input.pos.x, 45),
      color: "black"
    })
    randomrock.push({
      pos: vec(rnd(2,98), 45),
      color: "black"
    })
  }
  if(score % 500 == 0){
    nextRock -= 10; 
  }
  //Car creation Char
  char("a", pos.x, pos.y)

  //Spawns rocks on random x vector
  randomrock.forEach((u) => {
    u.pos.y += 0.5;
    color("black");
    box(u.pos, 10); 
  
    let guh = box(u.pos, 10, 10).isColliding.char.a;
    if(guh){
      end();
      play("explosion");
    }
  });

  //Spawns rocks infront of player
  rocks.forEach((u) => {
    u.pos.y += 0.5;
    color("black");
    box(u.pos, 10); 
  
    let guh = box(u.pos, 10, 10).isColliding.char.a;
    if(guh){
      end();
      play("explosion");
    }
  });

  //This accelerates the car forward
  if(input.isPressed){
    pos.y += (carpos.y, 0, -0.8);
  }
  //Trees on left side
  color("black")
  char("c", 3, 50)
  char("c", 3, 57)
  char("c", 3, 64)
  char("c", 3, 71)
  char("c", 3, 78)
  char("c", 3, 85)
  char("c", 3, 92)
  char("c", 3, 99)
  //Trees on right side
  char("c", 97, 50)
  char("c", 97, 57)
  char("c", 97, 64)
  char("c", 97, 71)
  char("c", 97, 78)
  char("c", 97, 85)
  char("c", 97, 92)
  char("c", 97, 99)
  //Trees on horizon
  char("c", 3, 37)
  char("c", 97, 37)
  char("c", 10, 37)
  char("c", 90, 37)
  char("c", 17, 37)
  char("c", 83, 37)

  //Determines if car is too low, or has crossed the horizon
  if(pos.y > 97 || pos.y < 42 || pos.x <6 || pos.x > 94){
    end();
    play("explosion");
  }
}