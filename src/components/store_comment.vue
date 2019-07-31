<template>
    <div class="comment">
			<div class="comment_header">
				<el-tabs type="border-card">
  					<el-tab-pane label="全部">
					<div class="comment_con">
                		<div class="cmm_img" style="width: 14%;height:200px;position: absolute;left:0;">
                    		<img src="../assets/test.jpg" alt="" style="border-radius: 50%;margin:10px auto;display: block;" height="60px" width="60px">
               			</div>
                		<div style="width: 86%;height:200px;position: absolute;right:0;">
                    	<div class="user_msg">
                        	<p style="padding: 20px 10px 5px 10px;">安居客塑料</p>
                        	<span style="height:20px;width: 140px;display: inline-block;">
								<el-rate value="5" disabled show-score text-color="#ff9900" score-template="{value}"></el-rate>
							</span>
                        	<span style="display: inline-block; text-align: center;color:red;">惊喜</span>
                        	<span style="display: inline-block;text-align: center;color:#999999;">50分钟送达</span>
                 		</div>
                    	<div class="foodmm_msg">
                        
                    	</div>
                	</div>
            		</div>
					</el-tab-pane>
  					<el-tab-pane label="满意"></el-tab-pane>
  					<el-tab-pane label="不满意"></el-tab-pane>
  					<el-tab-pane label="有图"></el-tab-pane>
				</el-tabs>
			</div>
			
		</div>
</template>
<script>
export default {
    name:"store_comment"
}
</script>
<style lang="scss" scoped>
    .comment{
		height:auto;
		width: 74%;
		position: relative;
		background: white;
		.comment_header{
		height:auto;
		width: 100%;
		position: relative;
		background: #f5f5f5;
	}
	.comment_con{
		width: 100%;
		height:200px;;
		position: relative;
		background: white;
	}
	.user_msg{
		height:90px;
		width: 100%;
		position: relative;
		border-bottom: 1px solid #f5f5f5;
	}
	.foodmm_msg{
		height:50px;
		width: 100%;
		position: relative;
		border-bottom: 1px solid #f5f5f5;
	}
	}
</style>