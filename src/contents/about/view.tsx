import Image from "next/image";

import { Quote } from "@/common/quote";

import styles from "./styles.module.scss";

export const AboutPage = () => (
  <div className={styles.pageWrapper}>
    <Quote
      text="Insert deep meaningful quote here"
      author="A famous person"
      className={styles.quote}
    />
    <div className={styles.wrapper}>
      <section className={`${styles.text} p`}>
        <p>
          <b>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</b> In
          tempus leo neque, quis posuere ligula semper a. Phasellus risus nisl,
          sollicitudin ac nisl tempor, tincidunt porta dui. Morbi eu malesuada
          eros. Nulla facilisi. Integer in mi sed sapien fermentum tempor ut ac
          urna. Maecenas dictum iaculis scelerisque. Curabitur dictum tincidunt
          odio consequat varius.
        </p>
        <p>
          Maecenas a sodales quam. Praesent condimentum varius condimentum.
          Vivamus lobortis erat nec risus pellentesque, eu fringilla ligula
          eleifend. Vivamus at consectetur sapien.
        </p>
        <p>
          Vestibulum dapibus, ligula vel feugiat convallis, urna sapien finibus
          nisi, blandit placerat mauris ante in odio. Donec porttitor lacinia
          dictum. Duis viverra vel nibh ut tristique. Donec vel eros sit amet
          libero auctor vehicula nec ac dolor. Proin congue erat non ipsum
          eleifend, vel tincidunt nisl tempus. Integer blandit tellus ac elit
          laoreet fermentum. Sed id tempor mi.
        </p>
        <p>
          Donec felis nunc, molestie vel vulputate nec, ultrices vel libero.
          Pellentesque tristique, ex nec sodales dapibus, ligula diam accumsan
          est, ac ultricies quam nisl nec ipsum. Sed sit amet condimentum
          turpis. Nulla facilisi.
        </p>
        <p>
          Integer vel elit aliquet sem mollis maximus. Etiam non sagittis nulla.
          Integer sagittis mi id fermentum lobortis. Sed sit amet massa porta,
          mattis dui congue, sollicitudin lorem. Mauris a interdum tortor.
          Curabitur suscipit venenatis mauris, vitae sagittis dolor pharetra id.
          Nulla tincidunt interdum interdum. Vestibulum efficitur neque et eros
          sodales posuere.
        </p>
        <p>
          Proin arcu turpis, vestibulum et nulla non, interdum ultricies augue.
          Sed nisl ex, consectetur quis ultricies in, fermentum id nulla.
          Suspendisse ac libero sed tortor eleifend cursus non in arcu. Ut id
          commodo tellus. Vestibulum ullamcorper sapien non mollis consectetur.
        </p>
      </section>
      <section className={styles.image}>
        <Image src="/about.jpg" alt="Our store" fill priority />
      </section>
    </div>
  </div>
);
