import { motion } from 'framer-motion'

const { default: Head } = require("next/head")
const { GridItemStyle } = require("../grid-item")

const variants = {
    hidden: { opacity: 0, x: 0, y: 20},
    enter: { opacity: 1, x: 0, y: 0},
    exit: { opacity: 0, x: 0, y: 20},
}

const Layout = ({children, title}) => (
    <motion.article initial="hidden" animate="enter" exit="exit" variants={variants}
     transition={{duration: 0.4, type:'easeInOut'}} style={{postion: 'relative'}}>
        <>
        {title && ( <Head>
            <title>{title} - Andrea Fay</title>
        </Head>)}
        {children}
        <GridItemStyle />
        </>
    </motion.article>
)

export default Layout