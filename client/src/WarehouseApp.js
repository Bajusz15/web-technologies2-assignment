import React, { useEffect } from "react";
import { useState } from "react";
import ProductList from "./ProductList";
import ProductForm from "./ProductForm";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import useTodoState from "./hooks/useProductState";
async function getInitialProducts() {
    return await fetch("http://localhost:5000/products/")
        .then(res => res.json())
        .then(
            (result) => {
                // setProducts([...products, { id: uuid(), name: name, price: price,  completed: false }]);
                return result;
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
                //do nothing
                return [];
            }
        );

}
function WarehouseApp() {

    //const [products, setProducts] = useState({ products: [] });

    const { products, addProduct, removeProduct, editProduct } = useTodoState(
        []
    );

    useEffect(() => {
        window.localStorage.setItem("products", JSON.stringify(products));
    }, [products]);

    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: "100vh",
                backgroundColor: "#fafafa"
            }}
            elevation={0}
        >
            <AppBar color='primary' position='static' style={{ height: "64px" }}>
                <Toolbar>
                    <Typography color='inherit'>WAREHOUSE APP</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify='center' style={{ marginTop: "1rem" }}>
                <Grid item xs={11} md={8} lg={4}>
                    <ProductForm addProduct={addProduct} />
                    <ProductList
                        products={products}
                        removeProduct={removeProduct}
                        editProduct={editProduct}
                    />
                </Grid>
            </Grid>
        </Paper>
    );
}
export default WarehouseApp;
