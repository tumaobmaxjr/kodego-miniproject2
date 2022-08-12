import { LinkContainer } from "react-router-bootstrap";
import { Nav } from "react-bootstrap";

const LinkLayout = () => {
    return (
        <>
            <LinkContainer to="/">
                <Nav.Link>
                    Table
                </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/elementinfo">
                <Nav.Link>
                    List with properties
                </Nav.Link>
            </LinkContainer>
            <LinkContainer to="/scienceblog">
                <Nav.Link>
                    Blogs
                </Nav.Link>
            </LinkContainer>
        </>
    );
}

export default LinkLayout;