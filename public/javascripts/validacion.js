$(function () {
  $('.form-nuevoproducto form').form({
      nombre:{
        identifier:'nombre',
        rules:[
            {
              type:'empty',
              prompt:'Por favor ingrese el nombre del articulo'
            }
        ]
      },
      precio:
      {
          identifier:'precio',
          rules:[
                  {
                    type:'empty',
                    prompt:'ingrese el precio del articulo'
                  },
                  {
                    type:'number',
                    prompt:'debe ser un numero'
                  }
                ]
      },
      stock:
      {
          identifier:'stock',
          rules:[
                  {
                    type:'empty',
                    prompt:'ingrese el stock del articulo'
                  },
                  {
                    type:'integer',
                    prompt:'debe ser un entero'
                  }
                ]
      }

  });

});
