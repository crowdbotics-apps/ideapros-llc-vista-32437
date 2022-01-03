import { StyleSheet } from "react-native"

export const globalOptions = {
  name: "ideapros_llc_vista_32437",
  url: "https://ideapros_llc_vista_32437.botics.co",
  api: "https://ideapros_llc_vista_32437.botics.co/api/v1"
}

export const modulesOptions = {
  "@modules/app-menu": {
    copy: "Routes available!"
  },

  undefined: { title: "App Menu", copy: "Routes available!", styles: styles },
  "@modules/login": {
    LOGO_URL:
      "https://crowdbotics-slack-dev.s3.amazonaws.com/media/project_component_resources/cb-icon.png",
    BACKGROUND_URL:
      "https://crowdbotics-slack-dev.s3.amazonaws.com/media/project_component_resources/halfbg.png",
    HOME_SCREEN_NAME: "Home Screen",
    validateEmail: "^[^\\s]+([.-]?\\w+)*@\\w+([.-]?\\w+)*(.\\w{2,3})+$",
    SignInNavText: "Sign In",
    SignUpNavText: "Sign Up",
    SignInButtonText: "Login",
    SignUpButtonText: "Sign Up"
  }
}
