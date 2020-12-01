# scroll-spy

> Navigation sidebar which dynamically updates active element and URL

### Demo



### Install

```bash
npm install --save scroll-spy
```

## Usage

Wrap your page in the Canvas component. Wrap your MenuItems in the Menu component and your content in the Content component.

```jsx
import React from 'react'

import { Canvas, Menu, MenuItem, Content } from 'scroll-spy'

const App = () => {
  return (
    <Canvas>
      <Menu>
        /* The title tells determines what the heading in the sidebar will be.
        The toId specificies which component this section corresponds to. */
        <MenuItem title='Alpha' toId='alpha' />
        <MenuItem title='Beta' toId='beta' />
      </Menu>
      <Content>
        /* Make sure to give your content the same id as the corresponding
        MenuItem */
        <div id='alpha'>...</div>
        <div id='beta'>...</div>
      </Content>
    </Canvas>
  )
}
```

## License

MIT © [Dwarkesh Patel](https://github.com/dwarkeshsp)
