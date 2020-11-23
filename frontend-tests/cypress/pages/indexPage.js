/// <reference types="cypress" />

const titleOfIndexPage ='Testers Hotel'
const userNameTextField =':nth-child(1) > input'
const passwordTextField =':nth-child(2) > input'
const loginButton= '.btn'

function checkTitleOfIndexPage(cy){
    cy.title().should('eq', titleOfIndexPage)
}
function performValidLogin(cy, username, password, contentToConfirm){
    cy.get(userNameTextField).type(username)
    cy.get(passwordTextField).type(password)
    cy.get(loginButton).click()
    cy.contains(contentToConfirm)
}

module.exports ={
    checkTitleOfIndexPage,
    performValidLogin
}