var mapobj;
            subOverlay.prototype = new google.maps.OverlayView();

            function subOverlay(bounds, txtTitle, map) {
                this.bounds_ = bounds;
                this.txtTitle_ = txtTitle;
                this.map_ = map;
                this.div_=null;
                this.setMap(map);
               
            }

            subOverlay.prototype.onAdd = function() {
                var div = document.createElement('DIV');
                div.style.borderStyle = "none";
                div.style.borderWidth = "0px";
                div.style.position = "absolute";
                div.style.disply = "block";
                div.style.width ='300px';
                div.style.height = '23px';
                div.innerHTML = this.txtTitle_;

                this.div_ = div;

                var panes = this.getPanes();
                panes.overlayLayer.appendChild(div);
            }

            subOverlay.prototype.draw = function() {
                var overlayProjection = this.getProjection();
                var sw = overlayProjection.fromLatLngToDivPixel(this.bounds_.getSouthWest());
                var ne = overlayProjection.fromLatLngToDivPixel(this.bounds_.getNorthEast());

                var div = this.div_;
                var zoomLevel =mapobj.getZoom();
                if ((zoomLevel >=12))
                {
                    div.style.left = sw.x - 2 + 'px';
                    div.style.top = ne.y + 'px';
                   // div.style.backgroundColor = "#898989";
                    div.style.display = "block";
                    div.style.display = "block";
                    div.style.zIndex = "9999";
                }
                else
                {
                     div.style.display = "none";
                }    

            }            
            
            function createOverlay( subAreaBound, title, map)
            {
            	mapobj = map;
                var swBound = '';
                var neBound = '';
                var coordinateArray = subAreaBound.split('|');
                var Lat = coordinateArray[0].split(',');
                var Lng = coordinateArray[1].split(',');
                
                var nLat1 = Lat[0];
                var nLat2 = Lat[1];
                
                var nLng1 = Lng[0];
                var nLng2 = Lng[1];
                
                
                if (nLng1 > nLng2)
                {
                    var tLng = nLng1;
                    nLng1 = nLng2;
                    nLng2 = tLng;
                }
                
                if (nLat1 > nLat2)
                {
                    var tLng = nLat1;
                    nLat1 = nLat2;
                    nLat2 = tLng;
                }
                

                if(nLng1 < 0 || nLng2 < 0)
                {
                     swBound = new google.maps.LatLng(nLat1,nLng2);
                     neBound = new google.maps.LatLng(nLat2,nLng1);
                }
                else if(nLat1 < 0 || nLat2 < 0)
                {
                     swBound = new google.maps.LatLng(nLat2,nLng1);
                     neBound = new google.maps.LatLng(nLat1,nLng2);
                }
                else
                {
                     swBound = new google.maps.LatLng(nLat1,nLng1);
                     neBound = new google.maps.LatLng(nLat2,nLng2);
                }


                var bounds = new google.maps.LatLngBounds(swBound, neBound);
                         
                title = title.substring(0,6);  
				
                var txtTitle = '<span style="position:absolute;display:inline-block; padding:5px 12px 5px 12px;font-size:11px;color:#ffffff;text-decoration:none;background-color:#898989;">' + title + '</span>';

                
               overlay = new subOverlay(bounds, txtTitle, mapobj);
               Rectangle(subAreaBound, '1');
            }
                                    
            function Rectangle(subAreaBound, opt_weight) {

                    var coordinateArray = subAreaBound.split('|');
                    var Lat = coordinateArray[0].split(',');
                    var Lng = coordinateArray[1].split(',');
                    
                    var nLat1 = Lat[0];
                    var nLat2 = Lat[1];
                    
                    var nLng1 = Lng[0];
                    var nLng2 = Lng[1];
                    
                    
                    if (nLng1 > nLng2)
                    {
                        var tLng = nLng1;
                        nLng1 = nLng2;
                        nLng2 = tLng;
                        Lng[0] = nLng2;
                        Lng[1] = tLng;
                    }

                    var RecCoords  = [ 
                        new google.maps.LatLng(nLat1, nLng1)
                      , new google.maps.LatLng(nLat1,nLng2)
                      , new google.maps.LatLng(nLat2, nLng2) 
                      , new google.maps.LatLng(nLat2, nLng1) 
                  
                    ];  


                    var bermudaRec  = new google.maps.Polygon({
                        paths: RecCoords, 
                        strokeColor: "#898989", 
                        strokeOpacity: 1, 
                        strokeWeight: opt_weight, 
						fillColor: "#CD4275",
                        fillOpacity: 0 ,
                        zIndex : 100,
                        cursor: "pan"
						
                    });  
                        var zoomLevel =mapobj.getZoom();
                        if ((zoomLevel >=12))
                        {
                            bermudaRec.setMap(mapobj);
                        }
                        else
                        {
                            bermudaRec.setMap(null);
                        } 
                    google.maps.event.addListener(mapobj, 'zoom_changed', function() {
                        var zoomLevel =mapobj.getZoom();
                        if ((zoomLevel >=12))
                        {
                            bermudaRec.setMap(mapobj);
                        }
                        else
                        {
                            bermudaRec.setMap(null);
                        } 
                    });
                    
            }
            