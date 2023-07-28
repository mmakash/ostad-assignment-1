// problem 4
function calculateGrade(score) {
  let grade;
  switch (true) {
    case score >= 90:
      grade = "A";
      break;
    case score >= 80 && score < 90:
      grade = "B";
    case score >= 70 && score < 80:
      grade = "C";
      break;
    case score >= 60 && score < 70:
      grade = "D";
      break;
    default:
      grade = "F";
  }
  return grade;
}
console.log(calculateGrade(90));
