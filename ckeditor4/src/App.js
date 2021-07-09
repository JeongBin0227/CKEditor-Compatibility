import logo from "./logo.svg";
import CKEditor from "ckeditor4-react";

import "./App.css";

function App() {
  return (
    <div className="App">
      <CKEditor data="<p>This is an example CKEditor 4 WYSIWYG editor instance.</p>" />
    </div>
  );
}

export default App;
