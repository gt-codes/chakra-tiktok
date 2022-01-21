import { Center } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
    children: ReactNode;
};

export default function Layout({ children }: Props): JSX.Element {
	return (
        <Center w='100%' h='100%' bg='red'>
            {children}
        </Center>
    )
}
