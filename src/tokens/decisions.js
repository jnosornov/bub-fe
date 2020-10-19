import choices from './choices'

const decisions = {
  "typography": {
    "title": {
      "fontSize": {
        "1": choices.size.font["3xl"],
        "2": choices.size.font["2xl"],
        "3": choices.size.font.xl
      } 
    }
  },
  "components": {
    "card": {
      "borderRadius": choices.size.borderRadius.md,
      "shadow": choices.common.shadows.minimal
    }
  },
  "common": {
    "padding": {
      "md": {
        "horizontal": choices.size.spacing["3"],
        "vertical": choices.size.spacing["5"] 
      }
    }
  }
}

export default decisions