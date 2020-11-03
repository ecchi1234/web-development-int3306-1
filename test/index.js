function Writing(c) {
    var content = c;
    this.getContent = function () {
        return content;
    }
}

function Post(c, d) {
    Writing.apply(this, [c]);
    console.log(this);
    var date = d;
    this.toString = function () {
        return this.getContent() + ", " + date;
    }
}

// var p = new Post("post bla bla", new Date());
// console.log(p.toString());

// var a = 3;
// var b = 2;
// var c = a;
// a=b=c=1;
// console.log(a);

// var Employee = {
//     firstname: "Mohamed",
//     lastname: "Haddad"
// }

// delete Employee.firstname;

// console.log(Employee.firstname);

function a() {
    function b(x, y) {
        return x + y;
    }

    this.c = function (x, y) {
        return b(x, y);
    }
}

// var test = new a();
// console.log(test.c(1, 2));
// console.log(test.c(3, 4));

// function tail(o) {
//     for (;o.next;o = o.next);
//     return o;
// }

// tail()

// function x() {
//     function y() {
//         console.log("x y");
//     }
// }

// x();

// var a = ["Hoàng", "M", new Date("1998-3-18"), [5, 9, 7]];
// a[100] = "CLC";
// document.write(a.length);
// document.write(a[1]);
// a[1] = 'F';
// document.write(a[1]);
// document.write(a[2]);

// var person = {
//     fullname: "John", sayHello: function () {
//         document.write(this.fullname + " says hello!");
//     }
// };
// person.sayHello();
// person.dob = "22/2/2012";
// console.log(person)
// delete person.fullname;

var a = {
    p: 1
};

console.log(a.toString());

var b = Object.create(a);

console.log(b.p);

console.log(Object.getPrototypeOf(a));

console.log(parseFloat("345.9"));