class OnboardingProcessPage {
  /**
   * Locators onboarding step 1 - Connect social media accounts
   */

  // Connect social media buttons
  get connectFbButton() { return $('#facebookConnect'); }
  get connectIgButton() { return $('#instagramConnect'); }
  get connectTwButton() { return $('#twitterConnect'); }

  // Disconnect social media buttons
  get disconnectFbButton() { return $('#facebookConnect=Disconnect'); }
  get disconnectIgButton() { return $('#instagramConnect=Disconnect'); }
  get disconnectTwButton() { return $('#twitterConnect=Disconnect'); }

  // Onboarding navigation buttons
  get continueButton(){ return $('#continueButton'); }
  get cancelButton(){ return $('#backButton'); }
  get skipButton(){ return $('#skipButton'); }
    
  // Connect Facebook process
  get fbEmail() { return $('#email'); }
  get fbPass() { return $('#pass'); }
  get fbLoginButton() { return $('#loginbutton'); }
  get fbContinueAsButton() { return $('[data-testid="nextBtn"]'); }
  get fbCancelButton() { return $('#cancelBtn'); }
  get fbSelectPage() { return $('[id="js_j_2360834443953687"]'); }
  get fbPageContinueButton() { return $('[data-testid="nextBtn"]'); }
  get fbPageFinishButton() { return $('[data-testid="nextBtn"]'); }
  get fbPageFinishLinkedButton() { return $('[data-testid="nextBtn"]'); }
  get fbConfirmationMessage() { return $(''); }
    
    // Connect Twitter connect process
  get twUsername() { return $('#username_or_email'); }
  get twPassword() { return $('#password'); }
  get twAuthorizeButton() { return $('#allow'); }
  get twCancelButton() { return $('#cancel'); }
  get twConnectionOk() { return $('body'); }

   /**
   * Locators onboarding step 2 - Business information
   */
  
  //get uploadButton(){ return $('#raised-button-file') }
  get businessName(){ return $('#businessName'); }
  get businessCategoryDropdown(){ return $('input#businessCategory'); }
  get resultCategoryDropdown(){ return $('.css-2613qy-menu'); }
  get businessLocation(){ return $('input#businessLocation'); }
  get businessStrategyFullAwareness(){ return $('#fullAwareness'); }
  get businessStrategyAwareness(){ return $('#awareness'); }
  get businessStrategyBalanced(){ return $('#balanced'); }
  get businessStrategyConversion(){ return $('#conversion'); }
  get businessStrategyFullConversion(){ return $('#fullConversion'); }

  /**
   * Locators onboarding step 3 - 
   */

  get clientsLocation(){ return $('input#clientsLocation'); }
  get genderFemale(){ return $('.MuiTypography-root=Female'); }
  get genderMale(){ return $('.MuiTypography-root=Male'); }
  get genderUndefined(){ return $('.MuiTypography-root=Undefined'); }
  //get ageFrom(){ return $('input#from') }
  get ageFrom(){ return $('\/\/*[@id="root"]/div/div[2]/div/div[2]/div/div[5]/div/div/div[1]/div'); }
  
  get ageTo(){ return $('input#to'); }
  get clientsInterest(){ return $('input#clientsInterests'); }
  
  /**
   * Locators onboarding step 4 - 
   */

  get fbCompetitor() { return $('.MuiInputLabel-outlined=Competitor\'s Facebook page'); }

   /**
   * Functions onboarding step 1 - Connect social media accounts
   */

  // Connect a Facebook account
  connectFacebookFlow(fbUrl, fbEmail, fbPassword) {
    this.connectFbButton.click();
    this.connectFbButton.click();
    browser.switchWindow(fbUrl);
    this.fbEmail.waitForDisplayed(3000);
    this.fbEmail.setValue(fbEmail);
    this.fbPass.setValue(fbPassword);
    this.fbLoginButton.click();
    this.fbContinueAsButton.click();
    this.fbPageContinueButton.click();
    this.fbPageFinishButton.click();
    this.fbPageFinishLinkedButton.click();
    browser.switchWindow('/onboarding');
  }

  // Connect a Twitter account
  connectTwitterFlow(twUrl, twEmail, twPassword) {
    this.connectTwButton.click();
    this.connectTwButton.click();
    browser.pause(2000);
    browser.switchWindow(twUrl);
    this.twUsername.setValue(twEmail);
    this.twPassword.setValue(twPassword);
    this.twAuthorizeButton.click();
    this.twConnectionOk.waitForDisplayed(3000);
    browser.switchWindow('/onboarding');
  }

  /**
  * Functions onboarding step 2 - Business information
  */

  businessInformationFlow(bsnssInfoCategory, bsnssInfoLocation){
    this.businessCategoryDropdown.setValue(bsnssInfoCategory);
    browser.pause(1500);
    browser.keys("\uE007"); // Press Enter key
    this.businessLocation.setValue(bsnssInfoLocation);
    browser.pause(1500);
    browser.keys("\uE007"); // Press Enter key
    this.businessStrategyBalanced.click();
    this.continueButton.click();
  }

  addBusinessLocation(category){
    this.businessLocation.setValue(category);
    browser.keys("\uE007"); 
  }
  
  /**
  * Functions onboarding step 3 - Clients information
  */
  
  clientsInformationFlow(clientsInfoLocation, clientsInfoInterests){
    this.clientsLocation.setValue(clientsInfoLocation);
    browser.pause(1500);
    browser.keys("\uE007"); // Press Enter key

    this.clientsLocation.setValue('San Antonio');
    browser.pause(1500);
    browser.keys("\uE007"); // Press Enter key

    this.genderFemale.click();
    this.genderMale.click();
    this.genderUndefined.click();

    // this.ageFrom.click();
    //this.ageFrom.setValue('19');
    // browser.keys("\uE007"); 
    // browser.pause(2000);

    // this.ageTo.setValue('50');
    // browser.keys("\uE007"); 

    this.clientsInterest.setValue(clientsInfoInterests);
    browser.pause(2000);
    browser.keys("\uE007"); // Press Enter key
    this.continueButton.click();
  }

  /**
   * Functions onboarding step 4 - Add competitors
   */

  addFbCompetitorsFlow(fbCompetitors) {
    this.fbCompetitor.setValue(fbCompetitors);
    browser.keys("\uE015"); // Press Arrow down key
    browser.keys("\uE007"); // Press Enter key
  }
  
}
module.exports = OnboardingProcessPage;
