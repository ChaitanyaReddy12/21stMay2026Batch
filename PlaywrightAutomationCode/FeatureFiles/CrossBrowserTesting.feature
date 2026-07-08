Feature: Cross Browser Testing

    @regression
    Scenario: verify web table in static way chrome
        Given I launch the browser
        Then I launch the test automation practice application
        And I verify web table in static way
        And I close the browser

    @regression
    Scenario: verify web table in static way firefox
        Given I launch the firefox browser
        Then I launch the test automation practice application
        And I verify web table in static way
        And I close the browser

    @regression
    Scenario: verify web table in static way webkit
        Given I launch the webkit browser
        Then I launch the test automation practice application
        And I verify web table in static way
        And I close the browser

    @regression
    Scenario: verify web table in static way headless
        Given I launch the headless browser
        Then I launch the test automation practice application
        And I verify web table in static way
        And I close the browser
        
