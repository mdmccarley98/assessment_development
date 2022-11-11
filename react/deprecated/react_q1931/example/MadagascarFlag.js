import React from 'react';
import { StyleSheet, View } from 'react-native'

const styles = StyleSheet.create({
    // Answer
    flag: {
        flex: 1,
        flexDirection: 'row'
    },
    right: {
        flex: 1,
        flexDirection: 'column'
    },

    // Distractor #1 (Mixed up columns and rows)
    // flag: {
    //     flex: 1,
    //     flexDirection: 'column'
    // },
    // right: {
    //     flex: 2,
    //     flexDirection: 'row'
    // },

    // Distractor #2 (Mixed up columns and rows)
    // flag: {
    //     flex: 2,
    //     flexDirection: 'column'
    // },
    // right: {
    //     flex: 1,
    //     flexDirection: 'row'
    // },

    // Distractor #3 (Missing 'flex')
    // flag: {
    //     flexDirection: 'row',
    // },
    // right: {
    //     flexDirection: 'column'
    // },

    // Given
    border: { 
        height: '200px', 
        width: '300px', 
        borderColor: 'black', 
        borderWidth: '1px' 
    },
    whiteBar: {
        backgroundColor: 'white',
        width: '33%'
    },
    redBar: {
        backgroundColor: 'red',
        height: '50%'
    },
    greenBar: {
        backgroundColor: 'green',
        height: '50%'
    }
})

function MadagascarFlag() {
    return (
        <View style={styles.border}>
            <View style={styles.flag}>
                <View style={styles.whiteBar}></View>
                <View style={styles.right}>
                    <View style={styles.redBar}></View>
                    <View style={styles.greenBar}></View>
                </View>
            </View>
        </View>
    )
}

export default MadagascarFlag