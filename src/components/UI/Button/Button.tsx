import styled from './Button.styled'

interface ButtonProps {
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children?: React.ReactNode;
    variant?: "primary" | "secondary"; 
    disabled?: boolean; 
};

export default function Button({ onClick, disabled, children, variant = 'primary'}: ButtonProps) {
    return (
        <styled.Button
            $variant={variant}
            $disabled={disabled}
            onClick={onClick}>
            {children}
        </styled.Button>
    )
}
