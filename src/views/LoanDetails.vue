
<template>
    <div class="p-8 w-full h-full" v-if="loan">
        <h2 class="font-bold w-full text-center text-2xl p-4">Loan Details</h2>

        <h3 class="font-medium text-xl mt-4 mb-2">Loan</h3>
        <div class="w-full">
            <div class="flex gap-2">
                <div class="w-1/3">Loan Id</div>
                <div class="grow">{{ loan.id }}</div>
            </div>
            <div class="flex gap-2">
                <div class="w-1/3">Amount</div>
                <div class="grow">{{ loan.amount }}</div>
            </div>
            <div class="flex gap-2">
                <div class="w-1/3">Interest Rate</div>
                <div class="grow">{{ loan.interestRate }}</div>
            </div>
            <div class="flex gap-2">
                <div class="w-1/3">Term</div>
                <div class="grow">{{ loan.term }}</div>
            </div>
            <div class="flex gap-2">
                <div class="w-1/3">Purpose</div>
                <div class="grow">{{ loan.purpose }}</div>
            </div>
            <div class="flex gap-2">
                <div class="w-1/3">Risk Rating</div>
                <div class="grow">{{ loan.riskRating }}</div>
            </div>

        </div>
        <h3 class="font-medium text-xl mt-4 mb-2">Borrower</h3>
        <div class="w-full">
            <div class="flex gap-2">
                <div class="w-1/3">Borrower Id</div>
                <div class="grow">{{ loan.borrower.id }}</div>
            </div>
            <div class="flex gap-2">
                <div class="w-1/3">Name</div>
                <div class="grow">{{ loan.borrower.name }}</div>
            </div>
            <div class="flex gap-2">
                <div class="w-1/3">Email</div>
                <div class="grow">{{ loan.borrower.email }}</div>
            </div>
            <div class="flex gap-2">
                <div class="w-1/3">Credit Score</div>
                <div class="grow">{{ loan.borrower.creditScore }}</div>
            </div>
        </div>
        <h3 class="font-medium text-xl mt-4 mb-2">Repayment Schedule</h3>
        <div class="w-full">
            <div class="flex gap-2">
                <div class="w-1/3">Instalments</div>
                <ul class="flex flex-col grow list-decimal">

                    <li class="" v-for="payment in loan.repaymentSchedule.installments" :key="payment.dueDate">
                        <ul class="list-inside flex">

                            <li class="w-full">
                                Due Date: {{ payment.dueDate }}
                            </li>
                            <li class="w-full">
                                Amount Due: {{ payment.amountDue }}
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <router-link to="/" class="back-link">Back to Loan List</router-link>
    </div>
</template>

<script>
export default {
    computed: {
        loan() {
            return this.$store.state.loan
        }
    },
    mounted() {
        this.$store.commit('findLoanById', this.$route.params.id)
    },
};
</script>

<style scoped>
.back-link {
    display: block;
    margin-top: 20px;
    color: #3498db;
    text-decoration: none;
    transition: color 0.3s;
}

.back-link:hover {
    color: #2072a8;
}
</style>
