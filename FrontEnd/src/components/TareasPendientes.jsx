import styles from '../css/home.module.css';
import TareaPendiente from './TareaPendiente';
import NoTienesPendientes from './NoTienesPendientes';

const TareasPendientes = () => {
    return (
        <section className={styles.tareasPendientes}>
            <article className={styles.tusTareasPendientes}>
                <h3>Tareas Pendientes</h3>
                <div className={styles.contenedorDeTareasPendientes}>
                    <TareaPendiente/>
                </div>
            </article>
            <NoTienesPendientes/>
        </section>
    )
}

export default TareasPendientes;
