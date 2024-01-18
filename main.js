function processScores(scores) {
    if (scores.length === 0) {
      return {
        average: 0,
        highestScore: null,
        differences: [],
      };
    }
  
    // 1. Double the scores of all students
    const doubledScores = scores.map(score => score * 2);
  
    // 2. Filter out scores that are less than 50
    const filteredScores = doubledScores.filter(score => score >= 50);
  
    // 3. Calculate the average of the remaining scores
    const sum = filteredScores.reduce((acc, score) => acc + score, 0);
    const average = sum / filteredScores.length;
  
    // 4. Find the highest score among the remaining scores
    const highestScore = Math.max(...filteredScores);
  
    // 5. For each remaining score, calculate the difference between the highest score and that score
    const differences = filteredScores.map(score => highestScore - score);
  
    // 6. Return an object containing the average, highest score, and an array of differences
    return {
      average,
      highestScore,
      differences,
    };
  }
  
  // Test the function with various inputs
  console.log(processScores([30, 40, 60, 70])); // Example with valid scores
  console.log(processScores([25, 35, 45])); // Example with scores below 50
  console.log(processScores([])); // Example with an empty array
  