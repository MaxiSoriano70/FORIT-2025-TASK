import styles from '../css/home.module.css';
import TareaRealizada from './TareaRealizada';
import NoTienesRealizadas from './NoTienesRealizadas';

const TareasRealizadas = () => {
    return (
        <section className={styles.tareasRealizadas}>
            <article className={styles.tusTareasRealizadas}>
                <h3>Tareas Realizadas</h3>
                <div className={styles.contenedorDeTareasRealizadas}>
                    <TareaRealizada/>
                </div>
            </article>
            <NoTienesRealizadas/>
        </section>
    )
}

export default TareasRealizadas;
