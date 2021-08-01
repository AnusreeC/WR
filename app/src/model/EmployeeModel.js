/* eslint-disable prettier/prettier */
export interface Employee {
    employeeId : Int16Array,
    employeeName : String,
    userName: String,
    emailId: String,
    profileImageUrl: String,
    address: Address,
    phone: String,
    website: String,
    company: Company
}
export interface Address {
    street: String,
    suite: String,
    city: String,
    zipCode: String,
    geo: Location
}
export interface Location {
    lattitude: String,
    longitude: String
}
export interface Company {
    name: String,
    catchPhrase: String,
    bs: String
}
