 
function update(id,color,message)
 {
    console.log('Running the update function with '+color );
    //Read the values
    var DivId = id;
    var divColor = color; 
     
    /*
    var div = document.getElementById(DivId);
    if(div==null)
       return;
    */

     

  }
 

 function config(setting)
 {

    console.log('Running the config function for '+setting.id +"  with  "+setting.myColor +"  and "+setting.value);
    //Read the setting values
    var DivId =setting.id
    var divColor =setting.myColor;
    var text =  setting.value;
     
    //var div = document.getElementById(DivId);
     
  }

  update('id1','magenta','welcome to json world!');
  update('Dear friend..','id2');

 var configObject = {};
       configObject.id ='id3';
       configObject.myColor='yellow';
       configObject.value= "<font color='red'>Update Text</font>"

       config(configObject);
config({'myColor':'red','value':'JSONs Greetings','id':'id4'});


 

 

           
             
            
          


 


    
