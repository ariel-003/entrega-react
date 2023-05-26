import { Spinner } from "./Spinner";

function Loader() {
    return (
        <Spinner className="h-100 d-flex align-items-center justify-content-center">
            <button className="btn btn-dark" type="button" disabled>
                <span className="spinner-border spinner-border-sm me-1" role="status" aria-hidden="true"></span>
                Cargando...
            </button>
        </Spinner>
    )
}

export default Loader;