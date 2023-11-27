Feature: Empty Fields Validation

  Scenario: Submitting the form without filling fields
    Given the user is on the registration page
    When they submit the form without filling fields
    Then an error should be displayed with the message "Please enter a valid name or age (No empty values)"
