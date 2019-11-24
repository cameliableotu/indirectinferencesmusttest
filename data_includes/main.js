PennController.DebugOff() 
PennController.ResetPrefix(null);
PennController.Sequence( "welcome", "preexperiment", "send" , "final" )
;
PennController( "welcome" ,
    defaultText
        .print()
    ,
    newText("<p> Hey everyone! </p>")
    ,
    newText("<p> The wizard wants to ask you some questions to figure out how you understand certain sentences about various objects and animals. </p>" ),
    newText("<p>Please enter your ID, answer some questions and then click the button below to start the pretest.</p>")
    ,
    newTextInput("ID")
        .print()
    ,
     newText("<p> What is your age? </p>"),
    newTextInput("Age")
        .print()
	       ,
	  newText("<p> What is your gender?</p>"),
	       newTextInput ("Gender")
        .print()
	       , 
	        newText("<p> What is your profession?</p>"),
	    newTextInput ("Profession")  
        .print()
	       ,
	       newText ("<p> To move to the next page, always use the space bar. </p>")
	       .print()
	       ,
	       
    newButton("Start")
        .print()
        .wait()
    ,
    newVar("ID")
        .settings.global()
        .set( getTextInput("ID")))
	      
.log( "ID" , getVar("ID") );

PennController("preexperiment" ,
	    defaultText
	        .print()
	       ,
  newText ("<p> You simply have to click on the item you think is the answer to the question. </p>")
	       ,
   newText ("<p> Let's start! </p>"),
   newText ("<p> Show me the tallest giraffe! </p>")
	       ,
	       newImage("tallgiraffe", "tallgiraffe.png")
 
        // .print()
    ,
    newImage("tallestgiraffe", "tallestgiraffe.png")
        
        // .print()
    ,
	       newImage("leasttallgiraffe", "leasttallgiraffe.png")
       
        // .print()
    ,
    newCanvas(600,300)
        .settings.add( 0 , 0 , getImage("tallgiraffe") )
        .settings.add( 250 , 0 , getImage("tallestgiraffe") )
         .settings.add(500 , 0 , getImage("leasttallgiraffe") )
        .print()
	       ,
	       // newKey("FJK")
newSelector()
    .settings.add( getImage("tallgiraffe") , getImage("tallestgiraffe"), getImage ("leasttallgiraffe"))
    .settings.keys(          "F"    ,          "J", "K"  )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;
PennController("preexperiment" ,
	    defaultText
	        .print()
	       ,
   newText ("<p> Show me a tall, but not the tallest lamp! </p>")
	       ,
	       newImage("leasttalllamp", "leasttalllamp.png")
 
        // .print()
    ,
    newImage("tallestlamp", "tallestlamp.png")
        
        // .print()
    ,
	       newImage("talllamp", "talllamp.png")
       
        // .print()
    ,
    newCanvas(600,300)
        .settings.add( 0 , 0 , getImage("leasttalllamp") )
        .settings.add( 250 , 0 , getImage("tallestlamp") )
         .settings.add(500 , 0 , getImage("talllamp") )
        .print()
	       ,
	       // newKey("FJK")
newSelector()
    .settings.add( getImage("leasttalllamp") , getImage("tallestlamp"), getImage ("talllamp"))
    .settings.keys(          "F"    ,          "J", "K"  )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;
PennController("preexperiment" ,
	    defaultText
	        .print()
	       ,
   newText ("<p> Show me the smallest mushroom! </p>")
	       ,
	       newImage("smallestmushroom", "smallestmushroom.png")
 
        // .print()
    ,
    newImage("smallmushroom", "smallmushroom.png")
        
        // .print()
    ,
	       newImage("leastsmallmushroom", "leastsmallmushroom.png")
       
        // .print()
    ,
    newCanvas(600,300)
        .settings.add( 0 , 0 , getImage("smallestmushroom") )
        .settings.add( 250 , 0 , getImage("smallmushroom") )
         .settings.add(500 , 0 , getImage("leastsmallmushroom") )
        .print()
	       ,
	       // newKey("FJK")
newSelector()
    .settings.add( getImage("smallestmushroom") , getImage("smallmushroom"), getImage ("leastsmallmushroom"))
    .settings.keys(          "F"    ,          "J", "K"  )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;
PennController("preexperiment" ,
	    defaultText
	        .print()
	       ,
   newText ("<p> Show me a small, but not the smallest rose! </p>")
	       ,
	       newImage("leastsmallrose", "leastsmallrose.png")
 
        // .print()
    ,
    newImage("smallrose", "smallrose.png")
        
        // .print()
    ,
	       newImage("smallestrose", "smallestrose.png")
       
        // .print()
    ,
    newCanvas(600,300)
        .settings.add( 0 , 0 , getImage("leastsmallrose") )
        .settings.add( 250 , 0 , getImage("smallrose") )
         .settings.add(500 , 0 , getImage("smallestrose") )
        .print()
	       ,
	       // newKey("FJK")
newSelector()
    .settings.add( getImage("leastsmallrose") , getImage("smallrose"), getImage ("smallestrose"))
    .settings.keys(          "F"    ,          "J", "K"  )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;
PennController("preexperiment" ,
	    defaultText
	        .print()
	       ,
   newText ("<p> Show me a big, but not the biggest peach! </p>")
	       ,
	       newImage("biggestpeach", "biggestpeach.png")
 
        // .print()
    ,
    newImage("bigpeach", "bigpeach.png")
        
        // .print()
    ,
	       newImage("leastbigpeach", "leastbigpeach.png")
       
        // .print()
    ,
    newCanvas(600,300)
        .settings.add( 0 , 0 , getImage("biggestpeach") )
        .settings.add( 250 , 0 , getImage("bigpeach") )
         .settings.add(500 , 0 , getImage("leastbigpeach") )
        .print()
	       ,
	       // newKey("FJK")
newSelector()
    .settings.add( getImage("biggestpeach") , getImage("bigpeach"), getImage ("leastbigpeach"))
    .settings.keys(          "F"    ,          "J", "K"  )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;
PennController("preexperiment" ,
	    defaultText
	        .print()
	       ,
   newText ("<p> Show me the biggest cupcake! </p>")
	       ,
	       newImage("bigcupcake", "bigcupcake.png")
 
        // .print()
    ,
    newImage("leastbigcupcake", "leastbigcupcake.png")
        
        // .print()
    ,
	       newImage("biggestcupcake", "biggestcupcake.png")
       
        // .print()
    ,
    newCanvas(600,300)
        .settings.add( 0 , 0 , getImage("bigcupcake") )
        .settings.add( 250 , 0 , getImage("leastbigcupcake") )
         .settings.add(500 , 0 , getImage("biggestcupcake") )
        .print()
	       ,
	       // newKey("FJK")
newSelector()
    .settings.add( getImage("bigcupcake") , getImage("leastbigcupcake"), getImage ("biggestcupcake"))
    .settings.keys(          "F"    ,          "J", "K"  )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;
PennController("preexperiment" ,
	    defaultText
	        .print()
	       ,
	       newImage ("brownbear", "brownbear.png")
.print()
	       ,
   newText ("<p> Show me which sentence is the best description of the picture! Just click on it. </p>")
	      
	       ,
	       newImage("underinformativebear", "underinformativebear.png")
 
        // .print()
    ,
    newImage("optimalbear", "optimalbear.png")
        
        // .print()
    ,
	       newImage("wrongbear", "wrongbear.png")
       
        // .print()
    ,
    newCanvas(700,300)
        .settings.add( 0 , 0 , getImage("underinformativebear") )
        .settings.add( 250 , 0 , getImage("optimalbear") )
         .settings.add(600 , 0 , getImage("wrongbear") )
        .print()
	       ,
	       // newKey("FJK")
newSelector()
    .settings.add( getImage("underinformativebear") , getImage("optimalbear"), getImage ("wrongbear"))
    .settings.keys(          "F"    ,          "J", "K"  )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;
PennController("preexperiment" ,
	    defaultText
	        .print()
	       ,
	       newImage ("brownbear", "brownbear.png")
.print()
	       ,
   newText ("<p> Show me which sentence is not the best description of the picture! </p>")
,
	      newImage("optimalbear", "optimalbear.png")
        // .print()
	       ,
	       newImage("underinformativebear", "underinformativebear.png")
 
        // .print()
    ,
   
    newCanvas(600,300)
        .settings.add( 0 , 0 , getImage("optimalbear") )
        .settings.add( 350 , 0 , getImage("underinformativebear") )
        .print()
	       ,
	       // newKey("FJ)
newSelector()
    .settings.add( getImage("optimalbear") , getImage("underinformativebear"))
    .settings.keys(          "F"    ,          "J" )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;
PennController("preexperiment" ,
	    defaultText
	        .print()
	       ,
	       newImage ("brownbear", "brownbear.png")
.print()
	       ,
 newText ("<p> Show me which sentence is not the best description of the picture! </p>")
	    
	       ,
	       newImage("wrongbear", "wrongbear.png")
 
        // .print()
    ,
   newImage("optimalbear", "optimalbear.png")  
        // .print()
,
    newCanvas(600,300)
        .settings.add( 0 , 0 , getImage("wrongbear") )
        .settings.add( 250 , 0 , getImage("optimalbear") )
        .print()
	       ,
	       // newKey("FJ)
newSelector()
    .settings.add( getImage("wrongbear") , getImage("optimalbear"))
    .settings.keys(          "F"    ,          "J" )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;
PennController("preexperiment" ,
	    defaultText
	        .print()
	       ,
	       newImage ("girl", "girl.png")
.print()
	       ,
   newText ("<p> Show me which sentence is the best description of the picture! </p>")
	       ,
	newImage("wronggirl", "wronggirl.png")
       
        // .print()
    ,
 
	       newImage("underinformativegirl", "underinformativegirl.png")
 
        // .print()
    ,
    newImage("optimalgirl", "optimalgirl.png")
        
        // .print()
    ,

    newCanvas(600,300)
        .settings.add( 0 , 0 , getImage("wronggirl") )
        .settings.add( 250 , 0 , getImage("underinformativegirl") )
         .settings.add(500 , 0 , getImage("optimalgirl") )
        .print()
	       ,
	       // newKey("FJK")
newSelector()
    .settings.add( getImage ("wronggirl"), getImage("underinformativegirl") , getImage("optimalgirl"), getImage ("wronggirl"))
    .settings.keys(          "F"    ,          "J", "K"  )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;
PennController("preexperiment" ,
	    defaultText
	        .print()
,
	       newImage ("girl", "girl.png")
	       .print()
	       ,
   newText ("<p> Show me which sentence is not the best description of the picture! </p>")
,
newImage("underinformativegirl", "underinformativegirl.png")
 
        // .print()
,

	      newImage("optimalgirl", "optimalgirl.png")
        
        // .print()
	       ,
	 
   
    newCanvas(600,300)
        .settings.add( 0 , 0 , getImage("underinformativegirl") )
        .settings.add( 250 , 0 , getImage("optimalgirl") )
        .print()
	       ,
	       // newKey("FJ)
newSelector()
    .settings.add( getImage("underinformativegirl") , getImage("optimalgirl"))
    .settings.keys(          "F"    ,          "J" )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))
;
PennController("preexperiment" ,
	    defaultText
	        .print()
,
	       newImage ("girl", "girl.png")
.print()
	       ,
 newText ("<p> Show me which sentence is not the best description of the picture! </p>")
	    ,     newImage("optimalgirl", "optimalgirl.png")
        // .print
	       ,
	       newImage("wronggirl", "wronggirl.png")
 
        // .print()
    
,
    newCanvas(600,300)
        .settings.add( 0 , 0 , getImage("optimalgirl") )
        .settings.add( 250 , 0 , getImage("wronggirl") )
        .print()
	       ,
	       // newKey("FJ)
newSelector()
    .settings.add( getImage("optimalgirl") , getImage("wronggirl"))
    .settings.keys(          "F"    ,          "J" )
    .settings.log()
    .wait()
)
.log( "ID" , getVar("ID"))

PennController.SendResults( "send" );
PennController( "final" ,
	       newText ("<p> Thank you for your participation!. </p>")
	       .print()
	       ,
	 newText("<p> The wizard thanks you too! Bubbye! </p>")
        .print(),
	      
    newButton("void")
        .wait()
	       )
;
  
