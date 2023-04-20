import styles from "@/styles/Tabs.module.css";
import { tabContainer, tabContent } from "@/utils/motions";
import { backendIcons, frontendIcons } from "@/utils/skill_icons";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function Tab() {
  const [selectedTab, setSelectedTab] = useState(0);

  const tabs = [
    { content: frontendIcons, label: "Frontend" },
    { content: backendIcons, label: "Backend" },
  ];

  return (
    <motion.div
      initial={"hidden"}
      whileInView={"visible"}
      viewport={{ once: true }}
      variants={tabContainer}
    >
      <div>
        <ul className={styles.ul}>
          {tabs.map((item, index) => (
            <li
              key={item.label}
              className={index === selectedTab ? styles.selectedTab : styles.tab}
              onClick={() => setSelectedTab(index)}
            >
              {item.label}
              {index === selectedTab && (
                <motion.div className={styles.underline} layoutId="underline" />
              )}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <AnimatePresence mode="wait">
          <motion.div
            className={styles.content}
            key={selectedTab ? selectedTab.label : "empty"}
            initial={"hidden"}
            animate={"visible"}
            exit={"exit"}
            variants={tabContent}
          >
            {tabs[selectedTab].content.map((item, index) => (
              <motion.div whileHover={{ scale: 1.1 }} key={index}>
                {item}
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.div>
  );
}
