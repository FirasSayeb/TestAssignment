# Cypress Cucumber Testing Project

This project demonstrates how to use Cypress with the Cucumber preprocessor to test a web application's functionalities such as login, search, and add operations.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Installation](#installation)
- [Running the Tests](#running-the-tests)
- [Usage](#usage)

---

## Overview

This project leverages **Cypress** and **Cucumber** to perform end-to-end testing of a simple web application. The application includes three main functionalities:
1. **Login**
2. **Search**
3. **Add**

Each functionality has corresponding tests written in the Gherkin syntax, ensuring readable and maintainable test scenarios.

---

## Features

- **Login Tests**: Verifies that users can log in with valid credentials.
- **Search Tests**: Checks if the search functionality operates as expected.
- **Add Tests**: Ensures that items can be successfully added to the application.

---

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/cypress-cucumber-testing.git
   cd cypress-cucumber-testing
Install dependencies:

bash
Copier
Modifier
npm install
Install the Cypress Cucumber Preprocessor:

bash
Copier
Modifier
npm install cypress-cucumber-preprocessor --save-dev

Running the Tests
Open the Cypress Test Runner:

bash
Copier
Modifier
npx cypress open
Run tests via the CLI:

bash
Copier
Modifier
npx cypress run

Usage
Scenarios Overview
Login Feature
Given: I open the login page.
When: I submit valid credentials.
Then: I should be logged in successfully.
Search Feature
Given: I open the search page.
When: I submit a search request.
Then: The search results should appear.
Add Feature
Given: I open the add page.
When: I submit an item to add.
Then: The item should be added successfully.

