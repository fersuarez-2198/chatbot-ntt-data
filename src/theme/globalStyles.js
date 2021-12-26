import { createGlobalStyle } from "styled-components";
export const GlobalStyles = createGlobalStyle`

@media (max-width: 768px) {
  .btnSettings{
    transform: translate(270%, -91%);
  }
} 

a {
  color: ${({ theme }) => theme.textPrimary};
  cursor: pointer;
}

div {
  display: grid;
}

input.form-control {
  width: 88% !important;
  height: 48px;
  border-radius: 29px;
  background-color: #fff;
  box-shadow: 0 2px 12px 0 rgb(0 0 0 / 4%);
  padding-left: 1em;
  color: #666;
  border-radius: 29px;
  border: 0;
  position: relative;
  margin: 0 auto;
}

.navBar, app {
  background: ${({ theme }) => theme.backgroundColor};
  color: ${({ theme }) => theme.textPrimary};
  height: 56px;
}

.dropdown-item:active {
  color: #fff;
  text-decoration: none;
  background-color: #e9ecef;
}

.containerSendMessage{
  padding:0px 10% 0px 10%;
}

.btn-outline-secondary:focus, .btn-outline-secondary:active{
  border: none!important;
}

.btn-outline-secondary{
  box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14), 0 1px 5px 0 rgba(0, 0, 0, 0.12);
  border-color: initial;
  border: none!important;

}

.btn-outline-secondary:hover {
  background: #e9ecef;
  color: ${({ theme }) => theme.backgroundColor} !important;;
}

.form-control:focus {
  color: #212529;
  background-color: #fff;
  border-color: #86b7fe;
  outline: 0;
  box-shadow: none;
}

.divFoto{
  background-image: url(${({ theme }) => theme.logo_img});
}

`;
