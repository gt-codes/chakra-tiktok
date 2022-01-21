import { Center, Flex } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
	children: ReactNode;
}

export default function Layout({ children }: Props): JSX.Element {
	return (
		<Center w="100%" h="100vh">
			<Flex maxW="lg" bg="#e0e0e0" w="full" h="full" flexDir="column">
				{children}
			</Flex>
		</Center>
	);
}
