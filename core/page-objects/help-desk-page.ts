import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class HelpDeskPage extends BasePage {

    //Integration Tests
    //i.T.: Test 2
    private title_field = By.xpath("/html/body/div[1]/div[2]/div/main/div/div/form/div/div[2]/div/div[1]/div/input");
    private description_field = By.xpath("/html/body/div[1]/div[2]/div/main/div/div/form/div/div[2]/div/div[2]/div/textarea[1]");
    private send_button = By.xpath("/html/body/div[1]/div[2]/div/main/div/div/form/div/div[3]/button[1]");

    constructor(driver: WebDriver) {
        super(driver);
    }

    //I.T: Test 2
    async enterTitle(){
        await this.fillInputField(this.title_field, testData.data.title);
    }

    async enterDescription(){
        await this.fillInputField(this.description_field, testData.data.description);
    }

    async sendEmail(){
        await this.findElementAndClick(this.send_button);
    }
    


 
   



    

}
