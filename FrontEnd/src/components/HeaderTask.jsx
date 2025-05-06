import styles from '../css/headerTask.module.css';

const HeaderTask = () => {
    return (
        <header className={styles.headerAgenda}>
            <a className={styles.logoHeader}>
                <i className="fa-solid fa-calendar-days"></i>{' '}
                <span className="logoTexto">Tareas</span>
            </a>
            <h3 className={styles.bienvenida}>Bienvenid@</h3>
        </header>
    );
};

export default HeaderTask;