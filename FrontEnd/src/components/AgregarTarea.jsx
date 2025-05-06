import styles from '../css/home.module.css';

const AgregarTarea = () => {
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
                            <form id="formAgregarTarea">
                                <div className="mb-3">
                                    <label htmlFor="tituloTarea" className="form-label fw-bolder">Nombre</label>
                                    <input
                                        type="text"
                                        className="form-control bgInput"
                                        id="tituloTarea"
                                        placeholder="Ingrese el titulo tarea"
                                        minLength="3"
                                        maxLength="25"
                                        name="TituloTarea"
                                        required
                                    />
                                    <div id="nombreAgregarError"></div>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="descripcion" className="form-label fw-bolder">Descripción</label>
                                    <div className="form-floating">
                                        <textarea
                                            className="form-control bgInput"
                                            placeholder="Ingrese la descripcion"
                                            id="descripcion"
                                            style={{ height: '100px' }}
                                            name="DescripcionTarea"
                                        />
                                        <label htmlFor="descripcion">Descripción</label>
                                    </div>
                                    <div id="descripcionAgregarError"></div>
                                </div>
                                <div className="d-flex align-items-center justify-content-center">
                                    <button type="submit" className="btn btnPersonalized1 mx-1 fw-bold" aria-label="Registrarse">
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
    )
}

export default AgregarTarea;
