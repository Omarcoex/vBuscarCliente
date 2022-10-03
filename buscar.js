const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
let vbuscar = document.querySelector("#vbuscar");


const contacto = [
  {
    nombre: "Ronald",
    apellido: "Nav",
    numero: "313265498",
    gustos: ["pizza", "programación", "enseñar"],
  },
  {
    nombre: "Harry",
    apellido: "Potter",
    numero: "0994372684",
    gustos: ["Hogwarts", "magia"],
  },

  {
    nombre: "Sherlock",
    apellido: "Holmes",
    numero: "0487345643",
    gustos: ["clases interesantes", "violin"],
  },
  {
    nombre: "Goku",
    apellido: "",
    numero: "123412523",
    gustos: ["Artes Marciales", "Milk", "Luchar"],
  },
  {
    nombre: "Barry",
    apellido: "Allen",
    numero: "2356346346",
    gustos: ["Correr superrapido", " Iris West", "Misterios"],
  },
  {
    nombre: "Tony",
    apellido: "Star",
    numero: "24634745",
    gustos: ["Mujeres", "Tecnología", "Dinero"],
  },
  {
    nombre: "Peter",
    apellido: "Parker",
    numero: "24634745",
    gustos: ["Ayudar a tia May", "Ser un buen vecino"],
  },
];

// 01 Se crea la funcion para buscar el cliente y sus propiedades
function buscarElemento() {
  // vbuscar = vbuscar.options[vbuscar.selectedIndex].text;
  // vbuscar = vbuscar.value;

  if (nombre.value === "" || vbuscar === "") {
    alert("Campos vacíos");
    document.getElementById("nombre").focus();
  }else{

  contacto.forEach(element => {
    (element.nombre);
  });
  }

}

const buscarPropiedad = document.getElementById("buscar");
buscarPropiedad.addEventListener("click", (e) => {
  e.preventDefault();
  buscarElemento();  
});
