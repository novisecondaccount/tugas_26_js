let deret = [2, 39, 76, 50, 9, 7, 41, 2, 24, 1, 16]
deret.forEach((item) => {
    if(isFinite(item))
    {
        console.log("Angka " +item + " NOT Infinity")
    }
})