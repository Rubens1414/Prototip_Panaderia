import React, { useState, useEffect, useRef } from 'react';
import classes from './navegador.module.css';
import { Link } from 'react-router-dom';
import { useCart } from '../../Hooks/useCart';
import { useAuth } from '../../Hooks/useAuth';

export default function Navegador() {
  const {user, logout} = useAuth();
  const {cart} = useCart();
  const [menuVisible, setMenuVisible] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setMenuVisible(prev => !prev);
  };

  return (
    <header className={classes.header}>
        <div className={classes.container}>
            <div className={classes.logo}>
                <h1>Logo</h1>
            </div>
            <div className={classes.navmenu_l}>
                <ul>
                <li >
                    <Link to="/">Inicio</Link>
                    <Link to="/productos">Productos</Link>
                </li>
                </ul>
            </div>
            <nav className={classes.navmenu}>
            {menuVisible && <div className={classes.overlay} onClick={() => setMenuVisible(false)} />}
            <ul>
                {user ? (
                    <>
                    <div className={classes.celcontainer}>
                            <button onClick={toggleMenu}>{user.name}</button>
                            <div ref={menuRef} className={menuVisible ? `${classes.menuCel}` : classes.menuCelOf}>
                            <Link  onClick={toggleMenu} to="/">Inicio</Link>
                            <Link  onClick={toggleMenu} to="/profile">Perfil</Link>
                            <Link onClick={toggleMenu}  to="/productos">Productos</Link>
                            <Link onClick={toggleMenu}  to="/cart">Carrito</Link>
                            <Link  onClick={toggleMenu} to="/orders">Pedidos</Link>
                            <Link to="/login" onClick={{logout,toggleMenu}}>Cerrar Sesión</Link>
                        </div>
                    </div>
                    <li className={classes.menuUsuario}>
                        <Link to ="/">{user.name}</Link>
                        <div className={classes.menu}>
                        <Link to="/profile">Perfil</Link>
                        <Link to="/orders">Pedidos</Link>
                        <a onClick={logout}>Cerrar Sesión</a>
                        </div>
                    </li>
                    </>
                ) : (
                    <>
                    <div className={classes.celcontainer}>
                    <button onClick={toggleMenu}>(Icono)</button>
                    <div className={menuVisible ? `${classes.menuCel}` : classes.menuCelOf}>
                     <Link onClick={toggleMenu} to="/">Inicio</Link>
                      <Link onClick={toggleMenu} to="/productos">Productos</Link>
                     <Link onClick={toggleMenu} to="/cart">Carrito</Link>
                     <Link onClick={toggleMenu} to="/login">Iniciar Sesión</Link>
                     <Link onClick={toggleMenu} to="/register">Registrarse</Link>
                    </div>
                    </div>
                
                    </>
                )}
                <li>
                    <Link to="/cart"className={classes.carrito}>
                        Carrito
                        {cart.totalCount > 0 && <span className={classes.cart_count}>{cart.totalCount} </span>}
                    </Link>
                </li>
            </ul>
            </nav>
        </div>
    </header>
  );
}
