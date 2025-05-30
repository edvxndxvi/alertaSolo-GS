import MapView from "react-native-maps";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
import Header from "@/src/components/header";

export default function Maps() {
  const [location, setLocation] = useState(null);
  const [region, setRegion] = useState(null);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        console.log("Permissão negada para localização");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location.coords);
      setRegion({
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.01,
        longitudeDelta: 0.01,
      });
    })();
  }, []);

  return (
    <>
      <MapView
        style={{ flex: 1 }}
        userInterfaceStyle="light"
        showsUserLocation
        showsMyLocationButton
      />
      <Header/>
    </>
  );
}
