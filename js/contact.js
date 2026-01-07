
document.addEventListener("DOMContentLoaded", function () {
    const forms = document.querySelectorAll('#contactForm, #contactFormIndex, #contactFormServices');

    forms.forEach(form => {
        form.addEventListener('submit', async function (e) {
            e.preventDefault();

            const submitBtn = form.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.innerText;

            // Loading state
            submitBtn.disabled = true;
            submitBtn.innerText = 'Sending...';

            const formData = new FormData(form);

            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (response.ok) {
                    // Success UI
                    form.innerHTML = `
                        <div class="text-center py-12 space-y-4">
                            <div class="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                            <h3 class="text-2xl font-bold text-heading">Message Sent!</h3>
                            <p class="text-paragraph">Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                            <button onclick="window.location.reload()" class="mt-6 text-sm text-heading font-medium underline underline-offset-4 decoration-heading/30 hover:decoration-heading transition-all">Send another message</button>
                        </div>
                    `;
                } else {
                    const data = await response.json();
                    if (data && data.errors) {
                        alert(data.errors.map(error => error.message).join(", "));
                    } else {
                        alert("Oops! There was a problem submitting your form");
                    }
                    submitBtn.disabled = false;
                    submitBtn.innerText = originalBtnText;
                }
            } catch (error) {
                alert("Oops! There was a problem submitting your form");
                submitBtn.disabled = false;
                submitBtn.innerText = originalBtnText;
            }
        });
    });
});
