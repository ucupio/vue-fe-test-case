
<template>
    <div class="p-8">
        <h2>Loan List</h2>
        <div class="filters">
            <label>Filter by Amount:</label>
            <input v-model="amountFilter" />
            <!-- Other filters and sorting options go here -->
        </div>
        <ul class="loan-list">
            <li v-for="loan in filteredLoans" :key="loan.id" class="loan-item border rounded-lg">
                <!-- Display essential loan details here -->
                {{ JSON.stringify(loan, null, 2) }}
                {{ loan.borrower.name }} - {{ loan.interestRate }} - {{ loan.term }}
                <div v-for="item in loan" :key="item">
                    {{ item }}
                </div>
                <router-link :to="{ name: 'loan-details', params: { id: loan.id } }">
                    View Details
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
            loans: [], // Store fetched loans
            amountFilter: null,
            currentPage: 1
        };
    },
    methods: {
        onPageChange(page) {
            console.log(page)
            this.currentPage = page;
        }

    },
    computed: {
        filteredLoans() {
            return this.loans.filter((loan) => {
                if (!this.amountFilter || loan.term === Number(this.amountFilter)) {
                    return true;
                }
                return false;
            });
        },
    },
    mounted() {
        fetch('https://raw.githubusercontent.com/andreascandle/p2p_json_test/main/api/json/loans.json')
            .then((response) => response.json())
            .then((data) => {
                this.loans = data;
            })
            .catch((error) => {
                console.error('Error fetching loans', error);
            });
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
    padding: 10px;
    margin-bottom: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.loan-item:hover {
    background-color: #f0f0f0;
}
</style>
