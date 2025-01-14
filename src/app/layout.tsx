import { MantineProvider } from '@mantine/core'
import { Header } from '@/shared/components/Header/Header'
import { ReactQueryClientProvider } from '@/shared/providers/reactQueryClientProvider'

import '@mantine/core/styles.layer.css'
import './globals.css'

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>
				<ReactQueryClientProvider>
					<MantineProvider
						withCssVariables
						withGlobalClasses
						forceColorScheme="dark"
					>
						<Header />
						{children}
					</MantineProvider>
				</ReactQueryClientProvider>
			</body>
		</html>
	)
}
