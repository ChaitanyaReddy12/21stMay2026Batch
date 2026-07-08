Feature: Locators

    @regression
    Scenario: Verify Playwright Locators
        Given I launch the browser
        Then I launch the test automation practice application
        And I Verify Playwright Locators
        And I close the browser

    @regression
    Scenario: Verify Playwright Locators part2
        Given I launch the browser
        And I Verify Playwright Locators part2
        And I close the browser

    @regression
    Scenario: Verify selenium Locators
        Given I launch the browser
        Then I launch the test automation practice application
        And I Verify selenium Locators
        And I close the browser

    @regression
    Scenario: Verify selenium Xpath methods
        Given I launch the browser
        Then I launch the test automation practice application
        And I Verify selenium Xpath methods
        And I close the browser

    @regression
    Scenario: Verify selenium Xpath Axes
        Given I launch the browser
        Then I launch the test automation practice application
        And I Verify selenium Xpath Axes
        And I close the browser