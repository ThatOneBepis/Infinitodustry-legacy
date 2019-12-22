var cd = 60;

const digitalmending = extendContent(Block, "infiar-wall", {
    update(tile){
        //when health is lower than max health
        if (tile.entity.health() < tile.entity.maxHealth()) {
            //cooldown of 60 ticks
            if (cd > 0) {
                cd--;
            } else {
                cd = 60;
                tile.entity.health += 20;
            }
        }
    }
});

const digitalmendinglarge = extendContent(Block, "infiar-wall-large", {
    update(tile){
        if (tile.entity.health() < tile.entity.maxHealth()) {
            if (cd > 0) {
                cd--;
            } else {
                cd = 60;
                tile.entity.health += 20;
            }
        }
    }
});