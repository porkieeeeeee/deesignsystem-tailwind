import tw, { css, styled } from "twin.macro";

export enum EButtonColorType {
    GRAY = "gray",
    WHITE = "white",
    PRIMARY = "primary",
}

interface IStyledButtonProps {
    color: EButtonColorType;
    icon?: string;
    isDisabled?: boolean;
    label?: string;
}

interface IButtonProps extends IStyledButtonProps {
    onClick?: () => void;
}

const Button = ({ color, icon = "", isDisabled = false, label = "", onClick }: IButtonProps) => {
    return (
        <Container color={color} icon={icon} isDisabled={isDisabled} label={label} onClick={onClick}>
            {label}
        </Container>
    );
};

const Container = styled.button<IStyledButtonProps>`
    ${tw`h-[42px] rounded-[7px] leading-[theme('lineHeight.tw26')] text-[theme(fontSize.tw18)] tracking-[-0.2px]`}
    ${({ label }) => (label ? tw`py-[8px] px-[12px]` : tw`p-[8px]`)};

    ${({ color }) => {
        switch (color) {
            case EButtonColorType.GRAY:
                return css`
                    ${tw`bg-gray800 text-grayWhite hover:bg-gray900`}
                `;
            case EButtonColorType.WHITE:
                return css`
                    ${tw`border border-solid border-gray400 bg-grayWhite text-grayBlack hover:bg-gray50`}
                `;
            case EButtonColorType.PRIMARY:
                return css`
                    ${tw`bg-secondary300 text-grayWhite hover:bg-secondary400`}
                `;
        }
    }}

    ${({ icon, label }) =>
        icon &&
        css`
            ::before {
                content: "";
                display: inline-block;
                vertical-align: -6px;
                width: 26px;
                height: 26px;
                margin-right: ${label ? "5px" : "0"};
                background: url(${icon}) center / contain no-repeat;
            }
        `}

    ${({ isDisabled }) =>
        isDisabled &&
        css`
            ${tw`opacity-40 pointer-events-none`}
        `}
`;

export default Button;
