"use strict";
class Red {
    constructor() { }
    next() {
        console.log("Red");
        return Red.light;
    }
}
class Green {
    constructor() { }
    next() {
        console.log("Green");
        return Green.light;
    }
}
class Yellow {
    constructor() { }
    next() {
        console.log("Yellow");
        return Yellow.light;
    }
}
function sefamoro() {
    let green = new Green();
    let yellow = new Yellow();
    let red = new Red();
    green.next();
    yellow.next();
    red.next();
}
sefamoro();
