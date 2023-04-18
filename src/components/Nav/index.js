import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import BootstrapNavbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { Transition } from "@headlessui/react";

const Navbar = () => {
  const [scrollingUp, setScrollingUp] = useState(true);
  const [pastScrollPoint, setPastScrollPoint] = useState(false);
  const [isShowing, setIsShowing] = useState(false);

  setTimeout(() => {
    setIsShowing(true);
  }, 500);
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      if (scrollTop < 200) {
        setPastScrollPoint(false);
      } else {
        setPastScrollPoint(true);
      }
      if (scrollTop < lastScrollTop) {
        setScrollingUp(true);
      } else {
        setTimeout(() => {
          setScrollingUp(false);
        }, 700);
      }
      // setScrollingUp(scrollTop < lastScrollTop);

      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    };
    let lastScrollTop = 0;
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={`navbar-bg ${
        pastScrollPoint ? (scrollingUp ? "up" : "down") : ""
      }`}
    >
      <BootstrapNavbar
        collapseOnSelect
        expand="md"
        style={{ fontSize: "13px" }}
        className="p-0 mt-3"
      >
        <Container>
          <Transition
            show={isShowing}
            enter="transform transition duration-[400ms]"
            enterFrom="opacity-0 rotate-[-120deg] scale-50"
            enterTo="opacity-100 rotate-0 scale-100"
            leave="transform duration-200 transition ease-in-out"
            leaveFrom="opacity-100 rotate-0 scale-100 "
            leaveTo="opacity-0 scale-95 "
          >
            <span className="light-color nintendo-font f-20 m-3">saul.</span>
          </Transition>
          <BootstrapNavbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="border-0 shadow-none"
          >
            <HiOutlineMenuAlt3
              className="light-color"
              style={{ fontSize: 42 }}
            />
          </BootstrapNavbar.Toggle>
          <BootstrapNavbar.Offcanvas
            placement="end"
            style={{
              color: "rgb(206, 215, 243)",
              backgroundColor: "rgb(20, 35, 62)",
            }}
          >
            <Offcanvas.Header
              closeButton
              className="justify-content-end"
            ></Offcanvas.Header>
            <Offcanvas.Body>
              <Nav
                className="justify-content-end flex-grow-1 p-3 gap-5 align-items-center align-self-center"
                style={{ fontFamily: "Courier" }}
              >
                <Nav.Link href="#about" className="bright-color" active={false}>
                  about
                </Nav.Link>
                <Nav.Link
                  href="#experience"
                  className="bright-color"
                  active={false}
                >
                  experience
                </Nav.Link>
                <Nav.Link
                  href="#projects"
                  className="bright-color"
                  active={false}
                >
                  projects
                </Nav.Link>
                <Nav.Link
                  href="#contact"
                  className="bright-color ml-5"
                  active={false}
                >
                  contact
                </Nav.Link>
              </Nav>
            </Offcanvas.Body>
          </BootstrapNavbar.Offcanvas>
        </Container>{" "}
      </BootstrapNavbar>
    </div>
  );
};

export default Navbar;
