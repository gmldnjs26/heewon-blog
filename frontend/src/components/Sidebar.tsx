import { styled } from '@mui/material/styles';
import { useRouter } from 'next/router';
import { FC, useState } from 'react';
import { categories } from '../utils/dummy';
import Accordion from './Accordion';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

type Props = {
  className?: string;
};

const SC = {
  Sidebar: styled('div')(({ theme }) => ({
    padding: '24px 8px',
    color: theme.palette.primary['800'],
    fontWeight: '400',
    fontSize: '14px',
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
    paddingLeft: '8px',
    borderRadius: '3px',
    height: '24px',
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
    paddingTop: '8px',
  })),
  SidebarLinkItemBodyItem: styled('li')(({ theme }) => ({
    transition: 'all 0.25s ease-in-out',
    padding: '2px 0 2px 16px',
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
type Category = {
  id: number;
  parentId: number; // 0는 자기가 제일 상위 카테고리일때
  name: string;
  children?: Category[];
};

const Sidebar: FC<Props> = ({ className }) => {
  const [openIdList, setOpenIdList] = useState<number[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<Category>({
    id: undefined,
    name: '',
    parentId: undefined,
    children: [],
  });
  const router = useRouter();

  const linkItemClickHanlder = (isOpenAccordion: boolean, category: Category) => {
    if (isOpenAccordion) {
      setOpenIdList((prev) => {
        return prev.includes(category.id)
          ? prev.filter((e) => e !== category.id)
          : [...prev, category.id];
      });
    } else {
      setSelectedCategory(category);
      router.push(`/?category=${category.id}`);
    }
  };

  return (
    <SC.Sidebar className={className}>
      <SC.SidebarLinkList>
        {categories.map((category) => (
          <SC.SidebarLinkItem key={category.id}>
            <SC.SidebarLinkItemTop
              className={category.id === selectedCategory.id ? 'active' : ''}
              onClick={linkItemClickHanlder.bind(this, category.children?.length > 0, category)}
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
                      onClick={linkItemClickHanlder.bind(this, false, childCategory)}
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
