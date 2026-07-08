Feature: Filters And Alerts

    Background: common steps
        Given I launch the browser

    @regression
    Scenario: verify playwright filters
        And I verify playwright filters
        And I close the browser

    @regression
    Scenario: verify playwright simple alert
        And I verify playwright simple alert
        And I close the browser

    @regression
    Scenario: verify playwright confirmation alert ok
        And I verify playwright confirmation alert ok
        And I close the browser

    @regression
    Scenario: verify playwright confirmation alert dismiss
        And I verify playwright confirmation alert dismiss
        And I close the browser

    @regression
    Scenario: verify playwright prompt alert without text and ok
        And I verify playwright prompt alert without text and ok
        And I close the browser

    @regression
    Scenario: verify playwright prompt alert with text and ok
        And I verify playwright prompt alert with text and ok
        And I close the browser

    @regression
    Scenario: verify playwright prompt alert dismiss
        And I verify playwright prompt alert dismiss
        And I close the browser

