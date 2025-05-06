import styles from '../css/home.module.css';

const NoTienesPendientes = () => {
    return (
        <article className={`${styles.noTienesTareasPendiente} ${styles.borderFondoLight}`}>
            <i className={`fa-solid fa-rectangle-xmark ${styles.logoNoTienes}`}></i>
            <span className={styles.mensajeNoTareas}>No tienes tareas pendientes</span>
        </article>
    );
};

export default NoTienesPendientes;
