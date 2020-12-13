<template>
  <div class="sliderMenu sidebarBgColor">
    <div class=" text-center">
      <img src="../assets/image-colton.jpg" alt="profile photo" class="rounded-circle">
      <h2 class="mt-4">Colton Jones</h2>
      <p>Sport Analyst</p>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        online_list: [
          { user: { name: "someUser1" }},
          { user: { name: "someUser2" }}
        ]
      };
    },
  }

</script>
