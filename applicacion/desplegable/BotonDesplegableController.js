class BotonDesplegableController
{
	constructor( view )
	{
		this.innerView = view;
	}
	
	onclick()
	{
	  this.innerView.show();
	}
	
}
export {BotonDesplegableController};