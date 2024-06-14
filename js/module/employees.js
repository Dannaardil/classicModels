import { connection } from '../../helpers/connection.js';
//2
export const getEmployeesFromOffice = async () => {
    const [results] = await connection.query('select lastname, firstname from employees where officecode = 1');
    return results;
}
//7. **Lista de todos los empleados con su jefe (si tienen):**

export const getEmployeesWithBoss = async () => {
    const [results] = await connection.query('select lastName, employeeNumber, reportsTo, jobTitle from employees WHERE reportsTo is not null')
    return results;
}


//multitable
// 2. **Listar todos los empleados junto con la oficina en la que trabajan:**

export const getEmployeesWithOffice = async () => {
    const [results] = await connection.query('select employeeNumber, lastName, firstName, officeCode, city from employees inner join offices using (officeCode) order by employeeNumber');
    return results;
}
