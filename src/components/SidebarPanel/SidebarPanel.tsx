import { NavLink, Outlet } from "react-router-dom";
import styles from "./SidebarPanel.module.css";
import { useSidebar } from "../../contexts/SidebarContext";

const SidebarPanel = () => {
  const { handleCloseSidebar, isOpen } = useSidebar();

  return (
    <div className={styles.sidebarPanelContainer}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        onClick={handleCloseSidebar}
        className={isOpen ? styles.closeSidebar : styles.openSidebar}
        aria-expanded={isOpen}
      >
        <g>
          <path
            d="M5.5 5L11.7929 11.2929C12.1834 11.6834 12.1834 12.3166 11.7929 12.7071L5.5 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.5 5L19.7929 11.2929C20.1834 11.6834 20.1834 12.3166 19.7929 12.7071L13.5 19"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </svg>

      {isOpen ? (
        <>
          <nav className={styles.nav}>
            <ul>
              <li>
                <NavLink to="cities">Cities</NavLink>
              </li>
              <li>
                <NavLink to="countries">Countries</NavLink>
              </li>
            </ul>
          </nav>

          <div className={styles.sidebarContent}>
            <Outlet />
          </div>
        </>
      ) : null}
    </div>
  );
};

export default SidebarPanel;
