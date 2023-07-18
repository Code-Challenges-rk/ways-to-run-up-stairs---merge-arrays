function countWaysToRunUpStairs(n) {
  if (n === 0 || n === 1) {
    return 1;
  } else {
    return countWaysToRunUpStairs(n - 1) + countWaysToRunUpStairs(n - 2);
  }
}


// The function countWaysToRunUpStairs takes an integer n representing the number of steps in the staircase. It returns the total number of possible ways to run up the stairs.

// The base cases are when n is 0 or 1, in which there is only one way to run up the stairs (either not taking any step or taking one step).

// For any other value of n, the function recursively calls itself twice, considering both possibilities: taking one step and counting the ways to run up the remaining n - 1 steps, or taking two steps and counting the ways to run up the remaining n - 2 steps. The counts from these recursive calls are added together and returned as the final result.


// Please note that this implementation uses recursion and may not be efficient for large values of n due to the repeated calculations. You can optimize it using dynamic programming techniques to avoid redundant computations.