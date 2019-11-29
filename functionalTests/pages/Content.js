class ContentPage {
    
    // Templates
    get myCreationsTab() { return $('#MyCreations'); }
    get title() { return $('.MuiTypography-root=Templates'); }
    get templatesSearchBox() { return $('#myTemplatesInput'); }
    get nextPaginatorButton() { return $('#netxPageButton'); }
    get backPaginatorButton() { return $('#backPageButton'); }
    get createFromScratchButton() { return $('#createFromScratchButton'); }

    // My creations
    get templatesTab() { return $('#Templates'); }
    get header() { return $('.MuiTypography-root=My Creations'); }
    get myCreationsSearchBox() { return $('#myCreationsInput'); }
    get nextPaginatorButton() { return $('#netxPageButton'); }
    get backPaginatorButton() { return $('#backPageButton'); }
    
  }
  module.exports = ContentPage;
  