import { styled, css } from "styled-components";

const CardContainer = styled.div``;

const CardHeader = styled.div``;

const CardTitle = styled.div``;

const CardComponentFCContainer = styled.div``;

const DefaultCardProps = {};

interface CardComponentProps<T> {
    widthPercent?: number;
    showCardTitle?: boolean;
    cardTitleText?: string;
    cardTitleSize?: number;
    cardSkillsArr?: string[];
    componentToWrap: React.FC<T>;
    wrapInternalWithLink?: boolean;
    internalLink?: string;
}

export const CardComponent = () => {
    return (
        <CardContainer>
            <CardHeader></CardHeader>
        </CardContainer>
    );
};
