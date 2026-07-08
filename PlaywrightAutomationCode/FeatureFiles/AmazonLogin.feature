Feature: Amazon login functionality

  @amazon
  Scenario: Login to Amazon.in with valid credentials
    Given I launch the browser
    Then verify amazon login
    And I close the browser
