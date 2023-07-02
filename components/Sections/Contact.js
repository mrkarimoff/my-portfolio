import Title from "@/components/Title";
import styles from "@/styles/Contact.module.css";
import { emoji } from "@/utils/motions";
import axios from "axios";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
import { AiOutlineSend } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Contact() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = { name, email, message };
      await axios.post("https://www.mirfayz.uz/api/email", data);
      toast.success("Message sent successfully!", {
        position: "top-right",
        autoClose: 2500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      setName("");
      setEmail("");
      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <Title>Contact</Title>

      <ToastContainer />
      <div className={styles.contactWrapper}>
        <div className={styles.content}>
          <h2 className={styles.hello}>
            <span className={styles.hiText}>
              Say Hi!{" "}
              <motion.span
                className={styles.emoji}
                initial={"hidden"}
                whileInView={"visible"}
                variants={emoji}
              >
                👋
              </motion.span>
            </span>
          </h2>
          <p className={styles.text}>
            Reach out and let&apos;s bring your ideas to life! <br />I am available for freelance
            work.
          </p>
          <div className={styles.myEmail}>
            <div className={styles.iconWrapper}>
              <MdEmail className={styles.emailIcon} />
            </div>
            <button
              onClick={() => router.push(`mailto:mirfayzkarimoff@gmail.com`)}
              className={styles.email}
            >
              mirfayzkarimoff@gmail.com
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit} className={styles.form}>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            className={styles.inp}
            type="text"
            placeholder="Your Name"
            required
          />
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.inp}
            type="email"
            placeholder="Your Email Or Telegram"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className={styles.textarea}
            cols="30"
            rows="10"
            placeholder="Your Message"
            required
          />
          <button className={styles.sendBtn} type="submit">
            <span className={styles.sendText}>Send</span>
            <AiOutlineSend className={styles.sendIcon} />
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact;
