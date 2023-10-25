function cal() {
    let m = document.getElementById('mass').value * (10 ** -3)
    let t1 = document.getElementById('temp1').value
    const t2 = 100
    let p = document.getElementById('power').value
    const c = 4.18 * (10 ** 3)
    let ans
    console.log(m);
    console.log(t1);
    console.log(p);
    if ((m > 0) && (t1 > 0) && (t1 < 100) && (p > 0)) {
        ans = ((c * m * (t2 - t1)) / p) / 60
        console.log(ans);
        ans = Math.round(ans)

        document.getElementById('ans').placeholder = ans + " minute"
    } else {
        document.getElementById('ans').placeholder = NaN + " minute"
    }
}
