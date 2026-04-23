import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  useLocation,
} from "react-router-dom";
import { FaWhatsapp } from "react-icons/fa";
import withRouter from "../hooks/withRouter";
import AppRoutes from "./routes";
import Headermain from "../header";
import AnimatedCursor  from "../hooks/AnimatedCursor";
import { introdata } from "../content_option";
import "./App.css";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return props.children;
}
const ScrollToTop = withRouter(_ScrollToTop);

export default function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 255 ,255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div>
      <ScrollToTop>
        <Headermain />
        <AppRoutes />
        <a
          href={introdata.genvision_url}
          target="_blank"
          rel="noopener noreferrer"
          className="gv_float_btn"
          aria-label="Visit GenVision AI"
          title="Visit GenVision AI"
        >
          GV
        </a>
        <a
          href={introdata.whatsapp_url}
          target="_blank"
          rel="noopener noreferrer"
          className="wa_float_btn"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
        >
          <FaWhatsapp aria-hidden="true" />
        </a>
      </ScrollToTop>
    </Router>
  );
}
