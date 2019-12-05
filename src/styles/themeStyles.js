import theme from "styled-theming";

export const dimSurface = "#121212";
export const dimBackground = "#323232";
export const dimNav = "#212121";
export const dimElement = "#484848";
export const dimHighlight = "#82b3c9";
export const dimText = "black";
export const dimFocused = "#2176ff";
export const dimLinkColor = "#bdeaff";
export const dimFaved = "#1aa3ff";

export const brightSurface = "#fafafa";
export const brightBackground = "#f0f0f0";
export const brightNav = "#e8e8e8";
export const brightElement = "#e8ffff";
export const brightHighlight = "#b3e5fc";
export const brightText = "white";
export const brightFocused = "#2176ff";
export const brightLinkColor = "#82b3c9";
export const brightFaved = "#1aa3ff";

export const brightGradiantLeft = `linear-gradient(
  270deg,
  rgba(232, 232, 232, 0) 0%,
  rgba(232, 232, 232, 0.5) 20%,
  rgba(232, 232, 232, 1) 80%
)`;

export const brightGradiantRight = `linear-gradient(
  90deg,
  rgba(232, 232, 232, 0) 0%,
  rgba(232, 232, 232, 0.5) 20%,
  rgba(232, 232, 232, 1) 80%
)`;

export const dimGradiantLeft = `linear-gradient(
  270deg,
  rgba(33, 33, 33, 0) 0%,
  rgba(33, 33, 33, 0.5) 20%,
  rgba(33, 33, 33, 1) 80%
)`;

export const dimGradiantRight = `linear-gradient(
  90deg,
  rgba(33, 33, 33, 0) 0%,
  rgba(33, 33, 33, 0.5) 20%,
  rgba(33, 33, 33, 1) 80%
)`;

export const faved = theme("mode", {
  bright: brightFaved,
  dim: dimFaved
});

export const gradiantLeft = theme("mode", {
  bright: brightGradiantLeft,
  dim: dimGradiantLeft
});

export const gradiantRight = theme("mode", {
  bright: brightGradiantRight,
  dim: dimGradiantRight
});

export const linkColor = theme("mode", {
  bright: brightLinkColor,
  dim: dimLinkColor
});

export const focused = theme("mode", {
  bright: brightFocused,
  dim: dimFocused
});

export const navStyling = theme("mode", {
  bright: brightNav,
  dim: dimNav
});

export const surface = theme("mode", {
  bright: brightSurface,
  dim: dimSurface
});

export const background = theme("mode", {
  bright: brightBackground,
  dim: dimBackground
});

export const element = theme("mode", {
  bright: brightElement,
  dim: dimElement
});

export const highlight = theme("mode", {
  bright: brightHighlight,
  dim: dimHighlight
});

export const text = theme("mode", {
  bright: dimText,
  dim: brightText
});
