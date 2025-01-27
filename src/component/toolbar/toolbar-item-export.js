import cx from "classnames";
import { iconClassName } from "@blink-mind/renderer-react";
import { Menu, MenuDivider, MenuItem, Popover } from "@blueprintjs/core";
import React from "react";
import { downloadFile } from "../../utils";

export function ToolbarItemExport(props) {
  const onClickExportJson = e => {
    const { diagram } = props;
    const diagramProps = diagram.getDiagramProps();
    const { controller, model } = diagramProps;

    const json = controller.run("serializeModel", diagramProps);
    const jsonStr = JSON.stringify(json);
    const url = `data:text/plain,${encodeURIComponent(jsonStr)}`;
    const title = controller.run("getTopicTitle", {
      ...diagramProps,
      topicKey: model.rootTopicKey
    });
    downloadFile(url, `${title}.pencilmap`);
  };

  return (
    <div className={cx("pencilmap-toolbar-item", iconClassName("export"))} onClick={onClickExportJson}>
    </div>
  );
}
