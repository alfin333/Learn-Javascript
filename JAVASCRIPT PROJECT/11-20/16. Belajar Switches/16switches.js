//  switch = statement that examines value
//  for a match against many case clauses,
//  more efficient that many "else if" statements

let grade = `D`;

switch (grade) {
    case "A":
        console.log("You did Great!");
        break;
    case "B":
        console.log("You did Good!");
        break;
    case "C":
        console.log("You did okay");
        break;
    case "D":
        console.log("You passed ... barely");
        break;
    case "E":
        console.log("You FAILED!");
        break;
    default:
        console.log(grade, `is not a letter grade!`)
}

let gradeNumber = -1;
switch (true) {
    case gradeNumber >= 90:
        console.log("You did Great!");
        break;
    case gradeNumber >= 80:
        console.log("You did Good!");
        break;
    case gradeNumber >= 70:
        console.log("You did okay");
        break;
    case gradeNumber >= 60:
        console.log("You passed ... barely");
        break;
    case gradeNumber >= 0:
        console.log("You FAILED!");
        break;
    case gradeNumber < 0:
        console.log("There is no minus grade!");
        break;
    default:
        console.log(gradeNumber, `is not a number grade!`)
}