import React from 'react'

export const Control = () => {
    return (
        <>
            <h1>Enlaces</h1>

            <p>Esto es un enlace a <a href="https://www.mozilla.org">Mozilla</a>.</p>

            <p>
                Otro enlace, a la
                <a href="https://developer.mozilla.org">Mozilla Developer Network</a>.
            </p>

            <h2>Botones</h2>

            <p>
                <button data-message="Esto es del primer botón">¡Haz clic!</button>
                <button data-message="Esto es del segundo botón">
                    ¡Haz clic aquí también!
                </button>
                <button data-message="Esto es del tercer botón">Y aquí!</button>
            </p>

            <h2>Formulario</h2>

            <form>
                <div>
                    <label htmlFor="nombre">Entra tu nombre:</label>
                    <input type="text" id="nombre" name="nombre" />
                </div>
                <div>
                    <label htmlFor="edad">Entra tu edad:</label>
                    <input type="text" id="edad" name="edad" />
                </div>
                <div>
                    <label htmlFor="humor">Elige tu humor:</label>
                    <select id="humor" name="humor">
                        <option>Feliz</option>
                        <option>Triste</option>
                        <option>Enfadado/a</option>
                        <option>Preocupado/a</option>
                    </select>
                </div>
            </form>

        </>
    )
}
