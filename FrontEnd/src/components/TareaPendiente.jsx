import styles from '../css/home.module.css';

const TareaPendiente = () => {
    return (
        <div className={`${styles.tarea} ${styles.borderFondoLight}`}>
            <div className={styles.contenedorRealizado}>
                <button type="button" className="btn btn-success fw-bolder">
                    <i className="fa-solid fa-check"></i> Realizada
                </button>
            </div>
            <div className={styles.contenidoTarea}>
                <h4 className={styles.tituloTarea}>Ver el Steam de Auronplay</h4>
                <p className={styles.descripcionTarea}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto labore soluta...
                </p>
            </div>
            <div className={styles.botonesDeAccion}>
                <button
                    id="botonEditarTarea"
                    className="btn btnPersonalized1 fw-bolder"
                    aria-label="EditarTarea"
                    data-bs-toggle="modal"
                    data-bs-target="#editarTareaModal"
                >
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>

                <section
                    className="modal fade"
                    id="editarTareaModal"
                    tabIndex="-1"
                    aria-labelledby="editarTareaModal"
                    aria-hidden="true"
                >
                    <div className="modal-dialog modal-dialog-centered">
                        <div className="modal-content">
                            <div className="modal-header bgColorPrincipal">
                                <h5 className="modal-title text-white" id="editarTareaModal">Editar Tarea</h5>
                                <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body fondoLight">
                                <form id="formEditarTarea">
                                    <div className="mb-3">
                                        <label htmlFor="tituloTareaEditar" className="form-label fw-bolder">Nombre</label>
                                        <input
                                            type="text"
                                            className="form-control bgInput"
                                            id="tituloTareaEditar"
                                            placeholder="Ingrese el titulo tarea"
                                            minLength="3"
                                            maxLength="25"
                                            name="TituloTareaEditar"
                                            required
                                        />
                                        <div id="nombreEditarError"></div>
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="descripcionEditar" className="form-label fw-bolder">Descripción</label>
                                        <div className="form-floating">
                                            <textarea
                                                className="form-control bgInput"
                                                placeholder="Ingrese la descripcionEditar"
                                                id="descripcionEditar"
                                                style={{ height: '100px' }}
                                                name="DescripcionEditarTarea"
                                            />
                                            <label htmlFor="descripcion">Descripción</label>
                                        </div>
                                        <div id="descripcionEditarError"></div>
                                    </div>
                                    <div className="d-flex align-items-center justify-content-center">
                                        <button type="submit" className="btn btnPersonalized1 mx-1 fw-bold" aria-label="Registrarse">
                                            Guardar cambios
                                        </button>
                                        <button type="button" className="btn btnPersonalized2 mx-1 fw-bold" data-bs-dismiss="modal" aria-label="Close">
                                            Cancelar
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

                <button type="button" className="btn btn-danger">
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    )
}

export default TareaPendiente;
