import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class LoginPage extends BasePage {



    //Unit Tests
    private email_field = By.xpath("/html/body/div[1]/main/div/div[1]/div/div/div/form/div/div[1]/div/input");
    private password_field = By.xpath("/html/body/div[1]/main/div/div[1]/div/div/div/form/div/div[2]/div/input");
    private login_button = By.xpath("/html/body/div[1]/main/div/div[1]/div/div/div/form/button");
    private show_password = By.xpath("/html/body/div[1]/main/div/div[1]/div/div/div/form/div/div[2]/div/div/button");

    //System Tests
    //S.T.: Test 1
    private register_button = By.xpath("/html/body/div[1]/main/div/div[1]/div/div/div/div[1]/p/a");

    constructor(driver: WebDriver) {
        super(driver);
    }

    //U.T: Test 1

    async inputEmail(){
        await this.fillInputField(this.email_field, testData.credentials.login_email);
    }

    async inputPassword(){
        await this.fillInputField(this.password_field, testData.credentials.login_password);
    }

    async loginButton(){
        await this.findElementAndClick(this.login_button);
    }

    async redirectToRegisterPage(){
        await this.findElementAndClick(this.register_button);
    }

    async showPassword(){
        await this.findElementAndClick(this.show_password);
    }

    async verifyPassword(){
        await this.checkMatchingElements(this.password_field, testData.credentials.login_password)
    }

    
  
   



    

}
