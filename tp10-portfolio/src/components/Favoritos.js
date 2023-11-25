import React, { useEffect, useState } from 'react';

function Favoritos() {
    const [creaciones, setCreaciones] = useState([]);

    useEffect(() => {
        const storedCreations = JSON.parse(localStorage.getItem('creaciones'));
        if (storedCreations) {
            setCreaciones(storedCreations);
        }
    }, []);
    const toggleFavorito = (id) => {
        setCreaciones(creaciones.map(creacion =>
            creacion.id === id ? { ...creacion, favorito: !creacion.favorito } : creacion
        ));
    };

    const favoritos = creaciones.filter(creacion => creacion.favorito);

    return (
        <div>
            {favoritos.map((creacion) => (
                <div key={creacion.id}>
                    <h2>{creacion.titulo}</h2>
                    <p>{creacion.descripcion}</p>
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

export default Favoritos;