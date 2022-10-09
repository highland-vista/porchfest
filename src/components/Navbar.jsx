import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Breadcrumb
      bg="red.300"
      p="20px"
      spacing="8px"
      separator={<ChevronRightIcon color="black" />}
    >
      <BreadcrumbItem>
        <BreadcrumbLink
          as={NavLink}
          className={(navData) => (navData.isActive ? 'active' : '')}
          to="/"
        >
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink
          as={NavLink}
          className={(navData) => (navData.isActive ? 'active' : '')}
          to="/stages/stage1"
        >
          Stage 1
        </BreadcrumbLink>
      </BreadcrumbItem>
      <BreadcrumbItem>
        <BreadcrumbLink
          as={NavLink}
          className={(navData) => (navData.isActive ? 'active' : '')}
          to="/stages/stage2"
        >
          Stage 2
        </BreadcrumbLink>
      </BreadcrumbItem>
    </Breadcrumb>
  );
};

export default Navbar;
