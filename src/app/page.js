"use client";
import { Typography } from "antd";
import styles from "./page.module.css";

const { Text } = Typography;

export default function Home() {
  return (
    <div className={styles.home_container}>
      <Text keyboard>Welcome to GMart Admin Portal</Text>
    </div>
  );
}
