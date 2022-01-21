import { Box } from '@chakra-ui/react';
import type { NextPage } from 'next';
import Video from '../components/Video';
import { useScrolling } from 'react-use';
import { useEffect, useRef } from 'react';

const images = [
	'https://v16-webapp.tiktok.com/eb40844932da25e586bfff7572b7b372/61eb4695/video/tos/useast2a/tos-useast2a-pve-0068/f2437cb8e49948ccba50306dd8b157fc/?a=1988&br=3374&bt=1687&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3E7nz7ThhD_AlXq&l=202201211746410102230201310D414E48&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=andobDs6ZjQ6OTMzNzczM0ApNTozZzU8Zjs3NzhlZzg2NWc2LS0vcjRfLi1gLS1kMTZzc19fXjYvYmAxY18uMjUzLi86Yw%3D%3D&vl=&vr=',
	'https://v16-webapp.tiktok.com/acc04c48a60608101fdec03cc5ad2bd3/61eb464b/video/tos/useast5/tos-useast5-ve-0068c003-tx/51c40be9d56b4573921ed9ebd3e13405/?a=1988&br=2766&bt=1383&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3E7nz7ThhD_AlXq&l=202201211746410102230201310D414E48&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2Q1N2c6Zjs6OjMzZzczNEApOGg4OTY3Ozw6NzloOWQ7aGdeNmZucjRvNi5gLS1kMS9zcy5hL19iNDA1Ly9hYDIxNGI6Yw%3D%3D&vl=&vr=',
	'https://v16-webapp.tiktok.com/bd9375cae66d16f93b2c4731d5682a5c/61eb45f0/video/tos/useast5/tos-useast5-ve-0068c004-tx/1dcb6a8a16464314b462b73b5e2c5531/?a=1988&br=7028&bt=3514&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3E7nz7ThhD_AlXq&l=202201211746410102230201310D414E48&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amhmN2c6ZmY4OjMzZzczNEApOTQzZTRpO2Q6NzY8NGVmM2czaGpucjQwYjFgLS1kMS9zc2IxNjQ0Li4vLzMxYTJhYy46Yw%3D%3D&vl=&vr=',
	'https://v16-webapp.tiktok.com/42e9110aefcc1947bed1d9b8dabf26c3/61eb460a/video/tos/useast5/tos-useast5-ve-0068c004-tx/083ffc2e79da40caaa5d97c83eb8b554/?a=1988&br=2266&bt=1133&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3E7nz7ThhD_AlXq&l=202201211746410102230201310D414E48&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3JyeTY6Zm85OTMzZzczNEApMzg8NDM0aTtmNzo7OTs8ZGcuY2dncjRvbjNgLS1kMS9zcy8tMTAzLWBiLTQvNTM0MTE6Yw%3D%3D&vl=&vr=',
	'https://v16-webapp.tiktok.com/c453a902f809afad68896debeff160c0/61eb45ed/video/tos/maliva/tos-maliva-ve-0068c799-us/ceb9771968684597ba23b5b291d62928/?a=1988&br=2630&bt=1315&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=XOQ9-3E7nz7ThhD_AlXq&l=202201211746410102230201310D414E48&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anM8amg6ZjxwOjMzZzczNEApNDdlNTwzOGQ0NzRnZmU1NmdocmJzcjRfYWdgLS1kMS9zcy5hLzQxXjJhMjY1Ll42NTY6Yw%3D%3D&vl=&vr=',
];

const Home: NextPage = () => {
	const scrollRef = useRef(null);
	const scrolling = useScrolling(scrollRef);
	const mounted = useRef(false);

	useEffect(() => {
		mounted.current = true;
	}, []);

	useEffect(() => {
		if (!scrolling && mounted.current) {
			const vids = Array.from(document.querySelectorAll('video'));
			vids.forEach((vid) => {
				const rect = vid.getBoundingClientRect();
				if (rect.bottom === window.innerHeight) vid.play();
				else vid.pause();
			});
		}
	}, [scrolling]);

	return (
		<Box
			h="100%"
			id="container"
			ref={scrollRef}
			scrollSnapType="y"
			position="relative"
			overflowY="scroll"
		>
			{images.map((el, idx) => (
				<Video src={el} key={idx} />
			))}
		</Box>
	);
};

export default Home;
