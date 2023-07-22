// Write your solution in this file!
let employee = {
    name: 'Sam',
    streetAdress:"11 Broadway"
}
function updateEmployeeWithKeyAndValue(employee, key, value) {
    let updatedEmployee = {...employee}
    updatedEmployee[key]=value;
    return updatedEmployee
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key = "streetAddress", value = "12 Broadway") {
    employee[key] = value;
    return employee
    
}
function deleteFromEmployeeByKey(employee, key="name") {
    let newEmployee = {...employee}
    newEmployee[key] = undefined
    return newEmployee
}
function destructivelyDeleteFromEmployeeByKey(employee, key="name") {
    employee[key] = undefined
    return employee
}

