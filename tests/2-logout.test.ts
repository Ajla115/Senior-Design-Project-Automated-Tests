import { HomePage } from "../core/page-objects/home-page";
import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { LoginPage } from "../core/page-objects/login-page";
import { LandingPage } from "../core/page-objects/landing-page";
import { UserPage } from "../core/page-objects/user-page";


const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let homePage: HomePage;
let loginPage: LoginPage;
let landingPage: LandingPage;
let userPage: UserPage;

beforeAll(async () => {
    driver = await createDriver(testData.url.home_page);
    homePage = new HomePage(driver);
    loginPage = new LoginPage(driver);
    landingPage = new LandingPage(driver);
    userPage = new UserPage(driver);
},3000);

test("logout of user", async () => {
    await homePage.goToLoginPage();
    await loginPage.inputEmail();
    await loginPage.inputPassword();
    await loginPage.loginButton();
    await landingPage.goToUserMenu();
    await userPage.logoutButton();
    await homePage.verifyLogout();
},5000);


afterAll(async () => {
     await quitDriver(driver);
},3000);


