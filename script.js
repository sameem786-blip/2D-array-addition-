const cal = () => {
    let m1_r1c1 = Number(document.getElementById("m1_r1c1").value);
    let m1_r1c2 = Number(document.getElementById("m1_r1c2").value);
    let m1_r1c3 = Number(document.getElementById("m1_r1c3").value);
    let m1_r2c1 = Number(document.getElementById("m1_r2c1").value);
    let m1_r2c2 = Number(document.getElementById("m1_r2c2").value);
    let m1_r2c3 = Number(document.getElementById("m1_r2c3").value);
    let m1_r3c1 = Number(document.getElementById("m1_r3c1").value);
    let m1_r3c2 = Number(document.getElementById("m1_r3c2").value);
    let m1_r3c3 = Number(document.getElementById("m1_r3c3").value);

    let m2_r1c1 = Number(document.getElementById("m2_r1c1").value);
    let m2_r1c2 = Number(document.getElementById("m2_r1c2").value);
    let m2_r1c3 = Number(document.getElementById("m2_r1c3").value);
    let m2_r2c1 = Number(document.getElementById("m2_r2c1").value);
    let m2_r2c2 = Number(document.getElementById("m2_r2c2").value);
    let m2_r2c3 = Number(document.getElementById("m2_r2c3").value);
    let m2_r3c1 = Number(document.getElementById("m2_r3c1").value);
    let m2_r3c2 = Number(document.getElementById("m2_r3c2").value);
    let m2_r3c3 = Number(document.getElementById("m2_r3c3").value);

    // let m3_r1c1 = Number(document.getElementById("m3_r1c1").value);
    // let m3_r1c2 = Number(document.getElementById("m3_r1c2").value);
    // let m3_r1c3 = Number(document.getElementById("m3_r1c3").value);
    // let m3_r2c1 = Number(document.getElementById("m3_r2c1").value);
    // let m3_r2c2 = Number(document.getElementById("m3_r2c2").value);
    // let m3_r2c3 = Number(document.getElementById("m3_r2c3").value);
    // let m3_r3c1 = Number(document.getElementById("m3_r3c1").value);
    // let m3_r3c2 = Number(document.getElementById("m3_r3c2").value);
    // let m3_r3c3 = Number(document.getElementById("m3_r3c3").value);

    let m1 = [
        [m1_r1c1,m1_r1c2,m1_r1c3],
        [m1_r2c1,m1_r2c2,m1_r2c3],
        [m1_r3c1,m1_r3c2,m1_r3c3]
    ];

    let m2 = [
        [m2_r1c1,m2_r1c2,m2_r1c3],
        [m2_r2c1,m2_r2c2,m2_r2c3],
        [m2_r3c1,m2_r3c2,m2_r3c3]
    ];

    let m3 = [
        [m1_r1c1 + m2_r1c1,m1_r1c2 + m2_r1c2,m1_r1c3 + m2_r1c3],
        [m1_r2c1 + m2_r2c1,m1_r2c2 + m2_r2c2,m1_r2c3 + m2_r2c3],
        [m1_r3c1 + m2_r3c1,m1_r3c2 + m2_r3c2,m1_r3c3 + m2_r3c3]
    ];

    document.getElementById("m3_r1c1").value = m3[0][1];
    document.getElementById("m3_r1c2").value = m3[0][2];
    document.getElementById("m3_r1c3").value = m3[0][3];
    document.getElementById("m3_r2c1").value = m3[1][1];
    document.getElementById("m3_r2c2").value = m3[1][2];
    document.getElementById("m3_r2c3").value = m3[1][3];
    document.getElementById("m3_r3c1").value = m3[2][1];
    document.getElementById("m3_r3c2").value = m3[2][2];
    document.getElementById("m3_r3c3").value = m3[2][3];


}