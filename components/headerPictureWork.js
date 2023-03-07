import { Image } from "@chakra-ui/react"

const HeaderPictureWork = ({path}) => {

    return (
        <div className="container px-8">
            <Image className="my-3" src={path} alt="header picture work page" maxW="300px" maxH="150px"/>
        </div>
    )
}

export default HeaderPictureWork