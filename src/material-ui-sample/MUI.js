import React from 'react'
import {
	Typography,
	AppBar,
	Card,
	CardActions,
	CardContent,
	CardMedia,
	CssBaseline,
	Grid,
	Toolbar,
	Container,
	Button,
} from '@mui/material'
import { PhotoCamera } from '@mui/icons-material'
import { styled } from '@mui/material/styles'

function MUI() {
	return (
		<>
			<AppBar position='relative'>
				<Toolbar>
					<PhotoCamera />
					<Typography variant='h6'>Photo Album</Typography>
				</Toolbar>
			</AppBar>
			<main>
				<div>
					<Container maxWidth='sm' style={{ marginTop: '100px' }}>
						<Typography variant='h2' align='center' color='textPrimary' gutterBottom>
							Photo Album
						</Typography>
						<Typography variant='h5' align='center' color='textSecondary' paragraph>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus in eros leo. Quisque purus mi, vehicula
							a commodo molestie, condimentum in diam. Duis scelerisque viverra diam, vel finibus massa rhoncus.
						</Typography>
						<div>
							<Grid container spacing={2} justifyContent='center'>
								<Grid item>
									<Button variant='contained' color='primary'>
										See my photos
									</Button>
								</Grid>
								<Grid item>
									<Button variant='outlined' color='primary'>
										Secondary action
									</Button>
								</Grid>
							</Grid>
						</div>
					</Container>
				</div>
			</main>
		</>
	)
}

export default MUI
