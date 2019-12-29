Feature: Addition

    Adding numbers together.

    Scenario: Add 1 to 3
        Given the calculator
        When first number is 1
        And second number is 3
        And we add then together
        Then result should be 4

    Scenario: Add 1.1 to 2.2
        Given the calculator
        When first number is 1.1
        And second number is 2.2
        And we add then together
        Then result should be 3.3
