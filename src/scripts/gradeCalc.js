export function gradeCalc(gradeArray) {
  let gradeData = {};

  if (!gradeArray || gradeArray.length == 0) {
    return;
  }

  gradeArray.forEach((grade) => {
    console.log(grade);

    const points = grade.points;
    const totalPoints = grade.totalPoints;
    const categoryName = grade.category[0];
    const category = grade.category[1];
    const weight = category / 100;

    if (!(categoryName in gradeData)) {
      gradeData.categoryName = [points, totalPoints, weight];
    } else {
      let entry = gradeData.categoryName;
      entry[0] += points;
      entry[1] += totalPoints;
    }
  });

  let totalGrade = 0;

  let weightSum = 0;
  for (const [key, value] of Object.entries(gradeData)) {
    const points = value[0];
    const totalPoints = value[1];
    const weight = value[2];

    let categoryGradePercentage = points / totalPoints;
    let weightedGrade = categoryGradePercentage * weight;
    totalGrade += weightedGrade;
    weightSum += weight;
  }

  return totalGrade / weightSum;
}
