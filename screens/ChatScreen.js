import { StyleSheet, Text, View, FlatList, TextInput, TouchableOpacity, Image, StatusBar, ScrollView } from 'react-native'
import React, { useState } from 'react'
import axios from 'axios'
const ChatScreen = ({ route }) => {
  const [data, setData] = useState([])
  const [textInput, setTextInput] = useState('')
  const apiKey = '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'
  const apiurl = 'https://api.openai.com/v1/engines/text-davinci-002/completions'

  const { name } = route.params

  const handleSend = async () => {
    const prompt = textInput
    const response = await axios.post(apiurl, {
      prompt: prompt,
      max_tokens: 1024,
      temperature: 0.5,
    }, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      }
    });
    const text = response.data.choices[0].text;
    setData([...data, { type: 'user', 'text': textInput }, { type: 'bot', 'text': text }]);
    setTextInput('');
  }

  return (
    <View style={styles.cantainer}>

      <View style={{ marginTop: 30, flexDirection: "row", width: "100%", paddingVertical: 20, alignItems: "center", justifyContent: "center" }}>
        <View><Text style={styles.title}> Hello</Text></View>
        <View><Text style={styles.title}>{` ${name}!`}</Text></View>
        <View></View>
      </View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          style={styles.body}
          renderItem={({ item }) => (
            <View style={{ flexDirection: "row",marginHorizontal:22 }}>
              <View style={{ marginRight: 10, marginBottom: 30}}>
                <Text style={{
                  fontWeight: "bold",
                  color: item.type === 'user' ? 'green' : 'red'
                }}>{item.type === 'user' ? 'Ninza' : 'Bot'}</Text>
              </View>
              <View style={{
                backgroundColor: "#000000",
                paddingHorizontal: 20,
                marginHorizontal:20,
                borderRadius: 40,
                marginBottom: 30,
              }}>
                <Text style={styles.bot}>{item.text}</Text>
              </View>
            </View>
          )}
        />
      <View style={{ flexDirection: "row", marginHorizontal: 20 }}>
        <TextInput
          style={styles.input}
          value={textInput}
          onChangeText={text => setTextInput(text)}
          placeholder="Ask me anything"
        />
        <TouchableOpacity style={styles.button} onPress={handleSend}>
          <Text style={styles.buttonText}></Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default ChatScreen

const styles = StyleSheet.create({
  cantainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 20
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  body: {
    backgroundColor: "fffcc9",
    width: "102%",
    margin: 10
  },
  bot: {
    fontSize: 16,
    color: "#fff",
    marginTop: 8
  },
  input: {
    borderWidth: 1,
    borderColor: "black",
    width: '90%',
    height: 60,
    marginBottom: 10,
    borderRadius: 10,
    textAlign: "center"
  },
  button: {
    backgroundColor: "green",
    width: "20%",
    height: 60,
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
    marginLeft: 10
  },
  // button: {
  //   backgroundColor: "yellow",
  //   width: "90%",
  //   height: 60,
  //   borderRadius: 10,
  //   justifyContent: "center",
  //   alignItems: "center",
  //   marginBottom: 10
  // },
  buttonText: {
    fontSize: 25,
    fontWeight: "Bold",
    color: "blue"
  }
})