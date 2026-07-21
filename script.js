document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('subscription-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        const formData = new FormData(form);

        try {
            await fetch(form.action, {
                method: 'POST',
                body: formData,
                mode: 'no-cors'
            });
            window.location.href = 'thank-you.html';
        } catch (err) {
            window.location.href = 'thank-you.html';
        }
    });
});