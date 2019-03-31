<template>
    <div class="page-home">
        <PlanTable />
        <InfoBoard />
    </div>
</template>

<script>
import PlanTable from "@/components/PlanTable";
import InfoBoard from "@/components/InfoBoard";

export default {
    components: {
        PlanTable,
        InfoBoard,
    }    
}
</script>

