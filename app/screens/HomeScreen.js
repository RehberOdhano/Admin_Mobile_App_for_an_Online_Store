import React from 'react'
import { View, StyleSheet, TouchableOpacity } from 'react-native'

const HomeScreen = ({ navigation }) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Products List", {list: productsList})}
        >
          Manage Products
        </TouchableOpacity>
  
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Employees List", {list: employeesList})}
        >
          Manage Employees
        </TouchableOpacity>
  
        <TouchableOpacity
          style={styles.button}
          onPress={() => navigation.navigate("Orders List", {list: ordersList})}
        >
          Manage Orders
        </TouchableOpacity>
      </View>
    );
  }

  const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: "center", 
        justifyContent: "center" 
    },  
    button: {
        backgroundColor: "#7a42f4",
        padding: 10,
        margin: 15,
        height: 40,
        borderRadius: 20,
    }
  })

  export default HomeScreen;
  