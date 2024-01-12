
<template>
    <div>
        <h2>Loan Details</h2>
        <div v-if="selectedLoan">
            <p>{{ selectedLoan.borrowerDetails }}</p>
            <p>{{ selectedLoan.repaymentSchedule }}</p>
        </div>
        <router-link to="/" class="back-link">Back to Loan List</router-link>
    </div>
</template>

<script>
export default {
    data() {
        return {
            selectedLoan: null,
        };
    },
    mounted() {
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
