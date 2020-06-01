const pigmentPrinter = extendContent(UnitFactory, "ink-swarmer-factory", {
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
    Draw.color(this.inputLiquids[0].liquid.color);
    Draw.alpha(tile.entity.liquids.get(this.inputLiquids[0].liquid) / this.liquidCapacity);
    Draw.rect(this.liquidRegions[0], tile.drawx(), tile.drawy());
    Draw.color();
  };
  }
});