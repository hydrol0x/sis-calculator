function parseCSVToJSON(csv) {
  // Split the CSV by lines
  const lines = csv.trim().split("\n");

  // Extract the header
  const headers = lines[0]
    .split(",")
    .map((header) => header.replace(/(^"|"$)/g, ""));

  // Initialize an array to hold the JSON objects
  const result = [];

  // Process each line after the header
  for (let i = 1; i < lines.length; i++) {
    // Split the line by commas and handle potential extra quotes or commas
    let row = lines[i]
      .split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/)
      .map((field) => field.replace(/(^"|"$)/g, ""));

    // Create an object for this row
    const obj = {};
    headers.forEach((header, index) => {
      obj[header] = row[index] || "";
    });

    // Add the object to the result array
    result.push(obj);
  }

  return result;
}

// Example usage
const csvData = `"Year","School","Pd","Rot","Course #","Course","Teacher","Flags","Ex","Unx","Tardy","Q1","Q2","S1 Exam","S1","Q3","Q4","S2 Exam","S2","TR1","STR3","STR1","TR2","STR2","TR3","FY Exam","FY","Credits"
"2024-2025","SUNCOAST COMMUNITY HIGH SCHOOL",="01","A","1700510","AP CAPSTONE RESEARCH","Morton, C","H","0","0","0","100% A","","","","","","","","","","","","","","","","0"
"2024-2025","SUNCOAST COMMUNITY HIGH SCHOOL",="03","A","2107350","ADV PL PSYCH","Spencer, D","H","0","0","0","100% A","","","","","","","","","","","","","","","","0"
// Add the rest of your CSV data here
`;

console.log(parseCSVToJSON(csvData));
