import React from "react";
import cx from "classnames";
import "./Toolbar.css";
import { iconClassName } from "@blink-mind/renderer-react";
import { ToolbarItemOpen } from "./toolbar-item-open";
import { ToolbarItemLayout } from "./toolbar-item-layout";
import { ToolbarItemTheme } from "./toolbar-item-theme";
import { ToolbarItemExport } from "./toolbar-item-export";
import { ToolbarItemSearch } from "./toolbar-item-search";

// import debug from "debug";
// const log = debug("app");

export class Toolbar extends React.PureComponent {
  render() {
    const props = this.props;

    const { onClickUndo, onClickRedo, canUndo, canRedo } = props;

    return (
      <div className="pencilmap-toolbar">
        <ToolbarItemOpen {...props} />
        <ToolbarItemExport {...props} />
        <ToolbarItemTheme {...props} />
        <ToolbarItemLayout {...props} />
        <ToolbarItemSearch {...props} />

        <div
          className={cx("pencilmap-toolbar-item", iconClassName("undo"), {
            "pencilmap-toolbar-item-disabled": !canUndo
          })}
          onClick={onClickUndo}
        />

        <div
          className={cx("pencilmap-toolbar-item", iconClassName("redo"), {
            "pencilmap-toolbar-item-disabled": !canRedo
          })}
          onClick={onClickRedo}
        />
      </div>
    );
  }
}
