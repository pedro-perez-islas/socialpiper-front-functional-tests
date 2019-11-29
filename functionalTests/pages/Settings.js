class SettingsPage {

    // NAvigation tabs
    get accountSettingsTab() { return $('#AccountSettings'); }
    get securitySettingsTab() { return $('#SecuritySettings'); }
    get businessSettingsTab() { return $('#BusinessSettings'); }
    get audienceCompetitorsTab() { return $('#Audience&Competitors'); }
    get billingSettingsTab() { return $('#BillingSettings'); }

    // Account settings
    get firstNameInput() { return $('#firstName'); }
    get lastNameInput() { return $('#lastName'); }
    get emailInput() { return $('#email'); }
    get saveAccountButton() { return $('#save'); }
    get disableAccountButton() { return $('#save=Disable account'); }
    get disableAccountButton() { return $('#disableAccountButton'); }
    get acceptDisableButton() { return $('button#accept-button'); }
    get cancelDisableButton() { return $('button#cancel-button'); }

    //Security settings
    get newPasswordInput() { return $('#newPassword'); }
    get confirmNewPasswordInput() { return $('#confirmNewPassword'); }
    get updatePasswordButton() { return $('#updateButton'); }
    
    //Business settings    
    get businessName(){ return $('#businessName'); }
    get businessCategory(){ return $('input#businessCategory'); }
    get businessLocation(){ return $('input#businessCity'); }
    get businessStrategyFullAwareness(){ return $('#fullAwareness'); }
    get businessStrategyAwareness(){ return $('#awareness'); }
    get businessStrategyBalanced(){ return $('#balanced'); }
    get businessStrategyConversion(){ return $('#conversion'); }
    get businessStrategyFullConversion(){ return $('#fullConversion'); }
    get saveBusinessButton() { return $('.MuiGrid-grid-xs-12 > .MuiGrid-root > #save > .MuiButton-label'); }

    //Billing settings
    get addPaymentMethodButton(){ return $('.MuiButton-label=Add Payment Method'); }
    get cardHolderNameInput(){ return $('#cardholderName'); }
    get cardNumber(){ return $('name=cardnumber'); }
    get cardExpiry(){ return $('name=exp-date'); }
    get cardCvc(){ return $('name=cvc'); }
    get billingCountry(){ return $('#country'); }
    get billingAddress(){ return $('#billingAddressLineOne'); }
    get billingCity(){ return $('#city'); }
    get billingState(){ return $('#state'); }
    get billingZipCode(){ return $('#zipcode'); }
    get billingemail(){ return $('#email'); }
    get addPaymentAccept(){ return $('.MuiButton-label=Add Payment Method'); }
    get cancelPaymentAccept(){ return $('.MuiButton-label=Go Back'); }


    editAccountInfo(firstNameEdit, lastNameEdit){
        this.accountSettingsTab.click();
        this.firstNameInput.setValue("\uE003"); // Press Back key
        this.firstNameInput.clearValue();
        this.firstNameInput.setValue(firstNameEdit);
        this.lastNameInput.click();
        this.lastNameInput.clearValue();
        this.lastNameInput.setValue(lastNameEdit);
        this.saveAccountButton.click();
    }

    disableAccountFlow(){
        this.accountSettingsTab.click();
        this.disableAccountButton.click();
        this.acceptDisableButton.click();
    }

    changePassword(passwordEdit){
        this.securitySettingsTab.click();
        this.newPasswordInput.setValue(passwordEdit);
        this.confirmNewPasswordInput.setValue(passwordEdit);
        this.updatePasswordButton.click();
    }

    editBusinessSettings(){
        this.businessSettingsTab.click();
        this.businessName.clearValue();
        this.businessName.setValue("Colchimundo");
        this.businessCategory.setValue("Bar");
        browser.pause(1500);
        browser.keys("\uE007"); // Press Enter key
        this.businessLocation.setValue("chicago");
        browser.pause(1500);
        browser.keys("\uE007"); // Press Enter key
        this.businessStrategyBalanced.click();
        
        this.saveBusinessButton.scrollIntoView();
        this.saveBusinessButton.click();
    }

    addNewCard(){
        this.billingSettingsTab.click();
        this.addPaymentMethodButton.click();
        this.cardHolderNameInput.setValue('test');
        this.cardNumber.setValue('4242424242424242');
        this.cardExpiry.setValue('1224');
        this.cardCvc.setValue('122');
        this.billingCountry.setValue('United States');
        this.billingAddress.setValue('addressTest');
        this.billingCity.setValue('cityTest');
        this.billingState.setValue('stateTest');
        this.billingZipCode.setValue('12345');
        this.billingemail.setValue('billing.test@email.com');
        this.addPaymentAccept.click();
        this.cancelPaymentAccept.click();
    }
}
module.exports = SettingsPage;
