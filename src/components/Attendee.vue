<template>
	<div class="attendee">
		<img :src="img" :alt="altText">
		<p>{{ name }}</p>
	</div>
</template>

<script>
export default {
	props: ['name', 'img'],
	computed: {
		altText() {
			return `${this.name} profile image`
		}
	}
}
</script>

<style lang="stylus" scoped>
	.attendee
		display flex
		align-items center

	p
		margin-left 10px

	img
		height 50px
		border-radius 100%
</style>


