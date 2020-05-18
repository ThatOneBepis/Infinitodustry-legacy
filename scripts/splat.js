//based off z0mbiesrock/Diamond-ore spore-fortress
const DeathSplatFrag = extend(LiquidBulletType, {});

DeathSplatFrag.splashDamage = 5;
DeathSplatFrag.splashDamageRadius = 20;
DeathSplatFrag.lifetime = 5;
DeathSplatFrag.drag = 0.015;
DeathSplatFrag.liquid = "infinitodustry-ink";
DeathSplatFrag.despawnEffect = Fx.none;
DeathSplatFrag.hitEffect = Fx.none;
const DeathSplat = extend(BasicBulletType, {});
//const deathGoo = extendContent(Liquid, "corrupt-water", {});

DeathSplat.splashDamage = 15;
DeathSplat.splashDamageRadius = 15;
DeathSplat.bulletWidth = 3;
DeathSplat.bulletHeight = 3;
DeathSplat.lifetime = 50;
DeathSplat.drag = 0.03;
DeathSplat.pierce = true;
DeathSplat.homingPower = 5;
DeathSplat.homingRange = 8;
DeathSplat.fragBullets = 10;
DeathSplat.fragBullet = DeathSplatFrag;
const inkSwarmer = extendContent(UnitType, "ink-swarmer", {
    
});
inkSwarmer.create(prov(() => new JavaAdapter(GroundUnit, { 
    onDeath(){
        Sounds.explosionbig.at(this);
        for(var i = 0; i < 30; i++){
            Calls.createBullet(DeathSplat, this.getTeam(), this.x, this.y, Mathf.random(360), Mathf.random(0.45, 1.2), Mathf.random(0.4, 1.0));
		}
        for(var i = 0; i < 10; i++){
            Calls.createBullet(DeathSplat, Team.derelict, this.x, this.y, Mathf.random(360), Mathf.random(0.45, 1.2), Mathf.random(0.4, 1.0));
		}
    this.super$onDeath();
    }
})));

const DeathSplashFrag = new LiquidBulletType();

DeathSplashFrag.splashDamage = 5;
DeathSplashFrag.splashDamageRadius = 20;
DeathSplashFrag.lifetime = 100;
DeathSplashFrag.drag = 0;
DeathSplashFrag.liquid = "ink";
DeathSplashFrag.despawnEffect = Fx.none;
DeathSplashFrag.hitEffect = Fx.none;
DeathSplashFrag.statusDuration = 2000,
const DeathSplash = extend(BasicBulletType, {});

DeathSplash.splashDamage = 100;
DeathSplash.splashDamageRadius = 50;
DeathSplash.bulletWidth = 3;
DeathSplash.bulletHeight = 3;
DeathSplash.lifetime = 50;
DeathSplash.drag = 0.03;
DeathSplash.pierce = true;
DeathSplash.homingPower = 5;
DeathSplash.homingRange = 8;
DeathSplash.fragBullets = 50;
DeathSplash.fragBullet = DeathSplashFrag;
const inkBrawler = extendContent(UnitType, "ink-brawler", {
    
});
inkBrawler.create(prov(() => new JavaAdapter(GroundUnit, { 
    onDeath(){
        Sounds.explosionbig.at(this);
        for(var i = 0; i < 30; i++){
            Calls.createBullet(DeathSplash, this.getTeam(), this.x, this.y, Mathf.random(360), Mathf.random(0.45, 1.2), Mathf.random(0.4, 1.0));
        }
        for(var i = 0; i < 10; i++){
            Calls.createBullet(DeathSplash, Team.derelict, this.x, this.y, Mathf.random(360), Mathf.random(0.45, 1.2), Mathf.random(0.4, 1.0));
        }
    this.super$onDeath();
    }
})));