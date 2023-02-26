import Logo from "./logo";
import Link from "next/link";
import {
    Container,
    Box,
    Stack,
    Heading,
    Flex,
    Menu,
    MenuItem,
    MenuList,
    MenuButton,
    IconButton,
    useColorModeValue
} from '@chakra-ui/react'
import { HumburgerIcon, MoonIcon } from '@chakra-ui/icons'
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
                {/* <Logo /> */}
                <a className="font-bold text-2xl mr-5" href="/">Andrea Fay</a>
                <div className="flex mt-2 text-base">
                    <a className="mr-2 hover:underline px-3" href="/">Works</a>
                    <a className="hover:underline px-3" href="/">Github</a>
                </div>
                <div className="ml-auto">
                    <ToggleDark />
                </div>
            </div>
        </Box>

    )
}

export default Navbar