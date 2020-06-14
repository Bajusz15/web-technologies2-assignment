import React from "react";
import Product from "./Product";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";

function ProductList({products, removeProduct,  editProduct }) {
    if (products.length)
        return (
            <Paper>
                <List>
                    {products.map((product, i) => (
                        // To add a key to a fragment, we have to use the long-hand version
                        // rather than <> </>, we have to use <React.Fragment>
                        <React.Fragment key={i}>
                            <Product
                                {...product}
                                key={product.id}
                                removeProduct={removeProduct}
                                editProduct={editProduct}
                            />
                            {i < products.length - 1 && <Divider />}
                        </React.Fragment>
                    ))}
                </List>
            </Paper>
        );
    return null;
}
export default ProductList;
