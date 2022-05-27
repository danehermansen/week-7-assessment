//1
function sumZero(arr) {
    let left_point = 0;
    if (arr[left_point] >= 0) {
        return undefined
    }
    let right_point = arr.length - 1;
    while (left_point < right_point) {
        if (arr[left_point] + arr[right_point] > 0){
            right_point -= 1;
        } else if ( arr[left_point] + arr[right_point] < 0) {
            left_point += 1;
        } else {
            return [arr[left_point], arr[right_point]]
        }
    }
}
// time complexity O(n), space complexity O(1)
//2
function unique_char(string) {
    var unique = '';
    var count = 0;
    for (var i = 0; i < string.length; i++) {
        for (var j = i+1; j < string.length; j++) {
            if (string[i] == string[j]) {
                count++;
                unique += string[i];
            }
        }
    }
    return unique;
}
// time complexity O(n), space complexity O(1)
//3
function isPangram(string){ 
    return /(?=.*a)(?=.*b)(?=.*c)(?=.*d)(?=.*e)(?=.*f)(?=.*g)(?=.*h)(?=.*i)(?=.*j)(?=.*k)(?=.*l)(?=.*m)(?=.*n)(?=.*o)(?=.*p)(?=.*q)(?=.*r)(?=.*s)(?=.*t)(?=.*u)(?=.*v)(?=.*w)(?=.*x)(?=.*y)(?=.*z)./i.test(string) 
 }
 //time complexity O(1), space complexity O(1)
 //4
 function longestStringForLoop(arr) {
    let word = "";
    for (let i = 0; i < arr.length; i++) {
      if (word.length < arr[i].length) {
        word = arr[i];
      }
    }
    return word;
  }
// time complexity O(n), space complexity O(n)