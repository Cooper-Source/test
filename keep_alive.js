const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch({
        args: ['--no-sandbox', '--disable-setuid-sandbox'], // Notwendig für GitHub Actions
        headless: true,
    });
    const page = await browser.newPage();
    const codespaceUrl = "https://jubilant-trout-wr9vqq6qr55wcgq65.github.dev/";

    try {
        await page.goto(codespaceUrl, { waitUntil: 'networkidle2' });
        console.log("Browserverbindung zum Codespace hergestellt.");

        // Füge regelmäßige Aktivität hinzu, z. B. Reloads
        setInterval(async () => {
            await page.reload({ waitUntil: 'networkidle2' });
            console.log("Seite neu geladen, um Aktivität zu simulieren.");
        }, 300000); // Alle 5 Minuten
    } catch (err) {
        console.error("Fehler beim Herstellen der Verbindung:", err);
    }
})();
