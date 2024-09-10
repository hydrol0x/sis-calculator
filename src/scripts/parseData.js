// TODO handle NG and just throw out the value then instead of 0
export function parseAssignments(data) {
  if (data.length == 0) {
    return;
  }

  // Extract the header row to find relevant indexes
  const headers = data[0];
  const assignmentIndex = headers.indexOf("Assignment");
  const pointsIndex = headers.indexOf("Points");
  const categoryIndex = headers.indexOf("Category");

  // Iterate over each row and map it to the desired object structure
  return data.slice(1).map((row) => {
    // Extract the points earned and total points from the Points column
    const [points, totalPoints] = row[pointsIndex]
      .replace(/[="* ]/g, "")
      .split("/");

    return {
      id: 0,
      assignmentName: row[assignmentIndex],
      points: parseFloat(points) || 0,
      totalPoints: parseFloat(totalPoints) || 0,
      category: [row[categoryIndex], 100], // TODO unhardcode category weight
    };
  });
}
