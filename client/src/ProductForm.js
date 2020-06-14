import React from "react";
import Input from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl"
import Paper from "@material-ui/core/Paper";
import InputLabel from "@material-ui/core/InputLabel"
import Button from "@material-ui/core/Button"
import useInputState from "./hooks/useInputState";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        '& .MuiTextField-root': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));

function ProductForm({ addProduct}) {
    const classes = useStyles();
    const [name, price, handleChange, reset] = useInputState({name:'', price:''});
    return (
        <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
            <form className={classes.root}
                onSubmit={e => {
                    e.preventDefault();
                    addProduct(name,price);
                    //reset();
                }}
            >
                <FormControl>
                    <InputLabel shrink htmlFor="my-input">Name</InputLabel>
                    <Input
                        id='my-input'
                        value={name}
                        name='name'
                        onChange={handleChange}
                        margin='normal'
                    />
                </FormControl>
                <FormControl>
                    <InputLabel shrink htmlFor="price">Price</InputLabel>
                    <Input
                        id={'price'}
                        value={price}
                        name='price'
                        onChange={handleChange}
                        margin='normal'
                        type='number'
                    />
                </FormControl>
                <Button variant="contained" color="primary" type={"submit"}>
                    Submit
                </Button>
            </form>
        </Paper>
    );
}
export default ProductForm;
