<template>
  <div class="content">
       <h2>新版产品发布</h2>
        <Input v-model="productNumber" placeholder="" class="product">
        <span slot="prepend">产品编号</span>
        </Input>
        <Input v-model="productName" placeholder="" class="product">
        <span slot="prepend">产品名称</span>
        </Input>
        <Input v-model="productPlace" placeholder="" class="product">
        <span slot="prepend">出发城市</span>
        </Input>
        <Input v-model="productPrice" placeholder="" class="product">
        <span slot="prepend">产品价格</span>
        </Input>
        <Input v-model="productDes" placeholder="" class="product">
        <span slot="prepend">产品描述</span>
        </Input>
        <Input v-model="productStartDate" placeholder="" class="product">
        <span slot="prepend">开始时间</span>
        </Input>
        <Select v-model="productTypeSelected" class="product" placeholder="请选择产品类型">
            <Option v-for="(item,index) in productTypes" :value="item.value" :key="index">{{ item.label }}</Option>
        </Select>
 <div class="product">
            <label>是否特价:</label>
            <i-switch v-model="isRecommend"></i-switch>
            <label>是否推荐:</label>
            <i-switch v-model="isSpecialPrice"></i-switch>
            <label>是否跟团游</label>
            <i-switch v-model="isFollowTeam"></i-switch>
            <label>是否自由行</label>
            <i-switch v-model="isFreeTravel"></i-switch>
        </div>
        <h3>
          价格，日期配置 直接点击日历就可以
        </h3>
      <full-calendar :events="fcEvents" locale="CN" @dayClick="clickCalendarDay"></full-calendar>
      <h3>
        行程天数安排 下面自己填天数 默认七天
      </h3>
    <InputNumber :max="20" :min="1" v-model="daysArrange"></InputNumber>
<Timeline>
        <TimelineItem v-for="(item,index) in dayItems" :key="index" >
            <p class="time">第{{index+1}}天</p>
            <a class="content" @click="addClickDayLineArrange(index,item)">线路安排(点击编辑)</a>
            <p>{{item.content}}</p>
        </TimelineItem>
    </Timeline>

     <Alert class="myAlert" type="warning">产品图（至少传一张)</Alert>
        <image-upload class="product imageUpload" @send-image="getImageArray" :uploadList="imageArray">

        </image-upload>

                <Button type="success" long @click="submitData" class="product">确认提交</Button>

        <Modal
        v-model="isShowPriceModal"
        title="价格配置"
        @on-ok="completePriceConifg">
        <p>出发日期：{{priceItem.dateTime}}</p>
        <Input v-model="priceItem.price" placeholder="产品价格" class="product">
        </Input>
        <Input v-model="priceItem.comment" placeholder="备注(比如出发机场)" class="product">
        </Input>
    </Modal>

     <Modal
        v-model="isShowLineModal"
        title="线路配置"
        @on-ok="completeLineConfig">
        <p>{{dayConfigName}}</p>
       <Input v-model="lineConfigText" type="textarea" :autosize="{minRows: 1,maxRows: 100}" placeholder="线路配置"></Input>

    </Modal>
  </div>
</template>

<script>
import fullCalendar from "vue-fullcalendar";
import moment from "moment";
import imageUpload from "../imageUpload";
import network from "../../tools/network";
export default {
  components: {
    fullCalendar,
    imageUpload
  },
  watch: {
    daysArrange: function(newVal, oldVal) {
      this.dayItems = Array(newVal)
        .fill("naive")
        .map((v, i) => {
          return { content: "", comment: "" };
        });
    }
  },
  data() {
    return {
      productId: "",
      //产品编号
      productNumber: "",
      //产品名称
      productName: "",
      //产品描述
      productDes: "",
      //产品价格
      productPrice: "",
      // 出发城市
      productPlace: "",
      productStartDate: "",
      fcEvents: [],
      // 价格配置弹框
      isShowPriceModal: false,
      priceItem: {
        dateTime: "",
        price: "",
        comment: ""
      },
      daysArrange: 7,
      productTypes: [
        {
          value: 1,
          label: "巴厘岛"
        },
        {
          value: 2,
          label: "沙巴岛"
        },
        {
          value: 3,
          label: "芽庄"
        },
        {
          value: 4,
          label: "马尔代夫"
        },
        {
          value: 5,
          label: "普吉岛"
        },
        {
          value: 6,
          label: "长滩岛"
        },
        {
          value: 7,
          label: "帕劳"
        },
        {
          value: 8,
          label: "大溪地"
        },
        {
          value: 9,
          label: "苏梅岛"
        }
      ],
      productTypeSelected: "",
      // 个性配置
      //是否推荐
      isRecommend: false,
      isSpecialPrice: false,
      isFollowTeam: false,
      isFreeTravel: false,
      // 线路配置
      isShowLineModal: false,
      dayConfigName: "",
      lineConfigText: "",
      recordIndex: 1,
      dayItems: Array(7)
        .fill("naive")
        .map((v, i) => {
          return { content: "", comment: "" };
        }),
      // 产品图片
      imageArray: []
    };
  },
  created() {
    var _self = this;
    network.getThemelist().then(data => {
      if (data.length) {
        _self.productTypes = [];
        data.forEach(obj => {
          _self.productTypes.push({
            label: obj.attributes.name,
            value: obj.attributes.type
          });
        });
      }
    });
  },
  methods: {
    clickCalendarDay(data, event) {
      let dateTime = moment(data).format("YYYY-MM-DD");
      this.priceItem.dateTime = dateTime;
      this.priceItem.price = "";
      this.priceItem.comment = "";
      this.isShowPriceModal = true;
    },
    completePriceConifg() {
      this.fcEvents.push({
        title: "￥" + this.priceItem.price + "   " + this.priceItem.comment,
        start: this.priceItem.dateTime,
        end: this.priceItem.dateTime
      });
    },
    addClickDayLineArrange(index, item) {
      this.isShowLineModal = true;
      this.dayConfigName = `第${index + 1}天线路配置`;
      this.recordIndex = index;
    },
    // 完成线路配置
    completeLineConfig() {
      let myArray = this.dayItems;
      myArray[this.recordIndex].content = this.lineConfigText;
      this.lineConfigText = "";
    },
    // 获取图片
    getImageArray(data) {
      this.imageArray = data;
    },
    // 获取产品数据
    getNowData() {
      var _self = this;
      var dict = {
        startDate: _self.productStartDate,
        // endDate: _self.productEndDate,
        name: _self.productName,
        describe: _self.productDes,
        // type: _self.productTypeSelected,
        type:999,
        place: _self.productPlace,
        onleyId: _self.productNumber,
        price: _self.productPrice,
        imageArray: _self.imageArray,
        isRecommend: _self.isRecommend,
        isSpecialPrice: _self.isSpecialPrice,
        isFollowTeam: _self.isFollowTeam,
        isFreeTravel: _self.isFreeTravel,
        dayItems:this.dayItems,
        calendarEvents:this.fcEvents,
        isNewProduct:true,
      };
      return dict;
    },
    submitData() {
            var _self = this
            var dict = this.getNowData()
            debugger
            if (!this.imageArray.length) {
                _self.$Message.error('请上传图片至少一张');
            }

            network.uploadProdut(_self.productId, dict, function() {
                _self.$Message.success('保存成功');
                setTimeout(function() {
                    _self.$router.go(0)
                }, 1000)
            })
        }
  }
};
</script>

<style>
.product {
  margin-top: 10px;
}

.myAlert {
  margin-top: 30px;
}

.imageUpload {
  margin-bottom: 30px;
}
</style>
