import MapView, { Circle, EdgePadding } from "react-native-maps";
import Header from "@/src/components/header";

export default function Maps() {
 
  const edgePadding: EdgePadding = {
    top: 46,
    right: 0,
    bottom: 0,
    left: 0
  }

  return (
    <>
      <MapView
        style={{ flex: 1 }}
        userInterfaceStyle="light"
        showsUserLocation
        followsUserLocation
        showsMyLocationButton
        mapPadding={edgePadding}
      >
      <Circle
        center={{
          latitude: -23.46552,
          longitude: -46.76519,
        }}
        radius={1000}
        fillColor="rgba(255, 0, 0, 0.5)"
        strokeColor="red"
        zIndex={100}
      />
      <Circle
        center={{
          latitude: -23.43735,
          longitude: -46.69065,
        }}
        radius={1000}
        fillColor="rgba(255, 200, 0, 0.5)"
        strokeColor="yellow"
        zIndex={100}
      />
      </MapView>
      <Header/>
    </>
  );
}
