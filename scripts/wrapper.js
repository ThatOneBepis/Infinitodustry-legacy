//took core script from younggam/multi-lib
//get moudle from library
const lib=require("infinitodustry/library");

module.exports={
  extend(Type,Entity,name,def,recipes){
    const block=Object.create(lib.body);
    const rec=JSON.parse(JSON.stringify(recipes));
    Object.assign(block,def,rec);
    const multi=extendContent(Type,name,block);
    //extend entity
    multi.entityType=prov(()=>extend(GenericCrafter.GenericCrafterEntity,{
      //버튼 눌린거 저장
      modifyToggle(a){
        this._toggle=a;
      },
      getToggle(){
        return this._toggle;
      },
      _toggle:0,
      //버튼 바꼈을때 진행상황 저장
      saveProgress(c,d){
        this._progressArr[c]=d;
      },
      getProgress(e){
        return this._progressArr[e];
      },
      _progressArr:[],
      //현재 생산 중인지 저장
      saveCond(f){
        this._cond=f;
      },
      getCond(){
        return this._cond;
      },
      _cond:false,
      //전력 출력 바 용 현재 전력출력상황
      setPowerStat(g){
        this._powerStat=g;
      },
      getPowerStat(){
        return this._powerStat;
      },
      _powerStat:0,
      //현재 각 아이템 수량
      getItemStat(){
        return this._itemStat;
      },
      _itemStat:[],
      //
      config(){
        return this._toggle;
      },
      write(stream){
        this.super$write(stream);
        stream.writeShort(this._toggle);
      },
      read(stream,revision){
        this.super$read(stream,revision);
        this._toggle=stream.readShort();
      }
    }));
    //power request change every recipe
    multi.consumes.add(extend(ConsumePower,{
      requestedPower(entity){
        if(entity==null){
          return 0;
        }
        for(var i=0;i<multi.input.length;i++){
          if(entity.getToggle()==i&&multi.input[i][2]!=null&&entity.getCond()){
            return multi.input[i][2];
          }
        }
        return 0;
      }
    }));
    //don't modify these
    //6.0되면 밖에잇는 값들 다 여기로 옮기기
    multi.configurable=true;
    multi.hasItems=true;
    multi.hasLiquids=true;
    multi.hasPower=true;
    multi.hasOutputItem=false;
    multi.inputItemList=[];
    multi.inputLiquidList=[];
    multi.outputItemList=[];
    multi.outputLiquidList=[];
    return multi;
  }
}