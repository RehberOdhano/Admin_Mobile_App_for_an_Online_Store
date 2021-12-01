import * as React from "react";
import {
  TouchableOpacity,
  View,
  StyleSheet,
  FlatList,
  Text,
  Image
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const productsList = [{name: "abc", price: 10, URI: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80"}, 
{name: "xyz", price: 20, URI: "https://images.unsplash.com/photo-1600080972464-8e5f35f63d08?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"}];

const employeesList = [{emp_name: "abc", designation: "xyz", salary: 20000}, 
{emp_name: "xyz", designation: "abc", salary: 35000}];

const ordersList = [{order_num: 1, product_name: "abc","price": 20, customer_name: "John", date: "1/1/2021"},
{order_num: 2,product_name: "xyz","price": 50, customer_name: "Tom", date: "1/5/2021"}
];

const HomeScreen = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Products List", {list: productsList})}
      >
        <Text style={styles.text}>Manage Products</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Employees List", {list: employeesList})}
      >
        <Text style={styles.text}>Manage Employees</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Orders List", {list: ordersList})}
      >
        <Text style={styles.text}>Manage Orders</Text>
      </TouchableOpacity>
    </View>
  );
}

const ProductsListScreen = ({ navigation, route }) => {

  const {list} = route.params;
  return (

    <View style={styles.container}>

      <FlatList
        data={list}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Product Details", {obj: item})}
          >
            <Text style={styles.text}>{item.name}     {item.price}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.text}>Back to Home</Text>
      </TouchableOpacity>

    </View>
  );
}

const ProductDetailsScreen = ({ navigation, route }) => {
  const {obj} = route.params; 
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.simpleText}>{obj.name + "\t\t" + obj.price}
          <Image source={{uri: obj.URI}} style={{width: 100, height: 100, marginLeft: 20}}/>
        </Text>
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Products List", {list: productsList})}
      >
        <Text style={styles.text}>Back to Product's List</Text>
      </TouchableOpacity>
    </View>
  );
}

const EmployeesListScreen = ({ navigation, route }) => {

  let {list} = route.params;
  return (
    <View style={styles.container}>
      
      <FlatList
        data={list}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Employee Details", {obj: item})}
          >
            <Text style={styles.text}>{item.emp_name + "\t\t" + item.designation}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.text}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const EmployeeDetailsScreen = ({ navigation, route}) => {
  let {obj} = route.params
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.simpleText}>{obj.emp_name + "\t\t" + obj.designation + "\t\t" + obj.salary}</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Employees List", {list: employeesList})}
      >
        <Text style={styles.text}>Back to Employee's List</Text>
      </TouchableOpacity>
    </View>
  );
}

const OrdersListScreen = ({ navigation, route}) => {
  let {list} = route.params;
  return (
    <View style={styles.container}>
      
      <FlatList
        data={list}
        renderItem={({item}) => (
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("Order Details", {obj: item})}
          >
            <Text style={styles.text}>{item.order_num + "\t\t" + item.product_name + "\t\t" + item.price}</Text>
          </TouchableOpacity>
        )}
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.text}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const OrderDetailsScreen = ({ navigation, route}) => {
  let {obj} = route.params;
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.simpleText}>{obj.order_num + "\t\t" + obj.product_name + "\t\t" + obj.price + "\t\t" + obj.customer_name + "\t\t" + obj.date}</Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("Orders List", {list: ordersList})}
      >
        <Text style={styles.text}>Back to Order's List</Text>
      </TouchableOpacity>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products List" component={ProductsListScreen} />
      <Stack.Screen name="Product Details" component={ProductDetailsScreen} />
      <Stack.Screen name="Employees List" component={EmployeesListScreen} />
      <Stack.Screen name="Employee Details" component={EmployeeDetailsScreen} />
      <Stack.Screen name="Orders List" component={OrdersListScreen} />
      <Stack.Screen name="Order Details" component={OrderDetailsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
    elevation: 8,
    backgroundColor: "#009687",
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  container: {
    flex: 1, 
    alignItems: "center", 
    justifyContent: "center" 
  },
  simpleText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "black"
  }, 
  text: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    // alignSelf: "center",
    // textTransform: "uppercase"
  }
});
