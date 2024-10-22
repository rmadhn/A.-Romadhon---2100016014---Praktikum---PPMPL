import { Builder, By, until } from "selenium-webdriver";
import { expect } from "chai";

describe("UI Testing using Selenium", function () {
  let driver;

  before(async function () {
    driver = await new Builder().forBrowser("chrome").build();
  });

  after(async function () {
    await driver.quit();
  });

  it("should load the login page", async function () {
    await driver.get("file:///D:/Semester 7/PPMPL/selenium-ui-test/login.html");
    const title = await driver.getTitle();
    expect(title).to.equal("Login Page");
  });

  it("should input username and password", async function () {
    await driver.get("file:///D:/Semester 7/PPMPL/selenium-ui-test/login.html");
    await driver.findElement(By.id("username")).sendKeys("testuser");
    await driver.findElement(By.id("password")).sendKeys("password123");
    const usernameValue = await driver
      .findElement(By.id("username"))
      .getAttribute("value");
    const passwordValue = await driver
      .findElement(By.id("password"))
      .getAttribute("value");
    expect(usernameValue).to.equal("testuser");
    expect(passwordValue).to.equal("password123");
  });

  it("should click the login button and load the dashboard", async function () {
    await driver.get("file:///D:/Semester 7/PPMPL/selenium-ui-test/login.html");
    await driver.findElement(By.id("username")).sendKeys("testuser");
    await driver.findElement(By.id("password")).sendKeys("password123");
    await driver.findElement(By.id("loginButton")).click();
    await driver.wait(until.titleIs("Dashboard"), 5000);
    const title = await driver.getTitle();
    expect(title).to.equal("Dashboard");
  });

  it("should load the dashboard page after login", async function () {
    await driver.get("file:///D:/Semester 7/PPMPL/selenium-ui-test/login.html");
    await driver.findElement(By.id("username")).sendKeys("testuser");
    await driver.findElement(By.id("password")).sendKeys("password123");
    await driver.findElement(By.id("loginButton")).click();
    await driver.wait(until.elementLocated(By.id("usernameDisplay")), 5000);
    const displayedUsername = await driver
      .findElement(By.id("usernameDisplay"))
      .getText();
    expect(displayedUsername).to.equal("testuser");
  });

  it("should verify an element in the dashboard after login", async function () {
    await driver.get("file:///D:/Semester 7/PPMPL/selenium-ui-test/login.html");
    await driver.findElement(By.id("username")).sendKeys("testuser");
    await driver.findElement(By.id("password")).sendKeys("password123");
    await driver.findElement(By.id("loginButton")).click();
    await driver.wait(until.titleIs("Dashboard"), 5000);

    // Verifikasi apakah elemen dashboard muncul
    const dashboardElement = await driver
      .findElement(By.id("dashboardWelcomeMessage"))
      .getText();
    expect(dashboardElement).to.equal("Welcome to the Dashboard, testuser!");
  });

  it("should click the logout button and redirect to the login page", async function () {
    await driver.get("file:///D:/Semester 7/PPMPL/selenium-ui-test/login.html");
    await driver.findElement(By.id("username")).sendKeys("testuser");
    await driver.findElement(By.id("password")).sendKeys("password123");
    await driver.findElement(By.id("loginButton")).click();
    await driver.wait(until.titleIs("Dashboard"), 5000);

    // Verifikasi tombol logout ada di halaman dashboard
    const logoutButton = await driver.findElement(By.id("logoutButton"));
    expect(logoutButton).to.exist;

    // Klik tombol logout dan periksa apakah diarahkan kembali ke halaman login
    await logoutButton.click();
    await driver.wait(until.titleIs("Login Page"), 5000);
    const title = await driver.getTitle();
    expect(title).to.equal("Login Page");
  });
});
