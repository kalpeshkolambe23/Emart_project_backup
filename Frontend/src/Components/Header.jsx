import React, { useState } from 'react';
import { CButton, CCollapse, CContainer, CDropdown, CDropdownItem, CDropdownMenu, CDropdownToggle, CForm, CFormInput, CNavbar, CNavbarBrand, CNavbarNav, CNavbarToggler, CNavItem, CNavLink } from '@coreui/react';
import { FaShoppingCart, FaUserCircle } from 'react-icons/fa'; // You can install react-icons for cart and user icons

export const NavbarExample = () => {
  const [visible, setVisible] = useState(false);

  return (
    <CNavbar expand="lg" className="bg-light shadow-sm">
      <CContainer fluid>
        {/*  Logo */}
        <CNavbarBrand href="#">
          <img
            src="E:\AMIT NEW\Desktop\SMVITA\Emart-project\frontend\public\emart-seeklogo.png" // Logo
            alt="Emart logo"
            style={{ height: '50px' }}
          />
        </CNavbarBrand>

        <CNavbarToggler onClick={() => setVisible(!visible)} />
        <CCollapse className="navbar-collapse" visible={visible}>
          <CNavbarNav className="me-auto d-flex align-items-center">
            {/* Category Dropdown */}
            <CDropdown variant="nav-item" popper={false}>
              <CDropdownToggle color="link" className="text-dark">
                Categories
              </CDropdownToggle>
              <CDropdownMenu>
                <CDropdownItem href="#">Electronics</CDropdownItem>
                <CDropdownItem href="#">Fashion</CDropdownItem>
                <CDropdownItem href="#">Home Appliances</CDropdownItem>
                <CDropdownItem href="#">Books</CDropdownItem>
                <CDropdownItem href="#">Toys</CDropdownItem>
                <CDropdownItem href="#">More</CDropdownItem>
              </CDropdownMenu>
            </CDropdown>

            {/* Search Bar */}
            <CForm className="d-flex justify-content-center w-100 mx-4">
            <CForm className="d-flex justify-content-center w-100 mx-4">
  <CFormInput
    type="search"
    className="me-2"
    placeholder="Search for products, brands, and more"
    style={{
      minWidth: '1150px',   // Increased width size
      fontSize: '1.2rem',  // Increased font size
      borderRadius: '25px', // Rounded corners for a sleek look
    }}
  />
  <CButton
    type="submit"
    color="success"
    variant="outline"
    style={{
      fontSize: '1.2rem',
      paddingLeft: '25px',
      paddingRight: '25px',
      borderRadius: '25px', // Rounded button corners to match the search bar
    }}
  >
    Search
  </CButton>
</CForm>

</CForm>

          </CNavbarNav>

          {/* Right-side Buttons: Login, Cart */}
          <CNavbarNav>
          <CNavItem>
    <CButton
      color="link"
      className="text-dark d-flex align-items-center me-3" // Add spacing between buttons
    >
      <FaUserCircle size="1.5rem" />
      <span className="ms-2">Login</span>
    </CButton>
  </CNavItem>
  <CNavItem>
    <CButton
      color="link"
      className="text-dark d-flex align-items-center"
    >
      <FaShoppingCart size="1.5rem" />
      <span className="ms-2">Cart</span>
    </CButton>
  </CNavItem>
          </CNavbarNav>
        </CCollapse>
      </CContainer>
    </CNavbar>
  );
};
