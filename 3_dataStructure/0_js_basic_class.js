class Student {
	constructor(firstName, lastName){
		this.firstName = firstName;
		this.lastName = lastName;
        this.tardies = 0;
        this.scores = [];
	}
	fullName(){
		return `your full name is ${this.firstName} ${this.lastName}.`;
	}
    markLate(){
        this.tardies++;
        if(this.tardies >= 3) {
            return "You are EXPELLED!!!";
        }
        return `${this.firstName} ${this.lastName} has been late ${this.tardies} times.`;
    }
    // 想要改變數的時候，比較習慣用method來動，而不是直接修改this.scores
    addScore(score){
        this.scores.push(score);
        return this.scores;
    }
    calculateAverage(){
        let sum = this.scores.reduce(function(a,b){return a+b});
        return sum / this.scores.length
    }
    /*
        Class Methods
    */
    static EnrollStudents(){
        return "Enrolling";
    }

}

let firstStudent = new Student("Colt", "Steele");

// 此時可以呼叫firstStudent的 fullName()
let a = firstStudent.fullName(); // a -> "your full name is Colt Steele."

// let b = firstStudent.markLate();
// console.log(b)
// let c = firstStudent.markLate();
// console.log(c)
// let d = firstStudent.markLate();
// console.log(d)


/*
    Class Methods
    不行用 firstStudent.EnrollStudents() 叫
*/
let e = Student.EnrollStudents();
// console.log(e)


/*
    MDN 的範例
*/

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    static distance(a, b){
        const dx = a.x - b.x;
        const dy = a.y - b.y;

        return Math.hypot(dx, dy);
    }
}

const p1 = new Point(5,5);
const p2 = new Point(10,10);

Point.distance(p1, p2); // 7.071067....

/*
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/hypot
    Math.hypot()
    returns the square root of the sum of squares of its arguments.
    sqrt(x^2 + y^2)
*/
