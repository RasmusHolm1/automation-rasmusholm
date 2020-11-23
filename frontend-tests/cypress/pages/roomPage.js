/// <reference types="cypress" />


const createBtn ='h2 > .btn'



function navNewRoomPage(cy, contentToConfirm){
    cy.get(createBtn).click()
    cy.contains(contentToConfirm)
}



module.exports ={
    navNewRoomPage
}