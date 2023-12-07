import { StyleSheet, Text, View, Button, Dimensions } from 'react-native';
import MapView, {Callout, Marker} from 'react-native-maps';
import { STContext } from '../STContext';
import { useContext } from 'react';

export default function MapScreen() {
    const ctx = useContext(STContext);
    const Box1 = ctx.receptacleData[0];
    const coords1 = Box1.gpscoord.split(",");
    const box1AvgFill = (Box1.fillq1+Box1.fillq2+Box1.fillq3+Box1.fillq4)/4;

    const Box2 = ctx.receptacleData[1];
    const coords2 = Box2.gpscoord.split(",");
    const box2AvgFill = (Box2.fillq1+Box2.fillq2+Box2.fillq3+Box2.fillq4)/4;

    const Box3 = ctx.receptacleData[2];
    const coords3 = Box3.gpscoord.split(",");
    const box3AvgFill = (Box3.fillq1+Box3.fillq2+Box3.fillq3+Box3.fillq4)/4;

    const Box4 = ctx.receptacleData[3];
    const coords4 = Box4.gpscoord.split(",");
    const box4AvgFill = (Box4.fillq1+Box4.fillq2+Box4.fillq3+Box4.fillq4)/4;

    const fillColor = (fill) =>{
        if(fill < 75){
            return 'green'
        }
        else{
            return 'red'
        }
    }
    return (
        <View style={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                latitude: 38.559316700549395, 
                longitude: -121.42195307446194,
                latitudeDelta: 0.0062,
                longitudeDelta: 0.0031,
                }}
            >
                <Marker
                    coordinate={{
                        latitude: Number(coords1[0]),
                        longitude: Number(coords1[1]),
                    }}
                    pinColor={fillColor(box1AvgFill)}
                >
                    <Callout>
                        <View style={styles.popup}>
                            <Text style={styles.title}>Receptacle #: {Box1.rid}</Text>
                            <Text style={styles.subtitle}>GPS coords: {Box1.gpscoord}</Text>
                        </View>
                    </Callout>
                </Marker>

                <Marker
                    coordinate={{
                        latitude: Number(coords2[0]), 
                        longitude: Number(coords2[1]),
                    }}
                    //conditional statement base pin color on average fill percentage if 75% full red, otherwise green
                    pinColor={fillColor(box2AvgFill)}
                >
                    <Callout>
                        <View style={styles.popup}>
                            <Text style={styles.title}>Receptacle #: {Box2.rid}</Text>
                            <Text style={styles.subtitle}>GPS coords: {Box2.gpscoord}</Text>
                        </View>
                    </Callout>
                </Marker>

                <Marker
                    coordinate={{
                        latitude: Number(coords3[0]), 
                        longitude: Number(coords3[1]),
                    }}
                    pinColor={fillColor(box3AvgFill)}
                >
                    <Callout>
                        <View style={styles.popup}>
                            <Text style={styles.title}>Receptacle #: {Box3.rid}</Text>
                            <Text style={styles.subtitle}>GPS coords: {Box3.gpscoord}</Text>
                        </View>
                    </Callout>
                </Marker>

                <Marker
                    coordinate={{
                        latitude: Number(coords4[0]), 
                        longitude: Number(coords4[1]),
                    }}
                    pinColor={fillColor(box4AvgFill)}
                >
                    <Callout>
                        <View style={styles.popup}>
                            <Text style={styles.title}>Receptacle #: {Box4.rid}</Text>
                            <Text style={styles.subtitle}>GPS coords: {Box4.gpscoord}</Text>
                        </View>
                    </Callout>
                </Marker>
            </MapView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "fff",
        alignContent: "center",
        justifyContent: 'center'
    },
    map: {
        width: Dimensions.get("window").width,
        height: Dimensions.get("window").height
    },
    title: {
        fontSize: 18,
    },
    subtitle: {
        fontSize: 12,
    },
    popup: {
        height: 80,
        width: 110,
    }
})