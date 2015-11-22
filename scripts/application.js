$(document).ready(function() {
   //Change picture and size
   $('.row').on( 'mouseenter', '.code-logos', function() {
     $(this).addClass('alternate');
     $(this).find('p').show();
   });

   //Reset picture
   $('.row').on( 'mouseleave', '.code-logos', function() {
     $(this).removeClass('alternate');
     $(this).find('p').hide();
   });


   $('.list-group').on( 'mouseenter', '.project', function() {
     $(this).addClass('expand');
     $(this).find('p').show();
   });

   $('.list-group').on( 'mouseleave', '.project', function() {
     $(this).removeClass('expand');
     $(this).find('p').show();
   });
});