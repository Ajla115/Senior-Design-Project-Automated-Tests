import { By, WebDriver, until } from "selenium-webdriver";
import BasePage from "./base-page";
import { readFileSync } from "fs";
import * as path from "path";

const dataFilePath = path.resolve(__dirname, "../data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

export class LandingPage extends BasePage {

    //Unit Tests
    //U.T.: Test 1
    private account_menu_option = By.xpath("/html/body/div[1]/div[1]/div/div/div[1]/div[2]/div/div/div/div/nav/ul/li[5]/a/span[2]");

    //U.T.: Test 2
    private username_menu_option = By.xpath("/html/body/div[1]/div[1]/div/div/div[1]/div[2]/div/div/div/div/nav/ul/li[2]/a/span[2]");

    //U.T.: Test 3
    private hashtag_menu_option = By.xpath("/html/body/div[1]/div[1]/div/div/div[1]/div[2]/div/div/div/div/nav/ul/li[3]/a/span[2]");

    constructor(driver: WebDriver) {
        super(driver);
    }

    //U.T: Test 1
    async accountMenuOption(){
        await this.waitAndClick(this.account_menu_option, 1000);
    }

    //U.T.:Test 2
    async usernameMenuOption(){
        await this.waitAndClick(this.username_menu_option, 1000);
    }

    //U.T.:Test 3
    async hashtagMenuOption(){
        await this.waitAndClick(this.hashtag_menu_option, 1000);
    }


 
   



    

}
