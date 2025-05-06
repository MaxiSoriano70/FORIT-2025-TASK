import styles from '../css/home.module.css';

const TareaRealizada = () => {
    return (
        <div className={`${styles.tareaRealizada} ${styles.borderFondoLight}`}>
            <div className={styles.contenedorVolverAPendiente}>
                <button type="button" className="btn btn-secondary fw-bolder">
                    <i className="fa-solid fa-rotate-right"></i> Volver a pendiente
                </button>
            </div>
            <div className={styles.contenidoTareaRealizada}>
                <h4 className={styles.tituloTareaRealizada}>Ver el Steam de Auronplay</h4>
                <p className={styles.descripcionTareaRealizada}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto labore soluta...
                </p>
            </div>
            <div className={styles.botonEliminar}>
                <button type="button" className="btn btn-danger">
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    );
};

export default TareaRealizada;
