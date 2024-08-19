
export const Form = () => {
    return (
        <>

            <form>
                <div>
                    Entra tu nombre: <input type="text" id="nombre" name="nombre" />

                </div>
                <div>
                    <label htmlFor="nombre">Entra tu nombre:</label>
                    <input type="text" id="nombre" name="nombre"
                        placeholder='Ingresa tu nombre' />
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
