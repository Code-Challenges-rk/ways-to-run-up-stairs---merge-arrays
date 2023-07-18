function merge(nums1, m, nums2, n) {
  // Remove the extra 0s at the end of nums1
  nums1.splice(m);

  // Merge nums2 into nums1
  nums1.push(...nums2);

  // Sort nums1 in non-decreasing order
  nums1.sort((a, b) => a - b);
}

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

merge(nums1, m, nums2, n);
console.log(nums1);

// The function merge takes the same parameters as before: nums1 (the array to merge into), m (the number of elements in nums1), nums2 (the array to merge from), and n (the number of elements in nums2).

// First, we remove the extra 0s from the end of nums1 using the splice method. Since nums1 has a length of m + n, we can safely remove the elements starting from the index m to eliminate the trailing 0s.

// Next, we merge nums2 into nums1 using the push method and the spread operator (...). This appends all elements from nums2 to the end of nums1.

// Finally, we sort nums1 in non-decreasing order using the sort method with a comparison function (a, b) => a - b.

// The nums1 array is modified in-place, and the elements from nums2 are merged into it in non-decreasing order.

// This alternative solution is simpler to implement, but it has a higher time complexity of O((m + n) log(m + n)) due to the sorting operation using sort. In practice, this solution is suitable when the size of the arrays is relatively small or when the simplicity of the implementation is prioritized over performance.
