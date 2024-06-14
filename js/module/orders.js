import { connection } from '../../helpers/connection.js';


//5
export const getShippedOrders= async () => {
    const [results] = await connection.query(`select orderNumber, orderDate, requiredDate, shippedDate, status, customerNumber from orders where status = 'Shipped'`);
    return results;
}

// ### Consultas Multitabla

// 1. **Obtener todos los pedidos realizados por un cliente específico (por ejemplo, customerNumber = 101) con detalles del producto:**

export const getOrdersFromOneClient = async () => {
    const [results] = await connection.query(' SELECT orderNumber,orderDate, productName,quantityOrdered,priceEach FROM orders INNER JOIN orderdetails USING (orderNumber) INNER JOIN products USING (productCode) ORDER BY orderNumber, orderLineNumber');
    return results;
}
