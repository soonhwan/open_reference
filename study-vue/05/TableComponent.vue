<template>
    <table>
        <tr-component v-for="(rowData, index) in tableData" :key="index" :row-data="rowData" :row-index="index"></tr-component>
    </table>
</template>

<script>
    import TrComponent from './TrComponent';
    
    export default {
        props: {
            tableData: Array
        },
        components: {
            TrComponent
        },
        data() {
			return {
                rowData: '',
                index: ''
			};
        },
        computed:{ 
           
        },
		methods: {
            
        },
        mounted() {
            //console.log('mounted');
        },
        beforeDestroy() {
            //console.log('beforeDestroy');
        }
    };
</script>

<style scoped>
    
</style>


