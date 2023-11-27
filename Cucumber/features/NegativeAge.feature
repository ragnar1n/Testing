Feature: User Registration

  Scenario: Adding a user with negative age
    Given the user is on the registration page
    When they fill in the username with "John Doe" and age with "-5"
    And they submit the form
    Then an error should be displayed with the message "Please enter a valid age (higher than 0)"
