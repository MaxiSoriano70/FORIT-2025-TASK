import styles from '../css/home.module.css';

const NoTienesRealizadas = () => {
    return (
        <article className={`${styles.noTienesTareasRealizada} ${styles.borderFondoLight}`}>
            <i className={`fa-solid fa-rectangle-xmark ${styles.logoNoTienes}`}></i>
            <span className={styles.mensajeNoTareasRealizada}>No tienes tareas realizadas</span>
        </article>
    );
};

export default NoTienesRealizadas;
