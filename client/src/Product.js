import React from "react";
import useToggleState from "./hooks/useToggleState";
import EditProductForm from "./EditProductForm";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";

function Product({ id, name, price, removeProduct, editProduct }) {
    const [isEditing, toggle] = useToggleState(false);
    return (
        <ListItem style={{ height: "64px" }}>
            {isEditing ? (
                <EditProductForm
                    editProduct={editProduct}
                    id={id}
                    name={name}
                    price={price}
                    toggleEditForm={toggle}
                />
            ) : (
                <>
                    <ListItemText>
                        {name}
                    </ListItemText>
                    <ListItemText>
                        {price} Ft
                    </ListItemText>
                    <ListItemSecondaryAction>
                        <IconButton aria-label='Delete' onClick={() => removeProduct(id)}>
                            <DeleteIcon />
                        </IconButton>
                        {/*<IconButton aria-label='Edit' onClick={toggle}>*/}
                        {/*    <EditIcon />*/}
                        {/*</IconButton>*/}
                    </ListItemSecondaryAction>
                </>
            )}
        </ListItem>
    );
}

export default Product;
