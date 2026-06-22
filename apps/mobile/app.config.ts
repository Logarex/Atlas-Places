import type { ConfigContext, ExpoConfig } from "expo/config";

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: "Atlas Places",
  slug: "atlas",
  scheme: "atlas",
  version: "1.0.0",
  orientation: "portrait",
  userInterfaceStyle: "automatic",
  locales: {
    en: "./src/i18n/infoPlist/en.json",
    fr: "./src/i18n/infoPlist/fr.json",
    es: "./src/i18n/infoPlist/es.json",
    it: "./src/i18n/infoPlist/it.json",
    de: "./src/i18n/infoPlist/de.json"
  },
  icon: "./assets/icon.png",
  ios: {
    supportsTablet: true,
    bundleIdentifier: "com.louischabert.atlas",
    icon: {
      light: "./assets/icon.png",
      dark: "./assets/icon-dark.png"
    },
    infoPlist: {
      NSPhotoLibraryUsageDescription:
        "Atlas Places requires access to your photo library so you can attach photos to your visits. For example, you can choose a picture of an Apple Store from your gallery and add it to your local visit log or submit it for community review.",
      NSPhotoLibraryAddUsageDescription:
        "Atlas Places requires permission to add photos to your library so you can export images. For example, you can save a photo from a store visit directly to your camera roll for backup.",
      NSCameraUsageDescription:
        "Atlas Places requires camera access so you can take photos directly within the app. For example, you can capture a picture of a storefront while visiting and attach it immediately to your visit log.",
      NSMicrophoneUsageDescription:
        "Atlas Places requires microphone access so you can record voice memos. For example, you can record a quick audio note about your store experience and attach it to your visit log."
    }
  },
  android: {
    package: "com.louischabert.atlas",
    icon: "./assets/icon.png",
    adaptiveIcon: {
      foregroundImage: "./assets/adaptive-icon.png",
      backgroundColor: "#E9E1D1"
    },
    config: {
      googleMaps: {
        apiKey: process.env.EXPO_PUBLIC_GOOGLE_MAPS_API_KEY
      }
    }
  },
  plugins: [
    "expo-router",
    "expo-localization",
    "expo-audio",
    "@react-native-community/datetimepicker",
    [
      "expo-image-picker",
      {
        photosPermission:
          "Atlas Places requires access to your photo library so you can attach photos to your visits. For example, you can choose a picture of an Apple Store from your gallery and add it to your local visit log or submit it for community review.",
        cameraPermission:
          "Atlas Places requires camera access so you can take photos directly within the app. For example, you can capture a picture of a storefront while visiting and attach it immediately to your visit log.",
        microphonePermission:
          "Atlas Places requires microphone access so you can record voice memos. For example, you can record a quick audio note about your store experience and attach it to your visit log."
      }
    ],
    [
      "expo-camera",
      {
        cameraPermission:
          "Atlas Places requires camera access so you can take photos directly within the app. For example, you can capture a picture of a storefront while visiting and attach it immediately to your visit log.",
        microphonePermission:
          "Atlas Places requires microphone access so you can record voice memos. For example, you can record a quick audio note about your store experience and attach it to your visit log."
      }
    ]
  ],
  experiments: {
    typedRoutes: true
  }
});
