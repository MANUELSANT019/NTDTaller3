$('#nuevoUsuario').click(
    function(){
        var nombre=$('#name').val();
        var identificacion = $('#ID').val();
        $('#usuarios tr:last').after('<tr><td>'+nombre+'</td><td>'+ identificacion+'</td></tr>');
         $('#exampleModal').find('form')[0].reset();
         $('#exampleModal').modal('toggle');
       
        
        
    }
    
);