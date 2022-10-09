const nombre = document.querySelector("#nombre");
const apellido = document.querySelector("#apellido");
let vbuscar = document.querySelector("#vbuscar");
let vbuscarCliente = document.querySelector("#buscar");
let bdata = document.getElementById("bdata");

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
  if (nombre.value === "" || vbuscar === "" || apellido === "") {
    alert("Campos vacíos");
    document.getElementById("nombre").focus();
    nombre.style.backgroundColor = "yellow";
    vbuscar.style.backgroundColor = "yellow";
    apellido.style.backgroundColor = "yellow";
  } else {
    buscarCliente();
  }
}

const buscarPropiedad = document.getElementById("buscar");
buscarPropiedad.addEventListener("click", (e) => {
  e.preventDefault();
  buscarElemento();
});

// ........................................................................

function buscarCliente() {
  contacto.forEach((i) => {
    if (i.nombre.toUpperCase() === nombre.value.toUpperCase()) {
      switch (vbuscar.options[vbuscar.selectedIndex].value) {
        case "apellido":
          bdata.textContent = i.apellido;
          break;
        case "nombre":
          bdata.textContent = i.nombre;
          break;
        case "gusto":
          bdata.textContent = i.gustos;
          break;
        case "numero":
          bdata.textContent = i.numero;
          break;
        case "todo":
          bdata.textContent =
            i.nombre + "  " + i.apellido + "  " + i.numero + "   " + i.gustos;
          break;

        default:
          alert("No hay mas valores disponible!");
          break;
      }
    }
  });
  if (buscarPropiedad !== contacto) {
    alert("Nombre y apellido no existe");
  }
}
