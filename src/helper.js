export function printInvoices() {
    const printContainer = document.createElement('div');
    printContainer.id = 'print-container';

    // Clone all .invoice-page elements into the print container
    document.querySelectorAll('.invoice-page').forEach(page => {
        printContainer.appendChild(page.cloneNode(true));
    });

    // Append print container to the body
    document.body.appendChild(printContainer);

    // Trigger print
    window.print();

    // Remove print container after printing
    document.body.removeChild(printContainer);
}


export function downloadInvoices() {
    const pages = document.querySelectorAll('.invoice-page'); // Select all elements
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    let totalHeight = 0;
    let maxWidth = 0;

    // First, get the total height of all pages
    pages.forEach((page) => {
        const rect = page.getBoundingClientRect();
        maxWidth = Math.max(maxWidth, rect.width);
        totalHeight += rect.height;
    });

    // Set canvas size
    canvas.width = maxWidth;
    canvas.height = totalHeight;

    let yOffset = 0;

    // Now, draw each page onto the canvas
    pages.forEach((page) => {
        const rect = page.getBoundingClientRect();
        ctx.fillStyle = 'white';
        ctx.fillRect(0, yOffset, rect.width, rect.height);
        ctx.fillStyle = 'black';
        ctx.font = '16px Arial';
        ctx.fillText(page.innerText, 10, yOffset + 20);
        yOffset += rect.height;
    });

    // Convert canvas to an image
    const image = canvas.toDataURL('image/png');

    // Download the image
    const link = document.createElement('a');
    link.href = image;
    link.download = 'invoice.png';
    link.click();
}
