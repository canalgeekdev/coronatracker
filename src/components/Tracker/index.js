import React from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native';

function toCommas(value) {
    return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

const CardConfirmed = ( {title, value, date} ) => {
    return (

        <View style={styles.cardConfirmed}>
            
            <Text style={styles.cardTitle}>{title}</Text>
            
            <Text style={styles.cardBody}>
                {toCommas(value)}
            </Text>

            <Text style={styles.cardDate}>
                {date}
            </Text>

        </View>
    )
}

const CardRecovered = ({title, value, date}) => {
    return (
        <View style={styles.cardRecovered}>
            
            <Text style={styles.cardTitle}>{title}</Text>
            
            <Text style={styles.cardBody}>
                {toCommas(value)}
            </Text>

            <Text style={styles.cardDate}>
                {date}
            </Text>

        </View>
    )
}

const CardDeath = ({title, value, date}) => {
    return (
        <View style={styles.cardDeath}>
            
            <Text style={styles.cardTitle}>{title}</Text>
            
            <Text style={styles.cardBody}>
                {toCommas(value)}
            </Text>

            <Text style={styles.cardDate}>
                {date}
            </Text>

        </View>
    )
}

const Tracker = ( {data: { confirmed, recovered, deaths, lastUpdate } } ) => {

    if (!confirmed) {
        return (
            <View style={styles.container}>
                <Text>Aguarde carregando ... </Text>
            </View>
        )
    }

    return (
        <View style={styles.container}>

            <Text style={styles.appTitle}>Corona Tracker by CanalGeekDev</Text>

            <CardConfirmed title="Infectados" value={confirmed.value} date={new Date(lastUpdate).toLocaleString("pt-BR")} />
            <CardRecovered title="Recuperados" value={recovered.value} date={new Date(lastUpdate).toLocaleString("pt-BR")} />
            <CardDeath title="Mortes" value={deaths.value} date={new Date(lastUpdate).toLocaleString("pt-BR")} />

        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        padding: 20,
    },  
    appTitle: {
        fontSize: 16,
        fontWeight: "bold",
        marginBottom: 10,
        color: "#3498db",
    },
    cardConfirmed: {
        padding: 20,
        width: "80%",
        height: "30%",
        backgroundColor: "#FFF",
        borderRadius: 7,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#ecf0f1",
        borderBottomWidth: 10,
        borderBottomColor: "#3498db",
    },
    cardRecovered: {
        padding: 10,
        width: "80%",
        height: "30%",
        backgroundColor: "#FFF",
        borderRadius: 7,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#ecf0f1",
        borderBottomWidth: 10,
        borderBottomColor: "#2ecc71",
    },
    cardDeath: {
        padding: 10,
        width: "80%",
        height: "30%",
        backgroundColor: "#FFF",
        borderRadius: 7,
        marginBottom: 10,
        borderWidth: 1,
        borderColor: "#ecf0f1",
        borderBottomWidth: 10,
        borderBottomColor: "#c0392b",
    },
    cardTitle: {
        textAlign: "center",
        fontSize: 14,
        color: "#34495e",
    },
    cardBody: {
        marginTop: 10,
        textAlign: "center",
        fontSize: 32,
        color: "#2c3e50",
    },
    cardDate: {
        marginTop: 10,
        textAlign: "center",
        fontSize: 14,
        color: "#000",
    },

});

export default Tracker;