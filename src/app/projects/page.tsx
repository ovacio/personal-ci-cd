'use client'
import { Card, Flex, Text, Image, Spoiler, Stack } from '@mantine/core'
import { IconFlask, IconStar, IconGitFork } from '@tabler/icons-react'
import { useGetProjectsQuery } from '@/shared/api/hooks/useGetProjectsQuery'
import styles from './page.module.css'
import { PageSkeleton } from './page.skeleton'

export default function Page() {
	const { data, isLoading } = useGetProjectsQuery()

	if (isLoading) return <PageSkeleton />

	const projects = (data?.data ?? []) as RepositoryInfo[]

	return (
		<Flex mt={50} direction="column">
			<Flex gap={10} align="center" mb={20}>
				<IconFlask size={20} />
				<Text fw={600} size="20px">
					Projects
				</Text>
			</Flex>
			<Flex gap={15} className={styles.cards} align="flex-start">
				{projects.map((item) => (
					<Card key={item.id} withBorder padding="lg" className={styles.card}>
						<Card.Section>
							<Image
								src="https://images.unsplash.com/photo-1581889470536-467bdbe30cd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=720&q=80"
								alt="Running challenge"
								height={100}
							/>
						</Card.Section>

						<Stack justify="space-between" mt="xl" mb="xl" pl={15} pr={15} >
							<Text
								component="a"
								href={item.html_url}
								fz="md"
								fw={700}
								className={styles.title}
							>
								{item.name}
							</Text>
							<Spoiler maxHeight={22}  showLabel="Развернуть" hideLabel="Свернуть" className={styles.spoiler}>
								<Text c="dimmed" fz="sm">
									{item.description}
								</Text>
							</Spoiler>
						</Stack>
						<Card.Section className={styles.footer}>
							<Flex align="center" gap={5}>
								<IconStar size={15} />
								<Text>{item.stargazers_count}</Text>
							</Flex>
							<Flex align="center" gap={5}>
								<IconGitFork size={15} />
								<Text>{item.forks_count}</Text>
							</Flex>
						</Card.Section>
					</Card>
				))}
			</Flex>
		</Flex>
	)
}
