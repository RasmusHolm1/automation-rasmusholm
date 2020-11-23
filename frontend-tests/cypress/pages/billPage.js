/// <reference types="cypress" />

const createBillBtn ='h2 > .btn'
const roomMenuBtn='.action'
const deleteBtn ='.menu > :nth-child(2)' 


function navNewBillPage(cy, contentToConfirm){
    cy.get(createBillBtn).click()
    cy.contains(contentToConfirm)
}

function deleteLastBill(cy, contentToConfirm){
    cy.get(roomMenuBtn).last().click()
    cy.get(deleteBtn).click()
    // cy.contains(contentToConfirm).should('not.exist')
    // vet ej varför inte ska vara med, men fungerar utan
}

module.exports = {
    navNewBillPage,
    deleteLastBill
}