  Feature: Login navigate Page editor, select new page and create page
  
  @user1 @web
  Scenario: As the first user I want to be able to log into the application navigate Page editor, select new page and create page
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    When I navigate to page "http://localhost:2368/ghost/#/signin/"
    Then I enter "ma.zapataf@uniandes.edu.co" into input field having id "ember8"
    Then I enter "misomazf88" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I navigate to page "http://localhost:2368/ghost/#/pages"
    Then I navigate to page "http://localhost:2368/ghost/#/editor/page"
    Then I enter "$name_1" into input field having css selector ".gh-editor-title.ember-text-area.gh-input.ember-view"
    Then I enter "$email_1" into input field having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"
    Then I click on element having css selector ".ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger"
    Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view"
    Then I wait for 5 seconds

  @user2 @web
  Scenario: As the first user I want to be able to log into the application navigate Page editor, select new page and create page
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    When I navigate to page "http://localhost:2368/ghost/#/signin/"
    Then I enter "ma.zapataf@uniandes.edu.co" into input field having id "ember8"
    Then I enter "misomazf88" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I navigate to page "http://localhost:2368/ghost/#/pages"
    Then I navigate to page "http://localhost:2368/ghost/#/editor/page"
    Then I enter "$name_2" into input field having css selector ".gh-editor-title.ember-text-area.gh-input.ember-view"
    Then I enter "$email_2" into input field having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"
    Then I click on element having css selector ".ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger"
    Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view"
    Then I wait for 5 seconds

  @user3 @web
  Scenario: As the first user I want to be able to log into the application navigate Page editor, select new page and create page
    Given I navigate to page "http://localhost:2368/ghost/#/signin"
    When I navigate to page "http://localhost:2368/ghost/#/signin/"
    Then I enter "ma.zapataf@uniandes.edu.co" into input field having id "ember8"
    Then I enter "misomazf88" into input field having id "ember10"
    Then I click on element having id "ember12"
    Then I navigate to page "http://localhost:2368/ghost/#/pages"
    Then I navigate to page "http://localhost:2368/ghost/#/editor/page"
    Then I enter "$name_3" into input field having css selector ".gh-editor-title.ember-text-area.gh-input.ember-view"
    Then I enter "$email_3" into input field having css selector ".koenig-editor__editor.__mobiledoc-editor.__has-no-content"
    Then I click on element having css selector ".ember-view.ember-basic-dropdown-trigger.gh-btn.gh-btn-outline.gh-publishmenu-trigger"
    Then I click on element having css selector ".gh-btn.gh-btn-blue.gh-publishmenu-button.gh-btn-icon.ember-view"
    Then I wait for 5 seconds