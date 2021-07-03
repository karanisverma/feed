import React from "react";

import {
  StyledTab,
  StyledTabs,
  StyledTabContent,
  StyledTabBar,
  StyledTabLabel,
  StyledIcon,
  StyledSearch,
  StyledSearchWrapper,
} from "./styles";

function Tab({ children, ...props }) {
  const onClick = (e) => {
    const { disabled, onSelect, onClick } = props;
    if (disabled) {
      return;
    }
    typeof onClick === "function" && onClick(e);
    typeof onSelect === "function" && onSelect();
    return;
  };

  return <StyledTab onClick={onClick}>{children}</StyledTab>;
}
function Search() {
  return (
    <StyledSearchWrapper>
      <StyledSearch placeholder="SEARCH..."></StyledSearch>
    </StyledSearchWrapper>
  );
}
function Tabs(props) {
  const getTabs = () => {
    const { activeKey, disabled, orientation, children, onChange } = props;
    let tabs = React.Children.map(children, (child, index) => {
      if (!child) return;

      const key = child.key || String(index);
      return React.cloneElement(child, {
        key,
        id: key, // for aria-labelledby
        active: key === activeKey,
        disabled: disabled || child.props.disabled,
        $orientation: orientation,
        onSelect: () => onChange({ activeKey: key }),
        children: (
          <StyledTabLabel active={key === activeKey}>
            {child.props.icon && (
              <StyledIcon
                src={child.props.icon}
                active={key === activeKey}
              ></StyledIcon>
            )}
            {child.props.title}
          </StyledTabLabel>
        ),
      });
    });
    tabs = [...tabs, Search()];
    return tabs;
  };

  const getPanels = () => {
    const { activeKey, disabled, orientation, children, renderAll } = props;
    const tabs = React.Children.map(children, (child, index) => {
      if (!child) return;
      const key = child.key || String(index);
      const isActive = key === activeKey;
      const props = {
        key,
        "aria-labelledby": key,
      };
      const sharedProps = {
        $active: isActive,
        $disabled: disabled,
        $orientation: orientation,
      };

      return (
        <StyledTabContent role="tabpanel" {...sharedProps} {...props}>
          {renderAll ? child.props.children : null}
          {isActive && !renderAll ? child.props.children : null}
        </StyledTabContent>
      );
    });
    return tabs;
  };

  const getSharedProps = () => {
    const { disabled, orientation } = props;
    return {
      $disabled: disabled,
      $orientation: orientation,
    };
  };
  const sharedProps = getSharedProps();
  return (
    <StyledTabs {...sharedProps}>
      <StyledTabBar {...sharedProps}>{getTabs()}</StyledTabBar>
      {getPanels()}
    </StyledTabs>
  );
}
export { Tab, Tabs };
