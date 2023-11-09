import { Provider } from "react-redux";
import initializeStore from "./src/store";
import Navigation from "./src/navigation";

const store = initializeStore();

const App = () => {
  return (
    <Provider store={store}>
      <Navigation />
    </Provider>
  );
};

export default App;
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });