/// <reference types="cypress" />

const titleOfDashboardPage = 'Testers Hotel'

const loggedInUser = '.username'

const logoutBtn = '.user > .btn'
const RoomBtn =':nth-child(1) > .btn'
const BillBtn=':nth-child(3) > .btn'
const ClientsBtn ='.blocks > :nth-child(2) > .btn'


function checkTitleOfDashboardPage(cy){
    cy.title().should('eq', titleOfDashboardPage)
}
function checkLoggedInUser(cy, contentToConfirm){
    cy.get(loggedInUser).should('include.text', contentToConfirm)
}
function performLogout(cy, contentToConfirm){
    cy.get(logoutBtn).click()
    cy.contains(contentToConfirm)
}
function navRoomsPage(cy, contentToConfirm){
    cy.get(RoomBtn).click()
    cy.contains(contentToConfirm)
}
function navClientsPage(cy, contentToConfirm){
    cy.get(ClientsBtn).click()
    cy.contains(contentToConfirm)
}
function navBillsPage(cy, contentToConfirm){
    cy.get(BillBtn).click()
    cy.contains(contentToConfirm)
}

module.exports = {
    checkTitleOfDashboardPage,
    performLogout,
    checkLoggedInUser,
    navRoomsPage,
    navClientsPage,
    navBillsPage
}