import styles from "./Nav.module.css"; 

const Navigation = () => {
    console.log(styles);
  return (
    
    <nav className={`${styles.nav} container`}> 
      <div className="logo">
        <img src="" alt="logo" />
      </div>
      <ul>
        <li><a href="#">HOME</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navigation;
