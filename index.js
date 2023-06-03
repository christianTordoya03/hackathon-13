let perros = [
	{
		img: './imagenes/perro1.jpg',
		name: 'Cobu',
		telefono: '55533300 | Correo',
		pais: 'Perú',
		descripcion: 'hola',
		id: 01,
	},
	{
		img: './imagenes/perro2.jpg',
		name: 'Hachi',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: 02,
	},
	{
		img: './imagenes/perro3.jpg',
		name: 'Manchas',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: 03,
	},
	{
		img: './imagenes/perro4.jpg',
		name: 'Doby',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: 04,
	},
	{
		img: './imagenes/perro5.jpg',
		name: 'Chester',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: 05,
	},
	{
		img: './imagenes/perro6.jpg',
		name: 'Harry',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: 06,
	},
	{
		img: './imagenes/perro7.jpg',
		name: 'Marley',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: 07,
	},
	{
		img: './imagenes/perro8.jpg',
		name: 'Benji',
		telefono: '55533300',
		pais: 'Perú',
		descripcion: 'hola',
		id: 08,
	},
];

function crearTarjetas(dogs){
  let content = document.querySelector('.content')
  dogs.forEach(dog => {
    content.innerHTML += `
    <div class="card">
        <img src="${dog.img}" alt="dog" class="img">
        <h2 class="name">${dog.name}</h2>
        <h3 class="data">${dog.telefono} | Correo</h3>
        <h4 class="country">${dog.pais}</h4>
        <p class="text">${dog.descripcion}</p>
      </div>
    </div> 
    `
  });
}

crearTarjetas(perros);