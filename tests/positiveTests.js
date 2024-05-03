'use strict';

import { ClientFunction, Selector } from "testcafe";
import homePage from "../pages/homePage";

const url = 'https://todomvc.com/examples/react/dist/'
const getUrl = ClientFunction(() => window.location.href)

fixture('Home Page')
    .page(url);

test('Loding ToDo List Application', async t => {
    await t.expect(getUrl()).contains(url)
});

test('Adding a new Task to the list', async t => {
    await homePage.addTask('Task 1')
    await t.expect(Selector('.todo-list label').withText('Task 1').exists).ok();
});

test('Editing a task in the list', async t => {
    await homePage.editTask('Task 1', 'Edited Task 1');
    await t.expect(Selector('.todo-list label').withText('Edited Task 1').exists).ok();
});

test('Deleting a task from the list', async t => {
    await homePage.deleteTask('Task 1')
    await t.expect(Selector('.todo-list label').withText('Task 1').exists).notOk();
});

test('Completing a task in the list', async t => {
    await homePage.completeTask('Task 1')
    await t.click(Selector('a').withText('Completed'))
    await t.expect(Selector('.todo-list label').withText('Task 1').exists).ok()
});

test('Completing and clearing a task in list', async t => {
    await homePage.completeAndClearTask('Task 1')
    await t.expect(Selector('.todo-list label').withText('Task 1').exists).notOk()
});
