Feature: Addition

    Adding numbers together.

    Scenario Outline: Add integer, floating point and negative numbers.
        Given the calculator
        When first number is <first number>
        And second number is <second number>
        And we add them together
        Then result should be <result>
    
    Examples:
    | first number | second number | result |
    | 1            | 3             | 4      |
    | 1.1          | 2.2           | 3.3    |
    | -1           | 1             | 0      |