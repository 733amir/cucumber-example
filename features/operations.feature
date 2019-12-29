Feature: Different operations

    Here we use different operations like addition, subtraction, multiplication,
    divion, modulo.

    Background:
        Given the calculator

    Scenario: Use all of operations.
        When add 7
        And multiply by 5
        And divide by 3
        And subtract 3
        And modulo 5
        And multiply by 3
        Then result should be 11

    Scenario: Divide by 0.
        When divide by 0
        Then an error should happen