import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity } from "react-native";

export default function Index() {
  const trainingSessions = [
    {
      title: 'Treinão dhr'
    },
    {
      title: 'Treinão topzera'
    },
    {
      title: 'Treinão forte'
    },
  ]

  const router = useRouter()

  return (
    <ThemedView
      style={{
        flex: 1,
        padding: 10,
        gap: 10
      }}
      mustBeSafeArea={true}
    >
      {
        trainingSessions.map(session => <TouchableOpacity key={session.title} onPress={() => router.push('Treino')}>
            <ThemedText style={styles.sessionCard}>{session.title}</ThemedText>
          </TouchableOpacity>
        )
      }

    </ThemedView>
  );
}

const styles = StyleSheet.create({
  sessionCard: {
    padding: 10,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 20,
    fontWeight: 'bold'
  }
})
