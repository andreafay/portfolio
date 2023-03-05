import Logo from "./logo";
import {
    Box,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    useColorModeValue
} from '@chakra-ui/react'
import ToggleDark from "./toggleDark";
import { HamburgerIcon } from "@chakra-ui/icons";
import Link from "next/link";


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
                <div className="flex mt-2 text-base invisible sm:visible">
                    <a className="mr-2 hover:underline px-3" href="/works">Works</a>
                    <a className="hover:underline px-3" href="https://github.com/andreafay" target="_blank" >Github</a>
                </div>
                <div className="flex flex-row gap-2 ml-auto">
                    <ToggleDark />
                    <div className="sm:invisible">
                    <Menu isLazy id="navbar-menu">
                        <MenuButton
                            as={IconButton}
                            icon={<HamburgerIcon />}
                            variant="outline"
                            aria-label="Options"
                        />
                        <MenuList>
                            <MenuItem as={Link} href="/">
                                About
                            </MenuItem>
                            <MenuItem as={Link} href="/works">
                                Works
                            </MenuItem>
                            <MenuItem as={Link} href="https://github.com/andreafay/portfolio">
                                View Source
                            </MenuItem>
                        </MenuList>
                    </Menu>
                    </div>
                </div>
            </div>
        </Box>

    )
}

export default Navbar