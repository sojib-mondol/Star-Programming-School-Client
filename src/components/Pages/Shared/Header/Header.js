import React from 'react';
import { useContext } from 'react';
import { Container, Image, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../contexts/AuthProvider/AuthProvider';
import Button from 'react-bootstrap/Button';
import toast from 'react-hot-toast';
import { FaUser } from 'react-icons/fa';

const Header = () => {

    const {user, logOut} = useContext(AuthContext); 

    // sign out
    const handleLogOut = () => {
      logOut(() => {
        toast.success('Successfully logged out');
      })
      .then()
      .catch(error => console.error(error));
    }

    return (
        <div>
    <Navbar className='mb-4' collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand >
            <Link to='/'><img style={{height:'35px'}} className="me-2 rounded-5" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRF4Gh0FiwQepiJqTtYfE5NtojkXvPVLITywA&usqp=CAU" alt="" /></Link>
            <Link to='/'>Star Programming School</Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Courses</Nav.Link>
            <Nav.Link href="#pricing">FAQ</Nav.Link>
            <Nav.Link href="#pricing">Blog</Nav.Link>
            <Nav.Link href="#pricing">toggle theme (dark/ light)</Nav.Link>
            
          </Nav>
          <Nav>
            <Nav.Link href="#deets">
              {
                user?.uid ? 
                <>
                  <span>{user?.displayName}</span>
                  <Link to="/profile">
                    {user?.photoURL?
                      <Image className=' ms-2' style={{height: '30px'}} roundedCircle src={user.photoURL}></Image>  
                      :
                      <FaUser></FaUser>
                    }
                  </Link>
                  <Button className='ms-4' variant="outline-primary" onClick={handleLogOut}>Log Out</Button>
                </>
                : 
                <>
                  <Link to='/login'><Button variant="outline-primary">LOGIN</Button></Link>

                {/* //   <Link to='/register'>Register</Link> */}
                </>
              }
            </Nav.Link>

            {/* for the user profile  */}

            
          </Nav>
          <div className='d-lg-none'>
            {/* <LeftSideNav></LeftSideNav> */}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>

        </div>
    );
};

export default Header;