import React from "react";
import {
  Box,
  Button,
  Container,
  IconButton,
  Stack,
  Typography,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";

const LiveRatesPage = () => {
  const navigate = useNavigate();

  return (
    <Box sx={{ minHeight: "100vh", bgcolor: "#4A2B2F" }}>
      <Box
        sx={{
          position: "sticky",
          top: 0,
          zIndex: 20,
          borderBottom: "1px solid rgba(248,225,197,0.2)",
          bgcolor: "rgba(128,55,56,0.9)",
          backdropFilter: "blur(14px)",
        }}
      >
        <Container maxWidth="lg">
          <Stack
            direction={{ xs: "column", sm: "row" }}
            alignItems={{ xs: "stretch", sm: "center" }}
            spacing={{ xs: 1, sm: 1.25 }}
            sx={{
              py: { xs: 0.9, sm: 1.1, md: 1.4 },
              justifyContent: "space-between",
            }}
          >
            <Stack direction="row" alignItems="center" sx={{ minWidth: 0 }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: { xs: 1, md: 1.25 },
                }}
              >
                <Box
                  component="img"
                  src="/images/logo.svg"
                  alt="Onyx Gold"
                  sx={{
                    width: { xs: 30, md: 70 },
                    height: { xs: 30, md: 50 },
                    objectFit: "contain",
                    flexShrink: 0,
                  }}
                />
              </Box>
              <IconButton
                onClick={() => navigate("/")}
                sx={{
                  color: "rgba(248,225,197,0.92)",
                  border: "1px solid rgba(248,225,197,0.3)",
                  borderRadius: 999,
                  p: 0.65,
                  ml: "auto",
                  "&:hover": { bgcolor: "rgba(248,225,197,0.1)" },
                  display: { xs: "inline-flex", sm: "none" },
                }}
                aria-label="Close live rates"
              >
                <CloseIcon fontSize="small" />
              </IconButton>
            </Stack>

            <Stack
              direction="row"
              spacing={0.8}
              sx={{
                flexShrink: 0,
                alignItems:'center',
                justifyContent: { xs: "stretch", sm: "flex-end" },
              }}
            >
              <Button
                variant="contained"
                onClick={() => navigate("/")}
                sx={{
                  bgcolor: "primary.main",
                  color: "secondary.main",
                  px: { xs: 1.35, md: 2.25 },
                  py: { xs: 0.6, md: 0.85 },
                  minWidth: 0,
                  height:'fit-content',

                  fontSize: { xs: 12, md: 14 },
                  width: { xs: "100%", sm: "auto" },
                  whiteSpace: "nowrap",
                  "&:hover": { bgcolor: "#6E3038" },
                }}
              >
                Back to site
              </Button>
              <IconButton
                onClick={() => navigate("/")}
                sx={{
                  color: "rgba(248,225,197,0.92)",
                  border: "1px solid rgba(248,225,197,0.3)",
                  borderRadius: 999,
                  p: { sm: 0.75, md: 1 },
                  height:'fit-content',

                  "&:hover": { bgcolor: "rgba(248,225,197,0.1)" },
                  display: { xs: "none", sm: "inline-flex" },
                }}
                aria-label="Close live rates"
              >
                <CloseIcon />
              </IconButton>
            </Stack>
          </Stack>
        </Container>
      </Box>

      <Box sx={{ px: { xs: 0.75, sm: 1, md: 2 }, py: { xs: 1, md: 2.5 } }}>
        <Box
          sx={{
            maxWidth: 1400,
            mx: "auto",
            borderRadius: { xs: 2, md: 4 },
            overflow: "hidden",
            border: "1px solid rgba(248,225,197,0.24)",
            bgcolor: "rgba(248,225,197,0.06)",
            height: { xs: "80vh", md: "82vh" },
          }}
        >
          <iframe
            src="https://onyx.aurify.ae/"
            title="Onyx Gold Rate TV"
            style={{ width: "100%", height: "100%", border: "none" }}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default LiveRatesPage;
