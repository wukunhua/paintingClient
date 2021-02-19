<template>
  <div class="hello">
        <div id="detail">
            <mt-header :title="paintInfo.title" fixed>
                <mt-button slot="left" icon="back" @click="back">返回</mt-button>
            </mt-header>
            <div class="content">
                <div class="cover">
                    <img :src="paintInfo.src" alt="">
                </div>
                <div class="detailInfo">
                    <div class="price">
                        <span>￥{{paintInfo.price}}</span>
                    </div>
                    <div class="name">
                        <span>{{paintInfo.title}}</span>
                    </div>
                    <div class="introduce">
                        <span>{{paintInfo.introduce}}</span>
                        <p>--作者</p>
                    </div>
                </div>
            </div>
        </div>
  </div>
</template>

<script>
  export default {
    name: 'HelloWorld',
    data() {
      return {
        tabberValue: 'index',
        paintInfo:{},
      }
    },
    methods:{
      back:function(){
        this.$router.push({path:'/'})
      }
    },
    mounted: function () {
      this.$axios.get('/api/painting',{params:{
        id:this.$route.query.id
       }
      }).then((data)=>{
        console.log(data);
        this.paintInfo = data.data.data;
      }).catch((err)=>{
        console.log(err);
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
	.content{margin-top: 40px;}
	.content .cover img{width: 100%;height: auto;}
	.content .detailInfo{box-sizing: border-box;padding: 4px;}
	.content .price{text-align: left;}
	.content .price span{color: #920592;font-size: 18px;font-weight: 520;}
	.content .name{text-align: left;margin-top:10px;}
	.content .name span{font-size: 17px;font-weight: bold;padding-left: 5px;box-sizing: border-box;}
	.content .introduce{text-align: left;margin-top:5px;font-size: 15px;text-indent: 2em;padding: 10px;}
	.content .introduce p{text-align: right;}
</style>
