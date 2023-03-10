import React, { useEffect } from "react";
import { MdContentCopy } from "react-icons/md";
import styled from "styled-components";
import CopyToClipboard from "@uxui/copy-to-clipboard-react";
import Editor from 'react-simple-code-editor';
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism.css'; //Example style, you can use another
import "./code.css";
const Pane = styled("div")({
  padding: "20px 20px 20px 20px",
  backgroundColor: "#001e3c",
  borderRadius: "3px",
  border: "1px solid #dddddd",
  display: "flex",
  justifyContent: "space-between",
  position: "relative",
  fontFamily: "sans-serif",
  borderRadius: "10px",
  fontSize: "16px"
});

const Container = styled("div")({
  color: "white",
});

const Tooltip = styled("div")({
  backgroundColor: "#111111",
  color: "#ffffff",
  position: "absolute",
  top: "-25px",
  right: "3px",
  fontWeight: 600,
  fontSize: "12px",
  padding: "4px 5px",
  "&:after": {
    content: "''",
    position: "absolute",
    width: "0",
    height: "0",
    border: "5px solid transparent",
    borderTopColor: "#111111",
    bottom: "-10px",
    left: "50%",
    transform: "translateX(-50%)"
  }
});

function Codee({ code }) {
  const [showButtons, setShowButtons] = React.useState(false);
  const [code1, setCode] = React.useState(code);
  useEffect(() => {
    setCode(code)
  }, [code])
  const content = code;

  return (

    <CopyToClipboard>
      {({ copy, copied, turnOffCopied }) => {
        const handleCopy = e => {
          if (content && !copied) {
            copy(content);
            navigator.clipboard.writeText(content)
            setTimeout(() => {
              turnOffCopied();
            }, 1000);
          }
        };

        const copyOnClick = e => {
          e.preventDefault();
          handleCopy();
        };

        const copyOnKeyPress = e => {
          if (e.key === "Enter" || e.key === " ") {
            handleCopy();
          }
        };

        return (
          <Container
            onMouseOver={() => setShowButtons(true)}
            onFocus={() => setShowButtons(true)}
            onMouseOut={() => setShowButtons(false)}
            onBlur={() => setShowButtons(true)}
          >
            <Pane>
              <span className="code-text">
                <Editor
                  value={code1}
                  onValueChange={code => setCode(code)}
                  disabled
                  highlight={code => highlight(code, languages.js)}
                  padding={10}
                /></span>
              <div
                role="button"
                onClick={copyOnClick}
                tabIndex={0}
                onKeyDown={copyOnKeyPress}
              >
                {showButtons && (
                  <MdContentCopy />)}
                {copied && (
                  <Tooltip
                    role="tooltip"
                    aria-describedby="copied ETH address!"
                  >
                    Copied
                  </Tooltip>
                )}
              </div>
            </Pane>
          </Container>
        );
      }}
    </CopyToClipboard>

  );
}
export default Codee
