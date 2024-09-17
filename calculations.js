function calculateArea() {
    var length = parseFloat(document.getElementById("area-length").value);
    var width = parseFloat(document.getElementById("area-width").value);
    var area = length * width;
    document.getElementById("area-result").innerHTML = "Area of the rectangle: " + area + " square units";
}

function calculatePerimeter() {
    var length = parseFloat(document.getElementById("perimeter-length").value);
    var width = parseFloat(document.getElementById("perimeter-width").value);
    var perimeter = 2 * (length + width);
    document.getElementById("perimeter-result").innerHTML = "Perimeter of the rectangle: " + perimeter + " units";
}