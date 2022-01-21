import { AspectRatio, Box } from '@chakra-ui/react';
import { useRef } from 'react';

interface Props {
	src: string;
}

export default function Video({ src }: Props): JSX.Element {
	const vid = useRef<HTMLVideoElement>(null);

	const handleClick = (): void => {
		if (vid.current?.paused) vid.current?.play();
		else vid.current?.pause();
	};

	return (
		<Box onClick={handleClick} scrollSnapAlign="center" h="full" w="full">
			<AspectRatio w="full" h="full" overflow="hidden" ratio={9 / 16}>
				<video className="vid" ref={vid} playsInline loop src={src} />
			</AspectRatio>
		</Box>
	);
}
