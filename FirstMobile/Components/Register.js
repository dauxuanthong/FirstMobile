import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import userApi from "../API/userApi";

function Register(props) {
  //State
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [email, setEmail] = useState("");

  //EVENT
  const handleRegister = async (e) => {
    e.preventDefault();
    const data1 = {
      userName: userName,
      password: password,
      confirm: confirm,
      email: email,
    };
    console.log(data1);
    const data = {
      userName: userName,
      password: password,
      email: email,
    };
    console.log("BUG 1");
    try {
      const registerRes = await userApi.register(data);
      console.log(registerRes);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={styles.registerContainer}>
      <Text style={styles.title}>REGISTRATION</Text>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => {
          setUserName(text);
        }}
        placeholder="User Name"
        underlineColorAndroid={"transparent"}
      ></TextInput>

      <View style={styles.passwordView}>
        <TextInput
          style={styles.passwordInput}
          onChangeText={(text) => {
            setPassword(text);
          }}
          placeholder="Password"
          underlineColorAndroid={"transparent"}
          secureTextEntry={true}
        ></TextInput>
        <View style={styles.passwordIcon}>
          <Icon name="eye" size={18} color="white" />
        </View>
      </View>
      <View style={styles.passwordView}>
        <TextInput
          style={styles.passwordInput}
          onChangeText={(text) => {
            setConfirm(text);
          }}
          placeholder="Confirm Password"
          underlineColorAndroid={"transparent"}
          secureTextEntry={true}
        ></TextInput>
        <TouchableHighlight onPress={}>
          <View style={styles.passwordIcon}>
            <Icon name="eye" size={18} color="white" />
          </View>
        </TouchableHighlight>
      </View>
      <TextInput
        style={styles.textInput}
        onChangeText={(text) => {
          setEmail(text);
        }}
        placeholder="Email"
        underlineColorAndroid={"transparent"}
      ></TextInput>
      <View style={styles.blankSpace}></View>
      <Button title="Submit" color="#007AFF" onPress={handleRegister} />
    </View>
  );
}

export default Register;

const styles = StyleSheet.create({
  registerContainer: {
    alignSelf: "stretch",
  },
  title: {
    fontSize: 24,
    color: "#FFFF",
    paddingBottom: 10,
    marginBottom: 40,
    borderBottomColor: "#199187",
    borderBottomWidth: 1,
  },
  textInput: {
    alignSelf: "stretch",
    height: 40,
    color: "#FFFF",
    borderBottomColor: "#f8f8f8",
    borderBottomWidth: 1,
  },
  passwordView: {
    flexDirection: "row",
    flexWrap: "nowrap",
    height: 40,
    width: "100%",
  },
  passwordInput: {
    alignSelf: "stretch",
    height: 40,
    marginBottom: 30,
    color: "#FFFF",
    borderBottomColor: "#f8f8f8",
    borderBottomWidth: 1,
    width: "80%",
  },
  passwordIcon: {
    height: 40,
    width: "20%",
    alignItems: "flex-end",
    justifyContent: "center",
    borderBottomColor: "#f8f8f8",
    borderBottomWidth: 1,
  },
  blankSpace: {
    height: 50,
    width: "100%",
  },
});
