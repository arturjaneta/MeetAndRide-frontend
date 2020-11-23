import L from "leaflet";
import "leaflet-routing-machine";
import { withLeaflet,MapLayer } from "react-leaflet";
import "leaflet-control-geocoder"

class Routing extends MapLayer {
  createLeafletElement() {
    const { map,routers } = this.props;
    let leafletElement = L.Routing.control({
      waypoints: [],
      lineOptions: {
        styles: [
          {
            color: "blue",
            opacity: 0.6,
            weight: 4
          }
        ]
      },
    routeWhileDragging: true,
    autoRoute: true,
    geocoder: new L.Control.Geocoder.nominatim()
    }).addTo(map.leafletElement);
    routers.push(leafletElement)
    return leafletElement.getPlan();
  }
}
export default withLeaflet(Routing);