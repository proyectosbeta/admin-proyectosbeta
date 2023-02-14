import { Layout } from "react-admin";
import { MainMenu } from "./MainMenu";

export const MyLayout = (props) => <Layout {...props} menu={MainMenu} />;
