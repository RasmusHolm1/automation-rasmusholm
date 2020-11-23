/// <reference types="cypress" />

import * as indexF from '../pages/indexPage'
import * as dashboardF from '../pages/dashboardPage'
import * as target from '../targets/targets'
import * as roomsFuncs from '../pages/roomPage'
import * as clientsFuncs from '../pages/clientPage'
import * as newClientFuncs from '../pages/newClientPage'
import * as newRoomFuncs from '../pages/newRoomPage'
import * as billsFuncs from '../pages/billPage'
import * as editBilllF from '../pages/editBillPage'
import * as newBillFuncs from '../pages/newBillPage'



describe('Test suite', function(){
    beforeEach(()=>{
        cy.visit('http://localhost:3000')
        indexF.checkTitleOfIndexPage(cy)
        indexF.performValidLogin(cy, target.username, target.password, 'Tester Hotel Overview')
        dashboardF.checkLoggedInUser(cy, target.username)
    })
    it('1 - Create a room', function(){
        dashboardF.navRoomsPage(cy, 'Rooms')
        roomsFuncs.navNewRoomPage(cy, 'New Room')
        newRoomFuncs.NewRoom(cy, 'twin', '101', '1', '10000',['Sea View'], 'Floor 1, Room 101')
    })
   
    it('2 - New client', function (){
        dashboardF.navClientsPage(cy, 'Clients')
        clientsFuncs.navNewClientPage(cy, 'New Client')
        newClientFuncs.createClient(cy, 'Carl Andersson', 'carl.andersson@testmail.com', '0705555555', 'Carl Andersson')
    })
    
    it('3 - New bill', function (){
        dashboardF.navBillsPage(cy, 'Bills')
        billsFuncs.navNewBillPage(cy, 'New Bill')
        newBillFuncs.NewBill(cy, '3000', 'Bills')
    })

    it('4 - changeBill', function (){
        dashboardF.navBillsPage(cy, 'Bills')
        editBilllF.changeBill(cy, 'Bills')
    })
    // changeBill

    it('5 - Delete last bill', function (){
        dashboardF.navBillsPage(cy, 'Bills')
        billsFuncs.deleteLastBill(cy)
    })
    


    afterEach(()=>{
        dashboardF.performLogout(cy, 'Login')
    })
})