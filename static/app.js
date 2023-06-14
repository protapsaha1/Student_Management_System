const printBtn = document.getElementById('btn');
const contentDiv = document.getElementById('card_main');

printBtn.addEventListener('click', () => {
    printDiv(contentDiv);
    console.log('hi');
});

function printDiv(div) {
    const printContents = div.innerHTML;
    const originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;
    window.print();
    document.body.innerHTML = originalContents;
}
