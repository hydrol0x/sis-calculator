export function gradeCalc(gradeArray) {
  let gradeData = {};

  if (!gradeArray || gradeArray.length == 0) {
    return;
  }

  gradeArray.forEach((grade) => {
    console.log([
      grade.assignmentName,
      grade.points,
      grade.totalPoints,
      grade.category,
      grade.weight,
    ]);

    const points = grade.points;
    const totalPoints = grade.totalPoints;
    const categoryName = grade.category[0];
    const category = grade.category[1];
    const weight = category / 100;

    if (!(categoryName in gradeData)) {
      gradeData[categoryName] = [points, totalPoints, weight];
    } else {
      let entry = gradeData[categoryName];
      entry[0] += points;
      entry[1] += totalPoints;
    }
  });

  let totalGrade = 0;

  let weightSum = 0;
  console.log(gradeData);
  for (const [key, value] of Object.entries(gradeData)) {
    const points = value[0];
    const totalPoints = Math.max(value[1], 1);
    const weight = value[2];

    let categoryGradePercentage = points / totalPoints;

    // console.log("categorygradepercentage " + categoryGradePercentage);
    let weightedGrade = categoryGradePercentage * weight;
    console.log([points, totalPoints, weight, weightedGrade]);
    // console.log("weightedGrade " + weightedGrade);
    totalGrade += weightedGrade;
    weightSum += weight;
  }

  console.log("totalGrade " + totalGrade);
  console.log("weightSum " + weightSum);
  return totalGrade / weightSum;
}
