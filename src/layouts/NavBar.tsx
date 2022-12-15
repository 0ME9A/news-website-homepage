import React from "react";
import useMediaQuery from "../hooks/useMediaQuery";

import { PortalWithState } from "react-portal";

import styles from "./NavBar.module.css";

const NavBar = () => {
  const matches = useMediaQuery("(min-width: 650px");

  // console.log(matches);

  return (
    <nav className={styles["nav-bar"]}>
      <svg
        width="65"
        height="40"
        xmlns="http://www.w3.org/2000/svg"
        className={styles["open-burger"]}
      >
        <path
          d="M23.016 39.2c.317 0 .574-.093.77-.28.196-.187.294-.457.294-.812v-1.82c0-.448.033-.84.098-1.176.065-.336.145-.663.238-.98l5.09-18.122 4.822 18.57c.112.384.193.682.243.895l.023.099c.047.215.07.453.07.714v1.82c0 .355.098.625.294.812.196.187.453.28.77.28h10.696c.299 0 .55-.093.756-.28.205-.187.308-.457.308-.812v-1.82c0-.373.023-.705.07-.994.047-.29.135-.677.266-1.162L54.04 7.224c.299-1.25.765-2.254 1.4-3.01.635-.756 1.363-1.311 2.184-1.666l.672-.308c.336-.168.574-.331.714-.49.14-.159.21-.369.21-.63 0-.336-.117-.607-.35-.812C58.637.103 58.287 0 57.82 0h-8.904c-.467 0-.817.103-1.05.308-.233.205-.35.476-.35.812 0 .261.06.471.182.63.121.159.313.303.574.434l.616.224c1.12.41 1.871.999 2.254 1.764s.453 1.661.21 2.688l-5.535 23.486-6.477-25.81c-.133-.58-.17-1.018-.11-1.31l.026-.104c.093-.29.317-.49.672-.602l1.232-.336c.299-.112.518-.257.658-.434a.986.986 0 0 0 .21-.63c0-.355-.112-.63-.336-.826C41.468.098 41.122 0 40.656 0H24.78c-.448 0-.789.098-1.022.294-.233.196-.35.471-.35.826 0 .224.06.415.182.574.121.159.322.294.602.406l1.176.42c.261.093.462.243.602.448.14.205.294.607.462 1.204l1.751 6.742-5.553 19.475L16.128 4.48c-.147-.49-.194-.898-.14-1.223l.028-.135c.093-.345.327-.574.7-.686l1.456-.336c.504-.168.756-.504.756-1.008 0-.336-.112-.602-.336-.798C18.368.098 18.022 0 17.556 0H1.344C.896 0 .56.098.336.294.112.49 0 .756 0 1.092c0 .224.056.434.168.63.112.196.29.35.532.462l1.232.392c.355.13.625.308.812.532.187.224.345.579.476 1.064l7.84 30.408c.112.43.191.751.238.966.047.215.07.462.07.742v1.82c0 .355.103.625.308.812.205.187.467.28.784.28h10.556Zm34.804.7c1.195 0 2.263-.29 3.206-.868a6.338 6.338 0 0 0 2.24-2.338c.55-.98.826-2.04.826-3.178 0-1.157-.275-2.212-.826-3.164a6.325 6.325 0 0 0-2.24-2.282c-.943-.57-2.011-.854-3.206-.854-1.157 0-2.207.285-3.15.854a6.325 6.325 0 0 0-2.24 2.282c-.55.952-.826 2.007-.826 3.164 0 1.139.275 2.198.826 3.178.55.98 1.297 1.76 2.24 2.338.943.579 1.993.868 3.15.868Z"
          fill="#00001A"
        />
      </svg>
      {matches && (
        <ul className={styles["nav-links"]}>
          <li>
            <a href="#home" target={"_top"}>Home</a>
          </li>
          <li>
            <a href="#new" target={"_top"}>New</a>
          </li>
          <li>
            <a href="#popular" target={"_top"}>Popular</a>
          </li>
          <li>
            <a href="#trending" target={"_top"}>Trending</a>
          </li>
          <li>
            <a href="#category" target={"_top"}>Category</a>
          </li>
        </ul>
      )}

      {!matches && (
        <PortalWithState closeOnOutsideClick closeOnEsc>
          {({ openPortal, closePortal, isOpen, portal }) => (
            <React.Fragment>
              <svg width="40" height="17" onClick={openPortal} xmlns="http://www.w3.org/2000/svg">
                <g fill="#00001A" fill-rule="evenodd">
                  <path d="M0 0h40v3H0zM0 7h40v3H0zM0 14h40v3H0z" />
                  <path d="M0 0h40v3H0z" />
                </g>
              </svg>
              {portal(
                <div className={styles["dropdown-backdrop"]}>
                  <div className={styles.sidebar}>
                    <svg
                      width="32"
                      height="31"
                      xmlns="http://www.w3.org/2000/svg"
                      className={styles["close-burger"]}
                      onClick={closePortal}
                    >
                      <g fill="#00001A" fill-rule="evenodd">
                        <path d="m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z" />
                        <path d="M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z" />
                      </g>
                    </svg>

                    <ul className={styles["nav-links--side"]}>
                      <li>
                        <a href="#home" target={"_top"}>Home</a>
                      </li>
                      <li>
                        <a href="#new" target={"_top"}>New</a>
                      </li>
                      <li>
                        <a href="#popular" target={"_top"}>Popular</a>
                      </li>
                      <li>
                        <a href="#trending" target={"_top"}>Trending</a>
                      </li>
                      <li>
                        <a href="#category" target={"_top"}>Category</a>
                      </li>
                    </ul>
                  </div>
                </div>
              )}
            </React.Fragment>
          )}
        </PortalWithState>
      )}
    </nav>
  );
};

export default NavBar;
