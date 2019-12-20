//Module Exercise: Mars Rover Kata by Alex Panko

//My rovers landed on Mars and facing North
let myRover = {
    name: "Kata",
    direction: "N", //north
    x:0, 
    y:0,
    travelLog: [{x:0,y:0}] 
}

let rover2 = {
    name: "Apollo",
    direction: "N", //north
    x:9, 
    y:9,
    travelLog: [{x:9,y:9}] 
}


//Turn rover left
function turnLeft(rover){
  switch(rover.direction){
      case "N": // north > west
        //console.log(`Rover is facing North and turns left => Rover is now facing West`);
        rover.direction = "W";
        break;
      case "W": // west > south
        //console.log(`Rover is facing West and turns left => Rover is now facing South`);
        rover.direction = "S";
        break;  
      case "S": // south > east
        //console.log(`Rover is facing South and turns left => Rover is now facing East`);
        rover.direction = "E";
        break; 
      case "E": // east > north
        //console.log(`Rover is facing East and turns left => Rover is now facing North`);
        rover.direction = "N";  
        break;
  }  
}

//Turn rover rigth
function turnRight(rover){
  switch(rover.direction){
      case "N": // north > west
        //console.log(`Rover is facing North and turns right => Rover is now facing East`);
        rover.direction = "E";  
        break;
      case "E": // west > south
        //console.log(`Rover is facing East and turns right => Rover is now facing South`);
       rover.direction = "S";  
       break;  
      case "S": // south > east
        //console.log(`Rover is facing South and turns right => Rover is now facing West`);
        rover.direction = "W";
        break; 
      case "W": // east > north
        //console.log(`Rover is facing West and turns right => Rover is now facing North`);
        rover.direction = "N";
        break;
  }  
}


//TO TEST TURN FUNCTIONS
//console.log(`My rover direction is ${myRover.direction}`)
//turnLeft(myRover)
//turnRight(myRover)
//console.log(`My rover NEW direction is ${myRover.direction}`)

// Move rover forward
function moveForward(rover){  
  //console.log(`My rover has position: x=${myRover.x}, y=${myRover.y}`);
  if (rover.direction === "W"){
    rover.x--; 
    } else if (rover.direction === "E"){
    rover.x++;
    } else if (rover.direction === "N"){
    rover.y--;
    } else {
    rover.y++;
    }
  //console.log(`My rover is moving forward and has NEW position: x=${rover.x}, y=${rover.y}`)
  let newPosition = {x: rover.x, y: rover.y};
  rover.travelLog.push(newPosition);
}

//TO TEST MOVE FORWARD FUNCTION
//moveForward(myRover)

//Move rover backward
function moveBackward(rover){  
  //console.log(`My rover has position: x=${myRover.x}, y=${myRover.y}`);
  if (rover.direction === "W"){
    rover.x++; 
    } else if (rover.direction === "E"){
    rover.x--;
    } else if (rover.direction === "N"){
    rover.y++;
    } else {
    rover.y--;
    }
  //console.log(`My rover is moving backward and has NEW position: x=${rover.x}, y=${rover.y}`)
  let newPosition = {x: rover.x, y: rover.y};
  rover.travelLog.push(newPosition);
}


