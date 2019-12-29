# Engineering Calculator

A calculator for all engineers.

## Dependencies

Installing `node.js` and `npm` on _OS X_:

    $ brew install node

Print `node.js` and `npm` versions to verify successful installation:

    $ node -v
    $ npm -v

## Initialization

To start developing the project we need to initialize a node package. Run:

    $ npm init --yes

## Cucumber

This project is developed using BDD approach. In order to have live and
maintainable behavior specification, we used Cucumber to document behaviors and
run them.

### Installation

The project is written using JavaScript. We need `node.js` and node's package
manager, `npm`, to run behavior specifications.

To install Cucumber run the following command:

    $ npm install cucumber --save-dev

### Run Tests

Edit `package.json` file and put the following instead of the default test
script:

    {
        "scripts": {
            "test": "cucumber-js"
        },
    }

Now run `npm test` and you should see something like following:

    > calculator@1.0.0 test /PATH/TO/THE/PROJECT
    > cucumber-js

    0 scenarios
    0 steps
    0m00.000s