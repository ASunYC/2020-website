var $api=new apiUtils.Api(apiUrl+"/pages/cms/contentsLayerView");Object.defineProperty(Object.prototype,"getProp",{value:function(e){var t;for(t in this)if(t.toLowerCase()==e.toLowerCase())return this[t]}});var data={siteId:parseInt(pageUtils.getQueryStringByName("siteId")),channelId:parseInt(pageUtils.getQueryStringByName("channelId")),contentId:parseInt(pageUtils.getQueryStringByName("contentId")),pageLoad:!1,pageAlert:null,content:null,channelName:null,attributes:null},methods={loadConfig:function(){var e=this;$api.get({siteId:e.siteId,channelId:e.channelId,contentId:e.contentId},function(t,n){!t&&n&&n.value&&(e.content=n.value,e.channelName=n.channelName,e.attributes=n.attributes,e.pageLoad=!0)})}};new Vue({el:"#main",data:data,methods:methods,created:function(){this.loadConfig()}});