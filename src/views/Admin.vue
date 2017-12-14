<template>
	<div class="container">
		<div class="columns">
			<div class="column is-two-thirds attendee-list">
				<attendee
					v-for="(attendee, index) in attendees"
					:key="index"
					:name="attendee.name"
					:img="attendee.img"
					class="attendee">
				</attendee>
			</div>
			<div class="column">
				<prize-picker @picked="pickWinner($event)"></prize-picker>
        <div class="content" v-if="winner">
          <attendee :name="winner.name" :img="winner.img"></attendee>
          <p>{{ winner.email }}</p>
        </div>
			</div>
		</div>
	</div>
</template>

<script>

import Attendee from '../components/Attendee.vue';
import PrizePicker from '../components/PrizePicker.vue';
//import { attendees } from '../data/attendees';

export default {
  props: ['attendees'],

	data() {
		return {
      winner: false,
		}
	},

  methods: {
    pickWinner(prize) {
      if (this.winner) return;

      const rand = Math.floor(Math.random() * this.attendees.length);
      this.winner = this.attendees[rand];

      //TO DO: Fire off email to the winner
    }
  },

	components: {
		Attendee,
		PrizePicker
	}
}
</script>

<style lang="stylus" scoped>
.attendee-list
		display flex
		flex-wrap wrap

		& > *
			flex-basis 220px

.attendee
		margin-bottom 5px
</style>
