## **TODO LIST APPLICATION**
**Written in TestCafe Framework**
- Design Pattern: _Page Object Model_
  - Page object model is a design pattern to organize automated tests to separate the web pages into another class. It enhances the code readability and reusability and makes maintance easier.
- Language: _Javascript_

**SET UP**
- Required softwares: `Node.js` and `npm`
- Clone the project from  [**https://github.com/gkb67/ToDoApplication**](https://github.com/gkb67/ToDoApplication.git)
- Install the dependencies: `npm install`

**Dependencies**
- TestCafe
- Testcafe-reporter-html

**Project Structure**
- Pages: Contains all page object classes
- Tests: Contains all test classes 

**How to Run Tests**
- All test runs update report file with the results
  - To run all tests: "npm run test:allTests"
  - To run only positive tests: "npm run test:positiveTests"
  - To run only negative tests: "npm run test:negativeTests"

**Report Example**
![image](https://github.com/gkb67/ToDoApplication/assets/69124076/3ea598bd-1daf-43f0-92c0-948ceb13d2c1)


**HOW TESTS ARE ORGANIZED**
- Test are organized in 2 classes. They are divided as positive and negative tests.

**TEST SCENARIOS**
- **Positive tests**
  - Scenario 1 – Verify that website is opened succussfully
  - Scenario 2 - Verify that user can add a new task to the list
  - Scenario 2 – Verify that user can edit an existing task in the list
  - Scenario 3 – Verify that user can delete a task from the list
  - Scenario 4 - Verify that user can complete a task in the list
  - Scenario 5 - Verify that user can complete and clear a task in the list
- **Negative tests**
  - Scenario 1 - Verify that completed task is not shown in the active task list
  - Scenario 2 - Verify that active task is not shown in the completed task list
  - Scenario 3 - Verify that user cannot add and save a task as with empty text
  - Scenario 4 - Verify that user cannot edit an existing task with empty text

