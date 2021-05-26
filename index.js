// Return an array consisting of the largest number from each provided sub-array. 

function largestOfFour(arr) {
    let biggestNumberArray = []
    arr.forEach(smallArray => {
      let biggestNumber = smallArray[0]
      smallArray.forEach(number => {
        if (biggestNumber <= number){
          biggestNumber = number
        }
      })
      biggestNumberArray.push(biggestNumber)
    })
    return biggestNumberArray;
  }

  // 4 Sub-Arrays
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
  console.log(largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
  console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));
  console.log(largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
  console.log(largestOfFour([[4000, 5000, 1000, 3000], [13000, 27000, 18000, 26000], [32000, 35000, 37000, 39000], [1000000, 1001000, 857000, 1000]]));

  // 8 Sub-Arrays
  console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1], [17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]));
  console.log(largestOfFour([[-4, -5, -1, -3], [-13, -27, -18, -26], [-32, -35, -37, -39], [-1000, -1001, -857, -1], [-17, -23, -25, -12], [-25, -7, -34, -48], [-4, 10, -18, -21], [72, 3, 17, 10]]));
  console.log(largestOfFour([[4345, 52, 100000, 323452], [1312, 2742, 18423, 2665], [32234, 35634, 37867, 392346], [1000234, 100241, 82342357, 923423421], [1237, 243234, 22345756, 122345346], [25123123, 723412, 34234252, 48324235], [42342323, -10234234, 182342343, 21234234233], [-72, -3, -17, -10]]));
  console.log(largestOfFour([[1, 2, 3, 4], [5, 6, 6, 8], [9, 10, 11, 12], [13, 14, 15, 16], [17, 18, 19, 20], [-20, -19, -18, -17], [-16, -15, -14, -13], [-12, -11, -10, -9], [-8, -7, -6, -5], [-4, -3, -2, -1]]));