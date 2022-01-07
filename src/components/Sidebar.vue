<template>
	
    <!-- <h1>Testpage</h1> -->
		<div class="sidebar" :style="computed_width">

			<h4 class=" sidebar__title"><b>サイドバー</b></h4>
				<ul class="list-group sidebar__list" id="">
						<li class="list-group-item ">An item</li>
						<li class="list-group-item">A second item</li>
						<li class="list-group-item">A third item</li>
						<li class="list-group-item">A fourth item</li>
						<li class="list-group-item">And a fifth one</li>
				</ul>
				

				<div class="seecbutton">
						<!-- bはインライン要素なのでサイズ-width-指定できない -->
							<b  
							ref="sample"
							@mousemove="muve"
							 @mousedown="onMousedown" 
							 @mouseup="onMouseup" 
							 @mouseleave="mouseleave" >B</b>
				</div>

				<!-- <p class="bg":style="{ width: seecbar_x_size + 'px' }">sss</p> -->
		</div>
</template>
 
<script>
// import Sidebar from '../components/Sidebar.vue'
// import Sidebar from '../components/Sidebar.vue'
export default ({
	data() {
    return {
      msg: "test",
			width__data: 1200,
			seecbar_x: 0,
			seecbar_x_size: 150,
			mousedown: false, 
    }
  },  
	methods: {
		onMousedown(event){
			this.mousedown = true
				// オブジェクトのX座標を取得()
				console.log(event.offsetX) 
				this.seecbar_x = 30 - event.offsetX
				console.log('マウスボタンが押されました（mousedown）'+this.mousedown)
		},
		onMouseup(event){
			this.mousedown = false
				console.log('マウスボタンが離れました（mousedown）'+this.mousedown)
		},
		mouseleave(event){
			this.mousedown = false
				console.log('マウスボタンが離れました（mousedown）'+this.mousedown)
		},
		muve(event){
				if(	this.mousedown == true ){
					this.width__data = event.screenX + this.seecbar_x 
				}
		}
  },
	computed: {
		computed_width() {
			return { width: `${this.width__data}px` };
		},
	}
})
</script>
 
<style>
.sidebar{
	width: 300px;
	  height:100vh;
	padding-top: 50px;

	background-color: white;
}
.sidebar__title{
	text-align: center;
	/* margin-top: 50px; */
	padding: 15px;
}
.sidebar__list li{
	padding: 15px;
	/* margin: 15px; */
}
.seecbutton{
	float: right;
}
.seecbutton b{
	width: 30px;
	background-color: gray;
	padding: 10px;
}
</style>