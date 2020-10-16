import React from 'react'
import globalStyles from '../src/shared/global'

export const decorators = [
  Story => (
    <>
      <Story />
      <style jsx global>{globalStyles}</style>
    </>
  )
]


export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}