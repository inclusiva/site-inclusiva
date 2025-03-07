import { useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";
import {
  Box,
  Drawer,
  List,
  Typography,
  Divider,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Grid2 as Grid,
  Modal,
  Paper,
} from "@mui/material";
import {
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Close as CloseIcon,
  AccountCircle as AccountCircleIcon,
  ExitToApp as ExitToAppIcon,
} from "@mui/icons-material";
import { GALLERY } from "@/utils/constants";

const drawerWidth = 240;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "flex-end",
}));

const ImageContainer = styled(Paper)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  cursor: "pointer",
  borderRadius: theme.shape.borderRadius,
  transition: "transform 0.3s ease, box-shadow 0.3s ease",
  "&:hover": {
    transform: "scale(1.02)",
    boxShadow: theme.shadows[6],
  },
}));

const CarouselContainer = styled(Box)(() => ({
  position: "relative",
  backgroundColor: "black",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  height: "80vh",
  width: "100%",
}));

const CarouselImage = styled("img")({
  maxHeight: "70vh",
  maxWidth: "100%",
  objectFit: "contain",
});

const CarouselNavButton = styled(IconButton)(() => ({
  position: "absolute",
  backgroundColor: "rgba(255, 255, 255, 0.8)",
  "&:hover": {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
  },
}));

const CarouselControls = styled(Box)(({ theme }) => ({
  position: "absolute",
  bottom: 0,
  left: 0,
  right: 0,
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  borderTop: `1px solid ${theme.palette.divider}`,
}));

const modalStyle = {
  position: "absolute" as const,
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "90%",
  maxWidth: "1000px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 0,
  borderRadius: 1,
  outline: "none",
};

export function Gallery() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [currentImage, setCurrentImage] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!modalOpen) return;

      if (event.key === "ArrowLeft") {
        handlePrevious();
      } else if (event.key === "ArrowRight") {
        handleNext();
      } else if (event.key === "Escape") {
        handleCloseModal();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Clean up the event listener when component unmounts or modal closes
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [modalOpen]);

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleOpenModal = (index: number) => {
    setCurrentImage(index);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  const handlePrevious = () => {
    setCurrentImage((prev) => (prev === 0 ? GALLERY.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentImage((prev) => (prev === GALLERY.length - 1 ? 0 : prev + 1));
  };

  const handleLogout = () => {
    console.log("logout");
  };

  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText primary="Profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogout}>
              <ListItemIcon>
                <ExitToAppIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Main open={open}>
        <DrawerHeader />
        <Grid container spacing={2}>
          {GALLERY.map((photo, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 4, lg: 3 }} key={index}>
              <ImageContainer
                elevation={2}
                onClick={() => handleOpenModal(index)}
              >
                <Box
                  sx={{
                    paddingTop: "66.67%" /* 3:2 aspect ratio */,
                    position: "relative",
                    minWidth: "300px",
                  }}
                >
                  <Box
                    component="img"
                    src={photo.src || "/placeholder.svg"}
                    alt={`Image ${index}`}
                    sx={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              </ImageContainer>
            </Grid>
          ))}
        </Grid>
      </Main>

      <Modal
        open={modalOpen}
        onClose={handleCloseModal}
        aria-labelledby="modal-gallery-title"
        aria-describedby="modal-gallery-description"
      >
        <Box sx={modalStyle}>
          <IconButton
            aria-label="close"
            onClick={handleCloseModal}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
              color: "white",
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              zIndex: 1,
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.7)",
              },
            }}
          >
            <CloseIcon />
          </IconButton>

          <CarouselContainer>
            <CarouselImage
              src={GALLERY[currentImage].src}
              alt={`Image ${currentImage}`}
            />

            <CarouselNavButton
              onClick={handlePrevious}
              aria-label="previous image"
              sx={{ left: 16, top: "50%", transform: "translateY(-50%)" }}
            >
              <ChevronLeftIcon />
            </CarouselNavButton>

            <CarouselNavButton
              onClick={handleNext}
              aria-label="next image"
              sx={{ right: 16, top: "50%", transform: "translateY(-50%)" }}
            >
              <ChevronRightIcon />
            </CarouselNavButton>

            <CarouselControls>
              <Typography variant="body2" color="text.secondary">
                {currentImage + 1} of {GALLERY.length}
              </Typography>
            </CarouselControls>
          </CarouselContainer>
        </Box>
      </Modal>
    </Box>
  );
}
