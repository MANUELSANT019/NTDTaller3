$('#nuevoUsuario').click(
    function(){
        var nombre=$('#name').val();
        var identificacion = $('#ID').val();
        $('#usuarios tr:last').after('<tr><td>'+nombre+'</td><td>'+ identificacion+'</td></tr>');
         $('#exampleModal').find('form')[0].reset();
         $('#exampleModal').modal('toggle');
       
        
        
    }
    
);

$('#nuevaTask').click(
    function(){
        var assignment=$('#assignment').val();
        var status = $('#status').val();
        $('#taskUser tr:last').after('<tr><td>'+assignment+'</td><td>'+ status+'</td></tr>');
         $('#exampleTask').find('form')[0].reset();
         $('#exampleTask').modal('toggle');
       
        
        
    }
    
);