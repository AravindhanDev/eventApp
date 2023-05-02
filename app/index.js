import {
    Text,
    View,
    TextInput,
    SafeAreaView,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
} from "react-native"
import { Stack } from "expo-router"
import { useState } from "react"

const styles = StyleSheet.create({
    container: {
        padding: 15,
        flex: 1,
    },
    textInput: {
        backgroundColor: "floralwhite",
        width: "100%",
        padding: 7,
        paddingHorizontal: 10,
    },
    label: {
        paddingBottom: 5,
        fontWeight: "bold",
        fontSize: 16,
    },
    group: {
        paddingBottom: 15,
    },
    clearBtn: {
        backgroundColor: "black",
        width: 90,
        padding: 7,
        borderRadius: 4,
    },
    clearBtnText: {
        textAlign: "center",
        color: "white",
    },
})

export default function Home() {
    const [email, setEmail] = useState("")

    function handleChange(value) {
        setEmail(value)
    }

    function handlePress() {
        setEmail("")
    }

    return (
        <SafeAreaView style={styles.container}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: "#f2f2f2" },
                    headerShadowVisible: false,
                    headerTitle: "Event Listeners",
                }}
            />
            <ScrollView showsHorizontalScrollIndicator={false}>
                <View style={styles.group}>
                    <Text style={styles.label}>Email</Text>
                    <TextInput
                        placeholder="abc@gmail.com"
                        style={styles.textInput}
                        value={email}
                        onChangeText={handleChange}
                    />
                </View>
                <View style={styles.group}>
                    <Text style={styles.label}>You Typed</Text>
                    <TextInput
                        placeholder="abc@gmail.com"
                        style={styles.textInput}
                        value={email}
                        editable={false}
                    />
                </View>
                <View style={styles.group}>
                    <TouchableOpacity
                        style={styles.clearBtn}
                        onPress={handlePress}
                    >
                        <Text style={styles.clearBtnText}>Clear Text</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}
