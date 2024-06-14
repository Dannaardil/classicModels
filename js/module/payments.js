import { connection } from '../../helpers/connection.js';
//4
export const getPaymentsFromOneClient = async () => {
    const [results] = await connection.query(`select customerNumber, checkNumber, paymentDate from payments where customerNumber = '103'`);
    return results;
}