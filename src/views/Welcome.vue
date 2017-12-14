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

import Attendee from '../components/Attendee';

export default {
  props: ['attendees'],

	components: {
		Attendee
	}
}
</script>

<style lang="stylus" scoped>
	.container
		display flex
		flex-wrap wrap

		& > *
			flex-basis 220px

	.attendee
		margin-bottom 5px
</style>

