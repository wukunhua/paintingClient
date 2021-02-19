<template>
  <div class="hello">
    <mt-tab-container v-model="tabberValue" style="margin-top:0px;margin-bottom:60px;">
	<mt-tab-container-item id="index" class="index">
		<mt-swipe :auto="4000" class="swipe">
			<mt-swipe-item class="item" v-for="(item,index) in banner" :key="index" >
				<img :src="item.src" alt="" @click="detail(item.id)">
			</mt-swipe-item>
		</mt-swipe>
		<div class="listItem">
			<div class="list">
				<mt-cell title="珠圆玉润" class="listTitle"></mt-cell>
				<div class="imgBox">
					<div class="imgBoxItem" @click="detail(item.id)" v-for="(item,index) in circle" :key="index">
						<img :src="item.src" alt="">
					</div>
				</div>
			</div>
			<div class="list">
				<mt-cell title="晶莹剔透" class="listTitle"></mt-cell>
				<div class="imgBox">
					<div class="imgBoxItem" @click="detail(item.id)" v-for="(item,index) in squre" :key="index">
						<img :src="item.src" alt="">
					</div>
				</div>
			</div>
			<div class="list">
				<mt-cell title="晶莹剔透" class="listTitle"></mt-cell>
				<div class="imgBox">
					<div class="imgBoxItem" @click="detail(item.id)" v-for="(item,index) in shan" :key="index">
						<img :src="item.src" alt="">
					</div>
				</div>
			</div>
			<div class="list">
				<mt-cell title="晶莹剔透" class="listTitle"></mt-cell>
				<div class="imgBox">
					<div class="imgBoxItem" @click="detail(item.id)" v-for="(item,index) in chang" :key="index">
						<img :src="item.src" alt="">
					</div>
				</div>
			</div>
		</div>
	</mt-tab-container-item>
	<mt-tab-container-item id="author">
		<div class="introduce">
			<div class="top">
				<div class="photo">
					<img src="/static/img/tx.jpg" alt="">
				</div>
				<span>冯建辉</span>
				<p><i class="iconfont icon">&#xe612;</i>河北省·石家庄</p>
			</div>
			<div class="Introduction">
				冯建辉,一九七五年生，石家庄市栾城区人，中国民主建国会会员，斋名南浪居，别名沉耕草堂。毕业于河北工艺美术职业学院。现为政协石家庄市第十三届委员会委员，中国国家画院贾广健工作室画家，河北省美术家协会会员，石家庄市美术家协会副秘书长，石家庄市画院特聘画师，石家庄市栾城区美术家协会主席。二○一五年被省委宣传部评为“河北省燕赵文化之星”。国画作品以小写意花鸟为主，兼攻国画山水及国画人物，多幅国画创作在全国及省市级美术展览中入选并获奖
			</div>
		</div>
	</mt-tab-container-item>
	<mt-tab-container-item id="mine">
		<div>
			<p class="lx"><span>联系电话:</span>xxxxxxxxxx	</p> 
			<p class="lx"><span>E-mail:</span>xxxxxxxxxx	</p> 
			<p class="lx"><span style="vertical-align: top;display: inline-block">添加我的微信:</span> <img src="/static/img/1.jpg" alt=""></p> 
		</div>
	</mt-tab-container-item>
    </mt-tab-container>

    <mt-tabbar v-model="tabberValue" :fixed="true">
      <mt-tab-item id="index">
		<i class="iconfont icon">&#xe60e;</i>
		<p>首页</p>
      </mt-tab-item>
      <mt-tab-item id="author">
		<i class="iconfont icon">&#xe60d;</i>
        <p>画者介绍</p>
      </mt-tab-item>
      <mt-tab-item id="mine">
		<i class="iconfont icon">&#xe613;</i>
        <p>联系方式</p> 
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
	import qs from 'qs';
  export default {
    name: 'HelloWorld',
    data() {
      return {
        tabberValue: 'index',
		detailTitle: '默认标题',
		circle:[],
		squre:[],
		shan:[],
		chang:[],
		banner:[],
      }
	},
	methods:{
		detail:function(id){
			this.$router.push({path:'/detail',query:{id:id}});	
		}
	},
    mounted: function () {
		var that = this;
		this.$axios({
            method: 'post',
            url: '/sys/project/del',
            data: qs.stringify({
              rowguid:1,
              xds:1
            }),
          });
		this.$axios.get('/api/allpainting')
		.then(function (data) {
			for(let i = 0;i < data.data.data.length;i++){
				if(data.data.data[i].class == 'circle'){
					that.circle.push(data.data.data[i]);
				}else if(data.data.data[i].class == 'squre'){
					that.squre.push(data.data.data[i]);
				}else if(data.data.data[i].class == 'shan'){
					that.shan.push(data.data.data[i]);
				}else{
					that.chang.push(data.data.data[i]);
				}
				if(data.data.data[i].isbanner == '1'){
					that.banner.push(data.data.data[i]);
				}
			}
		})
	},
	watch:{
		tabberValue(n,o){
		}
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
	.listTitle {font-weight: bold;color:rgb(241, 221, 240);background-color:rgb(47, 18, 125);margin-top:5px;}
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
	.introduce {width: 100%;height: auto;}
	.introduce .top {width: 100%;height: 200px;background-color: #9a52e8;border:0 solid;overflow:hidden;text-align: center;}
	.introduce .top .photo {width: 70px;height: 70px;overflow: hidden;margin: 0 auto;margin-top: 50px;border-radius: 50%;}
	.introduce .top .photo img {width: 70px;height: auto;}
	.introduce .top span {font-size: 18px;font-weight: 500;color:white;line-height: 40px;}
	.introduce .top p {padding: 0;margin: 0;color:white}
	.introduce .top p i {font-size: 16px;}
	.introduce .Introduction {text-indent: 2em;line-height: 25px;font-weight: 500;padding: 0 10px;margin-top: 10px;text-align: left;}
	.lx {text-align: left;padding: 0 10px;}
	.lx span {font-weight: bold;display: inline-block;width: 120px;text-align: right;}
	.lx img {width: auto;height: 150px;}
</style>
