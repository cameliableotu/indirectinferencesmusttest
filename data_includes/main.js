PennController.DebugOff() 
PennController.ResetPrefix(null);
PennController.Sequence( "welcome", "preexperiment", randomize("experiment"), "send" , "final" )
;
PennController( "welcome" ,
    defaultText
        .print()
    ,
    newText("<p> Hey everyone! </p>")
    ,
    newText("<p> Hope you are having a lovely day! How about playing a cute game with animals? </p>" ),
    newText("<p>Please tell me your name, answer some questions and then click the button below to start the game.</p>")
    ,
    newTextInput("ID")
	       .settings.log()
    .settings.lines(0)
        .print()
    ,
     newText("<p> What is your age? </p>"),
    newTextInput("Age")
	       .settings.log()
    .settings.lines(0)
        .print()
	       ,
	  newText("<p> What is your gender?</p>"),
	       newTextInput ("Gender")
	       .settings.log()
    .settings.lines(0)
        .print()
	       , 
	        newText("<p> What do you do?</p>"),
	    newTextInput ("Profession")  
	       .settings.log()
    .settings.lines(0)
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
 newText ("<p> Snorkmaiden and Moomin are spending their Sunday outdoors. Snorkmaiden is telling Moomin about some cute animals, but Moomin's English is not so good. Let's help him figure out what animals Snorkmaiden is referring to.</p>"),
	 
	       newImage("snorkmaiden", "snorkmaidenandmoomin.png")
       
	        .print ()
	       ,
	       
newText ("<p> Snorkmaiden could be referring to an animal you can see or one that is hiding, so you can only see its shadow. You simply have to click on the picture you think Snorkmaiden is referring to. </p>")
	       ,
   newText ("<p> Let's start! </p>")
	       ,
	       newKey(" ")
        .wait());


Template( variable => 
  newTrial( "experiment" ,
   
    newText(variable.Description)
       
    ,
    newImage("two", variable.ShadowFile)
        .size(200,200)
    ,
    newImage("one", variable.CharacterFile)
        .size(200,200)
    ,
    newCanvas(450,200)
        .add(   0 , 0 , getImage("two") )
        .add( 250 , 0 , getImage("one") )
        .print()
    ,
    newSelector()
        .add( getImage("two") , getImage("one") )
        .shuffle()
        .keys(          "F"    ,          "J"   )
        .log()
        .wait()
    
  )
  .log( "ID"     , getVar("ID")    )
  .log( "Item"   , variable.Item   )
  .log( "Condition" , variable.Condition )
  .log( "Group"  , variable.Group  )
)
SendResults( "send" );
PennController( "final" ,
	       newText ("<p> Thank you for your participation!. </p>")
	       .print()
	       ,
	 newText("<p> Bubbye! </p>")
        .print(),
	      
    newButton("void")
        .wait()
	       )
;
  
