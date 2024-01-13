
<template>
    <div class="p-8 w-full h-full">
        <h2 class="font-bold w-full text-center text-2xl p-4">Loan List</h2>
        <div class="filters flex flex-col sm:flex-row justify-center items-center gap-2">
            <div class="flex gap-2 items-center">
                <label class="">Filter by:</label>
                <select class="border p-2 rounded-lg" @change="onFilterByChange">
                    <option value="amount">Amount</option>
                    <option value="interestRate">Interest rate</option>
                    <option value="term">Term</option>
                </select>
            </div>
            <input class="border p-2 rounded-lg grow" v-model="filter" placeholder="keyword filter" />
        </div>
        <ul class="loan-list w-full">
            <li class="loan-item hidden grid-cols-6 sm:grid justify-between items-center">
                <div class="p-1">Name</div>
                <div class="p-1">Amount</div>
                <div class="p-1">Interst Rate</div>
                <div class="p-1">Term</div>
                <div class="p-1">Credit Score</div>
                <div class="p-1">Detail</div>
            </li>
            <li v-for="loan in filteredLoans" :key="loan.id"
                class="loan-item grid grid-rows-6 sm:grid-rows-1 grid-cols-1 sm:grid-cols-6 justify-between items-center odd:bg-slate-100 w-full">
                <div class="p-1 w-full text-center sm:text-left">{{ loan.borrower.name }}</div>
                <div class="p-1 w-full text-center sm:text-left">{{ loan.amount }}</div>
                <div class="p-1 w-full text-center sm:text-left">{{ loan.interestRate }}</div>
                <div class="p-1 w-full text-center sm:text-left">{{ loan.term }}</div>
                <div class="p-1 w-full text-center sm:text-left">{{ loan.borrower.creditScore }}</div>

                <router-link :to="{ name: 'loan-details', params: { id: loan.id } }"
                    class="w-3/4 mx-auto text-center rounded-md bg-blue-500 text-white">
                    Details
                </router-link>
            </li>
        </ul>
        <DataPagination :totalPages="10" :perPage="10" :currentPage="currentPage" @pagechanged="onPageChange" />
    </div>
</template>

<script>
import DataPagination from '../components/DataPagination.vue'
export default {
    components: {
        DataPagination
    },
    data() {
        return {
            filter: '',
            filterBy: 'amount',
            currentPage: 1
        };
    },
    methods: {
        onPageChange(page) {
            console.log(page)
            this.currentPage = page;
        },
        onFilterByChange(e) {
            this.filterBy = e.target.value
        }

    },
    computed: {
        filteredLoans() {
            console.log(this.$store.state.loans)
            return this.$store.state.loans.filter((loan) => this.filter ? loan[this.filterBy] === +this.filter : true);
        },
    },
    mounted() {
        this.$store.dispatch('getLoans')
    },
};
</script>

<style scoped>
.filters {
    margin-bottom: 20px;
}

.loan-list {
    list-style: none;
    padding: 0;
}

.loan-item {
    border: 1px solid #ddd;
    cursor: pointer;
    transition: background-color 0.3s;
}

.loan-item:hover {
    background-color: #f0f0f0;
}
</style>
