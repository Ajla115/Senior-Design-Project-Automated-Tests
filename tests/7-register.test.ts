import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { LoginPage } from "../core/page-objects/login-page";
import { LandingPage } from "../core/page-objects/landing-page";
import { AccountPage } from "../core/page-objects/account-page";
import { RegisterPage } from "../core/page-objects/register-page";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let loginPage: LoginPage;
let registerPage: RegisterPage;
let landingPage: LandingPage;


beforeAll(async () => {
  driver = await createDriver(testData.url.home_page);
  loginPage = new LoginPage(driver);
  registerPage = new RegisterPage(driver);
  landingPage = new LandingPage(driver);
  
}, 20000);

test("register user", async () => {
  await loginPage.redirectToRegisterPage();
  await registerPage.enterFirstName();
  await registerPage.enterLastName();
  await registerPage.enterPhone();
  await registerPage.enterEmail();
  await registerPage.enterPassword();
  await registerPage.register();
}, 50000);

afterAll(async () => {
  await quitDriver(driver);
}, 2000);
