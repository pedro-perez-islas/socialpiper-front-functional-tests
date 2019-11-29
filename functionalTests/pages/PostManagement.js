class PostManagement {

    get postManagementTitle() { return $('.MuiGrid-root=Post Management'); }
    // get calendar() { return $('.MuiPickersBasePicker-pickerView'); }
    
    // Facebook card
    get fbCheckBox() { return $('#checkFacebook'); }
    get piperRecommendationFb() { return $('#recommendationFacebook'); }
    get postNowFb() { return $('#nowFacebook'); }
    get customFb() { return $('#customFacebook'); }
    get datepickerFb() { return $('#datePickerFacebook'); }
    get dayFb() { return $('.MuiIconButton-label=28'); }
    get timeFb() { return $('#timePickerFacebook'); }
    get hourFb() { return $('.MuiPickersClockNumber-clockNumber=11'); }
    get boostFb() { return $('#boostFacebook'); }

    // Instagram card
    get igCheckBox() { return $('#checkInstagram'); }
    get piperRecommendationIg() { return $('#recommendationInstagram'); }
    get postNowIg() { return $('#nowInstagram'); }
    get customIg() { return $('#customInstagram'); }

    // Twitter card
    get twCheckBox() { return $('#checkTwitter'); }
    get piperRecommendationTw() { return $('#recommendationTwitter'); }
    get postNowTw() { return $('#nowTwitter'); }
    get customTw() { return $('#customTwitter'); }

    get editImageButton() { return $('#editContentBtn'); }
    get postMessageField() { return $('#postMessage'); }
    get emojiIcon() { return $('[id="emojiIcon"][class="MuiSvgIcon-root"]'); }
    get cancelPostButton() { return $('#cancelPostBtn'); }
    get previewPostButton() { return $('#previewPostBtn'); } 

    // Boost post modal
    get budgetInput() { return $('#budget'); }
    get setOwnBudgetRadio() { return $('.MuiGrid-root:nth-child(2) > .MuiFormControlLabel-root .jss369'); }
    get weeklyBudgetRadio() { return $(''); }
    get monthlyBudgetRadio() { return $(''); }
    get acceptBoostField() { return $('#accept-boot-button'); }
    get cancelBoostField() { return $('#cancel-boot-button'); }

    // Preview modal actions
    get previewModalTitle() { return $('.MuiTypography-root=Preview Post'); }
    get publishButton() { return $('#publish-button'); }
    get backButton() { return $('#cancel-button'); }
    get closeButton() { return $('#close-button'); }

    multiplePostNowFlow(){
      this.fbCheckBox.click();
      this.postNowFb.click();
      this.twCheckBox.click();
      this.postNowTw.click();
      this.postMessageField.setValue("Post en Facebook / Twitter - Conoce nuestros colchones de temporada!");
      this.previewPostButton.click();
      this.previewModalTitle.waitForDisplayed(3000);
      this.publishButton.click();
    }

    fbPostNowFlow(){
      this.fbCheckBox.click();
      this.postNowFb.click();
      this.postMessageField.setValue("Colchones nuevos en Colchimundo! - Facebook");
      this.previewPostButton.click();
      this.previewModalTitle.waitForDisplayed(3000);
      this.publishButton.click();
    }

    fbSchedulePostFlow(){
      this.fbCheckBox.click();
      this.customFb.click();
      this.datepickerFb.click();
      this.dayFb.click();
      browser.keys("\uE00C");
      browser.pause(1000);
      this.boostFb.click();
      this.postMessageField.setValue("Colchones nuevos en Colchimundo! - Facebook scheduled post");
      this.previewPostButton.click();
      this.previewModalTitle.waitForDisplayed(3000);
      this.backButton.click();
    }
    
    igPostNowFlow(){
      this.igCheckBox.click();
      this.postNowIg.click();
      this.postMessageField.setValue("Colchones nuevos en Colchimundo! - Instagram");
      this.previewPostButton.click();
      this.previewModalTitle.waitForDisplayed(3000);
      this.backButton.click();
    }

    // NOT FINISHED YET
    igSchedulePostFlow(){
      this.fbCheckBox.click();
      this.customFb.click();
      this.datepickerFb.click();
      this.dayFb.click();
      browser.keys("\uE00C"); // Press ESC key
      browser.pause(1000);
      this.boostFb.click();
      this.postMessageField.setValue("Colchones nuevos en Colchimundo! - Instagram scheduled post");
      this.previewPostButton.click();
      this.previewModalTitle.waitForDisplayed(3000);
      this.backButton.click();
    }
    
    // NOT FINISHED YET
    boostPostFlow(){
      this.fbCheckBox.click();
      this.boostFb.click();
      browser.pause(2000);
      this.cancelBoostField.click();
    }

    twPostNowFlow(){
      this.twCheckBox.click();
      this.postNowTw.click();
      this.postMessageField.setValue("Colchones nuevos en Colchimundo! - Twitter");
      this.previewPostButton.click();
      this.previewModalTitle.waitForDisplayed(3000);
      this.publishButton.click();
    }
  }
  module.exports = PostManagement;
  