import '../styling/Modal.css'
export function WrongCredentialsModal() {
    return(
        <div className="modal-wrapper" onClick={() => {return null}}>
            <div className="modal" onClick={(e) => e.stopPropagation()}>
                <button onClick={() => {return null}} className="close-modal">
                    X
                </button>
                <h2 style={{color: "red"}}>Wrong email or password</h2>
            </div>
        </div>
    )
}