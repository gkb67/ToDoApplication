'use strict';

import { Selector } from "testcafe";
import homePage from "../pages/homePage";

const url = 'https://todomvc.com/examples/react/dist/'

fixture('Home Page')
    .page(url);

test('Completed task is not shown in active task list', async t => {
    await homePage.completeTask('Task 1')
    await t.click(Selector('a').withText('Active'))
    await t.expect(Selector('.todo-list label').withText('Task 1').exists).notOk()
});

test('Active task is not shown in completed task list', async t => {
    await homePage.addTask('Task 1')
    await t.click(Selector('a').withText('Completed'))
    await t.expect(Selector('.todo-list label').withText('Task 1').exists).notOk()
});

test('User cannot add a task with empty value', async t => {
    await homePage.addTask(' ')
    await t.expect(Selector('.todo-list label').withText('\n').exists).notOk()
});

test('User cannot edit an existing task with empty value', async t => {
    await homePage.editTask('Task 1', ' ')
    await t.expect(Selector('.todo-list label').withText('\n').exists).notOk()
});
