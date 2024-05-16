import classes from './inputContainer.module.css';
import { motion } from 'framer-motion';

export default function InputContainer ({label,bgColor,children}){
    return (
        <motion.div className={classes.container} style ={{backgroundColor:bgColor}}  whileHover={{ scale: [null, 1.03, 1.03] }}
        transition={{ duration: 0.5 }}>
            <label className={classes.label}>
                {label}
            </label>
            <div className={classes.content}>
                {children}
            </div>
        </motion.div>
    )
}