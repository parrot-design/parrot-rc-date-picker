import React from "react";
import { IBackdropProps } from "."; 
import classnames from "@parrotjs/classnames";
import "./index.scss";

const Backdrop = React.forwardRef((props: IBackdropProps, ref) => {
  const {
    center = true,
    children,
    visible,
    prefixCls: customizedPrefixCls = "parrot",
    componentName = "backdrop",
    transparent = false,
    onClick = () => {},
  } = props;

  const prefixCls = customizedPrefixCls + "-" + componentName;

  return (
    <div
      className={classnames(prefixCls, {
        [`${prefixCls}-center`]: center,
        [`${prefixCls}-grey`]: !transparent,
      })}
      onClick={onClick}
    >
      {children}
    </div>
  );
});

export default Backdrop;
