# scroll-spy

> Navigation sidebar which updates highlighted navigation item and hash URL as you scroll

## [Demo](https://scroll-spy.web.app/)

## Usage

Wrap your MenuItems in the Menu component and your content in the Content component.

```jsx
import React from 'react'

import { Menu, MenuItem, Content } from 'scroll-spy'

const App = () => {
  return (
    <div>
      <Menu>
        /* The title is the heading in the sidebar.
        The toId specificies which component this section corresponds to. */
        <MenuItem title='First is the worst' toId='first' />
        <MenuItem title='Second is the best' toId='second' />
      </Menu>
      <Content>
        /* Make sure to give your content the same id as the corresponding 			MenuItem */
        <div id='first'>Here's why first is the worst...</div>
        <div id='second'>Here's why second is the best...</div>
      </Content>
    </div>
  )
}
```

## Writeup

### Design decisions

First, I had to figure out how to communicate which section was in view and needed to be highlighted to the menu items in side panel. I solved this problem by giving each side panel item a Intersect Observer on its corresponding section. This lead directly to the second design decision: what should the rules of selecting the highlighted menu item be so that exactly one navigation item is always highlighted and that the highlighted item corresponds to what the user has in view? Many solutions I tried at first - highlighting the menu item whose section occupied most of the screen or the one whose section was fully in view - caused edge cases where the menu items of two small sections would be highlighted at once, or where a the item of a big section would never be highlighted. The final solution I arrived at was to highlight only the menu item of the section at the top of the screen. There can only be one section at the very top of the screen, and by being there it is by definition in view, thus fulfilling our objectives robustly.

### Performance considerations

The Intersection Observer API causes a callback function at every single scroll, even if the highlighted menu item has not changed. In order to decrease wasteful calls, we want the API to cause a callback only when a new section intersects the top of the view. We can do this by giving the observer a threshold of 0 - all other thresholds (ie lower intersections of the screen) will go ignored by the observer, thus saving us valuable compute cycles.

### Improvements

I would first and foremost improve the styling of this library if I had more time. I would make the navigation items indented like buttons which take on a darker shade when hovered over. I would also add a button to close the side panel so that the user could focus on reading. Finally, I would have the side panel resize based on the length of the titles.

### Potential issues

The gravest issue in this library is the hideous color design my color blindness forced me to pick :). More seriously, one issue is that the our scheme for highlighting menu items can cause counterintuitive results, where the section that is barely in view as the user scrolls below it will remain highlighted. To decide which section on the screen the user is likely looking at is a matter of subtle judgement that simple logic cannot determine. Another issue is that the navigation items look scrunched up on a phone - the side panel should be removed entirely from small screens.
