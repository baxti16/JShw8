let num1 = document.querySelector(".num1");
let num1_result = document.querySelector(".num1_result");
function birbalo(q, w, e, r, t, y, u, i, o, p){
    return {
        q,
        w,
        e,
        r,
        t,
        y,
        u,
        i,
        o,
        p
    }   
}

let tosho = birbalo(75, 28, "pidar", true, "chmo", 99, "ering", 24, "huyet");
for(const gey in tosho) {
    num1.innerHTML += tosho[gey] + ', ';
}
function kot(tosho){
    for(const gey in tosho) {
        if(!isNaN(tosho[gey])) {
            num1_result.innerHTML += tosho[gey] * 2 + ', ';
        }
    }
}

kot(tosho);



    