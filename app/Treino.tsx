import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { FontAwesome6, Ionicons } from "@expo/vector-icons";
import { ScrollView, StyleSheet, TextInput, TouchableOpacity, View } from "react-native";

export default function Treino() {
    const exercises = [
        {
            title: 'Rosca direta',
            repetitions: 4,
            intervalTime: 60,
            seriesCount: 3,
            weight: '10'
        },
        {
            title: 'Rosca alternada',
            repetitions: 4,
            intervalTime: 60,
            seriesCount: 3,
            weight: '10'
        },
        {
            title: 'Rosca scott',
            repetitions: 4,
            intervalTime: 60,
            seriesCount: 3,
            weight: '10'
        },
        {
            title: 'Rosca martelo',
            repetitions: 4,
            intervalTime: 60,
            seriesCount: 3,
            weight: '10'
        },
        {
            title: 'Rosca na polia',
            repetitions: 4,
            intervalTime: 60,
            seriesCount: 3,
            weight: '10'
        },
    ]

    return (
        <ThemedView style={{ flex: 1 }}>
            <ScrollView
                contentContainerStyle={{
                    padding: 10,
                    gap: 10
                }}
            >
                {
                    exercises.map(exercise => <ThemedView style={styles.exerciseCard} key={exercise.title}>
                        <ThemedText style={{ fontWeight: 'bold', fontSize: 20 }}>{exercise.title}</ThemedText>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 30 }}>
                            <View style={styles.props}>
                                <Ionicons size={28} name={'refresh-circle'} color='white' />
                                <ThemedText style={styles.seriesAttributes} >{exercise.repetitions}</ThemedText>
                            </View>
                            <View style={styles.props}>
                                <Ionicons size={28} name={'time'} color='white' />
                                <ThemedText style={styles.seriesAttributes} >{exercise.intervalTime}</ThemedText>
                            </View>
                            <View style={styles.props}>
                                <Ionicons size={28} name={'home'} color='white' />
                                <ThemedText style={styles.seriesAttributes} >{exercise.seriesCount}</ThemedText>
                            </View>
                            <View style={styles.props}>
                                <FontAwesome6 name="dumbbell" size={26} color="white" />
                                <TextInput style={styles.weightInput} value={exercise.weight} />
                            </View>
                        </View>

                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10 }}>
                            <View style={styles.cronometerContainer}>
                                <Ionicons size={28} name={'time'} color='white' />
                                <ThemedText>1:00</ThemedText>
                                <TouchableOpacity>
                                    <Ionicons size={28} name={'play'} color='green' />
                                </TouchableOpacity>
                            </View>

                            <View style={styles.cronometerContainer}>
                                <Ionicons size={28} name={'refresh'} color='red' />
                                <ThemedText>1</ThemedText>
                            </View>
                        </View>
                    </ThemedView>
                    )
                }
            </ScrollView>
        </ThemedView>
    );
}

const styles = StyleSheet.create({
    exerciseCard: {
        padding: 15,
        borderColor: '#fff',
        borderWidth: 1,
        borderRadius: 20
    },
    props: {
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5
    },
    cronometerContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 5,
        marginTop: 20
    },
    weightInput: {
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 10,
        textAlign: 'center',
        marginTop: 1
    },
    seriesAttributes: {
        padding: 5,
        borderRadius: 10,
        textAlign: 'center',
        marginTop: 5
    }
})