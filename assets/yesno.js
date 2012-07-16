var isChecked = $('#chkSelect').is(':checked');

if (isChecked == True)




function buttonClicked(e){
     jQuery('div.panel').hide();
     jQuery('#panel'+e.data.panel).show();
     jQuery('#desc').text('You clicked the '+e.data.color+' button');
 }
 jQuery('#button1').bind('click',{panel:1, color:'red'}, buttonClicked);
 jQuery('#button2').bind('click',{panel:2, color:'blue'}, buttonClicked);
 jQuery('#button3').bind('click',{panel:3, color:'green'}, buttonClicked);