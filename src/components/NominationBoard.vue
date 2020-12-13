<template>
    <div>
        <div v-if="loading" class="text-center">
            <img  src="../assets/loading.svg" alt="loader" />
        </div>
        <div v-else>
        <table class="table table-hover">
            <thead class="bg-dark text-white">
            <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Current Club</th>
                <th scope="col">No_of_clubs</th>
                <th scope="col">Nationality</th>
            </tr>
            </thead>
            <tbody>
            
            <tr v-for="nomination in nominations" :key="nomination.id">
                <th scope="row">{{ nomination.id }}</th>
                <td>{{ nomination.name }}</td>
                <td>{{ nomination.current_club }}</td>
                <td>{{ nomination.no_of_clubs }}</td>
                <td>{{ nomination.nationality }}</td>
            </tr>
            </tbody>
        </table>

        </div>
    </div>
</template>
<script>
import gql from "graphql-tag";

 const SUBSCRIPTION_NOMINATION = gql`
   subscription  getNominations {
    nominations(order_by: { created_at: desc }) {
      id
      name
      nationality
      no_of_clubs
      current_club
      created_at
    }
  }
 `;
export default {
  data: function() {
    return {
        loading: true,
      nominations: [
      ],
    }
  },
  apollo: {
   // Subscriptions
   
   $subscribe: {
     // When a nomination is added
     nominations: {
       query: SUBSCRIPTION_NOMINATION,
       // Result hook
       result (data) {
           console.log(data)
         // Let's update the local data
         this.nominations = data.data.nominations
         this.loading = false
       },
     },
   },
 },
}
</script>