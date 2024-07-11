import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class LoginPage extends BasePage {

    private input_email_field = By.xpath("/html/body/section/div/div/div/div/div/div/form/div[1]/input");
    private input_password_field = By.xpath("/html/body/section/div/div/div/div/div/div/form/div[2]/input");
    private login_button = By.xpath("/html/body/section/div/div/div/div/div/div/form/button");

    private change_password_button = By.xpath("/html/body/section/div/div/div/div/div/div/p[1]/a");


    constructor(driver: WebDriver) {
        super(driver);
    }

    //Test 1

    async inputEmail(){
        await this.fillInputField(this.input_email_field, testData.data.login_email);
    }

    async inputPassword(){
        await this.fillInputField(this.input_password_field, testData.credentials.login_password);
    }

    
    //Test 2

    async inputEmail2(){
        await this.waitForElement(this.input_email_field, 10000);
        await this.fillInputField(this.input_email_field, testData.data.register_email);
    }

    async inputPassword2(){
        await this.fillInputField(this.input_password_field, testData.credentials.register_password);
    }

    //Test 3


    async changePasswordButton(){
        await this.findElementAndClick(this.change_password_button);
    }



    


    async loginButton(){
        await this.findElementAndClick(this.login_button);
    }


 
   



    

}
