import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class RegisterPage extends BasePage {

    //System Tests
    //S.T.: Test 1

    private first_name = By.xpath("/html/body/div[1]/main/div/div[1]/div/div/div/form/div/div[1]/div");
    private last_name = By.xpath("/html/body/div[1]/main/div/div[1]/div/div/div/form/div/div[2]/div/input");
    private phone = By.xpath("/html/body/div[1]/main/div/div[1]/div/div/div/form/div/div[3]/div/input");
    private email = By.xpath("/html/body/div[1]/main/div/div[1]/div/div/div/form/div/div[4]/div/input");
    private password = By.xpath("/html/body/div[1]/main/div/div[1]/div/div/div/form/div/div[5]/div/input");
    private register_button = By.xpath("/html/body/div[1]/main/div/div[1]/div/div/div/form/button");
    

    constructor(driver: WebDriver) {
        super(driver);
    }

    async enterFirstName(){
        await this.waitAndClick(this.first_name, 1000);
        await this.fillInputField(this.first_name, testData.credentials.first_name);
    }

    async enterLastName(){
        await this.fillInputField(this.last_name, testData.credentials.last_name);
    }

    async enterPhone(){
        await this.fillInputField(this.phone, testData.credentials.phone);
    }

    async enterEmail(){
        await this.fillInputField(this.email, testData.credentials.email);
    }

    async enterPassword(){
        await this.fillInputField(this.password, testData.credentials.password);
    }

    async register(){
        await this.findElementAndClick(this.register_button);
    }

    


 
   



    

}
