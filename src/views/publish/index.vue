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

        <h3>
          价格，日期配置 直接点击日历就可以
        </h3>
      <full-calendar :events="fcEvents" locale="CN" @dayClick="clickCalendarDay"></full-calendar>
      <h3>
        行程天数安排 下面自己填天数 默认七天
      </h3>
    <InputNumber :max="20" :min="1" v-model="daysArrange"></InputNumber>
<Timeline>
        <TimelineItem v-for="(item,index) in dayItems" :key="index" @click="addClickDayLineArrange(index,item)">
            <p class="time">第{{index+1}}天</p>
            <p class="content">线路安排(点击编辑)</p>
        </TimelineItem>
    </Timeline>
        <Modal
        v-model="isShowPriceModal"
        title="价格配置"
        @on-ok="completePriceConifg">
        <p>出发日期：{{priceItem.dateTime}}</p>
        <Input v-model="priceItem.price" placeholder="产品价格" class="product">
        </Input>
        <Input v-model="priceItem.comment" placeholder="备注(比如机场)" class="product">
        </Input>
    </Modal>
  </div>
</template>

<script>
import fullCalendar from "vue-fullcalendar";
import moment from "moment";
export default {
  components: { fullCalendar },
  watch: {
    daysArrange: function(newVal, oldVal) {}
  },
  computed: {
    dayItems() {
      return new Array(this.daysArrange).fill({
        comment:'',
        content:''
      })
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
      daysArrange: 7
    };
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
    addClickDayLineArrange(index,item){

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
