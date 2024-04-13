function test(e) {
    console.log(e)
}


function rng() {
    return Math.random();
}

function xx(e) {
    let x = 0;
    x += e*100
    if (x > 64) {
        test(x)
        x = x - 64;
    }
    return x
}

test(Math.floor(xx(rng())))
