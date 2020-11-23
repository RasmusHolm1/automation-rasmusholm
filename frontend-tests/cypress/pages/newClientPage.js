/// <reference types="cypress" />


const nameInput =':nth-child(1) > input'
const emailInput =':nth-child(2) > input'
const telephoneInput=':nth-child(3) > input'
const saveBtn='.blue'

function createClient (cy, name, email, phonenumber, contentToConfirm){
    cy.get(nameInput).type(name)
    cy.get(emailInput).type(email)
    cy.get(telephoneInput).type(phonenumber)
    cy.get(saveBtn).click()
    cy.contains(contentToConfirm)
}


module.exports ={
    createClient
}