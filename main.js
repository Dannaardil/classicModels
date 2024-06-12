import { connection } from '../../helpers/connection.js';

export const getAllLastName = async () => {
    const [results] = await connection.query('SELECT lastName FROM employees');
    return results;
}