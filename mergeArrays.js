function merge(nums1, m, nums2, n) {
  let i = m - 1; // Last index of nums1
  let j = n - 1; // Last index of nums2
  let k = m + n - 1; // Last index of merged array

  // Compare elements from both arrays and place them in the appropriate positions
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[k] = nums1[i];
      i--;
    } else {
      nums1[k] = nums2[j];
      j--;
    }
    k--;
  }

  // Place any remaining elements from nums2 into nums1
  while (j >= 0) {
    nums1[k] = nums2[j];
    j--;
    k--;
  }
}

const nums1 = [1, 2, 3, 0, 0, 0];
const m = 3;
const nums2 = [2, 5, 6];
const n = 3;

merge(nums1, m, nums2, n);
console.log(nums1);

//   The function merge takes four parameters: nums1 (the array to merge into), m (the number of elements in nums1), nums2 (the array to merge from), and n (the number of elements in nums2).

// We initialize three pointers: i, j, and k. i represents the last index of the non-zero elements in nums1, j represents the last index of nums2, and k represents the last index of the merged array.

// We compare the elements at nums1[i] and nums2[j] and place the larger element at nums1[k]. We decrement the respective pointers (i, j, and k) and repeat the process until either nums1 or nums2 is completely merged.

// After the first loop, if there are any remaining elements in nums2, we place them into nums1 starting from the k index.
// The nums1 array is modified in-place, and the elements from nums2 are merged into it in non-decreasing order.

// This solution has a time complexity of O(m + n) since we iterate through both nums1 and nums2 exactly once.
