// var ball = create();
// var counter = 0;
// while (counter < 20) {
//     move(ball, 10, 10);
//     console.log(counter);
//     counter++; 
// }

var list = [];
list.push(create());
list.push(create());
list.push(create());
list.push(create());
list.push(create());

// console.log(list);

var i = 0;
length = list.length;
while(i<length) {
    console.log("i: ", i);
    var ball = list[i];
    colorRandom(ball);
    i++;
}