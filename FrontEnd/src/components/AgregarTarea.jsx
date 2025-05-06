import { useState } from "react";
import styles from '../css/home.module.css';

const AgregarTarea = ({ tareaAgregada }) => {
    const [titulo, setTitulo] = useState("");
    const [descripcion, setDescripcion] = useState("");
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
        setDescripcionValida(value.trim().length === 0 || value.trim().length >= 3);
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
            const response = await fetch("http://localhost:8080/api/task", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(tareaData),
            });

            if (!response.ok) {
                throw new Error("Error al crear la tarea");
            }

            const data = await response.json();
            console.log("Tarea creada con éxito:", data);

            setTitulo("");
            setDescripcion("");
            setTituloValido(null);
            setDescripcionValida(null);

            const modal = bootstrap.Modal.getInstance(document.getElementById('agregartareaModal'));
            modal.hide();

            Swal.fire({
                icon: 'success',
                title: '¡Tarea agregada!',
                text: 'La tarea ha sido agregada correctamente.',
                confirmButtonText: 'OK'
            });

            if (typeof tareaAgregada === 'function') {
                tareaAgregada();
            }
        } catch (error) {
            console.error("Error:", error);
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'No se pudo crear la tarea. Intente nuevamente.',
                confirmButtonText: 'OK'
            });
        }
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
        <section className={styles.tituloEventos}>
            <h2>Tus tareas</h2>
            <button
                id="boton-registrarse"
                className="btn btnPersonalized2 fw-bolder"
                aria-label="AgregarTarea"
                data-bs-toggle="modal"
                data-bs-target="#agregartareaModal"
            >
                Agregar Tarea
            </button>
            <section
                className="modal fade"
                id="agregartareaModal"
                tabIndex="-1"
                aria-labelledby="agregartareaModal"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header bgColorPrincipal">
                            <h5 className="modal-title text-white" id="agregartareaModal">Agregar Tarea</h5>
                            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body fondoLight">
                            <form id="formAgregarTarea" onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label htmlFor="tituloTarea" className="form-label fw-bolder">Nombre</label>
                                    <input
                                        type="text"
                                        className={`form-control ${claseTitulo}`}
                                        id="tituloTarea"
                                        placeholder="Ingrese el título de la tarea"
                                        minLength="3"
                                        maxLength="25"
                                        name="TituloTarea"
                                        value={titulo}
                                        onChange={handleTituloChange}
                                        required
                                    />
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="descripcion" className="form-label fw-bolder">Descripción</label>
                                    <div className="form-floating">
                                        <textarea
                                            className={`form-control ${claseDescripcion}`}
                                            placeholder="Ingrese la descripción"
                                            id="descripcion"
                                            style={{ height: '100px' }}
                                            name="DescripcionTarea"
                                            value={descripcion}
                                            onChange={handleDescripcionChange}
                                        />
                                        <label htmlFor="descripcion">Descripción</label>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center justify-content-center">
                                    <button type="submit" className="btn btnPersonalized1 mx-1 fw-bold" aria-label="Agregar">
                                        Agregar Tarea
                                    </button>
                                    <button type="reset" className="btn btnPersonalized2 mx-1 fw-bold" aria-label="Cancelar">
                                        Cancelar
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default AgregarTarea;
