import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class LandingPage extends BasePage {

    //Test 1

    private landing_page_message = By.xpath("/html/body/main/section[1]/section/div/div/div/h1");

    //Test 2

    private user_menu = By.xpath("/html/body/header/div/nav/ul/li[4]/a");
    

    //Test 3

    private email_section = By.xpath("/html/body/main/section[1]/main/section[5]/div/div[3]/div/div[1]/div/div[1]/h4");
    private name_field = By.xpath("/html/body/main/section[1]/main/section[5]/div/div[3]/div/div[2]/form/div[1]/div[1]/input");
    private subject_field = By.xpath("/html/body/main/section[1]/main/section[5]/div/div[3]/div/div[2]/form/div[1]/div[2]/input");
    private email_field = By.xpath("/html/body/main/section[1]/main/section[5]/div/div[3]/div/div[2]/form/div[2]/input");
    private message_field = By.xpath("/html/body/main/section[1]/main/section[5]/div/div[3]/div/div[2]/form/div[3]/textarea");
    private send_email_button = By.xpath("/html/body/main/section[1]/main/section[5]/div/div[3]/div/div[2]/form/div[5]/button");

    constructor(driver: WebDriver) {
        super(driver);
    }

    //Test 1

    async verifyLandingPage(){
        await this.waitForElement(this.landing_page_message, 5000);
        await this.checkMatchingElements(this.landing_page_message, testData.verification_message.login_message);
    }

    //Test 2

    async goToUserMenu(){
        await this.findElementAndClick(this.user_menu);
    }



    //Test 3

    async scrollToTheBottom(){
        await this.scrollIntoView(this.email_section);

    }

    async inputName(){
        //await this.waitForElement(this.name_field, 3000);
        await this.fillInputField(this.name_field, testData.data.name);
    }

    async inputSubject(){
        await this.fillInputField(this.subject_field, testData.data.subject);
    }

    async inputEmail(){
        await this.fillInputField(this.email_field, testData.data.email);
    }

    async inputMessage(){
        await this.fillInputField(this.message_field, testData.data.message);
    }

    async sendEmailButton(){
        await this.findElementAndClick(this.send_email_button);
    }

    




    



 
   



    

}
