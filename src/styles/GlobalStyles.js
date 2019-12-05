import { createGlobalStyle } from "styled-components";
import * as t from "./themeStyles";

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,500&display=swap');
  
.App {
  font-family: sans-serif;
  text-align: center;
}

 *{
   user-select:none;
 }

body {

  background-color: ${t.surface};
  font-family: Montserrat, helvetica;
  margin: 0;
  color: ${t.text};
  transition: 0.3s ease-out;
}

::-webkit-scrollbar {
  width: 3px;
}

::-webkit-scrollbar-track {
  /* box-shadow: inset 0 0 6px rgb(255, 220, 161); */
  /* border-radius: 4px; */
}

::-webkit-scrollbar-thumb {
  background-color: rgb(197, 177, 143);
  /* border-radius: 4px; */
}
`;

export default GlobalStyles;
