<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->


		<div id="Bc_Sidebar">
			<Sidebar />
		</div>


		<div class="main">
			<router-view></router-view>
		</div>

		
</template>


<script setup>
import Sidebar from './components/Sidebar.vue'
</script> 


<style>
/* 初期設定 */
*{
  margin:0;
  padding:0;
}
html, body{
	height: 100%;
	background-color: whitesmoke;
	 /* display: flex;  */
}
#app{
	display: flex;
	/* float: right; */
	}
.main{
	float: right;
	width: 80vw;
	margin-left: 10px;
	background-color: white;
}
.Bc_Sidebar{
	/* float: left; */
}
</style>