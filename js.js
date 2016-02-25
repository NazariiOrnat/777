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
    alert('Число завелике' + a)
}

var i;

for (i = 0; i < 5; i++) {
  alert( i );
}