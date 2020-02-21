const cooldown = 60;

const MendHealSmall = newEffect(60, e => {
    Draw.color(Color.valueOf("6dff5d"), Color.valueOf("47a73d"), e.fslope());
    Draw.alpha(e.fout() * 0.5)
    Lines.stroke(2 * e.fslope());
    Draw.blend(Blending.additive);
    Lines.square(e.x, e.y, 5, e.fout());
    Draw.blend();
});


const MendHealLarge = newEffect(60, e => {
    Draw.color(Color.valueOf("6dff5d"), Color.valueOf("47a73d"), e.fout());
    Draw.alpha(e.fout() * 0.5)
    Lines.stroke(2 * e.fslope());
    Draw.blend(Blending.additive);
    Lines.square(e.x, e.y, 10, e.fout());
    Draw.blend();
});


const WallMending = extendContent(Block, "infiar-wall", {
    update(tile){
        //when health is lower than max health and cooldown reached
        if ( (tile.entity.health() < tile.entity.maxHealth()) && (tile.entity.timer.get(0, cooldown)) ) {

                   tile.entity.health += 10;
                   Effects.effect(MendHealSmall, tile);
                   
            }
      }
});

const WallMendingLarge = extendContent(Block, "infiar-wall-large", {
    update(tile){
         if ( (tile.entity.health() < tile.entity.maxHealth()) && (tile.entity.timer.get(0, cooldown)) ) {

                   tile.entity.health += 40;
                   Effects.effect(MendHealLarge, tile);
                   
            }
      }
});


