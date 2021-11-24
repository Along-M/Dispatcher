import React from "react";

// import Button from "../Button/Button";
import {
  Footer,
  Modalcontainer,
  ModalDiv,
  ModalContant,
  ModalH2header,
  ModalHeader,
  P,
  Card,
  Button,
} from "./style";
import { ButtonTypes } from "../../../types/types";

export interface ErrorModalProps {
  message?: string;
  children?: React.ReactChild | React.ReactChild[];
  title: string;
  closeModal: () => void;
}

const ErrorModal = ({
  closeModal,
  title,
  children,
  message,
}: ErrorModalProps) => {
  return (
    <Modalcontainer onClick={closeModal}>
      <ModalDiv />
      <Card>
        <ModalHeader>
          <ModalH2header>{title}</ModalH2header>
        </ModalHeader>
        <ModalContant>
          <P>{message}</P>
        </ModalContant>
        <Footer>
          <Button onClick={closeModal}>Close</Button>
          {/* <Button
            withIcon={false}
            variant={ButtonTypes.TEXTBTN}
            onClick={closeModal}
          >
            Close
          </Button> */}
        </Footer>
      </Card>
    </Modalcontainer>
  );
};

export default ErrorModal;
