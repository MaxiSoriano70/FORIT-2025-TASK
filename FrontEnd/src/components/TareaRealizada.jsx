import styles from '../css/home.module.css';

const TareaRealizada = ({ tarea, cambiosEnTareaRealizada }) => {
    const volverAPendiente = (id) => {
        Swal.fire({
            title: '¿Deseas volver esta tarea a pendiente?',
            text: 'La tarea volverá al estado pendiente.',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Sí',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await fetch(`http://localhost:8080/api/task/${id}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ completed: false }),
                    });

                    if (!response.ok) {
                        throw new Error("Error al volver la tarea a pendiente");
                    }

                    Swal.fire({
                        icon: 'success',
                        title: '¡Tarea marcada como pendiente!',
                        text: 'La tarea ahora está pendiente nuevamente.',
                        confirmButtonText: 'OK'
                    });

                    if (typeof cambiosEnTareaRealizada === 'function') {
                        cambiosEnTareaRealizada();
                    }
                } catch (error) {
                    console.error("Error:", error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'No se pudo restaurar la tarea. Intente nuevamente.',
                        confirmButtonText: 'OK'
                    });
                }
            }
        });
    };

    const eliminarTarea = (id) => {
        Swal.fire({
            title: '¿Estás seguro de eliminar?',
            text: 'Deseas eliminar esta tarea definitivamente',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await fetch(`http://localhost:8080/api/task/${id}`, {
                        method: "DELETE",
                    });

                    if (!response.ok) {
                        throw new Error("Error al eliminar la tarea");
                    }

                    Swal.fire({
                        icon: 'success',
                        title: '¡Tarea eliminada!',
                        text: 'La tarea fue eliminada con éxito.',
                        confirmButtonText: 'OK'
                    });

                    if (typeof cambiosEnTareaRealizada === 'function') {
                        cambiosEnTareaRealizada();
                    }
                } catch (error) {
                    console.error("Error:", error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'No se pudo eliminar la tarea. Intente nuevamente.',
                        confirmButtonText: 'OK'
                    });
                }
            }
        });
    };

    return (
        <div className={`${styles.tareaRealizada} ${styles.borderFondoLight}`}>
            <div className={styles.contenedorVolverAPendiente}>
                <button
                    type="button"
                    className="btn btn-secondary fw-bolder"
                    onClick={() => volverAPendiente(tarea._id)}
                >
                    <i className="fa-solid fa-rotate-right"></i> Volver a pendiente
                </button>
            </div>
            <div className={styles.contenidoTareaRealizada}>
                <h4 className={styles.tituloTareaRealizada}>{tarea.title}</h4>
                <p className={styles.descripcionTareaRealizada}>{tarea.descripcion}</p>
            </div>
            <div className={styles.botonEliminar}>
                <button
                    type="button"
                    className="btn btn-danger"
                    onClick={() => eliminarTarea(tarea._id)}
                >
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    );
};

export default TareaRealizada;