import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { FC, useContext, useEffect, useState } from 'react';
import Accordion from './Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Category } from '@/types/global';
import { CategoryContext } from '~/context/category-context';
import { fetchCategoryList } from '~/api';

type Props = {
  className?: string;
};

const SC = {
  Sidebar: styled('div')(({ theme }) => ({
    padding: '24px 8px',
    color: theme.palette.primary['800'],
    fontWeight: '400',
    fontSize: '16px',
  })),
  SidebarLinkList: styled('ul')(({ theme }) => ({})),
  SidebarLinkItem: styled('li')(({ theme }) => ({
    marginBottom: '8px',
  })),
  SidebarLinkItemTop: styled('div')(({ theme }) => ({
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '8px 0 8px 8px',
    lineHeight: '1',
    borderRadius: '3px',
    '&:hover': {
      color: theme.palette.primary['900'],
      background: theme.palette.primary['200'],
    },
    '&.active': {
      fontWeight: '600',
      color: theme.palette.primary['900'],
      background: theme.palette.primary['300'],
    },
  })),
  SidebarLinkItemBody: styled('ul')(({ theme }) => ({
    paddingTop: '4px',
  })),
  SidebarLinkItemBodyItem: styled('li')(({ theme }) => ({
    fontSize: '14px',
    transition: 'all 0.25s ease-in-out',
    padding: '8px 0 8px 16px',
    lineHeight: '1',
    borderRadius: '3px',
    cursor: 'pointer',
    '&.active': {
      fontWeight: '600',
      color: theme.palette.primary['900'],
      background: theme.palette.primary['300'],
    },
    '&:hover': {
      color: theme.palette.primary['900'],
      background: theme.palette.primary['200'],
    },
  })),
  ExpandMoreIcon: styled(ExpandMoreIcon)(({ theme }) => ({
    transition: 'transform 0.25s ease-in-out',
    fontSize: '18px',
    '&.opened': {
      transform: 'rotate(180deg)',
    },
  })),
};

const Sidebar: FC<Props> = ({ className }) => {
  const { categories, changeCategories } = useContext(CategoryContext);

  // TODO: Page Component로 옮기는게 맞는건지?
  useEffect(() => {
    const fetchInit = async () => {
      const categoryList = await fetchCategoryList();
      changeCategories(categoryList);
    };
    fetchInit();
  }, [changeCategories]);

  const [openIdList, setOpenIdList] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category>({
    id: undefined,
    name: '',
    parentId: undefined,
    children: [],
  });
  const router = useRouter();

  const handleClickLinkItem = (isOpenAccordion: boolean, category: Category) => {
    if (isOpenAccordion) {
      setOpenIdList((prev) => {
        return prev.includes(category.id)
          ? prev.filter((e) => e !== category.id)
          : [...prev, category.id];
      });
    } else {
      setSelectedCategory(category);
      router.push(`/category/${category.name}`);
    }
  };

  return (
    <SC.Sidebar className={className}>
      <SC.SidebarLinkList>
        {categories.map((category) => (
          <SC.SidebarLinkItem key={category.id}>
            <SC.SidebarLinkItemTop
              className={category.id === selectedCategory.id ? 'active' : ''}
              onClick={() => handleClickLinkItem(category.children?.length > 0, category)}
            >
              {category.name}
              {category.children?.length > 0 && (
                <SC.ExpandMoreIcon className={openIdList.includes(category.id) ? 'opened' : ''} />
              )}
            </SC.SidebarLinkItemTop>
            {category.children?.length > 0 && (
              <Accordion isOpen={openIdList.includes(category.id)}>
                <SC.SidebarLinkItemBody>
                  {category.children.map((childCategory) => (
                    <SC.SidebarLinkItemBodyItem
                      key={childCategory.id}
                      className={childCategory.id === selectedCategory.id ? 'active' : ''}
                      onClick={() => handleClickLinkItem(false, childCategory)}
                    >
                      {childCategory.name}
                    </SC.SidebarLinkItemBodyItem>
                  ))}
                </SC.SidebarLinkItemBody>
              </Accordion>
            )}
          </SC.SidebarLinkItem>
        ))}
      </SC.SidebarLinkList>
    </SC.Sidebar>
  );
};

export default Sidebar;
