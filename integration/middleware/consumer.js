const { dequeue, isEmpty } = require('./queue');

console.log('=== APPROVAL MODULE - CONSUMER ===');

function processQueue() {
    if (isEmpty()) {
        console.log('No loan requests in the queue.');
        return;
    }

    const loan = dequeue();

    console.log(`\nProcessing loan request for ${loan.borrower}...`);

    setTimeout(() => {
        if (loan.amount <= 50000) {
            console.log(
                `Loan request for ${loan.borrower} → Approved`
            );
        } else {
            console.log(
                `Loan request for ${loan.borrower} → Rejected`
            );
        }

        processQueue();
    }, 1000);
}

processQueue();