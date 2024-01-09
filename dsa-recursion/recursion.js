/** product: calculate the product of an array of numbers. */

function product(nums, start=0) {
  if(start === nums.length) return 1

  return nums[start] * product(nums, start + 1)

}

console.log(product([1,2,3,4]))

/** longest: return the length of the longest word in an array of words. */

function longest(words, max_word="") {
  if (words.length === 0){
    return max_word.length
  }
  let current_word = words.pop()
  if(current_word.length > max_word.length){
    max_word = current_word
  }
  return longest(words, max_word)
  
  
}
console.log(longest(["abc","xyxz","yui"]))

/** everyOther: return a string with every other letter. */
function everyOther(str, start=0) {

  if(start >= str.length) return ""
  return str[start] + everyOther(str, start + 2)
}
console.log(everyOther("abcdefg"))

/** isPalindrome: checks whether a string is a palindrome or not. */

function isPalindrome(str) {

  function clean(str){
    let cleaninput = []
    for(let elem of str){
      cleaninput.push(elem.toLowerCase())
      
    }
    return cleaninput.join('')
  }
  function checkPallindrome(input){

    if(input.length <= 1) return true

    return input[0] === input[input.length - 1] && checkPallindrome(input.slice(1,-1))
  }

  let input = clean(str)
  
  return checkPallindrome(input)
}

console.log(isPalindrome("hayah"))

/** findIndex: return the index of val in arr (or -1 if val is not present). */

function findIndex(arr, val, start=0) {
  if(start >= arr.length) return -1
  if(arr[start] === val){
    return start 
  }
  return findIndex(arr,val,start+1)

}

console.log(findIndex([1,2,3,4,5],4))

/** revString: return a copy of a string, but in reverse. */


function revString(str) {
  if (str === "") {
      return "";  
  } else {
      const lastChar = str.slice(-1);  // get the last character
      const restOfString = str.slice(0, -1);  // get the rest of the string except the last character
      return lastChar + revString(restOfString);  // concatenate the last character with the reversed rest of the string
  }
}

// Example usage:
const originalString = "Hello, World!";
const reversedString = revString(originalString);

console.log("Original String:", originalString);
console.log("Reversed String:", reversedString);


/** gatherStrings: given an object, return an array of all of the string values. */

function gatherStrings(obj) {
  let result = []
  
  for(let key in obj){
    if(typeof(obj[key]) === "string"){
      result.push(obj[key])
    }
    else if(typeof(obj[key]) === "object"){
      return result = result.concat(gatherStrings(obj[key]))
    }
   
  }
  return result

}
const myObject = {
  name: "John",
  age: 30,
  address: {
      city: "New York",
      street: "123 Main St",
      zip: "10001"
  },
  hobbies: ["reading", "coding", "traveling"]
};

const stringValues = gatherStrings(myObject);
console.log("String Values:", stringValues);

/** binarySearch: given a sorted array of numbers, and a value,
 * return the index of that value (or -1 if val is not present). */

function binarySearch(arr, val, start=0, end=arr.length - 1) {

  if(start >= end) return -1

  let mid = start + Math.floor((end - start)/2)

  if(arr[mid] > val){
    return binarySearch(arr,val, start=0, end=mid - 1)
  }
  else if(arr[mid] < val){
    return binarySearch(arr,val, start=mid + 1, end)
  }
  else {
    return mid
  }

}

console.log(binarySearch([1,2,3,5],3))

module.exports = {
  product,
  longest,
  everyOther,
  isPalindrome,
  findIndex,
  revString,
  gatherStrings,
  binarySearch
};
