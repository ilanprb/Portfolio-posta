import React, { useEffect, useState } from 'react';

const initialCreaciones = [
    {
        id: 1,
        titulo: 'Juego de medioambiente',
        descripcion: 'Con mi compañera Camila hicimos un juego sobre el medio ambiente ',
        fecha: '2023-08-28',
        url: 'https://github.com/CamilaAylenLopez/Juego_Medio_Ambiente',
        favorito: false,
    },
    {
        id: 2,
        titulo: 'Juego',
        descripcion: 'Junto con mis compañeros de proyecto final estamos haciendo un juego',
        fecha: '2023-10-12',
        favorito: false,

    },
    {
        id: 3,
        titulo: 'Juego de banderas',
        descripcion: 'Con mi compañero Teo hicimos un juego de banderas',
        fecha: '2023-7-7',
        url: 'https://github.com/TeiToTeo/flags-handling',
        favorito: false,

    },

    {
        id: 4,
        titulo: 'Aplicación para citas',
        descripcion: 'Con mi compañero Teo hicimos una aplicacion que te permite tomar citas',
        fecha: '2023-7-7',
        favorito: false,

    },

    {
        id: 5,
        titulo: 'Aplicación de personajes',
        descripcion: 'Con mi compañero Agus hicimos una aplicacion con una base de datos de personajes de disney',
        url: 'https://github.com/agussiro06/DAI-Personajes',
        fecha: '08-06-2023',
        favorito: false,

    },

    {
        id: 6,
        titulo: 'Lista de tareas',
        descripcion: 'Con mi compañero Agus hicimos una lista de tareas',
        url: 'https://github.com/AgustinSirotinsky/TaskList_RN',
        fecha: '31-08-2023',
        favorito: false,

    },
];

function Creaciones() {
  const [creaciones, setCreaciones] = useState(initialCreaciones);

  useEffect(() => {
    const storedCreations = JSON.parse(localStorage.getItem('creaciones'));
    if (storedCreations) {
      setCreaciones(storedCreations);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('creaciones', JSON.stringify(creaciones));
  }, [creaciones]);

  const toggleFavorito = (id) => {
    const updatedCreations = creaciones.map(creacion =>
      creacion.id === id ? { ...creacion, favorito: !creacion.favorito } : creacion
    );
    setCreaciones(updatedCreations);
  };

  return (
    <div>
      {creaciones.map((creacion) => (
        <div key={creacion.id} className="slide-in-from-right">
          <h2>{creacion.titulo}</h2>
          <p>{creacion.descripcion}</p>
          {creacion.imagenes && creacion.imagenes.map((imagen, index) => (
            <img key={index} src={imagen} alt={creacion.titulo} />
          ))}
          <p>{creacion.fecha}</p>
          {creacion.url && <a href={creacion.url}>Link</a>}
          <button onClick={() => toggleFavorito(creacion.id)}>
            {creacion.favorito ? '★' : '☆'}
          </button>
        </div>
      ))}
    </div>
  );
}



export default Creaciones;