import React, { useState } from 'react';
import Tooltip from '@mui/material/Tooltip';
import Fab from '@mui/material/Fab';
import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from '@mui/icons-material'
import { Modal, Box, styled, Typography, Avatar, TextField, Stack, Button, ButtonGroup } from '@mui/material';


const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
})

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "20px",
    marginBottom: "20px",
})



const Add = () => {

    const [open, setOpen] = useState(false)


    return (
        <>
            <Tooltip
                onClick={() => setOpen(true)}
                title="Delete"
                sx={{
                    position: "fixed",
                    bottom: 20,
                    left: { xs: "calc(50% - 25px)", md: 30 }
                }}
            >
                <Fab color="primary" aria-label='add'>
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={() => setOpen(false)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box width={400} height={320} bgcolor={"background.default"} color={"text.primary"} p={3} borderRadius={5}>
                    <Typography variant="h6" color="gray" textAlign="center">
                        Create Post
                    </Typography>
                    <UserBox>
                        <Avatar
                            src='https://images.pexels.com/photos/12277695/pexels-photo-12277695.jpeg?auto=compress&cs=tinysrgb&w=30&lazy=load'
                            alt='name'
                        >
                        </Avatar>
                        <Typography variant="span">John</Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your mind?"
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={2} mb={3}>
                        <EmojiEmotions color="primary" />
                        <Image color="secondary" />
                        <VideoCameraBack color="sucess" />
                        <PersonAdd color="error" />
                    </Stack>
                    <Stack direction="row" justifyContent="flex-end" >
                        <ButtonGroup  variant="contained" aria-label="outlined primary button group">
                            <Button>Post</Button>
                            <Button><DateRange /></Button>
                        </ButtonGroup>
                    </Stack>
                </Box>
            </StyledModal>
        </>
    )
}

export default Add;