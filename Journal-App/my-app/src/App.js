import "./App.css";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Form from "./components/Form/Form";
import Entries from "./components/Entries/Entries";

export default function App() {
  return (
    <>
      <Header>Journal</Header>
      <Main>
        <Form name="form--entry">Create</Form>
        <Entries></Entries>
      </Main>
    </>
  );
}
