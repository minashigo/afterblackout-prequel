/* --- Root Variables --- */
:root {
    --bg: #050709;
    --accent: #E66827;
    --text: #E0E0E0;
    --font-head: 'Share Tech Mono', monospace;
    --font-body: 'Inter', sans-serif;
}

/* --- Base Styles --- */
* { box-sizing: border-box; }
body { 
    background: var(--bg); 
    color: var(--text); 
    font-family: var(--font-body); 
    margin: 0; 
    line-height: 1.5;
}

/* --- Hero Section --- */
.hero { 
    min-height: 100vh; 
    padding: 2rem; 
    display: flex; 
    align-items: center; 
    padding-top: calc(2rem - 40px); 
}

.hero-grid { 
    display: grid; 
    grid-template-columns: 1fr 1fr; 
    gap: 5rem; 
    max-width: 1200px; 
    margin: 0 auto; 
    align-items: center; 
}

h1 { 
    font-family: var(--font-head); 
    font-size: 48px; 
    margin-bottom: 1rem; 
    color: #fff; 
    text-transform: uppercase;
}

.eyebrow { 
    font-size: 0.75rem; 
    letter-spacing: 0.2rem; 
    color: var(--accent); 
    text-transform: uppercase; 
    margin-bottom: 1rem; 
}

.tagline { 
    font-size: 1.2rem; 
    margin-bottom: 2rem; 
    opacity: 0.9; 
}

/* --- Form Container --- */
.form-container { 
    width: 100%; 
    min-height: 125px; 
    margin-bottom: 0.5rem; 
}

/* --- MailerLite & Static Form Integration --- */
#ml-container input[type="email"] {
    width: 100%; 
    padding: 1.1rem; 
    background: transparent; 
    border: 1px solid #6c7a80; 
    color: white; 
    margin-bottom: 1rem;
    transition: 0.3s;
}

#ml-container input[type="email"]:focus { 
    border-color: var(--accent); 
    outline: none; 
}

.button.primary { 
    background: var(--accent); 
    color: #000; 
    border: none; 
    padding: 1.1rem 2rem; 
    font-weight: bold; 
    cursor: pointer; 
    width: 100%; 
    text-transform: uppercase;
    transition: 0.3s;
}

.button.primary:hover { 
    background: #FF8C50; 
    box-shadow: 0 0 15px rgba(230, 104, 39, 0.4);
}

.micro-copy { 
    font-size: 12px; 
    opacity: 0.5; 
    margin-bottom: 2rem; 
}

/* --- Series Block --- */
.series-block { margin-top: 2rem; }
.series-block p { font-size: 0.9rem; margin-bottom: 1rem; opacity: 0.8; }

.button.secondary {
    display: block; 
    text-align: center; 
    background: transparent;
    border: 1px solid var(--accent); 
    color: var(--accent);            
    padding: 1.1rem 2rem;
    font-weight: bold; 
    cursor: pointer; 
    width: 100%; 
    text-transform: uppercase;
    text-decoration: none;           
    transition: all 0.3s ease;
}

.button.secondary:hover { 
    background: var(--accent);       
    color: #000;                     
}

/* --- Visuals --- */
.cover-stage img { 
    width: 100%; 
    height: auto; 
    filter: drop-shadow(0 15px 25px rgba(0,0,0,0.6)); 
}

.panorama-footer { 
    height: 300px; 
    background: url('assets/panorama.jpg') center/cover; 
    mask-image: linear-gradient(to top, black, transparent); 
}

/* --- Thank You Page Specific Styles --- */
.thank-you-page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
}

.thank-you-container {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 2rem;
    text-align: center;
}

.thank-you-content {
    max-width: 600px;
    width: 100%;
}

.thank-you-content h1 {
    font-size: 3rem;
    margin-bottom: 2rem;
}

.subtitle {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
}

.small-note {
    font-size: 0.9rem;
    opacity: 0.7;
    margin-bottom: 3rem;
}

.contact-block {
    margin-top: 3rem;
    font-size: 0.85rem;
    opacity: 0.6;
}

.contact-block a {
    color: var(--accent);
    text-decoration: underline;
}

/* --- Responsive --- */
@media (max-width: 768px) {
    .hero { padding-top: 2rem; }
    .hero-grid { grid-template-columns: 1fr; text-align: center; gap: 2rem; }
    h1 { font-size: 32px; }
}
