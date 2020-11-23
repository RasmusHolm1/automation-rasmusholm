/// <reference types="cypress" />

const menuBtn= '.action'
const editBtn= '.menu > :nth-child(1)'
const save= 'a.btn.blue'
const Checkbox= '.checkbox'


function changeBill(cy){
    cy.get(menuBtn).last().click()
    cy.get(editBtn).click()
    // cy.contains(contentToConfirm)
    cy.get(Checkbox).click()
    cy.get(save).click()
    
}


module.exports = {
    changeBill
}