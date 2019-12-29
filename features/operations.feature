Feature: Different operations

    Here we use different operations like addition, subtraction, multiplication,
    divion, modulo.

    Scenario: Use all of operations.
        Given the calculator
        When add 7
        And multiply by 5
        And divide by 3
        And subtract 3
        And modulo 5
        And multiply by 3
        Then result should be 11