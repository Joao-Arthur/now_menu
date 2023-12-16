import { useAppDispatch, useAppSelector } from "../../../../hooks";
import { PrimaryText } from "@/components/Layout";
import { menuInfoActions } from "@/domains/menuInfo";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    overflow-x: auto;
    padding: 15px 0;
    -ms-overflow-style: none;
    scrollbar-width: none;
    :-webkit-scrollbar {
        display: none;
    }
`;

export const Content = styled.div`
    display: flex;
    flex: 1;
`;

export const Item = styled.span`
    cursor: pointer;
    padding: 0 10px;
    white-space: nowrap;
`;

export const SelectedItem = styled.span`
    padding: 0 10px;
    white-space: nowrap;
`;


export function CategoryList() {
    const dispatch = useAppDispatch();
    const categories = useAppSelector(({ menuInfo }) =>
        menuInfo.categories
    );
    const selectedCategory = useAppSelector(
        ({ menuInfo }) => menuInfo.selectedCategory,
    );

    function clickItem(categoryName: string) {
        dispatch(menuInfoActions.setSelectedCategory(categoryName));
    }

    if (!categories.length) return <Container />;

    return (
        <Container>
            <Content>
                {categories.map((category) =>
                    selectedCategory === category.name
                        ? (
                            <SelectedItem key={category.name}>
                                <PrimaryText>
                                    {category.name}
                                </PrimaryText>
                            </SelectedItem>
                        )
                        : (
                            <Item
                                key={category.name}
                                onClick={() =>
                                    clickItem(category.name)}
                            >
                                {category.name}
                            </Item>
                        )
                )}
            </Content>
        </Container>
    );
}
