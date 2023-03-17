// const { expect, request } = require('@playwright/test');
// const { APIUtils } = require('../tests/utils/APIUtils')

// class UIValidationsforAPI {
//     constructor(page, request) {
//         this.page = page;
//         this.request = request;
//         this.LOGIN = process.env.LOGIN
//         this.PASSWORD = process.env.PASSWORD
//         this.loginEmail = page.locator('#user')
//         this.continueButton = page.locator('#login')
//         this.loginPassword = page.locator('#password')
//         this.loginButton = page.locator('#login-submit')
//         this.boards = page.locator('.board-tile-details')
//         this.boardTitle = page.locator('.js-board-editing-target.board-header-btn-text')
//         this.lists = page.locator('#board .js-list-content')
//         this.listsHeaders = page.locator('.list-header-name')
//         this.card = page.locator('.list-card')
//         this.workspaceSwicher = page.locator('[data-testid="workspace-switcher"]')
//         this.yourWorkspace = page.locator('[data-testid="workspace-switcher-popover-tile"]')
        
//     }
//     async login(){
//     await this.page.goto('https://trello.com/login')
//     await this.loginEmail.type(this.LOGIN)
//     await this.continueButton.click()
//     await this.loginPassword.waitFor()
//     await this.loginPassword.type(this.PASSWORD)
//     await this.loginButton.click()
// }
// async addBoardByAPICheckOnUI(boardName){
    
//     const apiRequest = new APIUtils(this.request)
//     var board = await apiRequest.createBoard(boardName)
//     let boardLink = (board.url).split('com')[1]
//     await this.page.locator('[href="'+boardLink+'"]').click()
//     expect (await this.boardTitle).toHaveText(boardName)
//     expect (await this.lists).toHaveCount(3)
// }
// async addListByAPICheckOnUI(boardName, listName){
//     const apiRequest = new APIUtils(this.request)
//     var board = await apiRequest.createBoard(boardName)
//     var list = await apiRequest.createList(listName)
//     console.log(list)
//     let boardLink = (board.url).split('com')[1]
//     await this.page.locator('[href="'+boardLink+'"]').click()
//     expect (await this.lists).toHaveCount(4)
//     expect (await this.listsHeaders.nth(0)).toHaveText(listName)
// }
// async addCartByAPICheckOnUI(boardName, listName, cardName){
//     const apiRequest = new APIUtils(this.request)
//     var board = await apiRequest.createBoard(boardName)
//     await apiRequest.createList(listName)
//     await apiRequest.createCard(cardName)
//     let boardLink = (board.url).split('com')[1]
//     await this.page.locator('[href="'+boardLink+'"]').click()
//     expect (await this.card).toHaveJSProperty('innerText', cardName)
//     expect (( this.lists.nth(0)).filter({has: this.card})).toHaveCount(1)
// }
// async moveCartByAPICheckOnUI(boardName, listName, cardName,listNumber){
//     const apiRequest = new APIUtils(this.request)
//     var board = await apiRequest.createBoard(boardName)
//     await apiRequest.createList(listName)
//     await apiRequest.createCard(cardName)
//     let boardLink = (board.url).split('com')[1]
//     await this.page.locator('[href="'+boardLink+'"]').click()
//     expect (await this.card).toHaveJSProperty('innerText', cardName)
//     expect (( this.lists.nth(0)).filter({has: this.card})).toHaveCount(1)
//     await apiRequest.getExistingListId(listNumber)
//     await apiRequest.moveCardFromCreatedListToExistingList()
//     expect (( this.lists.nth(0)).filter({has: this.card})).toHaveCount(0)
//     expect (( this.lists.nth(listNumber)).filter({has: this.card})).toHaveCount(1)
// }
// async deleteCartByAPICheckOnUI(boardName, listName, cardName){
//     const apiRequest = new APIUtils(this.request)
//     var board = await apiRequest.createBoard(boardName)
//     await apiRequest.createList(listName)
//     await apiRequest.createCard(cardName)
//     let boardLink = (board.url).split('com')[1]
//     await this.page.locator('[href="'+boardLink+'"]').click()
//     expect(await this.card).toHaveCount(1)
//     await apiRequest.deleteCard()
//     await this.page.reload()
//     expect(await this.card).toHaveCount(0)
// }
// async deleteBoardByAPICheckOnUI(boardName){
//     const apiRequest = new APIUtils(this.request)
//     var board = await apiRequest.createBoard(boardName)
//     let boardLink = (board.url).split('com')[1]
//     await this.page.locator('[href="'+boardLink+'"]').click()
//     await apiRequest.deleteBoard()
//     await this.page.reload()
//     await this.workspaceSwicher.click()
//     await this.yourWorkspace.click()
//     expect (await this.page.locator('[href="'+boardLink+'"]')).toHaveCount(0)
// }
// async deleteAllBoardByAPICheckOnUI(){
//     const apiRequest = new APIUtils(this.request)
//     await apiRequest.deleteAllBoards()
//     expect (await this.boards).toHaveCount(0)
// }
// }
// module.exports = { UIValidationsforAPI };