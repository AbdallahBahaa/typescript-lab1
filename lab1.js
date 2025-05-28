function logProduct(product) {
    console.log(`product id = ${product.id}
    product name is ${product.name}
    product price = ${product.price}
    in stock ${product.inStock}`);
}

function proSucess(result) {
    if (result.success) {
        logProduct(result.data);
    } else {
        console.log(Error: ${result.message});
    }
}

// -------------------------------------------------------------

const exampleProduct = {
    id: 211,
    name: "Iphone 15",
    price: 1299.99,
    inStock: true,
};

const result = {
    data: exampleProduct,
    success: true,
    message: "Product retrieved successfully",
};

proSucess(result);
