
import { connection } from '../../helpers/connection.js';


///8. **Detalles de oficinas en un país específico (por ejemplo, 'USA'):**

export const getOfficesFromOneCountry= async () => {
    const [results] = await connection.query(`select officeCode, city, country, phone from offices where country = 'USA'`);
    return results;
}

//multitable
// 5. **Listar todas las oficinas y el número de empleados en cada una:**


export const getOfficesWithEmployees = async () => {
    const [results] = await connection.query('SELECT officeCode, city, count(employeeNumber) FROM offices inner JOIN employees using (officeCode) group by officeCode;');
    return results;
}