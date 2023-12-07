import { StyleSheet, Text, View, Pressable, FlatList, Modal } from 'react-native';
import { useContext, useState } from "react";
import { STContext } from '../STContext';

export default function ListScreen() {

    const ctx = useContext(STContext);
    const [modalVisible, setModalVisible] = useState(false);

      const Item = ({rec}) => (         //set color of quadrant based on percent filled 25 below green, 25-50 yellow, 75 up red
        <View style={styles.item}>
          <Text style={styles.recName}>Receptacle ID: {rec.rid}</Text>
          <View style={styles.row}>
            <View style={[styles.col, rec.fillq1 < 25 ? styles.greenFull : rec.fillq1 > 25 && rec.fillq1 < 70 ? styles.orangeFull : styles.redFull]}>
              <Text style={styles.recFill}>Quadrant 1: {rec.fillq1}% </Text>
            </View>
            <View style={[styles.col, rec.fillq2 < 25 ? styles.greenFull : rec.fillq2 > 25 && rec.fillq2 < 70 ? styles.orangeFull : styles.redFull]}>
              <Text style={styles.recFill}>Quadrant 2: {rec.fillq2}%</Text>
            </View>
          </View>
          <View style={styles.row}>
            <View style={[styles.col, rec.fillq3 < 25 ? styles.greenFull : rec.fillq3 > 25 && rec.fillq3 < 70 ? styles.orangeFull : styles.redFull]}>
              <Text style={styles.recFill}>Quadrant 3: {rec.fillq3}% </Text>
            </View>
            <View style={[styles.col, rec.fillq4 < 25 ? styles.greenFull : rec.fillq4 > 25 && rec.fillq4 < 70 ? styles.orangeFull : styles.redFull]}>
              <Text style={styles.recFill}>Quadrant 4: {rec.fillq4}%</Text>
            </View>
          </View>
          <Text style={{fontSize: 20}}>Average Fill: {(rec.fillq1+rec.fillq2+rec.fillq3+rec.fillq4)/4}%</Text>
          <Text style={styles.recGPS}>GPS: {rec.gpscoord}</Text>
          <Text style={styles.recBattery}>Battery Percentage: {rec.percbatt}</Text>
          <Text>Signal Power: {rec.signalpower}</Text>
        </View>
      );

    return (
        <View style={styles.container}>
            <FlatList
                data={ctx.receptacleData}
                renderItem={({item}) => <Item rec={item} />}
                keyExtractor={item => item.rid}
            />
        </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      //marginTop: StatusBar.currentHeight || 0,
    },
    item: {
      backgroundColor: '#deddda',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
    },
    recName: {
      fontSize: 24,
    },
    recFill: {
        fontSize: 28,
        flex: 1
      },
    recGPS: {
        fontSize: 20,
    },
    recBattery: {
        fontSize: 20,
    },
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    row: {
      flexDirection: 'row',
      borderColor: '#fff',
      borderWidth: 1
    },
    col:{
      backgroundColor: 'lightblue',
      borderColor: '#fff',
      borderWidth: 1,
      flex: 1
    },
    greenFull:{
      backgroundColor: 'lime',
      borderColor: '#fff',
      borderWidth: 1,
      flex: 1
    },
    orangeFull:{
      backgroundColor: 'orange',
      borderColor: '#fff',
      borderWidth: 1,
      flex: 1
    },
    redFull:{
      backgroundColor: 'red',
      borderColor: '#fff',
      borderWidth: 1,
      flex: 1
    },
  });