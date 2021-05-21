  Feature: Login select general administration button and change password
  
  @user1 @web
  Scenario: As the first user I want to be able to log into the application select general administration button and change password
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    When I navigate to page "http://localhost:2368/ghost/#/signin/"
    Then I enter "ma.zapataf@uniandes.edu.co" into input field having id "ember8"
    Then I enter "misomazf88" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I click on element having id "ember32"
    Then I click on element having css selector ".user-list-item-figure"
    Then I enter "misomazf88" into input field having id "user-password-new"
    Then I enter "misomazf88" into input field having id "user-new-password-verification"
    Then I click on element having css selector ".gh-btn.gh-btn-red.gh-btn-icon.button-change-password.ember-view"
    Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-btn-icon.ember-view"