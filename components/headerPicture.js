import { Image } from "@chakra-ui/react"

const HeaderPictureAbout = ({path}) => {

    return (
        <div className="container flex flex-row justify-center items-center px-8">
            <Image className="my-3" src={path} alt="header picture about page" maxW="150px" maxH="150px"/>
        </div>
    )
}

export default HeaderPictureAbout