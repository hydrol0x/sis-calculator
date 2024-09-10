export function gradeCalc(gradeArray) {
  if (!gradeArray || gradeArray.length == 0) {
    return;
  }

  let totalGrade = 0;
  gradeArray.forEach((grade) => {
    // console.log([
    //   grade.assignmentName,
    //   grade.points,
    //   grade.totalPoints,
    //   grade.category,
    //   grade.weight,
    // ]);

    const points = grade.points;
    const totalPoints = grade.totalPoints;
    const category = grade.category[1];
    const weight = category / 100;

    const assignmentGradePercentage = points / Math.max(1, totalPoints);

    totalGrade += assignmentGradePercentage * weight;
  });

  return totalGrade;
}
