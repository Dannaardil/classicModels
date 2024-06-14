import { connection } from '../../helpers/connection.js';


//1
export const getStockProducts = async () => {
    const [results] = await connection.query('select productName, quantityInStock from products');
    return results;
}

//6 
export const getTotalStockProducts = async () => {
    const [results] = await connection.query('SELECT COUNT(*) FROM products');
    return results;
}

// 10. **Productos con precio de compra mayor a 50:**

export const getProductsMoreThan50 = async () => {
    const [results] = await connection.query('select productCode,  productName, productLine, buyPrice from products where buyPrice >50');
    return results;
}

// multitabla
// 4. **Obtener el nombre y la cantidad total ordenada de cada producto:**

export const getTotalOrderedProducts = async () => {
    const [results] = await connection.query(' SELECT productName,  COUNT(*) FROM products group by productName');
    return results;
}