function getRandomInRange(from, to, fixed) {
    return (Math.random() * (to - from) + from).toFixed(fixed) * 1;
}

function getRandomColor(){
   var color   = Math.floor((Math.random() * 3) + 1);
   var red     = "#FF0000";
   var green   = "#00FF00";
   var yellow  = "#FFFF00";
   
   switch(color){
     case 1: return red; break;
     case 2: return green; break;
     case 3: return yellow; break;
     default : return red; break;
   }
}

var foundCircles = {};

function onError(error) {
    alert('code: '    + error.code    + '\n' +
          'message: ' + error.message + '\n');
}


Ext.define('bisIQ.view.Map', {
    extend: 'Ext.Container',
    xtype: 'bismap',
    config: {
        layout: {
            type: 'card'
        },
        width: '100%',
        height: '100%',
        items: [{
            xtype: 'map',
            useCurrentLocation: false,
            mapOptions: {
                zoom: (Ext.os.is.Phone) ? 17     : 17
                //center: new google.maps.LatLng(46.801111, 8.226667)
            },
            
            listeners: {
                maprender: function(comp, map) {
                    /*
                    navigator.geolocation.getCurrentPosition(function(position){
                        var geolat = position.coords.latitude;
                        var geolong = position.coords.longitude;
                        var position = new google.maps.LatLng(geolat ,geolong );
                        var maxDif   = 0.009999;
                        
                        for (var i = 0; i <= 40; i++) {
                            var latpos      = getRandomInRange(geolat - maxDif, geolat + maxDif, 6);
                            var longpos     = getRandomInRange(geolong - maxDif, geolong + maxDif, 6);
                            var auxposition = new google.maps.LatLng(latpos ,longpos);
                            var auxcolor    =  getRandomColor();

                            var circleOptions = {
                              strokeColor: auxcolor,
                              strokeOpacity: 0.8,
                              strokeWeight: 2,
                              fillColor: auxcolor,
                              fillOpacity: 0.35,
                              map: map,
                              center: auxposition,
                              radius: 35
                            };  
                            
                            var createCircle = function(circleOption){
                               var circle = new google.maps.Circle(circleOptions);
                               google.maps.event.addListener(circle, 'mousedown', function(ev){
                                   Ext.Msg.alert("ABC Company, 123 Main Street");                                               
                                });
                                return circle;
                            }
                            var business = createCircle(circleOptions);
                            foundCircles[i] = business;
                        };

  
                       
                        setTimeout(function() {
                            map.panTo(position);
                        }, 1000);

                    }, onError);*/
                }
            }
            
        }]
    }
});

