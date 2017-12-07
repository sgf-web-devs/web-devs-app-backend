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
				
			</div>
		</div>
	</div>
</template>

<script>

import Attendee from '../components/Attendee.vue';
import { attendees } from '../data/attendees';

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
.attendee-list
		display flex
		flex-wrap wrap

		& > *
			flex-basis 220px
.attendee
		margin-bottom 5px
</style>