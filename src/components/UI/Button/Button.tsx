import ArrowRightIcon from "../../../assets/icons/Arrow-Right.svg";
import { ButtonTypes } from "../../../types/types";
import { StyledBtn, ArrowIcon } from "./style";

export interface ButtonProps {
  variant: ButtonTypes;
  children: React.ReactChild | React.ReactChild[];
  withIcon: boolean;
  onClick?: () => void;
}

const Button = ({ variant, onClick, withIcon, children }: ButtonProps) => {
  const btnVarient = variant ? variant : "primary-blue-btn";
  return (
    <StyledBtn className={btnVarient} onClick={onClick}>
      {children}
      {withIcon ? (
        <ArrowIcon src={ArrowRightIcon} className="icon-primary-btn" />
      ) : null}
    </StyledBtn>
  );
};

export default Button;
