//took core script from younggam/multi-lib
const multiLib=require("infinitodustry/wrapper");
//you can use GenericSmelter
const recycle=multiLib.extend(GenericCrafter,GenericCrafter.GenericCrafterEntity,"recycle",{
// you can customize here ex) draw(tile)
},
/*length of output, input, crafTimes should be same.
if not, I'm not sure which error happens.
length of recipes is not limited now.

output
-first place : array of items      *IF YOU DON't NEED IT, YOU MUST SET NULL*
-second place: array of liquids    *IF YOU DON't NEED IT, YOU MUST SET NULL*
-third place: power                *IF YOU DON't NEED IT, YOU MUST SET NULL*

input
-first place : array of items      *IF YOU DON't NEED IT, YOU MUST SET NULL*
-second place: array of liquids    *IF YOU DON't NEED IT, YOU MUST SET NULL*
-third place: power                *IF YOU DON't NEED IT, YOU MUST SET NULL*

craftTimes
-1=1frame=1/60second
-NOT NULLABLE

[item,amount]
Vanilla item : "item-name"
list: scrap, copper, lead, graphite, coal, titanium, thorium, silicon, plastanium, phase-fabric, surge-alloy,
    spore-pod, sand, blast-compound, pyratite, metaglass

Modded item : "Mod-Name"+"-"+"item-name"
item-name is .json file name

[liquid,amount]
Vanilla liquids : "liquid-name"

Modded liquids :"Mod-Name"+"-"+"liquid-name"
liquid-name is .json file name

*/

{
  _output:[
    [/*items*/ null                                                     /*liquids*/,null                        /*power*/,null],
    [/*items*/ [      ["sand",1]                              ]         /*liquids*/,null                        /*power*/,null],
    [/*items*/ [      ["sand",1]                              ]         /*liquids*/,null                        /*power*/,null],
    [/*items*/ [      ["scrap",2]                             ]         /*liquids*/,null                        /*power*/,null],
    [/*items*/ [      ["infinitodustry"+"-"+"stone",2]        ]         /*liquids*/,null                        /*power*/,null],
    [/*items*/ [      ["infinitodustry"+"-"+"scalar",2]       ]         /*liquids*/,null                        /*power*/,null],
    [/*items*/ [      ["infinitodustry"+"-"+"vector",2]       ]         /*liquids*/,null                        /*power*/,null],
    [/*items*/ [      ["infinitodustry"+"-"+"matrix",2]       ]         /*liquids*/,null                        /*power*/,null],
    [/*items*/ [      ["infinitodustry"+"-"+"tensor",2]       ]         /*liquids*/,null                        /*power*/,null],
  ],
  _input:[
    [/*items*/ null                                                     /*liquids*/,null                        /*power*/,null],
    [/*items*/ [      ["scrap",1]                             ]         /*liquids*/,null                        /*power*/,0.7 ],
    [/*items*/ [      ["infinitodustry"+"-"+"stone",1]        ]         /*liquids*/,null                        /*power*/,0.7 ],
    [/*items*/ [      ["infinitodustry"+"-"+"scalar",1]       ]         /*liquids*/,null                        /*power*/,0.7 ],
    [/*items*/ [      ["infinitodustry"+"-"+"scalar",1]       ]         /*liquids*/,null                        /*power*/,0.8 ],
    [/*items*/ [      ["infinitodustry"+"-"+"vector",1]       ]         /*liquids*/,null                        /*power*/,1   ],
    [/*items*/ [      ["infinitodustry"+"-"+"matrix",1]       ]         /*liquids*/,null                        /*power*/,1.2 ],
    [/*items*/ [      ["infinitodustry"+"-"+"tensor",1]       ]         /*liquids*/,null                        /*power*/,1.6 ],
    [/*items*/ [      ["infinitodustry"+"-"+"infiar",1]       ]         /*liquids*/,null                        /*power*/,2   ],
  ],  
  craftTimes:[12,12,12,12,50,60,64,76,90],
  //DON'T MODIFY THESE
  output:[],
  input:[],
  itemList:[],
  liquidList:[],
  isSameOutput:[],
  //
});
/*true: enable displaying inventory
false:disable displaying inventory*/
recycle.enableInv=false;
/*true: dump items and liquids of output according to button
false: dump items and liquids of output unconditionally*/
recycle=false;

/*
YOU MUST NOT MODIFY VALUE OF
THESE

configurable=true;
outputsPower=true;
hasItems=true;
hasLiquids=true;
hasPower=true;

*/
//using this without json. not recommended because can cause error.
recycle.itemCapacity= 30;
recycle.liquidCapacity= 20;
recycle.size= 3;
recycle.health= 100;
recycle.craftEffect= Fx.pulverizeMedium;
recycle.updateEffect=Fx.none;
