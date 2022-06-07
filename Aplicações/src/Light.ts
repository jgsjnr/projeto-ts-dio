interface Light {
    next(): Light;
}

class Red implements Light{
    private static light: Light
    private constructor(){}
    next(): Light {
        console.log("Red")
        return Red.light
    }
}

class Green implements Light{
    private static light: Light
    private constructor(){}
    next(): Light {
        console.log("Green")
        return Green.light
    }
}

class Yellow implements Light{
    private static light: Light
    private constructor(){}
    next(): Light {
        console.log("Yellow")
        return Yellow.light
    }
}

function sefamoro(): void{
    let green: Light = new Green();
    let yellow: Light = new Yellow();
    let red: Light = new Red();

    green.next();
    yellow.next();
    red.next();

    
}

sefamoro()