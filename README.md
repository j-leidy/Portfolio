# Portfolio [Link](https://johnleidyii.netlify.app/)

<details>
<summary>Description</summary>
This portfolio was a complete overhaul of my previous portfolio. The previous portfolio implemented poor design choices and was not easily expandable. I decided to recreate the portfolio in TypeScript alongside the redesign process. This lead to a portfolio that is easy to expand with a strong fundamental base. 
</details>

<details>
<summary>The CardComponent</summary>
All portfolio works are encapsulated with a card component. The goal with this design was to make adding a new piece to my portfolio simple. Every portfolio piece generally has the same elements: styling, information or image and skills. This component was created to allow me to use the same wrapper but with a different React element. Meaning I can have the same animations and interactions, while giving the wrapper any React element I want to be displayed. This dramatically reduces the amount of code needed to create this portfolio as well as expand on it.

<details>
<summary>Example of utilizing the CardComponent</summary>

### Using the CardComponent to show an array of experiences

```tsx
export const Experiences = () => {
    return (
        <PageSectionContainer id="Experiences">
            <SectionTitle
                titleText="Experience"
                useThemeColors
                includeSubText
                subText="Click or tap a card for more information!"
            />
            {Object.keys(ExperiencesData).map((key, idx) => {
                const experienceObj =
                    ExperiencesData[key as keyof typeof ExperiencesData];
                return (
                    <CardComponent
                        showCardTitle={false}
                        ComponentToWrap={DegreeExperienceInternal}
                        internalComponentProps={{
                            name: key,
                            title: experienceObj.jobTitle,
                            dates: experienceObj.dates,
                            bodyText: experienceObj.bodyText,
                            logo: experienceObj.logo,
                        }}
                        cardSkillsArr={experienceObj.skills}
                        widthPercent={70}
                        internalCardPadding={0}
                        key={idx}
                        useWidthPercent
                        paddInternalCard
                    />
                );
            })}
        </PageSectionContainer>
    );
};
```

### The DegreeExperienceInteral component

```tsx
export const DegreeExperienceInternal = ({
    name = DefaultExperienceProps.companyName,
    title = DefaultExperienceProps.jobTitle,
    dates = DefaultExperienceProps.dates,
    bodyText = DefaultExperienceProps.bodyText,
    logo = DefaultExperienceProps.logo,
}: ExperienceInternalProps) => {
    const [showMore, setShowMore] = useState<boolean>(false);
    return (
        <ExperienceContentContainer onClick={() => setShowMore(!showMore)}>
            <ExperienceHeader>
                <ExperienceTitleNameLogoContainer>
                    <ExperienceLogo src={logo} />
                    <ExperienceNameAndTitle>
                        <ExperienceName>{name}</ExperienceName>
                        <ExperienceTitle>{title}</ExperienceTitle>
                    </ExperienceNameAndTitle>
                </ExperienceTitleNameLogoContainer>
                <ExperienceDate>{dates}</ExperienceDate>
            </ExperienceHeader>
            <ExperienceBody $showBody={showMore}>
                {bodyText.map((item, idx) => {
                    return (
                        <ExperienceBodyItem key={idx}>
                            ◦ {item}
                        </ExperienceBodyItem>
                    );
                })}
            </ExperienceBody>
        </ExperienceContentContainer>
    );
};
```

</details>

### [Implementation](https://github.com/j-leidy/NewPortfolio/blob/main/src/Components/CardWrapperComponent/CardComponent.tsx)

</details>

[Live Preview](https://johnleidyii.netlify.app/)
