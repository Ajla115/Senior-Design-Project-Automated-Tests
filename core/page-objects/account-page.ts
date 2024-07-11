
import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class AccountPage extends BasePage {

    //Unit Tests
    //U.T.: Test 1
    private name_prompt = By.xpath("/html/body/div[1]/div[2]/div/main/div/div/div[2]/div[1]/h4");

    //Integration Tests
    //I.T.: Test 3
    private old_password = By.xpath("/html/body/div[1]/div[2]/div/main/div/div/div[2]/div[2]/div/form/div[3]/div[2]/div/div/div[1]/div/div/input");
    private new_password = By.xpath("/html/body/div[1]/div[2]/div/main/div/div/div[2]/div[2]/div/form/div[3]/div[2]/div/div/div[2]/div/div/input");
    private repeat_password = By.xpath("/html/body/div[1]/div[2]/div/main/div/div/div[2]/div[2]/div/form/div[3]/div[2]/div/div/div[3]/div/div/input");

    private change_password_button = By.xpath("/html/body/div[1]/div[2]/div/main/div/div/div[2]/div[2]/div/form/div[3]/div[3]/button");

    constructor(driver: WebDriver) {
        super(driver);
    }

    //U.T: Test 1
    async verifyUserName(){
        await this.checkMatchingElements(this.name_prompt, testData.data.user_name);
    }

    async enterOldPassword(){
        await this.fillInputField(this.old_password, testData.credentials.login_password);
    }

    async enterNewPassword(){
        await this.fillInputField(this.new_password, testData.credentials.new_password);
    }

    async repeatNewPassword(){
        await this.fillInputField(this.repeat_password, testData.credentials.repeat_password);
    }

    async changePassword(){
        await this.findElementAndClick(this.change_password_button);
    }

    

 
   



    

}
