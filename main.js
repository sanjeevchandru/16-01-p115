document.write("79.to test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2."+"<br>");
function test79(arr){
    return (arr[0]==30 && arr[1]==30)||(arr[0]==40 && arr[1]==40)
}
document.write("the array :[30,30] ,ans :"+test79([30,30])+"<br>");
document.write("the array :[40,40] ,ans :"+test79([40,40])+"<br>");
document.write("the array :[30,40] ,ans :"+test79([30,40])+"<br><br>");