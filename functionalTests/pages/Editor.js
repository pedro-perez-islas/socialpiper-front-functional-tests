class EditorPage {

    get goBackButton() { return $('#goBack'); }
    get titleInput() { return $('#title'); }
    get editorTitle() { return $('.MuiTypography-root=Content Editor'); }
    get saveAndExitButton() { return $('#save'); }
    get publishButton() { return $('#publishButton'); }
    // Modal actions
    get modalTitleInput() { return $('#title[1]'); }
    get modalTagsInput() { return $('#tagsSelector'); }
    get modalSaveButton() { return $('#saveButton'); }
    get modalCancelButton() { return $('#cancelButton'); }
    get modalLetsPublishButton() { return $('.MuiButton-label=Let’s Publish!'); }

    saveImageFlow(){
        this.titleInput.setValue("Test - White camvas");
        this.publishButton.click();
        this.modalSaveButton.waitForDisplayed(3000);
        this.modalSaveButton.click();
        this.modalLetsPublishButton.waitForDisplayed(5000);
        this.modalLetsPublishButton.click();
    }
    
  }
  module.exports = EditorPage;
