import {
    getStockProducts,
    getTotalStockProducts,
    getProductsMoreThan50,
    getTotalOrderedProducts

    




} from 'js/module/products.js'


import {
    getPaymentsFromOneClient




} from  'js/module/payments.js'

import {
    getShippedOrders,
    getOrdersFromOneClient


}from 'js/module/orders.js'

import {
    getOfficesFromOneCountry,
    getOfficesWithEmployees

} from 'js/module/offices.js'

import {
    getEmployeesFromOffice,
    getEmployeesWithBoss,
    getEmployeesWithOffice

}from 'js/module/employees.js'
import {
    getOneClient,
    getClientsFromOneCity,
    getClientsWithSalesRep

} from 'js/module/costumers.js'
console.log(await getStockProducts())