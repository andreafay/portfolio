import Logo from "./logo";
import {
    Box,
    useColorModeValue
} from '@chakra-ui/react'
import ToggleDark from "./toggleDark";


const Navbar = (props) => {

    return (

        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue('#ffffff40', '#20202380')}
            css={{ backdropFilter: 'blur(10px)' }}
            zIndex={2}
            {...props}
        >
            <div className="container w-full h-14 max-w-screen-md mx-auto px-5 flex items-center relative">
                <Logo />
                <div className="flex mt-2 text-base">
                    <a className="mr-2 hover:underline px-3" href="/works">Works</a>
                    <a className="hover:underline px-3" href="https://github.com/andreafay" target="_blank" >Github</a>
                </div>
                <div className="ml-auto">
                    <ToggleDark />
                </div>
            </div>
        </Box>

    )
}

export default Navbar