import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class DMPage extends BasePage {

    //Integration Tests
    //i.T.: Test 1
    private add_dm_button = By.xpath("/html/body/div[1]/div[2]/div/main/div/div/div[1]/div[2]/button");

    private instagram_email = By.xpath("/html/body/div[1]/div[2]/div/main/div/div/form/div/div[2]/div/div[1]/div/input");
    private instagram_password = By.xpath("/html/body/div[1]/div[2]/div/main/div/div/form/div/div[2]/div/div[2]/div/input");
    private instagram_recipient = By.xpath("/html/body/div[1]/div[2]/div/main/div/div/form/div/div[2]/div/div[3]/div/textarea[1]");
    private write_message_field = By.xpath("/html/body/div[1]/div[2]/div/main/div/div/form/div/div[2]/div/div[4]/div/textarea[1]");
    private send_button = By.xpath("/html/body/div[1]/div[2]/div/main/div/div/form/div/div[3]/button[1]");

    private check_username = By.xpath("/html/body/div[1]/div/div/main/div/div/div[2]/div[1]/div[1]/div[2]/div/div/div/div/table/tbody/tr[2]/td[2]/div/h6");

    constructor(driver: WebDriver) {
        super(driver);
    }

    //I.T: Test 1
    async openAddDMModal(){
        await this.findElementAndClick(this.add_dm_button);
    }

    async enterEmail(){
        await this.waitForElement(this.instagram_email, 3000);
        await this.fillInputField(this.instagram_email, testData.credentials.instagram_email);
    }

    async enterPassword(){
        await this.waitForElement(this.instagram_password, 3000);
        await this.fillInputField(this.instagram_password, testData.credentials.instagram_password);
    }

    async enterRecipient(){
        await this.waitForElement(this.instagram_recipient, 3000);
        await this.fillInputField(this.instagram_recipient, testData.credentials.instagram_recipient);
    }

    async enterMessage(){
        await this.waitForElement(this.write_message_field, 3000);
        await this.fillInputField(this.write_message_field, testData.credentials.message);
    }

    async sendDM(){
        await this.waitAndClick(this.send_button, 3000);
    }

    async verifyUsername(){
        await this.waitForElement(this.check_username, 16000);
        await this.checkMatchingElements(this.check_username, testData.credentials.instagram_email);
    }




 
   



    

}
