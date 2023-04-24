import styles from "./styles.module.scss";

type Props = {
  children: React.ReactNode;
  onClose: () => void;
};

export const Modal = ({ children, onClose }: Props) => (
  <div
    className={styles.bgOverlay}
    onClick={(e) => {
      e.stopPropagation();
      if ((e.target as HTMLElement).className === styles.bgOverlay) {
        onClose();
      }
    }}
  >
    <article className={styles.wrapper}>{children}</article>
  </div>
);
