<template>
<div class="ui-picker">
    <transition name="fade">
        <div class="ProCityBoxBg">
                  
        </div>
    </transition>

    <transition name="expand-select">
        <div class="ProvCityBox" v-show="show">
             <div class="ProvCityHeader">
                 <div class="ProvCityHeaderCancle"  @click="submit(false)">
                     {{ cancel }}
                 </div>
                 {{ title }}
                 <div class="ProvCityHeaderConfirm" @click="submit(true)">{{confirm}}</div>
             </div>
             <div class="ProvCityContent">
                    <div class="ProvCityContentList">
                        <ul :class="{'province_dragging': provinceState.dragging}"
                        :style="{'transform':'translate3d(0,'+provinceState.translateY +'px,0)'}"
                        @touchstart="_onTouchStart('province',$event)"
                        @mousedown="_onTouchStart('province', $event)"
                        >
                        <li></li>
                        <li></li>
                        <li></li>
                        <li v-for="(item,index) in provinceState.data"
                            :data-name="item.name"
                            :data-id="item.code"
                            :class="{
                                'current':item.code === provinceState.selectedId,
                                'node1': Math.abs(index - provinceState.index) == 1,
                                'node2': Math.abs(index - provinceState.index) == 2,
                                'node3': Math.abs(index - provinceState.index) >= 3
                            }">{{item.name}}</li>
                        </ul>
                    </div>
                    <div class="ProvCityContentList">
                        <ul
                            :class="{'city_dragging': cityState.dragging}"
                            @touchstart="_onTouchStart('city', $event)"
                            @mousedown="_onTouchStart('city', $event)"
                            :style="{'transform' : 'translate3d(0,' + cityState.translateY + 'px, 0)'}">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li v-for="(item, index) in cityState.data"
                                :data-name="item.name"
                                :data-id="item.code"
                                :data-parentid="item.parentid"
                                :class="{
                                            'current': item.code === cityState.selectedId,
                                            'node1':  Math.abs(index - cityState.index) == 1,
                                            'node2':  Math.abs(index - cityState.index) == 2,
                                            'node3':  Math.abs(index - cityState.index) >= 3
                                    }"
                            >{{item.name}}</li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
                    <div class="ProvCityContentList">
                        <ul
                            :class="{'city_dragging': areaState.dragging}"
                            @touchstart="_onTouchStart('area', $event)"
                            @mousedown="_onTouchStart('area', $event)"
                            :style="{'transform' : 'translate3d(0,' + areaState.translateY + 'px, 0)'}">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li v-for="(item, index) in areaState.data"
                                :data-name="item.name"
                                :data-id="item.code"
                                :data-parentid="item.parentid"
                                :class="{
                                            'current': item.code === areaState.selectedId,
                                            'node1':  Math.abs(index - areaState.index) == 1,
                                            'node2':  Math.abs(index - areaState.index) == 2,
                                            'node3':  Math.abs(index - areaState.index) >= 3
                                    }"
                            >{{item.name}}</li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                    </div>
             </div>

        </div>
    </transition>
