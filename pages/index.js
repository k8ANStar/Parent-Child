import ParentToChild from "./ParentOne";
import ChildToParent from "./ParentTwo";
import styles from "@/styles/Home.module.css";

export default function Home() {
	return (
		<>
			<main className={`${styles.main} `}>
				<ParentToChild />
        <ChildToParent/>
			</main>
		</>
	);
}
