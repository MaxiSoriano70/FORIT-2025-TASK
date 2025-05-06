import styles from '../css/home.module.css';
import TareaPendiente from './TareaPendiente';
import NoTienesPendientes from './NoTienesPendientes';

const TareasPendientes = ({ tareas, cambiosEnTareaPendiente}) => {
    return (
        <section className={styles.tareasPendientes}>
            <article className={styles.tusTareasPendientes}>
                <h3>Tareas Pendientes</h3>
                <div className={styles.contenedorDeTareasPendientes}>
                    {tareas.length > 0 ? (
                        tareas.map((tarea) => (
                            <TareaPendiente key={tarea._id} tarea={tarea} cambiosEnTareaPendiente={cambiosEnTareaPendiente}/>
                        ))
                    ) : (
                        <NoTienesPendientes />
                    )}
                </div>
            </article>
        </section>
    );
};

export default TareasPendientes;