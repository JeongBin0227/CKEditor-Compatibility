import React from "react";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const App = () => {
  return (
    <div>
      <CKEditor
        editor={ClassicEditor}
        data="<ul><br />\t<li><span style=color:#2980b9><strong>울랄라</strong></span></li><br /></ul><br /><br /><p>&nbsp;</p><br /><br /><p><span style=background-color:#c0392b>클랄라</span></p><br />"
        onChange={(event, editor) => {
          const data = editor.getData();
          console.log(data);
        }}
      />
    </div>
  );
};

export default App;