//Move rover with commands
function movingRover(rover, orders){
  let rov1 = myRover;
  let rov2 = rover2;
  for (let i = 0; i < orders.length; i++){
  let order = orders[i];
    
    //code to prevent rover moving off the grid
    if ((order==="f" && ((rover.x===0 && rover.direction==="W") || (rover.x===9 && rover.direction==="E") || (rover.y===0 && rover.direction==="N") || (rover.y===9 && rover.direction==="S"))) || (order==="b" && ((rover.x===0 && rover.direction==="E") || (rover.x===9 && rover.direction==="W") || (rover.y===0 && rover.direction==="S") || (rover.y===9 && rover.direction==="N")))){
    console.log(`Rover ${rover.name}: Warning! You can't move the rover off the grid!`);
    break;  
    }
    
    //to prevent rover hit the obstacle
    if(  
      (order==="f" && rover.direction==="E" && rover.x===6 && rover.y===0) ||
      (order==="f" && rover.direction==="E" && rover.x===6 && rover.y===1) ||
      (order==="f" && rover.direction==="E" && rover.x===6 && rover.y===2) ||
      (order==="f" && rover.direction==="E" && rover.x===2 && rover.y===4) ||
      (order==="f" && rover.direction==="E" && rover.x===2 && rover.y===5) ||
      (order==="f" && rover.direction==="E" && rover.x===2 && rover.y===6) ||
      (order==="f" && rover.direction==="W" && rover.x===8 && rover.y===0) ||
      (order==="f" && rover.direction==="W" && rover.x===8 && rover.y===1) ||
      (order==="f" && rover.direction==="W" && rover.x===8 && rover.y===2) ||
      (order==="f" && rover.direction==="W" && rover.x===5 && rover.y===4) ||
      (order==="f" && rover.direction==="W" && rover.x===5 && rover.y===5) ||
      (order==="f" && rover.direction==="W" && rover.x===5 && rover.y===6) ||
      (order==="f" && rover.direction==="N" && rover.x===7 && rover.y===3) ||
      (order==="f" && rover.direction==="N" && rover.x===3 && rover.y===7) ||
      (order==="f" && rover.direction==="N" && rover.x===4 && rover.y===7) ||
      (order==="f" && rover.direction==="S" && rover.x===3 && rover.y===3) ||
      (order==="f" && rover.direction==="S" && rover.x===4 && rover.y===3)   
      ||
      (order==="b" && rover.direction==="W" && rover.x===6 && rover.y===0) ||
      (order==="b" && rover.direction==="W" && rover.x===6 && rover.y===1) ||
      (order==="b" && rover.direction==="W" && rover.x===6 && rover.y===2) ||
      (order==="b" && rover.direction==="W" && rover.x===2 && rover.y===4) ||
      (order==="b" && rover.direction==="W" && rover.x===2 && rover.y===5) ||
      (order==="b" && rover.direction==="W" && rover.x===2 && rover.y===6) ||
      (order==="b" && rover.direction==="E" && rover.x===8 && rover.y===0) ||
      (order==="b" && rover.direction==="E" && rover.x===8 && rover.y===1) ||
      (order==="b" && rover.direction==="E" && rover.x===8 && rover.y===2) ||
      (order==="b" && rover.direction==="E" && rover.x===5 && rover.y===4) ||
      (order==="b" && rover.direction==="E" && rover.x===5 && rover.y===5) ||
      (order==="b" && rover.direction==="E" && rover.x===5 && rover.y===6) ||
      (order==="b" && rover.direction==="S" && rover.x===7 && rover.y===3) ||
      (order==="b" && rover.direction==="S" && rover.x===3 && rover.y===7) ||
      (order==="b" && rover.direction==="S" && rover.x===4 && rover.y===7) ||
      (order==="b" && rover.direction==="N" && rover.x===3 && rover.y===3) ||
      (order==="b" && rover.direction==="N" && rover.x===4 && rover.y===3)  
      ){
    console.log(`Rover ${rover.name}: Warning! You found an obstacle!`);
    break;  
    }
    
    //to prevent one rover to run into the other
    if (  
      (order==="f" && rov1.direction==="E" && rov1.x===(rov2.x-1) && rov1.y===rov2.y) ||
      (order==="f" && rov1.direction==="W" && rov1.x===(rov2.x+1) && rov1.y===rov2.y) ||
      (order==="f" && rov1.direction==="N" && rov1.x===rov2.x && rov1.y===(rov2.y+1)) ||
      (order==="f" && rov1.direction==="S" && rov1.x===rov2.x && rov1.y===(rov2.y-1)) ||
      
      (order==="f" && rov2.direction==="E" && rov2.x===(rov1.x-1) && rov2.y===rov1.y) ||
      (order==="f" && rov2.direction==="W" && rov2.x===(rov1.x+1) && rov2.y===rov1.y) ||
      (order==="f" && rov2.direction==="N" && rov2.x===rov1.x && rov2.y===(rov1.y+1)) ||
      (order==="f" && rov2.direction==="S" && rov2.x===rov1.x && rov2.y===(rov1.y-1)) ||
      
      (order==="b" && rov1.direction==="W" && rov1.x===(rov2.x-1) && rov1.y===rov2.y) ||
      (order==="b" && rov1.direction==="E" && rov1.x===(rov2.x+1) && rov1.y===rov2.y) ||
      (order==="b" && rov1.direction==="S" && rov1.x===rov2.x && rov1.y===(rov2.y+1)) ||
      (order==="b" && rov1.direction==="N" && rov1.x===rov2.x && rov1.y===(rov2.y-1)) ||
      
      (order==="b" && rov2.direction==="W" && rov2.x===(rov1.x-1) && rov2.y===rov1.y) ||
      (order==="b" && rov2.direction==="E" && rov2.x===(rov1.x+1) && rov2.y===rov1.y) ||
      (order==="b" && rov2.direction==="S" && rov2.x===rov1.x && rov2.y===(rov1.y+1)) ||
      (order==="b" && rov2.direction==="N" && rov2.x===rov1.x && rov2.y===(rov1.y-1))
      ){
    console.log(`Rover ${rover.name}: UPS`);
    break;  
    }
    
    //code to move rover
    switch(order){
      case "f": // move forward
        moveForward(rover);
        break;
      case "b": // move backward
        moveBackward(rover);
        break;  
      case "r": // turn right
        turnRight(rover);
        break;  
      case "l": // turn left
        turnLeft(rover);
        break;
       default: // wrong command
        break;  
    }
  }
 
  //code to update and print travelLog
  for(let j=0; j< rover.travelLog.length; j++){
  console.log(`Rover ${rover.name}: Travel log ${j} ==> x=${rover.travelLog[j].x}, y=${rover.travelLog[j].y}`)
  }
  console.log(`Rover ${rover.name}: Rover is facing ==> ${rover.direction}`)
}


