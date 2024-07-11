import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class UserPage extends BasePage {

  

    //Test 2

    private logout_button = By.xpath("/html/body/main/section[5]/section/div/div[2]/div/button[1]");

    constructor(driver: WebDriver) {
        super(driver);
    }

    //Test 2

    async logoutButton(){
        await this.findElementAndClick(this.logout_button);
    }






    



 
   



    

}
