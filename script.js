AFRAME.registerComponent('registerevents', {
		init: function () {
			const marker = this.el;

			marker.addEventListener("markerFound", ()=> {
				var markerId = marker.id;
				console.log('Marker Found: ', markerId);
			});

			marker.addEventListener("markerLost",() =>{
				var markerId = marker.id;
				console.log('Marker Lost: ', markerId);
			});
		},
	});
/*
AFRAME.registerComponent('soundhandler', {
    tick: function () {
           var entity = document.querySelector('[sound]');
         if (document.querySelector('a-marker').object3D.visible == true) {
            entity.components.sound.playSound();
        } else {
            entity.components.sound.pauseSound();
        }

     }
});
*/
