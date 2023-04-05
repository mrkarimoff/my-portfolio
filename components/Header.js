import styles from "@/styles/Header.module.css";
import Image from "next/image";
import { CgMenuLeft } from "react-icons/cg";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { toggleDrawer } from "@/redux/reducers/general.reducer";
import { getOpenDrawer } from "@/redux/reducers/general.selector";

function Header() {
  const dispatch = useDispatch();
  const openDrawer = useSelector(getOpenDrawer());

  return (
    <div className={styles.header}>
      <Link
        style={{ visibility: openDrawer ? "hidden" : "visible" }}
        href={"/"}
        className={styles.headshot}
      >
        <Image
          placeholder="blur"
          blurDataURL={"/me.png"}
          src={"/me.png"}
          alt="headshot"
          width={70}
          height={70}
        />
        <h3 className={styles.name}>MIRFAYZ</h3>
      </Link>
      <button onClick={() => dispatch(toggleDrawer(!openDrawer))} className={styles.hamburger}>
        {openDrawer ? <span style={{ fontWeight: 600 }}>&#x2715;</span> : <CgMenuLeft size={24} />}
      </button>
    </div>
  );
}

export default Header;
