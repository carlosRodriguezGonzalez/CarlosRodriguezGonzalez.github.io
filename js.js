var xmlhttp = new XMLHttpRequest();
var url = "json.json";

xmlhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
        var documentJson = JSON.parse(this.responseText);
        var myArr = documentJson.Trabajos;
        myFunction(myArr);
    }
};
xmlhttp.open("GET", url, true);
xmlhttp.send();

function myFunction(arr) {
    var seccion = document.getElementById("trabajos");
    

    for (i = 0; i < arr.length; i++) {
        //VARIABLES//
        var proyecto = document.createElement("div");
        var imagen = document.createElement("img");
        var titulo = document.createElement("h1");
        var desc = document.createElement("p");
        var enlace = document.createElement("a");
        var nodoTitulo = document.createTextNode(arr[i].Titulo);
        var nodoDesc = document.createTextNode(arr[i].Descripcion);
        var nodoEnlace = document.createTextNode(arr[i].Link);

        //ATRIBUTOS//
        
        imagen.setAttribute("src", arr[i].Imagen);
        imagen.setAttribute("alt", "imagen");
        enlace.setAttribute("href", arr[i].Link);


        titulo.appendChild(nodoTitulo);
        desc.appendChild(nodoDesc);   
        enlace.appendChild(imagen);
        proyecto.appendChild(titulo);
        proyecto.appendChild(enlace);
        proyecto.appendChild(desc);
        
        seccion.appendChild(proyecto);
        
    }
}