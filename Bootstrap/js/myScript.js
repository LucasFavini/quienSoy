$(document).ready(function(){

var weapons = 
[{
    "name":"44_pistol",
    "damage": 47,
    "fire_rate": 6,
    "range":134,
    "accuracy":66,
    "weight": 4.1,
    "value": 99

},
{
    "name":"10mm_pistol",
    "damage": 18,
    "fire_rate": 46,
    "range":119,
    "accuracy":61,
    "weight": 4.2,
    "value": 53

    
},

{
    "name":"assault_rifle",
    "damage": 30,
    "fire_rate": 40,
    "range":150,
    "accuracy":72,
    "weight": 13.1,
    "value": 144

    

},

{
    "name":"shotgun",
    "damage": 80,
    "fire_rate": 35,
    "range":70,
    "accuracy":61,
    "weight": 8.2,
    "value": 190

    
},

{
    "name":"sniper_rifle",
    "damage": 150,
    "fire_rate": 25,
    "range":170,
    "accuracy":61,
    "weight": 9.5,
    "value": 300

    
},
]
var shields= [
    {
        "name":"bronce",
        "protection":15,
        "repairs":"85",
        "value":20
    },
    {
        "name":"silver",
        "protection":30,
        "repairs":"60",
        "value":40
    },
    {
        "name":"gold",
        "protection":60,
        "repairs":"20",
        "value":90
    },
    {
        "name":"platinum",
        "protection":120,
        "repairs":"none",
        "value":200
    },

]

var items= [

    {
        "name":"shotgun_bullets",
        "quantity": 54,
        "weight": 3,
        "status": "Perfect",
        "value":300
    },

    {
        "name":"sniper_bullets",
        "quantity": 7,
        "weight": 0.7,
        "status":"Perfect",
        "value":700
    },

    {
        "name":"empty",
        "quantity": "--",
        "weight": "--",
        "status":"--",
        "value":"--"
    },

]


$(".item-list a").on("click",function(e){

    var itemMarcado = $(e.currentTarget).attr('class');
    console.log(itemMarcado);

    
    if(itemMarcado=="shotgun_bullets" || itemMarcado=="shotgun_bullets active") //funcion de iconos
    {
       $(".shotgun_ammo").css({
           "display":"block"
       });

       for(item in items)
       {
           if(items[item].name==itemMarcado)
           {
            console.log(items[item])
            var acum3 = $(".item-stats");
            acum3.find("#quantity").html(items[item].quantity);
            acum3.find("#weighT").html(items[item].weight);;
            acum3.find("#statuS").html(items[item].status); 
            acum3.find("#valuE").html(items[item].value);
           }
       }

    }
    else{
        $(".shotgun_ammo").css({
            "display":"none"
        });
    }

    if(itemMarcado=="sniper_bullets" || itemMarcado=="snipers_bullets active")
    {
        $(".sniper_ammo").css({
            "display":"block"
        });

        for(item in items)
        {
            if(items[item].name==itemMarcado)
            {
             console.log(items[item])
             var acum3 = $(".item-stats");
             acum3.find("#quantity").html(items[item].quantity);
             acum3.find("#weighT").html(items[item].weight);;
             acum3.find("#statuS").html(items[item].status); 
             acum3.find("#valuE").html(items[item].value);
            }
        }

        if(items[item].name==itemMarcado)
        {
         console.log(items[item])
         var acum3 = $(".item-stats");
         acum3.find("#quantity").html(items[item].quantity);
         acum3.find("#weighT").html(items[item].weight);;
         acum3.find("#statuS").html(items[item].status); 
         acum3.find("#valuE").html(items[item].value);
        }
    }
    
    else{
        $(".sniper_ammo").css({
            "display":"none"
        }); 
    }

    if(itemMarcado=="empty")
    {     
            
             var acum3 = $(".item-stats");
             acum3.find("#quantity").html("--");
             acum3.find("#weighT").html("--");
             acum3.find("#statuS").html("--"); 
             acum3.find("#valuE").html("--");
            
    }
                
    






    $(".item-list a").on("click",function(e){            
       
       
       $(".item-list a").removeClass("active");
       $(e.currentTarget).addClass("active");      

      

    });


    for(item in weapons)
    {          
        
        if(weapons[item].name==itemMarcado)
        {
            console.log(weapons[item])
            var acum = $(".item-stats");
            acum.find("#damage").html(weapons[item].damage);
            acum.find("#firerate").html(weapons[item].fire_rate);
            acum.find("#range").html(weapons[item].range);
            acum.find("#accuracy").html(weapons[item].accuracy);
            acum.find("#weight").html(weapons[item].weight);
            acum.find("#value").html(weapons[item].value);
        }
    }   

});

$("#armor a").on("click",function(e){

    itemArmor = $(e.currentTarget).attr("class");
    console.log(itemArmor);

   $("#armor a").removeClass("active");
   $(e.currentTarget).addClass("active");

   for(item in shields)
   {       
      if(shields[item].name==itemArmor)
      {
          acum2=$(".item-stats")
          acum2.find("#protection").html(shields[item].protection);
          acum2.find("#repairs").html(shields[item].repairs);
          acum2.find("#Value").html(shields[item].value);
      } 
       
   }

   if($(e.currentTarget).attr("class") == "bronce active")
   {  
    $(".aMenu").removeClass("platinuM");       
    $(".aMenu").removeClass("golD");                       
    $(".aMenu").removeClass("silveR");   
    $(".aMenu").removeClass("broncE");   
    $(".aMenu").addClass("broncE");
   }
   if($(e.currentTarget).attr("class") == "silver active")
   {               
    $(".aMenu").removeClass("platinuM");       
    $(".aMenu").removeClass("golD");  
    $(".aMenu").removeClass("broncE");    
    $(".aMenu").removeClass("silveR"); 
    $(".aMenu").addClass("silveR");
   }
   if($(e.currentTarget).attr("class") == "gold active")
   {               
    $(".aMenu").removeClass("platinuM");                               
    $(".aMenu").removeClass("silveR");   
    $(".aMenu").removeClass("broncE"); 
    $(".aMenu").removeClass("golD");  
    $(".aMenu").addClass("golD");
   }

   if($(e.currentTarget).attr("class") == "platinum active")
   {               
    $(".aMenu").removeClass("platinuM");       
    $(".aMenu").removeClass("golD");  
    $(".aMenu").removeClass("broncE");    
    $(".aMenu").removeClass("silveR"); 
   }
});


$(".shotgun-ammo").on("click",function(e){

    icon = $(e.currentTarget).attr("class");
    


});




});