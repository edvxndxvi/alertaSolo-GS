import MapView, { EdgePadding } from "react-native-maps";
import * as Location from "expo-location";
import { useEffect, useState } from "react";
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
      />
      <Header/>
    </>
  );
}
