/// <reference types="cypress" />


const createBtn ='h2 > .btn'
const DashboardBtn=':nth-child(3) > .btn'


function navNewClientPage(cy, contentToConfirm){
    cy.get(createBtn).click()
    cy.contains(contentToConfirm)
}
function navBackToDashboard (cy, contentToConfirm){
    cy.get(DashboardBtn).click()
    cy.contains(contentToConfirm)
}

module.exports ={
    navNewClientPage,
    navBackToDashboard
}