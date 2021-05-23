  Feature: Login select General Settings, select Title & description and change The name of site
  
  @user1 @web
  Scenario: As the first user I want to be able to log into the application select General Settings, select The name of your site and change title
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    When I navigate to page "http://localhost:2368/ghost/#/signin/"
    Then I enter "ma.zapataf@uniandes.edu.co" into input field having id "ember8"
    Then I enter "misomazf88" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I navigate to page "http://localhost:2368/ghost/#/settings/general"
    Then I click on element having css selector ".gh-setting-action"
    Then I enter "$name_1" into input field having css selector ".ember-text-field.gh-input.ember-view"
    Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-btn-icon.ember-view"
    Then I wait for 5 seconds

  @user2 @web
  Scenario: As the first user I want to be able to log into the application select General Settings, select The name of your site and change title
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    When I navigate to page "http://localhost:2368/ghost/#/signin/"
    Then I enter "ma.zapataf@uniandes.edu.co" into input field having id "ember8"
    Then I enter "misomazf88" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I navigate to page "http://localhost:2368/ghost/#/settings/general"
    Then I click on element having css selector ".gh-setting-action"
    Then I enter "$name_2" into input field having css selector ".ember-text-field.gh-input.ember-view"
    Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-btn-icon.ember-view"
    Then I wait for 5 seconds

  @user3 @web
  Scenario: As the first user I want to be able to log into the application select General Settings, select The name of your site and change title
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    When I navigate to page "http://localhost:2368/ghost/#/signin/"
    Then I enter "ma.zapataf@uniandes.edu.co" into input field having id "ember8"
    Then I enter "misomazf88" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I navigate to page "http://localhost:2368/ghost/#/settings/general"
    Then I click on element having css selector ".gh-setting-action"
    Then I enter "$name_3" into input field having css selector ".ember-text-field.gh-input.ember-view"
    Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-btn-icon.ember-view"
    Then I wait for 5 seconds