//code to validate the input - only f/b/r/l are alowed!
function validateOrders(rover, orders){
  
  for (let i = 0; i < orders.length; i++){
  let order = orders[i];
  if (order!=="f" && order!=="b" && order!=="r" && order!=="l"){
    return true;
    break;
    } 
  }  
}  

//To validate move orders
function moveRover(rover, orders){
  
  roverStartPosition(rover)
  
  for (let i = 0; i < orders.length; i++){
  let order = orders[i];
  
  if (validateOrders(rover, orders) === true) {
    console.log(`Rover ${rover.name}: Wrong command! Use only the folowing commands: f - forward; b - backwards; r - right; l - left.`);
    break;
  } else {
    movingRover(rover, orders);
    roverNewPosition(rover)
    break;
  }
  }
}

//create a grid, where K - rover Kata, o - Obstacles
function roverStartPosition(){
let marsLlandscape = [ 
  [' ',' ',' ',' ',' ',' ',' ','o',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ','o',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ','o',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ','o','o',' ',' ',' ',' ',' '],
  [' ',' ',' ','o','o',' ',' ',' ',' ',' '],
  [' ',' ',' ','o','o',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '] ];

marsLlandscape[myRover.y][myRover.x] = 'K';
marsLlandscape[rover2.y][rover2.x] = 'A';
console.log(`Rover Kata position - K. Rover Apollo position - A. Be aware of obstacles - O`);  
console.log('\n' + marsLlandscape.join('\n') + '\n');
}

//create a grid with a new rover position
function roverNewPosition(rover){
let marsLlandscapeNew = [ 
  [' ',' ',' ',' ',' ',' ',' ','o',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ','o',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ','o',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ','o','o',' ',' ',' ',' ',' '],
  [' ',' ',' ','o','o',' ',' ',' ',' ',' '],
  [' ',' ',' ','o','o',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '] ];

marsLlandscapeNew[myRover.y][myRover.x] = 'K';
marsLlandscapeNew[rover2.y][rover2.x] = 'A';
console.log(`Rover ${rover.name}: Rover's NEW position`); 
console.log('\n' + marsLlandscapeNew.join('\n') + '\n');
}


/*
>>>>>PLAY THE GAME<<<<<
Rover Kata and rover Apollo landed on Mars. Navigate the rovers and see their positions on the grid.
You can have them take turns moving by using the following command: moveRover(rover*,orders**)
Where: 
* myRover is rover Kata and rover2 is rover Apollo. 
** l - left, r - rigth, f - forward, b - backward

Start positions and the grid: both rovers facing North
K - rover Kata
A - rover Apollo
o - obstacles
K _ _ _ _ _ _ o _ _
_ _ _ _ _ _ _ o _ _
_ _ _ _ _ _ _ o _ _
_ _ _ _ _ _ _ _ _ _
_ _ _ o o _ _ _ _ _
_ _ _ o o _ _ _ _ _
_ _ _ o o _ _ _ _ _
_ _ _ _ _ _ _ _ _ _
_ _ _ _ _ _ _ _ _ _
_ _ _ _ _ _ _ _ _ A

Example of how you can play:
moveRover(myRover, "rff") -> move rover Kata and see what's happening, then move rover Apollo
moveRover(rover2, "ffrf") -> see what's happening and then move rover Kata again, etc.
*/

moveRover(myRover, "rfflb")
moveRover(rover2, "ffrb")



