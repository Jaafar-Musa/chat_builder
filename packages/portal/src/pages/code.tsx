import React, { type FC } from "react";
import { useState } from "react";
import { MonacoEditor } from "~/components";

const Code: FC = () => {
  const [code, setCode] = useState("// write code here");
  const handleCodeChange = (newCode: string) => {
    setCode(newCode);
  };
  return (
    <div>
      <h1>Monaco Editor with Custom IntelliSense</h1>
      <MonacoEditor code={code} onChange={handleCodeChange} />
    </div>
  );
};

export default Code;
