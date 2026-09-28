const { enqueue, dequeue, isEmpty } = require('./queue');

const loanRequests = [
    {
        borrower: 'Juan Dela Cruz',
        amount: 25000,
        term: 12
    },
    {
        borrower: 'Maria Santos',
        amount: 50000,
        term: 24
    },
    {
        borrower: 'Pedro Cruz',
        amount: 75000,
        term: 12
    }
];

console.log('======================================');
console.log(' FIXORA - MESSAGING MIDDLEWARE DEMO');
console.log('======================================');

console.log('\n[PRODUCER - LOAN MODULE]');

loanRequests.forEach((loan) => {
    enqueue(loan);

    console.log(
        `Loan request submitted: { borrower: "${loan.borrower}", amount: ${loan.amount}, term: ${loan.term} months }`
    );
});

console.log('\n[CONSUMER - APPROVAL MODULE]');
console.log('Processing loan requests asynchronously...\n');

function processNextLoan() {
    if (isEmpty()) {
        console.log('\nAll loan requests have been processed.');
        console.log('Messaging workflow completed.');
        return;
    }

    const loan = dequeue();

    console.log(`Processing request for ${loan.borrower}...`);

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

        processNextLoan();
    }, 1500);
}

processNextLoan();