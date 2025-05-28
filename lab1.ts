interface Product ={
  id:number;
  name:string;
  price: number;
  inStock: boolean;
}

function logProduct(product:Product):void{
    console.log(`product id = ${product.id}
    product name is ${product.name}
    product price = ${product.price}
    in stock ${product.inStock}`);
}

type ProductOrError = Product | string;

function wrapValue<T>(value: T): T[];

interface ApiResult<T>{
    data: T;
    success: boolean;
    message: string;
}

function proSucess(result: ApiResult<Product>): void {
  if (result.success) {
    logProduct(result.data);
  } else {
    console.log(Error: ${result.message});
  }
}

// -------------------------------------------------------------

const exampleProduct: Product = {
  id: 211,
  name: "Iphone 15",
  price: 1299.99,
  inStock: true,
};

const result: ApiResult<Product> = {
  data: exampleProduct,
  success: true,
  message: "Product retrieved successfully",
};

proSucess(result);
