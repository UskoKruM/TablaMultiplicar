function generarTabla() {
    var numeroFilas = document.getElementById("numeroFilas").value;
    var numeroColumnas = document.getElementById("numeroColumnas").value;
    var contenedorTabla = document.getElementById("contenedorTabla");
    contenedorTabla.innerHTML = "";
    var tabla = "";
    tabla += "<table>";
    for (var r = 1; r <= numeroFilas; r++) {
        tabla += "<tr>";
        for (var v = 1; v <= numeroColumnas; v++) {
            // console.log("R: " + r + " / V: " + v + " => " + (r * v));
            if (r === 1 || v === 1) {
                tabla += "<td class='azul_Resaltado'>" + (r * v) + "</td>";
            } else {
                tabla += "<td id='celda_" + r + "_" + v + "' class='celda fila_" + r + " columna_" + v + "' onmouseover='colorear(this.id);'>" + (r * v) + "</td>";
            }
        }
        tabla += "</tr>";
    }
    tabla += "</table>";
    contenedorTabla.innerHTML = tabla;
}

function colorear(id) {
    var celdas = document.getElementsByClassName("celda");
    for (var x = 0; x < celdas.length; x++) {
        var c = document.getElementById(celdas[x].id);
        c.style.backgroundColor = "white";
    }
    var celda = document.getElementById(id);
    var pars = String(id).split("_");
    var claseFila = "fila_" + pars[1], claseColumna = "columna_" + pars[2];
    var filas = document.getElementsByClassName(claseFila);
    var columnas = document.getElementsByClassName(claseColumna);
    for (var f = 0; f < filas.length; f++) {
        var fila = document.getElementById(filas[f].id);
        fila.style.backgroundColor = "yellow";
    }
    for (var c = 0; c < columnas.length; c++) {
        var columna = document.getElementById(columnas[c].id);
        columna.style.backgroundColor = "yellow";
    }
    celda.style.backgroundColor = "red";
}