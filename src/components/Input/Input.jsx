import { forwardRef } from 'react';
import styles from './Input.module.css';
import cn from 'classnames';

const Input = forwardRef(function Input({ classNames, isValid = true, appearence, ...props }, ref) {
	return (
		<input {...props} ref={ref} className={cn(classNames, styles['input'], {
			[styles['invalid']]: !isValid,
			[styles['input-title']]: appearence === 'title'
		})} />
	);
});

export default Input;
