import React from 'react'

import { Canvas, Menu, MenuItem, Content } from 'scroll-spy'

const App = () => {
  return (
    <Canvas>
      <Menu>
        <MenuItem title='Hey' toId='alpha' />
        <MenuItem title='Ho' toId='beta' />
      </Menu>
      <Content>
        <Section name='alpha'></Section>
        <Section name='beta'></Section>
      </Content>
    </Canvas>
  )
}

function Section({ name }) {
  return (
    <div
      id={name}
      style={{
        height: '100vh'
      }}
    >
      {name}
    </div>
  )
}

export default App
