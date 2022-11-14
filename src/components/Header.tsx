import styled from 'styled-components';
import { sp_view } from '../utils/styleHelper';

import Link from 'next/link';

const SC = {
  Header: styled.div`
    display: flex;
    min-height: 96px;
    padding: 0 16px;
  `,
  Link: styled(Link)`
    display: inline-block;
    margin-top: 16px;
    font-size: 1.4rem;
    font-weight: 600;
    color: #2c3e50;
    &:hover {
      opacity: 0.7;
    }
    ${sp_view} {
      padding: 0 16px;
      font-size: 1.2rem;
    }
  `,
};

const Header = () => {
  return (
    <SC.Header>
      <SC.Link href="/">똑같은 삽질은 2번 하지 말자</SC.Link>
    </SC.Header>
  );
};

export default Header;
