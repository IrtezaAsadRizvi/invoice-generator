

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
    const pages = document.querySelectorAll('.invoice-page');

    // Wrapper to hold cloned pages
    const container = document.createElement('div');
    container.style.position = 'absolute';
    container.style.top = '-9999px';
    container.style.width = '794px';  // A4 width in px at 96dpi
    container.style.background = 'white';
    container.style.fontSize = '16px'; // Tailwind text-base equivalent

    pages.forEach(page => {
        const clone = page.cloneNode(true);
        clone.style.pageBreakAfter = 'always';
        container.appendChild(clone);
    });

    document.body.appendChild(container);

    const opt = {
        margin: 0,
        filename: 'invoice.pdf',
        image: { type: 'jpeg', quality: 1 },
        html2canvas: {
            scale: 2,
            useCORS: true
        },
        jsPDF: { unit: 'pt', format: 'a4', orientation: 'portrait' }
    };

    // html2pdf().set(opt).from(container).save().then(() => {
    //     container.remove(); // Clean up
    // });
}
