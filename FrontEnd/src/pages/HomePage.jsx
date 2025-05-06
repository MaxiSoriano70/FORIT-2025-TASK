import { useEffect, useState } from 'react';
import styles from '../css/home.module.css';
import AgregarTarea from '../components/AgregarTarea';
import TareasPendientes from '../components/TareasPendientes';
import TareasRealizadas from '../components/TareasRealizadas';

const HomePage = () => {
    const [tareasPendientes, setTareasPendientes] = useState([]);
    const [tareasRealizadas, setTareasRealizadas] = useState([]);

    const fetchTareas = async () => {
        try {
            const response = await fetch('http://localhost:8080/api/task');
            const data = await response.json();
            const tareas = data.response;

            const pendientes = tareas.filter(t => !t.completed);
            const realizadas = tareas.filter(t => t.completed);

            setTareasPendientes(pendientes);
            setTareasRealizadas(realizadas);
        } catch (error) {
            console.error('Error al traer las tareas:', error);
        }
    };

    useEffect(() => {
        fetchTareas();
    }, []);

    return (
        <main className={`${styles.mainAgenda} ${styles.fondoLight}`}>
            <AgregarTarea tareaAgregada={fetchTareas} />
            <TareasPendientes tareas={tareasPendientes} cambiosEnTareaPendiente={fetchTareas}/>
            <TareasRealizadas tareas={tareasRealizadas} cambiosEnTareaRealizada={fetchTareas}/>
        </main>
    );
};

export default HomePage;
