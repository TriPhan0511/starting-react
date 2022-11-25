import { memo, useCallback } from 'react'

const Logout = ({ username, onLogout }) => {
	return <div onClick={onLogout}>Logout {username}</div>
}

const MemoizedLogout = memo(Logout)

const MyApp = ({ store, cookies }) => {
	const onLogout = useCallback(() => cookies.clear('session'), [cookies])

	return (
		<div>
			<header>
				<MemoizedLogout
					username={store.username}
					onLogout={onLogout}
					// onLogout={() => cookies.clear('session')}
				/>
			</header>
			{store.content}
		</div>
	)
}
