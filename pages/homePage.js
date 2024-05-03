import { Selector, t } from 'testcafe';

class homePage{

    constructor(){
        this.taskInput = Selector('input#todo-input')
        this.taskList = Selector('.todo-list')
        this.deleteButton = Selector('.destroy')
        this.taskEdit = Selector('.todo-list input#todo-input.new-todo')
        this.checkItem = Selector('.todo-list input.toggle')
        this.clearCompletedButton = Selector ('.clear-completed')
    }

    async addTask(taskName){    
        await t.typeText(this.taskInput, taskName)
                .pressKey('enter')
                .wait(2000)
    }

    async editTask(task, newTask){
        await t.typeText(this.taskInput, task).pressKey('enter');
        await t.doubleClick(this.taskList.find('label').withText(task))
        .pressKey('ctrl+a')
        .pressKey('backspace')
        .typeText(this.taskEdit, newTask).pressKey('enter');
    }

    async deleteTask(task){
        await t.typeText(this.taskInput, task).pressKey('enter');
        await t.hover('.todo-list li').click('.destroy');
    }

    async completeTask(task){
        await t.typeText(this.taskInput, task).pressKey('enter');
        await t.click(this.checkItem)
    }

    async completeAndClearTask(task){
        await t.typeText(this.taskInput, task).pressKey('enter');
        await t.click(this.checkItem)
        await t.click(this.clearCompletedButton)
    }
}

export default new homePage();
