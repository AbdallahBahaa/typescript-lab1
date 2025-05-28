function logProduct(product) {
    console.log("product id = ".concat(product.id, "\n    product name is ").concat(product.name, "\n    product price = ").concat(product.price, "\n    in stock ").concat(product.inStock));
}
function wrapValue(value) {
    return [value];
}
;
function proSucess(result) {
    if (result.success) {
        logProduct(result.data);
    }
    else {
        console.log("Error: ".concat(result.message));
    }
}
// -------------------------------------------------------------
var exampleProduct = {
    id: 211,
    name: "Iphone 15",
    price: 1299.99,
    inStock: true,
};
var result = {
    data: exampleProduct,
    success: true,
    message: "Product retrieved successfully",
};
proSucess(result);
