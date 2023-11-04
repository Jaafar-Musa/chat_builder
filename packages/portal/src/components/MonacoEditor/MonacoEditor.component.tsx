"use client"
import React, { useEffect, type FC,  } from "react";
import { type IMonacoEditorProps } from "./MonacoEditor";
import type * as monaco from "monaco-editor";
import Monaco, { type EditorDidMount } from "react-monaco-editor";

const MonacoEditor: FC<IMonacoEditorProps> = () => {
  // const editRef = useRef<editor.IStandaloneCodeEditor | null>(null);

  useEffect(()=>{
    console.log("test")
  },[])
  // useEffect(() => {
  //   if (!editRef.current) return;
  //   editRef.current.setValue(code);
  //   // const editorInstance = monaco.editor.create(div.current, {
  //   //   value: code,
  //   //   language: "typescript",
  //   // });

  //   // // Register custom IntelliSense for 'sum' and 'hello' functions
  //   // //   monaco.languages.typescript.javascriptDefaults.addExtraLib(sumFunction, 'sumFunction.ts');
  //   // //   monaco.languages.typescript.javascriptDefaults.addExtraLib(helloFunction, 'helloFunction.ts');

  //   // editorInstance.onDidChangeModelContent(() => {
  //   //   const newCode = editorInstance.getValue();
  //   //   onChange(newCode);
  //   // });

  //   // editRef.current = editorInstance;

  //   // return () => {
  //   //   // Dispose of the editor when the component unmounts
  //   //   if (editRef.current) {
  //   //     editRef.current.dispose();
  //   //   }
  //   // };
  // }, [code]);

  const handleEditorDidMount: EditorDidMount = (
    editor: monaco.editor.IStandaloneCodeEditor
  ): void => {
    // editRef.current = editor;
    console.log(editor);
    // Register custom IntelliSense for 'sum' and 'hello' functions
    // languages.typescript.javascriptDefaults.addExtraLib(sumFunction, 'sumFunction.ts');
    // languages.typescript.javascriptDefaults.addExtraLib(helloFunction, 'helloFunction.ts');

    // editor.onDidChangeModelContent(() => {
    //   const newCode = editor.getValue();
    //   onChange(newCode);
    // });
  };

  return (
    <div>
      <Monaco
      width={500}
      height={250}
        language="typescript"
        theme="vs-dark"
        options={{
          selectOnLineNumbers: true,
          automaticLayout: true,
        }}
        editorDidMount={handleEditorDidMount}
      />
    </div>
  );
};

export default MonacoEditor;
