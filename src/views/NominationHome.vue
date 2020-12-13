<template>
  <div>
    <div class="col-xs-12 col-lg-2 col-md-12 col-sm-12 noPadd">
      <Sidebar />
    </div>
    <div class="col-xs-12 col-md-12 col-lg-10 col-sm-12 noPadd">
      <div>
        <div class="col-xs-12 col-md-12 col-sm-12 grayBgColor todoMainWrapper commonBorRight">
          <div class="wd95 addPaddTopBottom">
            <div class="sectionHeader">
              <h4> Realtime Soccer SuperStar Nomination</h4>
              <p>N/B: Nominee must play for a minimum of five professional teams in his football career </p>
            </div>
            <div class="modal-container">
              <NominationModal/>
            </div>
            <NominationBoard />
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import Sidebar from "../components/Sidebar";
import NominationModal from "../components/NominationModal";
import NominationBoard from "../components/NominationBoard";

export default {
  components: {
    Sidebar, NominationModal, NominationBoard
  }
};
</script>
