import { HomePage } from "../core/page-objects/home-page";
import { Builder, By, WebDriver } from "selenium-webdriver";
import { createDriver2, quitDriver } from "../core/config/driver-setup";
import { readFileSync } from "fs";
import * as path from "path";
import { LoginPage } from "../core/page-objects/login-page";
import { LandingPage } from "../core/page-objects/landing-page";
import { ResetPasswordPage } from "../core/page-objects/reset-password-page";

const dataFilePath = path.resolve(__dirname, "../core/data/data.json");
const testData = JSON.parse(readFileSync(dataFilePath, "utf8"));

let driver: WebDriver;
let homePage: HomePage;
let loginPage: LoginPage;
let landingPage: LandingPage;
let resetPasswordPage: ResetPasswordPage;

beforeAll(async () => {
  driver = await createDriver2(testData.url.home_page);
  homePage = new HomePage(driver);
  loginPage = new LoginPage(driver);
  landingPage = new LandingPage(driver);
  resetPasswordPage = new ResetPasswordPage(driver);
}, 3000);

test("change password", async () => {
  await homePage.goToLoginPage();
  await loginPage.changePasswordButton();
  await resetPasswordPage.inputEmail3();
  await resetPasswordPage.inputPassword3();
  await resetPasswordPage.confirmPassword();
  await resetPasswordPage.resetPasswordButton();
}, 5000);

afterAll(async () => {
  await quitDriver(driver);
}, 3000);