</div>
</template>
<script>
    import {province, city, area} from '../../assets/js/city-data.js'
    export default {
        name:"ui-select",
        data(){
            return {
                target:'',
                delta: 0,
                slideEls: null,
                result:{
                    province:'',
                    city:'',
                    area:''
                },
                provinceState:{
                    data:null,
                    selectedId:null,
                    dragging: false,
                    translateY:0,
                    startTranslateY:0,
                    startPos:null,
                    index: 0
                },
                cityState:{
                    data:null,
                    selectedId:null,
                    dragging: false,
                    translateY:0,
                    startTranslateY:0,
                    startPos:null,
                    index: 0
                },
                areaState:{
                    data:null,
                    selectedId:null,
                    dragging: false,
                    translateY:0,
                    startTranslateY:0,
                    startPos:null,
                    index: 0
                }
            }
        },
        props:{
            show:{
                type:Boolean
            },
             cancel:{
                type: String,
                default: '取消'
            },
            confirm:{
                 type: String,
                default: '确定'
            },
            title: {
                 type: String,
                 default: '请选择'
            }
        },
        mounted(){
            this.init();
            this._onTouchMove = this._onTouchMove.bind(this)
            this._onTouchEnd = this._onTouchEnd.bind(this)
        },
        methods:{
            init(){
                this.provinceState.data =  province
                this.provinceState.selectedId = 110000 //北京市  省
                this.cityState.selectedId = 110100 // 市辖区  市
                this.areaState.selectedId = 110101  // 东城区  区
                this.filterCity()
                this.filterArea()
            },
            submit(submit){
                if(submit){
                    this.result = {
                        province: this.provinceState.data[this.provinceState.index],
                        city:this.cityState.data[this.cityState.index],
                        area:this.areaState.data[this.areaState.index]
                    }
                }
                else {
                    this.result = {
                        province: '',
                        city: '',
                        area: ''
                    }
                }
                console.log(this.result);
                this.$emit('picker-submit',this.result);
            },
            _onTouchStart(target,e){
                let thisData = this[target+'State'];
                this.target = target;
                this.delta = 0;
                this.slideEls = this.getElem(e);
                thisData.startPos = this.getTouchPos(e);
                //console.log("startPos:"+this.getTouchPos(e));
                thisData.startTranslateY = thisData.translateY
                thisData.dragging = true
                document.addEventListener('touchmove', this._onTouchMove,false)
                document.addEventListener('touchend', this._onTouchEnd,false)
                document.addEventListener('mousemove',this._onTouchMove,false)
                document.addEventListener('mouseup',this._onTouchEnd,false)

                //console.log(this.slideEls)
            },
            _onTouchMove(e){
                let target = this.target;
                let thisData = this[target + 'State']
                //console.log("movePos:"+this.getTouchPos(e));
                this.delta = this.getTouchPos(e) - thisData.startPos;
                thisData.translateY = thisData.startTranslateY + this.delta;
               if (Math.abs(this.delta) > 0) {
                    e.preventDefault()
                }
            },
            _onTouchEnd(e){
                let target = this.target;
                let thisData = this[target + "State"]
                thisData.dragging = false;
                this.setPage();
                document.removeEventListener('touchmove', this._onTouchMove)
                document.removeEventListener('touchend', this._onTouchEnd)
                document.removeEventListener('mousemove',this._onTouchMove)
                document.removeEventListener('mouseup',this._onTouchEnd)
            },
            getElem(e) {
                //array.from 从一个类似数组或可迭代对象中创建一个新的数组实例
                //删除前面多余的节点标签
                //console.log(typeof e.currentTarget.children === "object")
                return Array.from(e.currentTarget.children).slice(3,-3)
            },
            getTouchPos(e){
                //e.changedTouches[0]['pageY'] 原生写法 获取触碰坐标
                return e.changedTouches ? e.changedTouches[0]['pageY'] : e['pageY']
            },
            setPage(){
                let target = this.target
                let thisData = this[target + 'State']
                let clientHeight = this.slideEls[0]['clientHeight']
                let total = thisData.data.length;
                console.log("thisData.translateY:" + thisData.translateY)
                let goPage = Math.round((thisData.translateY / clientHeight).toFixed(1));
                //获取滑动的页码
                if(goPage > 0){
                    //多余向下滑动 返回当前页面位置
                    goPage = 0
                }
                goPage = total - 1 >= Math.abs(goPage) ? goPage : -(total-1)
                let index = Math.abs(goPage)
                thisData.index = index
                console.log("index:" + index)
                //获取current索引值
                this.getData(index)
                //调整滑动位置
                thisData.translateY = goPage *  clientHeight
            },
            getData(index){
                 let target = this.target
                 let thisData = this[target + 'State']
                 //console.log( thisData.selectedId);
                 thisData.selectedId = thisData.data[index].code

                 //如果触摸板块是省
                 if(target === 'province'){
                    //筛选市，筛选区
                     this.filterCity()
                     this.filterArea();
                 }
                 //如果触摸板块是市
                 if(target === 'city'){
                    //筛选区
                    this.filterArea();
                 }
            },
            filterCity(){
              this.cityState.data = city.filter((item,index)=>{
                return item.parentId === this.provinceState.selectedId
              })
                
                //渲染首位节点
               this.cityState.selectedId = this.cityState.data[0] && this.cityState.data[0].code
               this.cityState.translateY = 0
               this.cityState.index = 0
            },
            filterArea(){
                this.areaState.data = area.filter((item,index)=>{
                    return item.parentId === this.cityState.selectedId
                })

                this.areaState.selectedId = this.areaState.data[0] && this.areaState.data[0].code
                this.areaState.translateY = 0;
                this.areaState.index = 0
            }
        }
    }
</script>
<style lang="scss">
	.ProvCityBoxBg{
    background: rgba(0,0,0,.7);
    z-index: 200;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
}

.ProvCityBox{
    position: fixed;
    z-index: 300;
    background: #fff;
    bottom: 0;
    left: 0;
    right: 0;
}

.ProvCityHeader{
    background-color: #eee;
    height: 44px;
    line-height: 44px;overflow: hidden;
    text-align: center;
    font-size: 16px!important;
}

.ProvCityHeaderCancle{
    float: left;padding: 0 20px;
    color: #1AAD19;
    font-size: 16px!important;
}

.ProvCityHeaderConfirm{
    float: right;padding: 0 20px;
    color: #1AAD19;
    font-size: 16px!important;
}

.ProvCityContent{
    width: 100%;
    margin: 0 auto;background: #fff;
    overflow: hidden;height: 245px;
    overflow: hidden;
}


.ProvCityContentList {
    float: left;
    width: 33.333333%;
    text-align: center;
    ul{
        -webkit-transition: all .3s ease;
        transition: all .3s ease;

           &.province_dragging,
           &.city_dragging,
           &.area_dragging {
            -webkit-transition: none;transition: none;
           }
        
        li {
            line-height: 35px;
            height: 35px;
            white-space: nowrap;
            overflow: hidden;text-overflow: ellipsis;
            font-size: 14px!important;
          
            &.current {
                font-size: 16px!important;font-weight: bold;
            }
            &.node1 {
                font-size: 15px!important;opacity: .7;
            }
            &.node2 {
                font-size: 14px!important;opacity: .5;
            }
            &.node3 {
                font-size: 12px!important;opacity: .3;
            }
        }
           
    }
}







.ProvCitySelectedTop{
    width: 100%;border: none;
    border-top: 1px solid #eee;
    position: absolute;
    bottom: 95px;margin: 0;height: 0;
}

.ProvCitySelectedBottom{
    width: 100%;border: none;
    border-top: 1px solid #eee;
    position: absolute;
    bottom: 125px;
    margin: 0;height: 0;
}

.fade-enter-active, .fade-leave-active {transition: opacity .35s}
.fade-enter, .fade-leave-active {opacity: 0}
.expand-select-enter-active, .expand-select-leave-active {transition: all .4s ease;bottom: 0px;}

.expand-select-enter, .expand-select-leave-active {transform: translate(0, 289px);}
</style>