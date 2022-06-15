Profe:
     Carpeta calcu_dom_anda_vista.
	pude hacer la vista de la calculadora pero de una manera media rudimentaria. El tema es que los botones no hacen nada. No supe como hacer para que anden. Si me hicieras un ejemplo de uno sería genial, yo sigo con el resto. No sé si habíamos llegado a eso en clases. Si no lo vimos espero hasta el jueves.
    Carpeta calculadora_no_anda_array_divs.
	quedé con lo que hicimos en clases y no tengo esperanzas de 	poder solucionarlo yo por el momento. je

Abrazo pro.

------
Mati: 

Para que te funcionen los botones tenés que hacer 2 cosas.
Por un lado, crear la función de reacción para responder al evento de 'click'

Ejemplo:

onclickbutton0()
{
   this.display.value += '0';
}

Luego, tenés que asociar esta reacción para cuando el botón 0 reciba el click:

this.button0.addEventListener('click', () => this.onclickbutton0() );

Este operador:  () => { } se llama en JS : Función flecha.
Es una función como cualquier otra, solo que no tiene nombre y el this
es válido para cuando se utilizan clases.

Lo que hace es esto:
"Para cuando se haga click en el botón0, ejecutar la función pasada por parámetro.
Internamente esta función ejecuta la reacción onclickbutton0."

Te dejé el código dentro de la clase para que lo veas.
Abrazote

-----
Sobre la calculadora no_anda_array_divs
Lo analizamos en clase mejor, así te explico con detalle.