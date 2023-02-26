import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { IconButton, useColorMode, useColorModeValue } from "@chakra-ui/react"

const ToggleDark = () => {

    const { toggleColorMode } = useColorMode()

    return (
        <div>
            <IconButton id="moonIcon" aria-label="Toggle sun" 
                        colorScheme={useColorModeValue('purple', 'orange')} 
                        icon={useColorModeValue(<MoonIcon />, <SunIcon/>)}
                        onClick={toggleColorMode} >
            </IconButton>
        </div>
    )
}

export default ToggleDark