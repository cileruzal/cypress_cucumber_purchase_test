import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import PurchasePage from '../../pages/PurchasePage';

Given('User navigates to {string} URL', (url) => {
    PurchasePage.navigateToUrl(url);
});

When('User handles login process as guest', () => {
    PurchasePage.handleLoginAsGuest();
});

When('User searches for {string}', (productName) => {
    PurchasePage.searchProduct(productName);
});

When('User selects the first product from results', () => {
    PurchasePage.selectFirstProduct();
});

When('User adds the product to the cart', () => {
    PurchasePage.addProductToCart();
});

Then('User verifies that the product is in the cart', () => {
    PurchasePage.verifyCart();
});