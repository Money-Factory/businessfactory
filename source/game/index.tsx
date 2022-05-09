import { View, Text } from 'react-native'
import React from 'react'

export default function Game() {
  return (
    <View style={styles.container}>
        <View style={styles.middleArea}/>
        <View style={styles.topAea}/>
        <View style={styles.bottomArea}/>
    </View>
  )
}

const styles = {
    container: {
        flex: 1,
    },
    topAea: {
        height: "13%",
        width: '100%',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 25,
        position: 'absolute',
        top: 0,
        left: 0,
    },
    middleArea: {
        height: '100%',
        width: '100%',
        backgroundColor: 'purple',
        position: 'absolute',
        top: 0,
        left: 0,
    },
    bottomArea: {
        height: "13%",
        width: '100%',
        borderWidth: 1,
        borderColor: 'white',
        borderRadius: 25,
        position: 'absolute',
        top: '87%',
        left: 0,
    }
} as const;