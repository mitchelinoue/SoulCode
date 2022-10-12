// Object
function fooBar(value) {
    this.value = value;
}

// Loop
var len = arr.length;
for (var i = 0; i < len; i++) {
    var objectName = object + i;
    var objectName = new fooBar(arr[i]);

var objs = new Array();

for(var i = 0; i < len; i++) {
  objs[i] = new fooBar(arr[i]);
}

alert(objs[0].value)