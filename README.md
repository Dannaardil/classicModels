1. **Obtener todos los productos en stock:**

   ```sql
   select productName, quantityInStock from products;
   ```

2. **Lista de empleados que trabajan en una oficina específica (por ejemplo, '1'):**

   ```sql
   select lastname, firstname from employees where officecode = '1';
   ```

3. **Detalles de un cliente específico (por ejemplo, customerNumber = 101):**

   ```sql
   select customerName, contactLastName, customerNumber from customers where customerNumber = 103
   ```

4. **Listar todos los pagos realizados por un cliente específico (por ejemplo, customerNumber = 101):**

   ```sql
   select customerNumber, checkNumber, paymentDate from payments where customerNumber = 103;
   ```

5. **Obtener todos los pedidos con estado 'Shipped':**

   ```sql
   select orderNumber, orderDate, requiredDate, shippedDate, status, customerNumber from orders where status = 'Shipped';
   ```

6. **Cantidad total de productos en stock:**

   ```sql
   SELECT COUNT(*) FROM products;
   ```

7. **Lista de todos los empleados con su jefe (si tienen):**

   ```sql
   select lastName, employeeNumber, reportsTo, jobTitle from employees WHERE reportsTo is not null;
   ```

8. **Detalles de oficinas en un país específico (por ejemplo, 'USA'):**

   ```sql
   select officeCode, city, country, phone from offices where country = 'USA';
   ```

9. **Listar todos los clientes en una ciudad específica (por ejemplo, 'Madrid'):**

   ```sql
   SELECT customerName, contactLastName, contactFirstName, city  from customers where city = 'Madrid';
   ```

10. **Productos con precio de compra mayor a 50:**

    ```sql
    select productCode,  productName, productLine, buyPrice from products where buyPrice >50; 
    ```

### Consultas Multitabla

1. **Obtener todos los pedidos realizados por un cliente específico (por ejemplo, customerNumber = 101) con detalles del producto:**

   ```sql
   SELECT 
       orderNumber,
       orderDate,
       productName,
       quantityOrdered,
       priceEach
   FROM
       orders
   INNER JOIN
       orderdetails USING (orderNumber)
   INNER JOIN
       products USING (productCode)
   ORDER BY 
       orderNumber, 
       orderLineNumber;
   ```

2. **Listar todos los empleados junto con la oficina en la que trabajan:**

   ```sql
   select employeeNumber, lastName, firstName, officeCode, city from employees inner join offices using (officeCode)
   order by employeeNumber
   ```

3. **Listar todos los clientes junto con su representante de ventas:**

   ```sql
   SELECT 
       lastName, 
       firstName, 
       customerName, 
       jobTitle
    
    
   FROM
   customers
   inner JOIN employees ON 
       employeeNumber = salesRepEmployeeNumber
   
   
   ORDER BY 
       customerName;
    
   ```

4. **Obtener el nombre y la cantidad total ordenada de cada producto:**

   ```sql
   SELECT productName,  COUNT(*) FROM products group by productName;
   ```

5. **Listar todas las oficinas y el número de empleados en cada una:**

   ```sql
   SELECT 
   officeCode, city, count(employeeNumber)
    
    
   FROM
   offices
   inner JOIN employees using (officeCode)
   
   group by officeCode;
   ```