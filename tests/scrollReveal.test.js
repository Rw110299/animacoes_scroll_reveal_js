/**
 * @jest-environment jsdom
 */

const fs = require('fs');
const path = require('path');

describe('ScrollReveal Integration', () => {
    beforeAll(() => {
        // Carregar index.html no DOM virtual
        const html = fs.readFileSync(path.resolve(__dirname, '../cod/index.html'), 'utf8');
        document.documentElement.innerHTML = html;
    });

    test('Deve carregar elementos com a classe .reveal', () => {
        const revealElements = document.querySelectorAll('.reveal');
        expect(revealElements.length).toBeGreaterThan(0);
    });

    test('Deve carregar a biblioteca ScrollReveal', async () => {
        // Simula carregamento da biblioteca
        const script = document.createElement('script');
        script.src = "https://unpkg.com/scrollreveal";
        document.head.appendChild(script);

        await new Promise(resolve => {
            script.onload = resolve;
        });

        expect(global.ScrollReveal).toBeDefined();
    });
});
