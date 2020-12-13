<template>
  <div>
    <!-- Button trigger modal -->
    <button
      type="button"
      class="btn nominate-btn btn-primary"
      data-toggle="modal"
      data-target="#exampleModal"
    >
      Nominate superstar
    </button>

    <!-- Modal -->
    <div
      class="modal fade"
      id="exampleModal"
      tabindex="-1"
      role="dialog"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
            <button
              type="button"
              class="close"
              data-dismiss="modal"
              aria-label="Close"
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="exampleInputName">Superstar's Name</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputName"
                  placeholder="Enter name"
                  v-model="superstar_name"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputClub">Current Club</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputClub"
                  placeholder="Current club"
                  v-model="current_club"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputNationality">Nationality</label>
                <input
                  type="text"
                  class="form-control"
                  id="exampleInputNationality"
                  placeholder="Nationality"
                  v-model="nationality"
                />
              </div>
              <div class="form-group">
                <label for="exampleInputClubNo">No of Clubs</label>
                <input
                  type="number"
                  min="1"
                  max="20"
                  class="form-control"
                  id="exampleInputClubNo"
                  v-model="no_of_clubs"
                />
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
            >
              Close
            </button>
            <button
              type="button"
              class="btn btn-primary"
              @click="addNomination"
            >
              Save changes
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import gql from "graphql-tag";
const ADD_NOMINATION = gql`
  mutation insert_nominations(
    $name: String!
    $nationality: String!
    $no_of_clubs: Int!
    $current_club: String!
  ) {
    insert_nominations(
      objects: {
        name: $name
        nationality: $nationality
        no_of_clubs: $no_of_clubs
        current_club: $current_club
      }
    ) {
      affected_rows
      returning {
        id
        name
        nationality
        no_of_clubs
        current_club
        created_at
      }
    }
  }
`;
export const GET_MY_NOMINATIONS = gql`
  query getMyNominations {
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
  data() {
    return {
      superstar_name: "",
      current_club: "",
      nationality: "",
      no_of_clubs: "",
    };
  },
  methods: {
    addNomination: function () {
      // insert new nomination into db

      const name = this.superstar_name && this.superstar_name.trim();
      const currentClub = this.current_club && this.current_club.trim();
      const nationality = this.nationality && this.nationality.trim();
      const noOfClubs = this.no_of_clubs && this.no_of_clubs.trim();
      this.$apollo.mutate({
        mutation: ADD_NOMINATION,
        variables: {
          name: name,
          nationality: nationality,
          no_of_clubs: noOfClubs,
          current_club: currentClub,
        },
        update: (cache, { data: { insert_nominations } }) => {
          // Read the data from our cache for this query.
          // eslint-disable-next-line
          console.log(insert_nominations);
        },
      });

      this.superstar_name = "";
      this.current_club = "";
      this.nationality = "";
      this.no_of_clubs = "";
    },
  },
};
</script>
