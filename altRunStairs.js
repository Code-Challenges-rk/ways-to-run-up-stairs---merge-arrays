function countWaysToRunUpStairs(n) {
  const dp = new Array(n + 1);
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
}

const numSteps = 4;
const ways = countWaysToRunUpStairs(numSteps);
console.log(`There are ${ways} ways to run up ${numSteps} steps.`);


// The function countWaysToRunUpStairs takes an integer n representing the number of steps in the staircase. It returns the total number of possible ways to run up the stairs.

// In this solution, we initialize an array dp with a length of n + 1. Each element dp[i] represents the number of possible ways to reach the ith step.

// We set the base cases dp[0] = 1 and dp[1] = 1 since there is only one way to reach the first two steps.

// Then, we iterate from i = 2 to n. At each step, we calculate dp[i] by summing up the number of ways to reach the previous two steps, dp[i - 1] and dp[i - 2]. This is the essence of dynamic programming, where we build the solution bottom-up by reusing the results of previous calculations.

// Finally, we return dp[n], which represents the total number of ways to reach the nth step.


// The dynamic programming solution avoids redundant calculations by storing and reusing the intermediate results. It provides an efficient approach to solve the problem for large values of n.