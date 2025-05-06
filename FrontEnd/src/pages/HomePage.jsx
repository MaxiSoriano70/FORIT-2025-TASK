import styles from '../css/home.module.css';
import AgregarTarea from '../components/AgregarTarea';
import TareasPendientes from '../components/TareasPendientes';
import TareasRealizadas from '../components/TareasRealizadas';

const HomePage = () => {
    return (
        <main className={`${styles.mainAgenda} ${styles.fondoLight}`}>
            <AgregarTarea/>
            <TareasPendientes/>
            <TareasRealizadas/>
        </main>
    );
};

export default HomePage;
