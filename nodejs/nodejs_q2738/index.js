const writeDynamoRow = async ({ item, tableName }) => {
    /* Call DynamoDB to add the item to the table */
    throw new Error('Error writing row');
}

const addProduct = async (product) => {
    try {
        await writeDynamoRow({ item: product, tableName: 'products' });
        return true;
    } catch (error) {
        console.log(error);
        return false;
    } finally {
        console.log('Performing database cleanup...');
    }
}

const addProductToCart = async (product) => {
    const result = await addProduct(product);

    if (result) {
        console.log('Product added.');
    } else {
        console.log('Product not added!');
    }
}

addProductToCart({});
