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
    },
    "button": {
      "essence": {
        "primary": choices.colors.brand["wisteria"],
        "secondary": {},
        "tertiary": {}
      },
      "size": {
        "sm": {
          "borderRadius": choices.size.spacing["4"],
          "padding": {
            "horizontal": choices.size.spacing["1"],
            "vertical": choices.size.spacing["4"]
          }
        },
        "md": {      
          "borderRadius": choices.size.spacing["7"],
          "padding": {
            "horizontal": choices.size.spacing["2"],
            "vertical": choices.size.spacing["7"]
          }
        }
      },
      "shadow": choices.common.shadows.bottom
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