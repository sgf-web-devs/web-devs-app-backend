<template>
  <div class="container">
		<attendee
			v-for="(attendee, index) in attendees"
			:key="index"
			:name="attendee.name"
			:img="attendee.img"
			class="attendee">
		</attendee>
	</div>
</template>

<script>

import { attendees } from '../data/attendees';
import Attendee from '../components/Attendee';

export default {
  data() {
		return {
			attendees
		}
	},

	components: {
		Attendee
	}
}
</script>

<style lang="stylus" scoped>
	.attendee
		margin-bottom 5px
</style>

