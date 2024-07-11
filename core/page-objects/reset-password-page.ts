import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class ResetPasswordPage extends BasePage {

    private resetpass_emailfield = By.xpath("/html/body/section/div/div/div/div/div/div/form/div[1]/input");
    private resetpass_passwordfield = By.xpath("/html/body/section/div/div/div/div/div/div/form/div[2]/input");
    private resetpass_confirmpasswordfield = By.xpath("/html/body/section/div/div/div/div/div/div/form/div[3]/input");
    private resetpass_button = By.xpath("/html/body/section/div/div/div/div/div/div/form/button");

    constructor(driver: WebDriver) {
        super(driver);
    }

    async inputEmail3(){
        await this.waitForElement(this.resetpass_emailfield, 1000);
        await this.fillInputField(this.resetpass_emailfield, testData.data.register_email);
    }

    async inputPassword3(){
        await this.fillInputField(this.resetpass_passwordfield, testData.credentials.new_password);
    }

    async confirmPassword(){
        await this.fillInputField(this.resetpass_confirmpasswordfield, testData.credentials.new_password);
    }

    async resetPasswordButton(){
        await this.findElementAndClick(this.resetpass_button);
    }





}
