let cookieCount = 0;
let cookiesPerClick = 1;
let upgradeCost = 10;

function clickCookie() {
    cookieCount += cookiesPerClick;
    document.getElementById('cookieCount').textContent = cookieCount;
    checkUpgradeAvailability();
}

function checkUpgradeAvailability() {
    if (cookieCount >= upgradeCost) {
        document.getElementById('upgradeButton').disabled = false;
    } else {
        document.getElementById('upgradeButton').disabled = true;
    }
}

function buyUpgrade() {
    if (cookieCount >= upgradeCost) {
        cookieCount -= upgradeCost;
        cookiesPerClick++;
        upgradeCost *= 2;  // Aumentar el costo de la próxima mejora
        document.getElementById('cookieCount').textContent = cookieCount;
        document.getElementById('upgradeInfo').textContent = `Mejora disponible: Añadir ${cookiesPerClick} galletas por clic`;
        document.getElementById('upgradeButton').textContent = `Mejora: Costo ${upgradeCost} galletas`;
    }
}
