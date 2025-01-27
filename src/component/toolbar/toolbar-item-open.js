import React from "react";
import { iconClassName, browserOpenFile } from "@blink-mind/renderer-react";

export function ToolbarItemOpen(props) {
  const onClickOpenFile = e => {
    const { diagram } = props;
    const diagramProps = diagram.getDiagramProps();
    const { controller } = diagramProps;
    browserOpenFile(".json,.pencilmap").then(txt => {
      let obj = JSON.parse(txt);
      let model = controller.run("deserializeModel", { controller, obj });
      diagram.openNewModel(model);
    });
  };
  return (
    <div
      className={`pencilmap-toolbar-item ${iconClassName("openfile")}`}
      onClick={onClickOpenFile}
    />
  );
}
