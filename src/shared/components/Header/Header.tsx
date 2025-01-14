import { Anchor, Flex, Group } from '@mantine/core'
import { IconSchool } from '@tabler/icons-react'
import { NAVIGATION_LINKS } from './constants/navigationLinks'

import styles from './Header.module.css'
import { ROUTES } from '@/shared/constants/routes'

export const Header = () => {
	const mainItems = NAVIGATION_LINKS.map((link) => (
		<Anchor<'a'> href={link.href} key={link.href} className={styles.links}>
			{link.label}
		</Anchor>
	))

	return (
		<Flex justify="space-between" align="center" h={40} className={styles.header}>
			<Anchor<'a'> href={ROUTES.ROOT} className={styles.header_left}>
				<IconSchool size={20} />{'Home'}
			</Anchor>
			<Flex justify="center" align="center" flex={1}>
				<Group gap={10} className={styles.mainLinks}>
					{mainItems}
				</Group>
			</Flex>
		</Flex>
	)
}
