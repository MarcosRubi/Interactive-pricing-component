window.addEventListener('load', () => {
    function typeBilling() {
        const $typeBilling = document.querySelector('#type-billing');
    
        if ($toggleBilling.checked) {
            $typeBilling.textContent = '/ year';
            $price.textContent = `$${(PRICES[$inputRange.value] - (DISCOUNT / 100 * PRICES[$inputRange.value])).toFixed(2)}`;
            return;
        }
        $typeBilling.textContent = '/ month';
        $price.textContent = `$${PRICES[$inputRange.value].toFixed(2)}`;
    }
    
    // ELEMENTOS DEL DOM
    const $count = document.querySelector('#count');
    const $inputRange = document.querySelector('#range');
    const $toggleBilling = document.querySelector('#toggle-billing');
    const $badge = document.querySelector('.badge');
    const $price = document.querySelector('.price__value');

    // VALORES SEGÚN EL RANGO SELECCIONADO
    const pageviews = ["10K", "50K", "100K", "500K", "1M"];
    const inputWidth = ["0%", "25%", "50%", "75%", "100%"];

    // VALORES INMUTABLES
    const DISCOUNT = 25;
    const PRICES = [8, 12, 16, 24, 36];

    $badge.textContent = `-${DISCOUNT}%`;

    $inputRange.addEventListener('input', () => {
        $count.textContent = pageviews[$inputRange.value];

        $inputRange.style.background = `linear-gradient(90deg, var(--Strong-Cyan-Slider-Backround) ${inputWidth[$inputRange.value]} , var(--Light-Grayish-Blue-Empty-Slider-Bar) 0%)`;

        typeBilling();
    });

    $toggleBilling.addEventListener('change', () => typeBilling());

});
