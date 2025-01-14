import { Flex, Image, Text, Button, Group } from '@mantine/core'

import {
	IconHandThreeFingers,
	IconBrandGithub,
	IconBrandGitlab,
	IconBrandVk,
} from '@tabler/icons-react'

import styles from './page.module.css'

export default function Page() {
	return (
		<Flex mt={50} direction="column" gap={20}>
			<Image
				radius="50%"
				h={250}
				maw={300}
				alt="logo"
				src="https://i.imgur.com/bxfuRnt.jpeg"
			/>
			<Flex direction="column" gap={40}>
				<Flex align="center" gap={10}>
					<IconHandThreeFingers size={35} className={styles.logo_hand} />
					<Text size="30px" fw={700}>
						Ovacio
					</Text>
				</Flex>
				<Flex direction="column">
					<Text size="15px" w={600} fw={500} lh={1.8}>
						Учусь в Томском Государственном Университете на 2 курсе. Стажируюсь
						в компании ЦФТ в Сибирском Федеральном округе на должности Frontend
						разработчика.
					</Text>
					<Text w={600} fw={500} lh={1.8}>
						Здесь опубликованы мои проекты, которые я делал в свободное время от
						учебы.
					</Text>
					<Text w={600} fw={500} lh={1.8}>
						Мой стек состоит из несколько пунктов: React/NextJs/Vite
					</Text>
				</Flex>
				<Group align="center">
					<Button
						leftSection={<IconBrandGithub size={18} />}
						size="18px"
						variant="transparent"
						component="a"
						href="https://github.com/ovacio"
					>
						GitHub
					</Button>
					<Button
						leftSection={<IconBrandGitlab size={18} />}
						size="18px"
						variant="transparent"
						component="a"
						href="https://gitlab.com/kokolovdaniil"
					>
						GitLab
					</Button>
					<Button
						leftSection={<IconBrandVk size={18} />}
						size="18px"
						variant="transparent"
						component="a"
						href="https://vk.com/babeforover"
					>
						Вконтакте
					</Button>
				</Group>
			</Flex>
		</Flex>
	)
}
