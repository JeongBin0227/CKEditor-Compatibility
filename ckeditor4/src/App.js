import logo from "./logo.svg";
import CKEditor from "ckeditor4-react";

import "./App.css";

const Editor = () => {
  return (
    <CKEditor
      config={{
        extraPlugins: "colorbutton",
      }}
      data="<p>This is an example CKEditor 4 WYSIWYG editor instance.</p>"
    />
  );
};

function App() {
  return (
    <div className="App">
      <Editor></Editor>
    </div>
  );
}

export default App;
