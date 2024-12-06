const puppeteer = require('puppeteer')
const readlineSync = require('readline-sync')

console.log('Bem vindo ao Bot conversor!');

async function robot() {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    const baseCurrency = readlineSync.question('Informe a moeda base:') || 'euro';
    const finalCurrency = readlineSync.question('Informe a moeda final:') || 'real';

    const urlConvert = `https://www.google.com/search?q=${baseCurrency}+para+${finalCurrency}&sca_esv=66697bfd130ff546&sxsrf=ADLYWIIXi1W-_VuNJwrdE-hE6_oeh2bBug%3A1733451851612&ei=S2BSZ4eGJeGHhbIP8d6RmQI&ved=0ahUKEwjH1-aui5KKAxXhQ0EAHXFvJCMQ4dUDCA8&uact=5&oq=${baseCurrency}+para+${finalCurrency}&gs_lp=Egxnd3Mtd2l6LXNlcnAiDmV1cm8gcGFyYSByZWFsMgsQABiABBiRAhiKBTILEAAYgAQYsQMYgwEyBRAAGIAEMgUQABiABDIGEAAYBxgeMggQABiABBjLATIGEAAYBxgeMggQABiABBjLATIFEAAYgAQyCBAAGIAEGMsBSN8aUJoKWNIXcAF4AZABAJgBhwGgAf0EqgEDMy4zuAEDyAEA-AEBmAIGoAKXBMICChAAGLADGNYEGEfCAhAQABiABBiwAxhDGMkDGIoFwgIOEAAYgAQYsAMYkgMYigXCAgQQABgewgIGEAAYCBgewgIIEAAYgAQYogSYAwCIBgGQBgqSBwM0LjKgB5go&sclient=gws-wiz-serp`;
    await page.goto(urlConvert);
    // await page.screenshot({path: 'example.png'});
    
    const result = await page.evaluate(() => {
        return document.querySelector('.lWzCpb.a61j6').value;
    })

    console.log(`O valor de 1 ${euro} em ${real} é ${result}`)
    await browser.close();
}

robot()