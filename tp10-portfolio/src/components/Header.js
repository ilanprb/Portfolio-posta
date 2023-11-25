import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Header() {
  const [favoriteCount, setFavoriteCount] = useState(0);

  useEffect(() => {
    const storedCreations = JSON.parse(localStorage.getItem('creaciones'));
    if (storedCreations) {
      const favoriteCreations = storedCreations.filter(creation => creation.favorito);
      setFavoriteCount(favoriteCreations.length);
    }
  }, []);

  return (
    <header>
      <nav>
        <ul style={{ display: 'flex', justifyContent: 'space-around', listStyle: 'none' }}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/info">Info</Link>
          </li>
          <li>
            <Link to="/creaciones">Creaciones</Link>
          </li>
          <li>
            <Link to="/favoritos">
              Favoritos
              <span style={{ backgroundColor: 'red', borderRadius: '50%', color: 'white', padding: '0 5px' }}>
                {favoriteCount}
              </span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;