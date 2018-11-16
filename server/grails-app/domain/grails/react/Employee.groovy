package grails.react

import grails.rest.*

@Resource(uri='/employee')
class Employee {

    String firstname
    String lastname
    String username
    String email
    String country
    String state
    String city
    String telephone
    String address
    String postalCode

    static constraints = {
        firstname blank:false
        lastname blank:false
        email email:true, blank:false, unique:true
        username unique:true, blank:false
        country blank:false
        state blank:false
        city blank:false
        address blank:false
    }

    String toString() {
        firstname
    }
}
