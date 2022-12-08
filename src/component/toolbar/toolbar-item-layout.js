import React from "react";
import { DiagramLayoutType } from "@blink-mind/core";
import cx from "classnames";
import { Icon, iconClassName } from "@blink-mind/renderer-react";
import { Menu, MenuItem, Popover } from "@blueprintjs/core";

export function ToolbarItemLayout(props) {
  const layoutDirs = [
    [
      DiagramLayoutType.LEFT_AND_RIGHT,
      "Both",
      "layout-left-and-right"
    ],
    [DiagramLayoutType.LEFT_TO_RIGHT, "Right", "layout-right"],
    [DiagramLayoutType.RIGHT_TO_LEFT, "Left", "layout-left"]
  ];

  const onClickSetLayout = layoutDir => e => {
    const { diagram } = props;
    const diagramProps = diagram.getDiagramProps();
    const { controller } = diagramProps;
    controller.run("setLayoutDir", { ...diagramProps, layoutDir });
  };

  return (
    <div
      className={cx("pencilmap-toolbar-item", iconClassName("layout-left-and-right"))}
    >
      <Popover enforceFocus={false}>
        <div className="pencilmap-toolbar-popover-target" />
        <Menu>
          {layoutDirs.map(dir => (
            <MenuItem
              key={dir[1]}
              icon={Icon(dir[2])}
              text={dir[1]}
              onClick={onClickSetLayout(dir[0])}
            />
          ))}
        </Menu>
      </Popover>
    </div>
  );
};
