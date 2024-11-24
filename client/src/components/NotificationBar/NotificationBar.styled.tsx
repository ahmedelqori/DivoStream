import styled from "styled-components";

export const Notificationbar = styled.div`
  width: 100%;
  display: flex;
  padding: 8px 0;
  max-height:40px;
  position: relative;
  justify-content: center;
  background-color: #10162f;
`;

export const NotificationContent = styled.p`
  color: white;
  font-weight: 300;
  text-align: center;
  overflow: hidden;
`;

export const CloseNotification = styled.span`
  right: 10px;
  color: white;
  cursor: pointer;
  font-weight: 600;
  position: absolute;
`;
