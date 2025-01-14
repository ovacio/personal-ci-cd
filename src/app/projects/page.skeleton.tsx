import { Card, Flex, Group, Skeleton, Text } from '@mantine/core'
import { IconFlask } from '@tabler/icons-react'

import styles from './page.module.css'

export const PageSkeleton = () => (
	<Flex mt={50} direction="column">
		<Flex gap={10} align="center" mb={20}>
			<IconFlask size={20} />
			<Text fw={600} size="20px">
				Projects
			</Text>
		</Flex>
		<Flex gap={15} className={styles.cards} align="flex-start">
			{Array.from(Array(4), (_, index) => (
				<Skeleton radius="md" key={index} w={350}>
					<Card withBorder padding="lg" className={styles.card}>
						<Card.Section>
							<Skeleton h={40} />
						</Card.Section>
						<Group justify="space-between" mt="xl" mb="xl" pl={15} pr={15}>
							<Skeleton h={40} />
						</Group>
						<Card.Section className={styles.footer}>
							<Skeleton h={40} />
						</Card.Section>
					</Card>
				</Skeleton>
			))}
		</Flex>
	</Flex>
)
