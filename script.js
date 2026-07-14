document.getElementById('subscription-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const form = e.target;
    const formData = new FormData(form);
    
    try {
        const response = await fetch(form.action, {
            method: 'POST',
            body: formData,
            mode: 'no-cors' // MailerLite іноді блокує CORS, no-cors дозволяє виконати запит
        });

        // Оскільки запит no-cors не повертає JSON, вважаємо успіх після відправки
        // або перенаправляємо одразу, якщо сервер MailerLite прийняв дані
        window.location.href = "/thank-you.html";
        
    } catch (error) {
        console.error('Subscription error:', error);
        alert('Something went wrong. Please try again later.');
    }
});
