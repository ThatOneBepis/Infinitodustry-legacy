//took core script from younggam/multi-lib
const multiLib=require("infinitodustry/wrapper");
//you can use GenericSmelter
const multiklin=multiLib.extend(GenericSmelter,GenericCrafter.GenericCrafterEntity,"multiklin",{
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
    [/*items*/ null                                                      /*liquids*/,null                        /*power*/,null],
    [/*items*/ [            ["metaglass",5]                    ]         /*liquids*/,null                        /*power*/,null],
    [/*items*/ [     ["infinitodustry"+"-"+"visionary-glass",5]]         /*liquids*/,null                        /*power*/,null],
  ],
  _input:[
    [/*items*/ null                                                     /*liquids*/,null                         /*power*/,null],
    [/*items*/ [              ["sand",8]                       ]        /*liquids*/,[      ["slag",10]      ]    /*power*/,4.5 ],
    [/*items*/ [              ["sand",8]                       ]        /*liquids*/,[      ["slag",14]      ]    /*power*/,4.5 ],
  ],  
  craftTimes:[48,48,48],
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
multiklin.enableInv=false;
/*true: dump items and liquids of output according to button
false: dump items and liquids of output unconditionally*/
multiklin=false;

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
multiklin.itemCapacity= 15
multiklin.liquidCapacity= 20;
multiklin.size= 3;
multiklin.health= 100;
