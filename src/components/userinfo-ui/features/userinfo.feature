Feature: Test if end to end tests are running. Also all step definitions should be found.

    Scenario: we want to test the uiserinfo ui
        Given the page has the "userinfo-ui" directive on it
        When we click on the icon
        Then there should be a new menuitem with the userinfo on it
