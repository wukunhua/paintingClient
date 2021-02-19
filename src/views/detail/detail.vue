<template>
  <div class="hello">
    <mt-tab-container v-model="tabberValue" style="margin-top:10px;margin-bottom:60px;">
	<mt-tab-container-item id="index" class="index">
		<mt-swipe :auto="4000" class="swipe">
			<mt-swipe-item class="item">
			<img src="/static/img/h1.jpg" alt="">
			</mt-swipe-item>
			<mt-swipe-item class="item">
			<img src="/static/img/h1.jpg" alt="">
			</mt-swipe-item>
			<mt-swipe-item class="item">
			<img src="/static/img/h1.jpg" alt="">
			</mt-swipe-item>
			<mt-swipe-item class="item">
			<img src="/static/img/h1.jpg" alt="">
			</mt-swipe-item>
		</mt-swipe>
		<div class="listItem">
			<div class="list">
				<mt-cell title="硕果累累" style="font-weight: bold;color:rgb(102,2,101);background-color:rgb(180,154,251);margin-top:5px;"></mt-cell>
				<div class="imgBox">
					<div class="imgBoxItem">
						<img src="/static/img/s1.jpg" alt="">
					</div>
					<div class="imgBoxItem">
						<img src="/static/img/s2.jpg" alt="">
					</div>
					<div class="imgBoxItem">
						<img src="/static/img/s3.jpg" alt="">
					</div>
					<div class="imgBoxItem">
						<img src="/static/img/s3.jpg" alt="">
					</div>
				</div>
			</div>
			<div class="list">
				<mt-cell title="晶莹剔透" style="font-weight: bold;color:rgb(102,2,101);background-color:rgb(180,154,251);margin-top:5px;"></mt-cell>
				<div class="imgBox">
					<div class="imgBoxItem">
						<img src="/static/img/s1.jpg" alt="">
					</div>
					<div class="imgBoxItem">
						<img src="/static/img/s2.jpg" alt="">
					</div>
					<div class="imgBoxItem">
						<img src="/static/img/s3.jpg" alt="">
					</div>
					<div class="imgBoxItem">
						<img src="/static/img/s3.jpg" alt="">
					</div>
				</div>
			</div>
		</div>
	</mt-tab-container-item>
	<mt-tab-container-item id="class">
		分类
	</mt-tab-container-item>
	<mt-tab-container-item id="detail">
		<mt-header :title="detailTitle" fixed>
			<mt-button slot="left" icon="back">返回</mt-button>
		</mt-header>
		<div class="content">
			<div class="cover">
				<img src="/static/img/s3.jpg" alt="">
			</div>
			<div class="detailInfo">
				<div class="price">
					<span>￥1999</span>
				</div>
				<div class="name">
					<span>秋意满园，硕果累累--丰收图</span>
				</div>
				<div class="introduce">
					<span>画作介绍画作介绍画作介绍画作介绍画作介绍画作介绍画作介绍画作介绍画作介绍画作介绍画作介绍画作介绍画作介绍画作介绍画作介绍画作介绍画作介绍画作介绍画作介绍画作介绍画作介绍</span>
					<p>--作者</p>
				</div>
			</div>
		</div>
	</mt-tab-container-item>
	<mt-tab-container-item id="author">
		作者介绍
	</mt-tab-container-item>
    </mt-tab-container>

    <mt-tabbar v-model="tabberValue" :fixed="true">
      <mt-tab-item id="index">
		<i class="iconfont icon">&#xe60e;</i>
		<p>首页</p>
      </mt-tab-item>
	  <mt-tab-item id="class">
		<i class="iconfont icon">&#xe610;</i>
		<p>分类</p>
      </mt-tab-item>
	  <mt-tab-item id="detail">
		<i class="iconfont icon">&#xe611;</i>
        <p>详情</p> 
      </mt-tab-item>
      <mt-tab-item id="author">
		<i class="iconfont icon">&#xe60d;</i>
        <p>画者介绍</p>
      </mt-tab-item>
      <mt-tab-item id="mine">
		<i class="iconfont icon">&#xe60f;</i>
        <p>我的</p> 
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        tabberValue: 'index',
		detailTitle: '默认标题'
      }
    },
    mounted: function () {
		this.$axios.get('/api/test', {})
		.then(function (data) {
			console.log(data)
		})
	}
  }

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
	.index{padding: 8px;box-sizing: border-box;}
	.swipe {height: 200px;}
	.item { height: 200px;}
	.item>img {width: auto;height: 100%;}
	.listItem {text-align: left;}
	.icon {font-size: 22px;}
	.mint-tab-item-label>p{margin: 0;font-size: 12px;margin-top: 3px;}
	.imgBox{width:100%;display: flex;justify-content: space-between;flex-wrap: wrap;}
	.imgBox .imgBoxItem{width: 47%;height: 300px; background: brown;box-sizing: border-box;margin: 5px;display: flex;align-items: center;
	justify-content: center;}
	.imgBox .imgBoxItem>img{max-width: 100%;max-height: 100%;}
	.content{margin-top: 30px;}
	.content .cover img{width: 100%;height: auto;}
	.content .detailInfo{box-sizing: border-box;padding: 4px;}
	.content .price{text-align: left;}
	.content .price span{color: #920592;font-size: 18px;font-weight: 520;}
	.content .name{text-align: left;margin-top:10px;}
	.content .name span{font-size: 17px;font-weight: bold;padding-left: 5px;box-sizing: border-box;}
	.content .introduce{text-align: left;margin-top:5px;font-size: 15px;text-indent: 2em;}
	.content .introduce p{text-align: right;}
</style>
