// Copyright (C) 2020 Triplebyte

interface ButtonClick {
    void click(String buttonName);
}

class InformationPage {
    ButtonClick okClicked;
    ButtonClick cancelClicked;
    InformationPage(ButtonClick okClicked, ButtonClick cancelClicked) {
        this.okClicked = okClicked;
        this.cancelClicked = cancelClicked;
    }
    void simulateActivity() {
        okClicked.click("ok");
        cancelClicked.click("cancel");
    }
}

