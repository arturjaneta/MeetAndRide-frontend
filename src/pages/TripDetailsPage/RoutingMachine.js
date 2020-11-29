import L from "leaflet";
import "leaflet-routing-machine";
import { withLeaflet,MapLayer } from "react-leaflet";
import "leaflet-control-geocoder"

class Routing extends MapLayer {
  createLeafletElement() {
    const { map,routers } = this.props;
    let leafletElement = L.Routing.control({
      waypoints: this.props.waypoints,
      lineOptions: {
        styles: [
          {
            color: "blue",
            opacity: 0.6,
            weight: 4
          }
        ]
      },
    addWaypoints: false,
    draggableWaypoints: false,
    fitSelectedRoutes: false,
    showAlternatives: false,
    }).addTo(map.leafletElement);
    leafletElement.waypointschanged = this.props.setWaypoints
    routers.push(leafletElement)
    return leafletElement.getPlan();
  }
}
export default withLeaflet(Routing);