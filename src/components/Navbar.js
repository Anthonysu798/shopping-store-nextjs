import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useCart } from './CartContext';
import { useRouter } from 'next/router';
import styles from '../styles/Navbar.module.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { state } = useCart();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsLoggedIn(localStorage.getItem('token') !== null);
    }
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
    router.push('/login');
  };

  return (
    <nav className={`${styles.navbar} bg-gradient-to-r from-green-100 to-blue-100`}>
      <div className={styles.navbarContainer}>
        <Link href="/" legacyBehavior>
          <a className={`${styles.navLogo} text-2xl font-bold text-gray-800 hover:text-gray-600 transition duration-300`}>
            Timble Store
          </a>
        </Link>
        <div className={styles.menuIcon} onClick={toggleMenu}>
          <FontAwesomeIcon icon={isOpen ? faTimes : faBars} className="text-gray-800 text-2xl cursor-pointer" />
        </div>
        <ul className={`${styles.navMenu} ${isOpen ? styles.active : ''}`}>
          <li className={styles.navItem}>
            <Link href="/" legacyBehavior>
              <a className={`${styles.navLinks} hover:text-gray-600 transition duration-300`}>Home</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/about" legacyBehavior>
              <a className={`${styles.navLinks} hover:text-gray-600 transition duration-300`}>About</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/contact" legacyBehavior>
              <a className={`${styles.navLinks} hover:text-gray-600 transition duration-300`}>Contact</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/dashboard" legacyBehavior>
              <a className={`${styles.navLinks} hover:text-gray-600 transition duration-300`}>Dashboard</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/dashboard-preferences" legacyBehavior>
              <a className={`${styles.navLinks} hover:text-gray-600 transition duration-300`}>Dashboard Preferences</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/products" legacyBehavior>
              <a className={`${styles.navLinks} hover:text-gray-600 transition duration-300`}>Products</a>
            </Link>
          </li>
          <li className={styles.navItem}>
            <Link href="/cart" legacyBehavior>
              <a className={`${styles.navLinks} hover:text-gray-600 transition duration-300`}>
                Shopping Cart ({state.items.length})
              </a>
            </Link>
          </li>
          {isLoggedIn ? (
            <li className={styles.navItem}>
              <button
                onClick={handleLogout}
                className={`${styles.navLinks} hover:text-gray-600 transition duration-300`}
              >
                Logout
              </button>
            </li>
          ) : (
            <li className={styles.navItem}>
              <Link href="/login" legacyBehavior>
                <a className={`${styles.navLinks} hover:text-gray-600 transition duration-300`}>Login</a>
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
