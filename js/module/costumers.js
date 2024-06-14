import { connection } from '../../helpers/connection.js';


//3
export const getOneClient= async () => {
    const [results] = await connection.query('select customerName, contactLastName, customerNumber from customers where customerNumber = 103');
    return results;
}

//9. **Listar todos los clientes en una ciudad específica (por ejemplo, 'Madrid'):**

export const getClientsFromOneCity= async () => {
    const [results] = await connection.query('select customerName, contactLastName, customerNumber from customers where city = Madrid');
    return results;
}

//multitabla
// 3. **Listar todos los clientes junto con su representante de ventas:**

export const getClientsWithSalesRep = async () => {
    const [results] = await connection.query('SELECT lastName,firstName,customerName,jobTitle FROM customer inner JOIN employees ON employeeNumber = salesRepEmployeeNumber ORDER BY customerName;');
    return results;
}