let cookieCount = 0;
let cookiesPerClick = 1;
let autoClickers = 0;

// Mejora de clic
let clickUpgradeCost = 10;
let superClickerCost = 50;
let autoClickerCost = 25;

function updateDisplay() {
    document.getElementById('cookieCount').textContent = cookieCount;
    document.getElementById('cookiesPerClick').textContent = cookiesPerClick;
    document.getElementById('autoClickers').textContent = autoClickers;
    document.getElementById('clickUpgradeCost').textContent = clickUpgradeCost;
    document.getElementById('superClickerCost').textContent = superClickerCost;
    document.getElementById('autoClickerCost').textContent = autoClickerCost;
}

function clickCookie() {
    cookieCount += cookiesPerClick;
    updateDisplay();
}

function buyClickUpgrade() {
    if (cookieCount >= clickUpgradeCost) {
        cookieCount -= clickUpgradeCost;
        cookiesPerClick += 1;
        clickUpgradeCost = Math.floor(clickUpgradeCost * 1.5);
        updateDisplay();
    }
}

function buySuperClicker() {
    if (cookieCount >= superClickerCost) {
        cookieCount -= superClickerCost;
        cookiesPerClick += 5;
        superClickerCost = Math.floor(superClickerCost * 1.7);
        updateDisplay();
    }
}

function buyAutoClicker() {
    if (cookieCount >= autoClickerCost) {
        cookieCount -= autoClickerCost;
        autoClickers += 1;
        autoClickerCost = Math.floor(autoClickerCost * 1.6);
        updateDisplay();
    }
}

// Auto clicker: cada segundo suma galletas
setInterval(() => {
    cookieCount += autoClickers;
    updateDisplay();
}, 1000);

// Inicializar
updateDisplay();
