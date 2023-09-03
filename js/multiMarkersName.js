//Multi Markers WebAR-AR.js and Aframe - Playing the Archive - Connected Environment CASA-UCL

//Global Variable
var markersURLArray=[];
var markersNameArray=[];
var percysURLArray=[];
var percysNameArray=[];

AFRAME.registerComponent('markers_start',{
	init:function(){
		//console.log('Add markers to the scene');

		var sceneEl = document.querySelector('a-scene');
		
		//list of the markers
		for(var i=1; i<4; i++)
		{
			var url="resources/markers/pattern-Individual_Blocks-"+i+".patt";
			markersURLArray.push(url);
			markersNameArray.push('Marker_'+i);
			//console.log(url);
		}

		//list of the Percy assets
		for(var i=1; i<4; i++)
		{
			var urlPercy="PercyGLBs/Percy-"+i+".glb";
			percysURLArray.push(urlPercy);
			percysNameArray.push('Percy_'+i);
		}

		for(var k=0; k<4; k++)
		{
			var markerEl = document.createElement('a-marker');
			markerEl.setAttribute('type','pattern');
			markerEl.setAttribute('url',markersURLArray[k]);
			markerEl.setAttribute('id',markersNameArray[k]);

			markerEl.setAttribute('registerevents','');
			sceneEl.appendChild(markerEl);

			//Adding text to each marker
			var percyEl = document.createElement('a-entity');
			percyEl.setAttribute ('response-type', 'arraybuffer');
			percyEl.setAttribute('url', percysURLArray[k]);
			percyEl.setAttribute('gltf-model', percysNameArray[k]);
			percyEl.setAttribute('scale', '2 2 2');
			percyEl.setAttribute('position', '0 0 0');
			percyEl.setAttribute('rotation', '0 45 0');
			percyEl.setAttribute('animation-mixer', "clip:Armature|mixamo.com|Layer0; loop:infinite")			

			markerEl.appendChild(percyEl);
		}
	}
});


//Detect marker found and lost
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
