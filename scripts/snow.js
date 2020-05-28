const snowfactory1 = extendContent(GenericCrafter, "snowball-machine", {
  load(){
    this.region = Core.atlas.find(this.name)
    this.liquidRegion = Core.atlas.find(this.name + "-liquid")
  },

  generateIcons(){
    return Core.atlas.find(this.name)
  },
  draw(tile){
  
  mod = tile.entity.liquids;
        
  Draw.rect(this.region, tile.drawx(), tile.drawy());
        
  if(tile.entity.liquids.total() > 0.001){
  Draw.color(this.outputLiquid.liquid.color);
  Draw.alpha(mod.get(this.outputLiquid.liquid) / this.liquidCapacity);
  Draw.rect(this.liquidRegion, tile.drawx(), tile.drawy());
  Draw.color();
  };
  }
});