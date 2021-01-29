import React, {useState} from 'react';
import {isFragment} from 'react-is';
import {TabProps, TabsProps, TabsDistribution, TabSize} from './types';
import {
  StyledTabBar,
  StyledInnerTabGroup,
  StyledTabBarTrack,
  StyledTabBarIndicator,
  StyledTabGroup,
  StyledDistributionWrapper,
} from './styled';
import {Flow} from '../stack';
import {Divider} from '../divider';
import {AlignSelfValues, StackChild} from '../stack-child';
import {TabInternal} from './tab-internal';
import {useTheme} from '../theme';
import {
  getTabBarIndicatorStyle,
  getLayoutParams,
  KEYBOARD_ACTION,
  parseKeyDown,
  preventDefault,
  getFirstParentElementWithRole,
  getDescendantOnlyFromFirstChild,
} from './utils';
import {TabPane} from './tab-pane';
import {hasMatchingDisplayNameWith} from '../utils/component';

/* istanbul ignore next */
export const Tab: React.FC<TabProps> = () => <></>;
Tab.displayName = 'Tab';

const validateInitialSelectedIndex = (
  index: number,
  children: unknown[],
): number => (index >= 0 && index < children.length ? index : 0);

export const Tabs: React.FC<TabsProps> = ({
  children,
  overrides = {},
  size = TabSize.Medium,
  divider,
  vertical = false,
  distribution,
  initialSelectedIndex = 0,
}) => {
  const theme = useTheme();

  // filter out children which are not Tab component
  const tabsOnlyChildren = React.Children.toArray(children).filter(
    (child: React.ReactElement) => hasMatchingDisplayNameWith(child, Tab),
  );

  // The index of the active tab - this is what we change on click to trigger a visual tab change
  const [activeTabIndex, setActiveTabIndex] = useState(() =>
    validateInitialSelectedIndex(initialSelectedIndex, children),
  );
  const [indicator, setIndicator] = useState({
    length: 0,
    distance: 0,
  });

  // Just an incremental counter to trigger re-renders when the tab is changed (active tab ref changing wont trigger a render)
  const [keyUpdated, setKeyUpdated] = useState(0);
  React.useEffect(() => {
    setKeyUpdated(keyUpdated + 1);
  }, [activeTabIndex]); // eslint-disable-line react-hooks/exhaustive-deps

  const activeTabRef = React.useRef<HTMLButtonElement>(null);
  // Reference like this so linter does not remove from hooks dependencies
  const currentActiveTabRef = activeTabRef.current;

  const tabBarIndicatorLengthOverride =
    overrides.tabBarIndicator && overrides.tabBarIndicator.length;
  React.useEffect(() => {
    if (currentActiveTabRef) {
      setIndicator(
        getLayoutParams(
          currentActiveTabRef,
          theme,
          vertical,
          tabBarIndicatorLengthOverride,
        ),
      );
    }
  }, [currentActiveTabRef, tabBarIndicatorLengthOverride, theme, vertical]);

  const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
    // WAI-ARIA 1.1
    // https://www.w3.org/TR/wai-aria-practices-1.1/#tabpanel
    // We use directional keys to iterate focus through Tabs.

    // Find all tabs eligible for focus
    const availableTabs: HTMLButtonElement[] = [];

    const tabListElement = getFirstParentElementWithRole(
      event.currentTarget,
      'tablist',
    );

    tabListElement.childNodes.forEach(innerNode => {
      const element = getDescendantOnlyFromFirstChild(
        innerNode,
        'tab',
      ) as HTMLButtonElement;

      if (element && !element.disabled) {
        availableTabs.push(element);
      }
    });

    // Exit early if there are no other tabs available
    if (availableTabs.length <= 1) return;

    // Find tab to focus, looping to start/end of list if necessary
    const currentTabIndex = availableTabs.indexOf(event.currentTarget);
    const action = parseKeyDown(event);

    if (!action) return;

    let nextTab;
    /* istanbul ignore else */
    if (action === KEYBOARD_ACTION.previous) {
      nextTab =
        availableTabs[currentTabIndex - 1] ||
        availableTabs[availableTabs.length - 1];
    } else if (action === KEYBOARD_ACTION.next) {
      nextTab = availableTabs[currentTabIndex + 1] || availableTabs[0];
    } else {
      return;
    }
    // Focus the tab
    nextTab.focus();
    nextTab.click();
  };

  const tabPanes = tabsOnlyChildren.map(
    (child: React.ReactElement<TabProps>) => {
      const tabPaneProps = {
        children: child.props.children,
        overrides: overrides.tabPane,
      };

      return <TabPane {...tabPaneProps} />;
    },
  );

  /* istanbul ignore next */
  const tabContent = tabPanes[activeTabIndex] || null;

  const tabData = tabsOnlyChildren.map(
    (child: React.ReactElement<TabProps>, index) => ({
      key: index,
      isActive: index === activeTabIndex,
      ...child.props,
    }),
  );

  const addStackDivider = (key: number) => (
    <StackChild key={`${key}-divider`} alignSelf={AlignSelfValues.Stretch}>
      <Divider vertical={!vertical} />
    </StackChild>
  );

  const getChildren = (
    tab: string | React.ReactNode,
  ): string | React.ReactNode => {
    if (isFragment(tab)) {
      // un-wrap the fragment from Tab.title prop
      return tab.props.children;
    }
    return tab;
  };

  const tabs = tabData.reduce(
    (acc, tab, index, array) => {
      acc.push(
        <StyledDistributionWrapper
          distribution={distribution || TabsDistribution.LeftStacked}
          numberOfSiblings={array.length}
          data-testid="distribution-wrapper"
          vertical={vertical}
        >
          <TabInternal
            key={tab.key}
            selected={tab.isActive}
            autoFocus={tab.autoFocus}
            size={size}
            onKeyDown={handleKeyDown}
            onClick={() => setActiveTabIndex(tab.key)}
            onMouseDown={preventDefault}
            disabled={tab.disabled}
            ref={tab.isActive ? activeTabRef : undefined}
            overrides={{
              ...tab.overrides,
              width: '100%',
              height: vertical ? '100%' : '',
            }}
          >
            {getChildren(tab.title)}
          </TabInternal>
        </StyledDistributionWrapper>,
      );

      if (divider && index < array.length - 1) {
        acc.push(addStackDivider(tab.key));
      }
      return acc;
    },
    [] as React.ReactElement[],
  );

  return (
    <StyledTabGroup
      vertical={vertical}
      overrides={overrides}
      data-testid="tab-group"
    >
      <StyledTabBar
        overrides={overrides}
        vertical={vertical}
        data-testid="tab-bar"
      >
        <StyledInnerTabGroup
          overrides={overrides}
          flow={vertical ? Flow.VerticalLeft : Flow.HorizontalCenter}
          inline={!vertical}
          role="tablist"
        >
          {tabs}

          <StyledTabBarTrack
            overrides={overrides}
            vertical={vertical}
            role="presentation"
            data-testid="tab-bar-track"
          />
          <StyledTabBarIndicator
            overrides={overrides}
            vertical={vertical}
            style={getTabBarIndicatorStyle(
              theme,
              indicator.length,
              indicator.distance,
              vertical,
              keyUpdated,
              overrides,
            )}
            data-testid="tab-bar-indicator"
            aria-hidden="true"
            role="presentation"
          />
        </StyledInnerTabGroup>
      </StyledTabBar>
      {tabContent}
    </StyledTabGroup>
  );
};