var a = prompt("введіть число від 1 до 3?")
switch (a) {
  case '1':
    alert( 'Один' );

  case '2':
    alert( 'Два' );
    break;

  case 3:
    alert( 'Три' );

  default:
    alert('Число завелике: ' + a)
}

var i;

for (i = 0; i < 5; i++) {
  alert( i );
}

var numbers = [1,2,3,4,5];
for (var i = 0; i < numbers.length; i++) {
  alert(numbers[i])
}


var arr = [ "4", 4, "test", false, [0,1] ]
alert(arr[1]) 
alert(arr[2]) 
alert(arr[3]) 
alert(arr[4]) 
