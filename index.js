// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO

var a = '[a, b, c, d]'; <----No
var b = [1, 2, 3, 4]; <----Yes



// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]

var Numbers = [1, 2, 3, 4, 5];
for(var i=0; i<Numbers.length; i++) {
	//Let's take the constant factor as 2
	Numbers[i] = Numbers[i] * 2;
}
console.log(Numbers);




// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'

console.log(colors.join(" ")); //case 1
console.log(colors.join("+")); //case 2
console.log(colors.join()); //case 3




// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]

var a = [5, 1, 8, 10, 4];

a.sort(function(a,b){ 
  return b - a;
});

console.log(a)




// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'

var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];

function mode(a)
{
    if(a.length == 0)
        return null;
    var modeMap = {};
    var max = a[0], maxCount = 1;
    for(var i = 0; i < a.length; i++)
    {
        var el = a[i];
        if(modeMap[el] == null)
            modeMap[el] = 1;
        else
            modeMap[el]++;  
        if(modeMap[el] > maxCount)
        {
            max = el;
            maxCount = modeMap[el];
        }
    }
    return max;
}

console.log(mode(a))


