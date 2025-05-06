import styles from '../css/home.module.css';
import TareaRealizada from './TareaRealizada';
import NoTienesRealizadas from './NoTienesRealizadas';

const TareasRealizadas = ({ tareas, cambiosEnTareaRealizada }) => {
    return (
        <section className={styles.tareasRealizadas}>
            <article className={styles.tusTareasRealizadas}>
                <h3>Tareas Realizadas</h3>
                <div className={styles.contenedorDeTareasRealizadas}>
                    {tareas.length > 0 ? (
                        tareas.map((tarea) => (
                            <TareaRealizada key={tarea._id} tarea={tarea} cambiosEnTareaRealizada={cambiosEnTareaRealizada}/>
                        ))
                    ) : (
                        <NoTienesRealizadas />
                    )}
                </div>
            </article>
        </section>
    );
};

export default TareasRealizadas;