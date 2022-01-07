<template>
  <div>
			<!-- <Sidebar /> -->
		<div class="main__view">
				<h2>{{ msg }}</h2>
				<div>
						<t>dsdklsldskdnlkjdnsfkjvnkdfjnvkdfjnvkdnvkdnfkvdnfkvndkfnvkdvdf
							dfvdflvndfkvjndkfnvkdjfnkvndkfjvn;sifojn;vjkdfn;vkjsnf;vjnks
							dvlsndlvjnskdnvskds;dfdsdskdjnksdnvksndkvdflvndfkvjndkfnvkdjfnkvndkfjvndfjvndkfvjn
							kdnvkdjfnvkdfnvkdnfapiohfidjvnapdouhnvapoidnaeojdnf;;ejnv;d
						</t>
				</div>
		</div>
     
  </div>
</template>
 
<script>
import Sidebar from '../components/Sidebar.vue'
export default ({
	data() {
    return {
      msg: "test",
    }
  },  
	methods: {
  },
	computed: {
		computed_width() {
			return { width: `${this.width__data}px` };
		},
	}
})
</script>
 
<style>
/* 初期設定 */

</style>