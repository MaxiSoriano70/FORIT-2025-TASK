import { useState } from "react";
import styles from '../css/home.module.css';

const TareaPendiente = ({ tarea, cambiosEnTareaPendiente }) => {
    const [titulo, setTitulo] = useState(tarea.title);
    const [descripcion, setDescripcion] = useState(tarea.descripcion);
    const [tituloValido, setTituloValido] = useState(null);
    const [descripcionValida, setDescripcionValida] = useState(null);

    const regexTitulo = /^[A-Za-zÁÉÍÓÚáéíóúÑñ0-9\s]{3,}$/;

    const handleTituloChange = (e) => {
        const value = e.target.value;
        setTitulo(value);
        setTituloValido(value.trim().length >= 3 && regexTitulo.test(value.trim()));
    };

    const handleDescripcionChange = (e) => {
        const value = e.target.value;
        setDescripcion(value);
        setDescripcionValida(value.trim().length >= 3 || value.trim().length === 0);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const tituloTrim = titulo.trim();
        const descripcionTrim = descripcion.trim();

        const tituloEsValido = tituloTrim.length >= 3 && regexTitulo.test(tituloTrim);
        const descripcionEsValida = descripcionTrim.length === 0 || descripcionTrim.length >= 3;

        setTituloValido(tituloEsValido);
        setDescripcionValida(descripcionEsValida);

        if (!tituloEsValido || !descripcionEsValida) return;

        const tareaData = {
            title: tituloTrim,
            descripcion: descripcionTrim || undefined
        };

        try {
            const response = await fetch(`http://localhost:8080/api/task/${tarea._id}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(tareaData),
            });

            if (!response.ok) {
                throw new Error("Error al actualizar la tarea");
            }

            const data = await response.json();
            console.log("Tarea actualizada con éxito:", data);

            const modal = bootstrap.Modal.getInstance(document.getElementById(`editarTareaModal-${tarea._id}`));
            modal.hide();

            Swal.fire({
                icon: 'success',
                title: '¡Tarea actualizada!',
                text: 'La tarea ha sido actualizada correctamente.',
                confirmButtonText: 'OK'
            });

            if (typeof cambiosEnTareaPendiente === 'function') {
                cambiosEnTareaPendiente();
            }
        } catch (error) {
            console.error("Error:", error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo actualizar la tarea. Intente nuevamente.',
                confirmButtonText: 'OK'
            });
        }
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
                        text: 'La tarea eliminada con éxito.',
                        confirmButtonText: 'OK'
                    });

                    if (typeof cambiosEnTareaPendiente === 'function') {
                        cambiosEnTareaPendiente();
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

    const marcarComoRealizada = (id) => {
        Swal.fire({
            title: '¿Estás seguro terminar esta tarea?',
            text: 'La tarea se marcará como realizada.',
            icon: 'question',
            showCancelButton: true,
            confirmButtonText: 'Si',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                try {
                    const response = await fetch(`http://localhost:8080/api/task/${id}`, {
                        method: "PUT",
                        headers: {
                            "Content-Type": "application/json",
                        },
                        body: JSON.stringify({ completed: true }),
                    });

                    if (!response.ok) {
                        throw new Error("Error al marcar la tarea como realizada");
                    }

                    Swal.fire({
                        icon: 'success',
                        title: '¡Tarea marcada como realizada!',
                        text: 'La tarea ha sido marcada como realizada con éxito.',
                        confirmButtonText: 'OK'
                    });
                    if (typeof cambiosEnTareaPendiente === 'function') {
                        cambiosEnTareaPendiente();
                    }
                } catch (error) {
                    console.error("Error:", error);
                    Swal.fire({
                        icon: 'error',
                        title: 'Error',
                        text: 'No se pudo marcar la tarea como realizada. Intente nuevamente.',
                        confirmButtonText: 'OK'
                    });
                }
            }
        });
    };

    const claseTitulo = tituloValido === null
        ? "bgInput"
        : tituloValido
            ? "inputSuccess"
            : "inputDanger";

    const claseDescripcion = descripcionValida === null
        ? "bgInput"
        : descripcionValida
            ? "inputSuccess"
            : "inputDanger";

    return (
        <div className={`${styles.tarea} ${styles.borderFondoLight}`}>
            <div className={styles.contenedorRealizado}>
                <button
                    type="button"
                    className="btn btn-success fw-bolder"
                    onClick={() => marcarComoRealizada(tarea._id)}
                >
                    <i className="fa-solid fa-check"></i> Realizada
                </button>
            </div>
            <div className={styles.contenidoTarea}>
                <h4 className={styles.tituloTarea}>{tarea.title}</h4>
                <p className={styles.descripcionTarea}>{tarea.descripcion}</p>
            </div>
            <div className={styles.botonesDeAccion}>
                <button
                    id={`botonEditarTarea-${tarea._id}`}
                    className="btn btnPersonalized1 fw-bolder"
                    aria-label="EditarTarea"
                    data-bs-toggle="modal"
                    data-bs-target={`#editarTareaModal-${tarea._id}`}
                >
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>

                <section
                    className="modal fade"
                    id={`editarTareaModal-${tarea._id}`}
                    tabIndex="-1"
                    aria-labelledby={`editarTareaModal-${tarea._id}`}
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header bgColorPrincipal">
                                <h5 className="modal-title text-white">Editar Tarea</h5>
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body fondoLight">
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor={`tituloTareaEditar-${tarea._id}`} className="form-label fw-bolder">Nombre</label>
                                        <input
                                            type="text"
                                            className={`form-control ${claseTitulo}`}
                                            id={`tituloTareaEditar-${tarea._id}`}
                                            placeholder="Ingrese el título de la tarea"
                                            minLength="3"
                                            maxLength="25"
                                            value={titulo}
                                            onChange={handleTituloChange}
                                            required
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor={`descripcionEditar-${tarea._id}`} className="form-label fw-bolder">Descripción</label>
                                        <div className="form-floating">
                                            <textarea
                                                className={`form-control ${claseDescripcion}`}
                                                placeholder="Ingrese la descripción"
                                                id={`descripcionEditar-${tarea._id}`}
                                                style={{ height: '100px' }}
                                                value={descripcion}
                                                onChange={handleDescripcionChange}
                                            />
                                            <label htmlFor="descripcion">Descripción</label>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <button type="submit" className="btn btnPersonalized1 mx-1 fw-bold">
                                            Guardar cambios
                                        </button>
                                        <button type="button" className="btn btnPersonalized2 mx-1 fw-bold" data-bs-dismiss="modal">
                                            Cancelar
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

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

export default TareaPendiente;