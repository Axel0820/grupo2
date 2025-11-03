const FormularioProducto = () => {
    return (
        <div>
            <h2>Agregar Producto</h2>
            <form>
                <label>
                    Nombre:
                    <input type="text" name="nombre" />
                </label>
                <label>
                    Precio:
                    <input type="number" name="precio" />
                </label>
                <label>
                    Stock:
                    <input type="text" name="stock" />
                </label>
                <label>
                    Categoria:
                    <input type="text" name="categoria" />
                </label>
                <label>
                    Estado:
                    <input type="text" name="estado" />
                </label>
                <button type="submit">Agregar</button>
            </form>
        </div>
    );
}

export default FormularioProducto;
