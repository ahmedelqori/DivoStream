import styled from "styled-components";

export const Notificationbar = styled.div`
  width: 100%;
  display: flex;
  position: fixed;
  justify-content: center;
  background-color: #1c325b;
`;

export const NotificationContent = styled.p`
  color: white;
  font-weight: 300;
  text-align: center;
`;

export const CloseNotification = styled.span`
  right: 5px;
  color: white;
  cursor: pointer;
  font-weight: 600;
  position: absolute;
`;
