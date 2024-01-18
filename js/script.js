function hitung() {
    var length = parseFloat(document.getElementById("length").value);
    var width = parseFloat(document.getElementById("width").value);

    if (!isNaN(length) && !isNaN(width)) {
        var luas = length * width;
        var keliling = 2 * (length + width);

        document.getElementById("luas").innerHTML = "Luas Persegi Panjang: " + luas;
        document.getElementById("keliling").innerHTML = "Keliling Persegi Panjang: " + keliling;
    } else {
        alert("Masukkan panjang dan lebar yang valid.");
    }
}

function reset() {
    document.getElementById("length").value = "";
    document.getElementById("width").value = "";
    document.getElementById("luas").innerHTML = "";
    document.getElementById("keliling").innerHTML = "";
}