import React from "react";
import useInputState from "./hooks/useInputState";
import TextField from "@material-ui/core/TextField";

function EditProductForm({ id, name, price, editProduct, toggleEditForm }) {
    const [value, handleChange, reset] = useInputState(name, price);
    return (
        <form
            onSubmit={e => {
                e.preventDefault();
                editProduct(id, value);
                reset();
                toggleEditForm();
            }}
            style={{ marginLeft: "1rem", width: "50%" }}
        >
            <TextField
                margin='normal'
                value={value}
                onChange={handleChange}
                fullWidth
                autoFocus
            />
            <TextField
                margin='normal'
                value={value}
                onChange={handleChange}
                fullWidth
                autoFocus
            />
        </form>
    );
}
export default EditProductForm;
