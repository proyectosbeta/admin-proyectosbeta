import { Admin, Resource } from "react-admin";
import jsonServerProvider from "ra-data-json-server";
import { MyLayout } from "./components/MyLayout";
import { UserList } from "./users/users";
import { HeroesList } from "./systems/heroesIII/HeroesList";

const URL = "http://localhost:4500/creatures";
const dataProvider = jsonServerProvider(URL);

function App() {
  return (
    <Admin layout={MyLayout} dataProvider={dataProvider}>
      {/* <Resource name="users" list={UserList} /> */}
      <Resource name="castle" list={HeroesList} />
      <Resource name="conflux" list={HeroesList} />
      <Resource name="cove" list={HeroesList} />
      <Resource name="dungeon" list={HeroesList} />
      <Resource name="fortress" list={HeroesList} />
      <Resource name="inferno" list={HeroesList} />
      <Resource name="necropolis" list={HeroesList} />
      <Resource name="rampart" list={HeroesList} />
      <Resource name="stronghold" list={HeroesList} />
      <Resource name="tower" list={HeroesList} />
    </Admin>
  );
}

export default App;
