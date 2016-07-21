define(['app'],function(app){
	app.directive('myDragable',['$document',function($document){
		return {
			link: function(scope,elem){
				var startX=0;
				var startY=0; 
				var x=elem[0].offsetLeft;
				var y=elem[0].offsetTop;
				elem.css({
					cursor:'grab'
				});
				elem.on('mousedown',function(event){
					event.preventDefault();
					startX = event.pageX-x;
					startY = event.pageY-y;
					$document.on('mousemove',mousemove);
					$document.on('mouseup',mouseup);
				});

				var mousemove = function(event){
					y=event.pageY-startY;
					x=event.pageX-startX;
					elem.css({
						top:y+'px',
						left:x+'px',
						cursor:'grabbing'

					});
				}
				var mouseup = function(){
					$document.off('mousemove',mousemove);
					$document.off('mouseup',mouseup);
				}
			}
		}
	}])
})