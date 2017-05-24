/**
 * Created by kylecameron on 5/23/17.
 */

// Chapter 1 - Arrays and Strings

// 1.1
const isUnique = str => {
  let obj = {}
  for(let i=0; i<str.length; i++) {
    if(obj[str[i]]) return false
    else obj[str[i]] = true
  }
  return true
}

console.log('1.1 Tests')
console.log(isUnique('helo') === true)
console.log(isUnique('abcd') === true)
console.log(isUnique('aabb') === false)

// 1.2
const checkPermutation = (str1, str2) => {
  let a = str1.split(''), b = str2.split('')
  let idx = 0, flag = true
  while(idx < a.length && flag) {
    let temp = idx
    for(let i=0; i<b.length; i++) {
      if(a[idx] == b[i]) {
        idx++
        b.splice(i,1)
      }
    }
    if(temp === idx) {
      flag = false
    }
  }
  return !b.length && flag ? true : false
}

console.log('\n1.2 Tests')
console.log(checkPermutation('abcd','dcba') === true)
console.log(checkPermutation('abcd','dcbaa') === false)
console.log(checkPermutation('abcd','bcde') === false)

// 1.3
const Urlify = (str1) => {
  return str1.replace(/ /ig,'%20')
}

console.log('\n1.3 Tests')
console.log(Urlify('abcd') === 'abcd')
console.log(Urlify('ab cd') === 'ab%20cd')
console.log(Urlify('a b c d') === 'a%20b%20c%20d')

// 1.4
const PalindromePermutation = (str1) => {
  let arr = str1.replace(/ /ig,'').split('')
  let obj = {}
  arr.forEach(e => obj[e] ? obj[e]++ : obj[e] = 1)
  let num = Object.values(obj).reduce((a,b) => b % 2 ? a + 1 : a + 0,0)
  return num === 1 || num === 0
}

console.log('\n1.4 Tests')
console.log(PalindromePermutation('abcba') === true)
console.log(PalindromePermutation('aabbc') === true)
console.log(PalindromePermutation('aabbcc') === true)

// 1.5
const OneAway = (str1, str2) => {
//insert, remove, or replace a character; check if two strings are one edit away from each other
  let editCount = 0
  if(str1.length === str2.length) {
    for(let i=0; i<str1.length; i++) {
      if(str1[i] !== str2[i]) editCount++
    }
  } else if(str1.length < str2.length) {
    for(let i=0; i<str2.length; i++) {
      if(str1[i-editCount] !== str2[i]) editCount++
    }
  } else {
    for(let i=0; i<str1.length; i++) {
      if(str2[i-editCount] !== str1[i]) editCount++
    }
  }
  return editCount === 1
}

console.log('\n1.5 Tests')
console.log(OneAway('abcd','abcd') === false)
console.log(OneAway('abcd','accd') === true)
console.log(OneAway('abcd','accc') === false)
console.log(OneAway('abcd','bcd') === true)
console.log(OneAway('abcd','cd') === false)
console.log(OneAway('abcd','bcd') === true)
console.log(OneAway('bcd','abcd') === true)

// 1.6
const StringCompression = (str1) => {
  let str = ''
  let currentLetter = str1[0], currentCount = 1
  for(let i=1; i<str1.length; i++){
    if(str1[i] !== currentLetter) {
      str += currentLetter + currentCount
      currentLetter = str1[i]
      currentCount = 1
    } else {
      currentCount++
    }
  }
  str += currentLetter + currentCount
  return str.length < str1.length ? str : str1
}

console.log('\n1.6 Tests')
console.log(StringCompression('aabcccccd') === 'a2b1c5d1')
console.log(StringCompression('aabcccccaaa') === 'a2b1c5a3')
console.log(StringCompression('abcd') === 'abcd')

// 1.7
const RotateMatrix = (matrix) => {
  let temp; obj = {}
  for(let i=0; i<matrix.length; i++) {
    for(let j=0; j<matrix.length; j++) {
      if(!obj[`${i}${j}`]) {
        temp = matrix[i][j]
        matrix[i][j] = matrix[j][i]
        matrix[j][i] = temp
        obj[`${i}${j}`] = true
        obj[`${j}${i}`] = true
      }
    }
  }
  matrix.map(e => e.reverse())
  return matrix
}

console.log('\n1.7 Tests')

let matrix1 = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
console.log(''+RotateMatrix(matrix1) ===  '7,4,1,8,5,2,9,6,3')

let matrix2 = [
  [1,2,3,4],
  [5,6,7,8],
  [9,10,11,12],
  [13,14,15,16]
]
console.log(''+RotateMatrix(matrix2) ===  '13,9,5,1,14,10,6,2,15,11,7,3,16,12,8,4')

// 1.8
const ZeroMatrix = (matrix) => {
  let positionArray = []
  for(let i=0; i<matrix.length; i++) {
    for(let j=0; j<matrix[i].length; j++) {
      if(matrix[i][j] === 0) positionArray.push([i,j])
    }
  }
  positionArray.forEach(position => {
    for(let k=0; k<matrix.length; k++) {
      matrix[k][position[1]] = 0
    }
    for(let l=0; l<matrix[0].length; l++) {
      matrix[position[0]][l] = 0
    }
  })
  return matrix
}

console.log('\n1.8 Tests')

let matrix3 = [
  [1,2,3,0],
  [4,5,6,3],
  [7,0,9,3]
]

console.log(''+ZeroMatrix(matrix3) === '0,0,0,0,4,0,6,0,0,0,0,0')

// 1.9
const StringRotation = (str1, str2, subStrMethod) => {
  str2 += str2
  return str1.subStrMethod(str2)
}
'abcd' 'bcda'
console.log('\n1.9 Tests')

// Chapter 2 - Linked Lists

// 2.1

// 2.2

// 2.3

// 2.4

// 2.5

// 2.6

// 2.7

// 2.8

// Chapter 3 - Stacks and Queues

// 3.1

// 3.2

// 3.3

// 3.4

// 3.5

// 3.6

// Chapter 4 - Trees and Graphs

// 4.1

// 4.2

// 4.3

// 4.4

// 4.5

// 4.6

// 4.7

// 4.8

// 4.9

// 4.10

// 4.11

// 4.12

// Chapter 5 - Bit Manipulation

// 5.1

// 5.2

// 5.3

// 5.4

// 5.5

// 5.6

// 5.7

// 5.8

// Chapter 6 - Math and Logic Puzzles

// 6.1

// 6.2

// 6.3

// 6.4

// 6.5

// 6.6

// 6.7

// 6.8

// 6.9

// 6.10

