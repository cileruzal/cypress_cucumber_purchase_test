Feature: Trendyol Shopping Functionality

  Scenario: TC01 Successful product purchase simulation
    Given User navigates to "https://www.trendyol.com" URL
    Given User handles login process as guest
    When User searches for "Xbox"
    When User selects the first product from results
    When User adds the product to the cart
    Then User verifies that the product is in the cart