/// <reference types="cypress" />


const valueField='input'
const saveBillBtn ='.blue'


function NewBill(cy, value, contentToConfirm){
    cy.get(valueField).type(value)
    cy.get(saveBillBtn).click()
    cy.contains(contentToConfirm)
}

module.exports = {
    NewBill
}