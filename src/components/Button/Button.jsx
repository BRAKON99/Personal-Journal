import styles from './Button.module.css';

function Button({ text, onClick, type }) {
	return (
		<button className={`${styles.button} ${styles.accent}`} type={type} onClick={onClick}>{text}</button>
	);
}

export default Button;
