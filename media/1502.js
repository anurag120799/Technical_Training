var myPhone= new Object();
myPhone.make="Apple";
myPhone.model="IPhone 6";
myPhone.colour="Golder";
myPhone.warrenty=12;
console.log(myPhone);
class phone {
    constructor(make, model, warrenty, colour) {

        this.make = make;
        this.model = model;
        this.colour = colour;
        this.extendedWarrenty = function (x) {
            this.warrenty += x;
        };
    }
    ring() {
        console.log("beep1 beep2 beep3 beep4");
    }
}
var myNewPhone = new phone("Samsung","Galaxy",12,"White");
console.log(myNewPhone);
myNewPhone.extendedWarrenty(14);
console.log(myNewPhone);
myNewPhone.condition = "going to add new lense for camera";
console.log(myNewPhone);
var myOtherphone = new phone("Apple","Iphone 6",12,"White");
console.log(myOtherphone);
myOtherphone.condition="Going to add New Sound Features";
console.log(myOtherphone);
phone.prototype.extendedWarrenty=function(x){
    this.warrenty +=x;
};
console.log(phone.prototype);
var x =1;
var y =1;
console.log(x==y);
var myPhone1={
    make:"Apple",
    model:"Iphone",
}
var myPhone2={
    make:"Apple",
    model:"Iphone",
}
console.log(myPhone1 == myPhone2);
var myPhone3 = myPhone1
console.log(myPhone3==myPhone1);
var namePrimitive1="SAM";
var namePrimitive2="SAM";
var nameObject1=new String("SAM");
var nameObject2=new String("SAM");
console.log(typeof namePrimitive1);
console.log(typeof namePrimitive2);
console.log(typeof nameObject1);
console.log(typeof nameObject2);
console.log(namePrimitive1==namePrimitive2);
console.log(namePrimitive1==nameObject1);
var myString1="Java Script";
var myString2="this is dynamic programming";
var myString3="Java";
var myString4="I want to become Dynamic programming expert";
console.log(myString1.charAt(0));
console.log(myString1.concat(myString2));
console.log(myString1.includes(myString3));
console.log(myString1.indexOf('a'));
console.log(myString1.lastIndexOf('a'));
console.log(myString1.toUpperCase());
console.log(myString2.toLowerCase());
var y3= new String('SAM');
console.log(y3);
y4 = y3.toString();
console.log(y3);
console.log(y4);
console.log(typeof y3);
console.log(typeof y4);
var x1 = new Date();
console.log(x1);
x2 = new Date(2022,02,15);
console.log(x2);
console.log(x2.getTime());
var y5 = Date.now();
console.log(y5);
var z1 = new Date();
console.log(z1);
console.log(z1.getDay());
z2 = new Date(1980,07,08);
var day = z2.getDay();
var days=['Sun','Mon','Wed','Thu','Fri','Sat']
console.log("You were born on a " + days[day]);
x7 = new Date(2049494944595);
console.log(x7);
console.log(x7.getTime());