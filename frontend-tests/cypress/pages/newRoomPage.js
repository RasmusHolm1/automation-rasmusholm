/// <reference types="cypress" />


const Category =':nth-child(1) > select'
const Number =':nth-child(2) > input'
const Floor=':nth-child(3) > input'

const Checkbox='.checkbox'

const Price=':nth-child(5) > input'
const Features=':nth-child(6) > select'
const saveBtn='.blue'


function NewRoom(cy, roomType, roomNumber, floor, price, features, contentToConfirm){
    cy.get(Category).select(roomType)
    cy.get(Number).type(roomNumber)
    cy.get(Floor).type (floor)
    cy.get(Checkbox).click()
    cy.get(Price).type(price)
    cy.get(Features).select(features)
    cy.get(saveBtn).click()
    cy.contains(contentToConfirm)
}


module.exports ={
    NewRoom
}