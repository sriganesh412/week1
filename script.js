const toggleButtons = document.querySelectorAll('.toggle-btn');

toggleButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.classList.toggle('selected');
        button.textContent = button.classList.contains('selected') ? 'Selected' : 'Select';
    });
});

// Function to update prices based on selected currency
function updatePrices(currency) {
    const conversionRates = {
        usd: 1,    // 1 USD = 1 USD
        eur: 0.85, // 1 USD = 0.85 EUR
        gbp: 0.72, // 1 USD = 0.72 GBP
        inr: 75    // 1 USD = 75 INR (just an example, replace with actual conversion rate)
    };

    const prices = document.querySelectorAll('.price');
    prices.forEach(price => {
        const currentPrice = parseFloat(price.dataset.originalPrice);
        const conversionRate = conversionRates[currency];
        let newPrice = currentPrice * conversionRate;
        price.textContent = `${newPrice.toLocaleString('en-US', { style: 'currency', currency: currency.toUpperCase() })} /Month`;
    });
}

// Event listener for currency selector change
const currencySelector = document.getElementById('currency');
currencySelector.addEventListener('change', function() {
    const selectedCurrency = this.value;
    updatePrices(selectedCurrency);
});

// Initial call to set prices based on default currency (USD)
updatePrices('usd');
